// frontend/src/api/workflowAPI.js

/**
 * workflowAPI.js
 *
 * This module contains helper functions to interact with the PyNodeAI backend API.
 */

const API_BASE_URL = 'http://localhost:8000/api';

/**
 * Sends a workflow JSON to the backend to process and build a model.
 *
 * @param {Object} workflow - The workflow JSON object.
 * @returns {Promise<Object>} The response data from the backend.
 */
export async function processWorkflow(workflow) {
  const response = await fetch(`${API_BASE_URL}/workflow`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(workflow),
  });
  if (!response.ok) {
    throw new Error(`Error processing workflow: ${response.statusText}`);
  }
  return response.json();
}

/**
 * Sends a workflow JSON to the backend to start training.
 *
 * @param {Object} workflow - The workflow JSON object.
 * @returns {Promise<Object>} The training result data from the backend.
 */
export async function startTraining(workflow) {
  const response = await fetch(`${API_BASE_URL}/train`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(workflow),
  });
  if (!response.ok) {
    throw new Error(`Error starting training: ${response.statusText}`);
  }
  return response.json();
}
