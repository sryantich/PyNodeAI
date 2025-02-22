// frontend/tests/frontend/Editor.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Editor from '../../pages/Editor';

describe('Editor Page', () => {
  test('renders the editor page with NodeEditor and buttons', () => {
    render(<Editor />);
    // Check for the heading
    expect(screen.getByText(/PyNodeAI Editor/i)).toBeInTheDocument();
    // Check for the buttons
    expect(screen.getByText(/Process Workflow/i)).toBeInTheDocument();
    expect(screen.getByText(/Start Training/i)).toBeInTheDocument();
    // Check that the NodeEditor component is rendered
    expect(screen.getByTestId('node-editor')).toBeInTheDocument();
  });
});
