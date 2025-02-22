# backend/api/controllers/training_controller.py

"""
Training Controller Module

This module manages the training process. It calls functions from the training service to start training.
"""
# Use a relative import to directly import the function
from ...services import training

def start_training(workflow: dict) -> dict:
    """
    Start training a model based on the provided workflow.
    
    Args:
        workflow (dict): A dictionary containing training configuration and workflow details.
    
    Returns:
        dict: A response indicating training initiation and details.
    """
    # Trigger training using the training service.
    training_result = training.train_model_from_workflow(workflow)
    
    # Return the result.
    return training_result
