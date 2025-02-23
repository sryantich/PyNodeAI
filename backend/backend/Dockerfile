# backend/Dockerfile
FROM python:3.10-slim

# Set the working directory to /app
WORKDIR /app

# Copy requirements and install them
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire backend code into the container
COPY . /backend

# Expose port 8000 for FastAPI
EXPOSE 8000

# Run Uvicorn using the full package path
CMD ["uvicorn", "backend.app:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
