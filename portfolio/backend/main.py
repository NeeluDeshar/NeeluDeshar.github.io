from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Project(BaseModel):
    id: int
    title: str
    description: str
    technologies: List[str]

class ContactMessage(BaseModel):
    name: str
    email: str
    message: str

# Sample data
projects_db = [
    {
        "id": 1,
        "title": "Hospital Management System",
        "description": "Developed a hospital management system to streamline patient registration, appointment scheduling, and doctor management with an intuitive front-end interface.",
        "technologies": ["C#"],
        "category": "Academic"
    },
    {
        "id": 2,
        "title": "Resort Management System",
        "description": "Created a customized resort management system for a specific resort in Nepal to manage bookings, room availability, and customer information.",
        "technologies": ["HTML", "CSS", "JavaScript", "React"],
        "category": "Academic"
    },
    {
        "id": 3,
        "title": "Nepal Tourism Recommender System",
        "description": "Final year project: Built an intelligent tourism recommendation system to help travelers discover the best destinations in Nepal based on their preferences.",
        "technologies": ["React", "Vite", "Flask", "Python", "SQLite"],
        "category": "Academic"
    },
    {
        "id": 4,
        "title": "Digital Agency UI Design",
        "description": "Designed a user-friendly mobile app prototype to connect farmers with local buyers.",
        "technologies": ["Figma"],
        "category": "Design"
    },
    {
        "id": 5,
        "title": "Graphic Design Portfolio",
        "description": "Created posters, social media graphics, and digital art pieces as part of personal and academic growth in graphic design.",
        "technologies": ["Adobe Photoshop", "Canva"],
        "category": "Design"
    },
    {
        "id": 6,
        "title": "Weather Card",
        "description": "Designed a responsive and interactive weather information card UI.",
        "technologies": ["UI/UX", "Figma"],
        "category": "UI/UX"
    },
    {
        "id": 7,
        "title": "Rating Model",
        "description": "Created an intuitive rating system interface for user feedback.",
        "technologies": ["UI/UX", "Figma"],
        "category": "UI/UX"
    },
    {
        "id": 8,
        "title": "Pet Adoption Homepage",
        "description": "Developed a user-friendly homepage for a pet adoption platform.",
        "technologies": ["UI/UX", "Figma"],
        "category": "UI/UX"
    },
    {
        "id": 9,
        "title": "Remote Work Productivity Dashboard",
        "description": "Designed a dashboard UI to monitor productivity metrics for remote workers.",
        "technologies": ["UI/UX", "Figma"],
        "category": "UI/UX"
    }
]

@app.get("/")
def read_root():
    return {"message": "Portfolio API"}

@app.get("/api/projects")
def get_projects():
    return projects_db

@app.post("/api/contact")
def contact(message: ContactMessage):
    # Here you would typically save to database or send email
    print(f"Contact from {message.name}: {message.message}")
    return {"status": "success", "message": "Message received"}
