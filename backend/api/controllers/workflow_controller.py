# backend/api/controllers/workflow_controller.py

"""
Workflow Controller Module

This module handles processing the workflow JSON received from the front-end.
It uses the model_builder service to construct a PyTorch model from the workflow.
"""

# Use a relative import to directly import the function
from ...services.model_builder import build_model_from_workflow

def process_workflow(workflow: dict) -> dict:
    """
    Process the workflow to build a PyTorch model.

    Args:
        workflow (dict): A dictionary representing the node-based workflow.

    Returns:
        dict: A summary of the generated model.
    """
    # Directly call the imported function
    model = build_model_from_workflow(workflow)
    
    # Create a model summary (convert the model to a string)
    model_summary = str(model)
    
    return {"model_summary": model_summary}
