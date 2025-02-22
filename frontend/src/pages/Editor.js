// frontend/src/pages/Editor.js
import React, { useState } from 'react';
import NodeEditor from '../components/NodeEditor';
import { processWorkflow, startTraining } from '../api/workflowAPI';

/**
 * Editor Page Component
 *
 * Combines the NodeEditor with UI controls to process workflows and start training.
 */
const Editor = () => {
  // State to hold the API response from processing or training
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  // For demonstration, we use a dummy workflow JSON.
  // In a real app, you'd derive this from the state of your NodeEditor.
  const dummyWorkflow = {
    nodes: [
      { id: '1', type: 'Linear', params: { in_features: 10, out_features: 5 } },
      { id: '2', type: 'Activation', params: { function: 'ReLU' } },
      { id: '3', type: 'Linear', params: { in_features: 5, out_features: 1 } },
    ],
    input_dim: 10,
    output_dim: 1,
    learning_rate: 0.001,
    epochs: 3,
  };

  // Function to handle processing the workflow
  const handleProcessWorkflow = async () => {
    try {
      const response = await processWorkflow(dummyWorkflow);
      setResult(response.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  // Function to handle starting training
  const handleStartTraining = async () => {
    try {
      const response = await startTraining(dummyWorkflow);
      setResult(response.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>PyNodeAI Editor</h1>
      {/* Render the node editor */}
      <NodeEditor />
      <div style={{ marginTop: '1rem' }}>
        {/* Buttons to trigger API calls */}
        <button onClick={handleProcessWorkflow}>Process Workflow</button>
        <button onClick={handleStartTraining} style={{ marginLeft: '1rem' }}>
          Start Training
        </button>
      </div>
      <div style={{ marginTop: '1rem' }}>
        {error && <div style={{ color: 'red' }}>Error: {error}</div>}
        {result && (
          <div>
            <h2>Result:</h2>
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Editor;
