# backend/tests/test_model_builder.py

"""
This test module verifies the behavior of the model builder service.
It directly calls the function that builds a PyTorch model from a workflow.
"""

import pytest
import torch.nn as nn
from backend.services.model_builder import build_model_from_workflow

def test_build_model_from_workflow():
    """
    Test that a workflow containing Linear and Activation nodes produces a valid model.
    """
    sample_workflow = {
        "nodes": [
            {"id": 1, "type": "Linear", "params": {"in_features": 10, "out_features": 5}},
            {"id": 2, "type": "Activation", "params": {"function": "ReLU"}},
            {"id": 3, "type": "Linear", "params": {"in_features": 5, "out_features": 1}}
        ]
    }
    # Call the service to build the model.
    model = build_model_from_workflow(sample_workflow)
    
    # Check that the model is an instance of nn.Sequential.
    assert isinstance(model, nn.Sequential)
    
    # Verify that the sequential model contains the expected number of layers.
    assert len(model) == 3

    # Optional: Check types of layers to ensure they're correctly built.
    assert isinstance(model[0], nn.Linear)
    assert isinstance(model[1], nn.ReLU)
    assert isinstance(model[2], nn.Linear)
