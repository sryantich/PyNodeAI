// frontend/src/components/NodeEditor.js
import React, { useState, useCallback } from 'react';
// Import React Flow components and styles
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background
} from 'reactflow';
import 'reactflow/dist/style.css';

/**
 * NodeEditor Component
 *
 * This component renders a basic node-based editor using React Flow.
 * It initializes with a couple of sample nodes and allows edges to be created.
 */
const initialNodes = [
  {
    id: '1',
    type: 'default',
    data: { label: 'Input Node' },
    position: { x: 250, y: 5 },
  },
  {
    id: '2',
    type: 'default',
    data: { label: 'Processing Node' },
    position: { x: 100, y: 100 },
  },
  {
    id: '3',
    type: 'default',
    data: { label: 'Output Node' },
    position: { x: 400, y: 100 },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
];

const NodeEditor = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  // onConnect is called when the user creates a new edge
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  return (
    <div style={{ width: '100%', height: '90vh' }} data-testid="node-editor">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        fitView
      >
        {/* MiniMap provides an overview of the node layout */}
        <MiniMap nodeColor={(node) => {
          switch (node.type) {
            case 'input':
              return 'blue';
            case 'default':
              return 'green';
            case 'output':
              return 'red';
            default:
              return '#eee';
          }
        }} />
        {/* Controls (zoom, pan, etc.) */}
        <Controls />
        {/* Background grid */}
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default NodeEditor;
