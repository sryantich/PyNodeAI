// frontend/tests/frontend/NodeEditor.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import NodeEditor from '../../components/NodeEditor';

// A simple test to check if the NodeEditor component renders
describe('NodeEditor Component', () => {
  test('renders the node editor container', () => {
    render(<NodeEditor />);
    // Verify that the container with data-testid "node-editor" exists
    const container = screen.getByTestId('node-editor');
    expect(container).toBeInTheDocument();
  });

  test('renders initial nodes with correct labels', async () => {
    render(<NodeEditor />);
    
    // Check for text labels that we set in the initialNodes
    const inputNode = await screen.findByText(/Input Node/i);
    const processingNode = await screen.findByText(/Processing Node/i);
    const outputNode = await screen.findByText(/Output Node/i);
    
    expect(inputNode).toBeInTheDocument();
    expect(processingNode).toBeInTheDocument();
    expect(outputNode).toBeInTheDocument();
  });
});
