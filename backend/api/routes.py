# backend/api/routes.py

from fastapi import APIRouter
from .controllers import workflow_controller, training_controller

# Create an API router instance to group endpoints.
router = APIRouter()

@router.post("/workflow")
def process_workflow(workflow: dict):
    """
    POST endpoint to process a workflow.
    
    Expects:
        workflow (dict): A JSON object representing the node-based workflow.
    
    Returns:
        A JSON object with the status and a summary of the processed workflow.
    """
    # Delegate processing to the workflow controller.
    result = workflow_controller.process_workflow(workflow)
    return {"status": "success", "data": result}

@router.post("/train")
def start_training(workflow: dict):
    """
    POST endpoint to start model training based on the provided workflow.
    
    Expects:
        workflow (dict): A JSON object containing training configuration and workflow details.
    
    Returns:
        A JSON object with the training status and details.
    """
    # Delegate training to the training controller.
    result = training_controller.start_training(workflow)
    return {"status": "training started", "data": result}
