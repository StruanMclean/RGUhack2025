from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from transformers import AutoImageProcessor, AutoModelForImageClassification
import torch
from PIL import Image
import requests
from io import BytesIO

app = FastAPI()

origins = [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"], 
)

# Use AutoImageProcessor instead of AutoFeatureExtractor
processor = AutoImageProcessor.from_pretrained("chriamue/bird-species-classifier")
model = AutoModelForImageClassification.from_pretrained("chriamue/bird-species-classifier")

class Predict(BaseModel):
    image_url: str

@app.post("/predict")
def read_root(item: Predict):
    print("hello")
    # Load image from the URL
    print(item.image_url)
    try:
        response = requests.get(item.image_url)
        image = Image.open(BytesIO(response.content))
    except Exception as e:
        return {"error": "Unable to load image from URL", "details": str(e)}

    # Preprocess the image and make prediction
    inputs = processor(images=image, return_tensors="pt")
    outputs = model(**inputs)
    logits = outputs.logits
    predicted_class_idx = torch.argmax(logits, dim=1).item()

    # Get label of the predicted class
    predicted_label = model.config.id2label[predicted_class_idx]

    # Return the prediction
    return {"predicted_class": predicted_label, "confidence_score": torch.nn.functional.softmax(logits, dim=1).max().item()}
