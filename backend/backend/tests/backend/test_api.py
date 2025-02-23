# backend/tests/backend/test_api.py

"""
This test module verifies the behavior of the API endpoints.
It uses FastAPI's TestClient to simulate HTTP requests.
"""

import pytest
from fastapi.testclient import TestClient
from httpx import WSGITransport
from backend.app import app

client = TestClient(app=app)

# Define a sample workflow JSON that will be used to test our endpoints.
sample_workflow = {
    "nodes": [
        {"id": 1, "type": "Linear", "params": {"in_features": 10, "out_features": 5}},
        {"id": 2, "type": "Activation", "params": {"function": "ReLU"}},
        {"id": 3, "type": "Linear", "params": {"in_features": 5, "out_features": 1}}
    ],
    # Additional parameters needed by training service
    "input_dim": 10,
    "output_dim": 1,
    "learning_rate": 0.001,
    "epochs": 3
}

def test_root_endpoint():
    """
    Test the root endpoint ("/") to ensure the API is running.
    """
    response = client.get("/")
    assert response.status_code == 200
    # Check that the returned JSON message matches our expected message.
    assert response.json() == {"message": "Welcome to the PyNodeAI Backend API!"}

def test_workflow_endpoint():
    """
    Test the /api/workflow endpoint, which processes a workflow.
    """
    response = client.post("/api/workflow", json=sample_workflow)
    assert response.status_code == 200
    json_data = response.json()
    # Verify that the response includes a 'data' key with a 'model_summary'.
    assert "data" in json_data
    assert "model_summary" in json_data["data"]

def test_train_endpoint():
    """
    Test the /api/train endpoint, which starts the training process.
    """
    response = client.post("/api/train", json=sample_workflow)
    assert response.status_code == 200
    json_data = response.json()
    # Check that the training response contains the expected keys.
    assert "data" in json_data
    data = json_data["data"]
    assert "final_loss" in data
    assert "epochs" in data
    # Ensure the number of epochs in the response matches the sample workflow.
    assert data["epochs"] == sample_workflow["epochs"]
