# backend/services/model_builder.py

"""
Model Builder Service

This module is responsible for parsing the workflow JSON and dynamically building
a PyTorch model. This example assumes a simple sequential model.
"""

import torch.nn as nn

def build_model_from_workflow(workflow: dict) -> nn.Module:
    """
    Build a PyTorch model from the workflow JSON.
    
    Args:
        workflow (dict): A dictionary representing the node-based workflow.
        
    Returns:
        nn.Module: A PyTorch model built from the workflow.
    """
    layers = []
    # Loop through nodes in the workflow.
    for node in workflow.get("nodes", []):
        node_type = node.get("type")
        params = node.get("params", {})
        if node_type == "Linear":
            in_features = params.get("in_features")
            out_features = params.get("out_features")
            layers.append(nn.Linear(in_features, out_features))
        elif node_type == "Activation":
            activation = params.get("function", "ReLU")
            if activation == "ReLU":
                layers.append(nn.ReLU())
            elif activation == "Sigmoid":
                layers.append(nn.Sigmoid())
            # Add more activation types as needed.
        # Future: Add support for other node types.
    
    # Create a sequential model with the layers.
    model = nn.Sequential(*layers)
    return model
