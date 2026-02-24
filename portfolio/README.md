# Nirjala Deshar - Portfolio Website

A modern, professional portfolio website built with React (frontend) and Python FastAPI (backend).

## 🚀 About

This is the personal portfolio of Nirjala Deshar, a Computer Engineering student specializing in Front-End Development, UI/UX Design, and Quality Assurance.

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **Python** (v3.8 or higher) - [Download here](https://www.python.org/)
- **npm** (comes with Node.js)

## 🛠️ Installation & Setup

### Frontend Setup

1. Navigate to the portfolio folder:
```cmd
cd portfolio
```

2. Install dependencies:
```cmd
npm install
```

3. Start the development server:
```cmd
npm start
```

The frontend will run on **http://localhost:3000**

### Backend Setup

1. Navigate to the backend folder:
```cmd
cd portfolio\backend
```

2. Install Python dependencies:
```cmd
pip install -r requirements.txt
```

3. Start the backend server:
```cmd
uvicorn main:app --reload
```

The backend will run on **http://localhost:8000**

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   ├── cv.pdf
│   └── profile.jpeg
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Navbar.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── About.js
│   │   ├── About.css
│   │   ├── Projects.js
│   │   ├── Projects.css
│   │   ├── Contact.js
│   │   └── Contact.css
│   ├── App.js
│   ├── App.css
│   └── index.js
├── backend/
│   ├── main.py
│   └── requirements.txt
├── package.json
└── README.md
```

## ✨ Features

- **Home Page**: Professional introduction with stats and core competencies
- **About Page**: Skills, education, and certifications
- **Projects Page**: 9 projects with category filtering (Academic, Design, UI/UX)
- **Contact Page**: Contact form with social media links
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern UI**: Professional dark theme with teal accents
- **CV Download**: Direct download of resume

## 🎨 Technologies Used

### Frontend
- React.js
- React Router
- React Icons
- CSS3
- Axios

### Backend
- Python
- FastAPI
- Pydantic
- Uvicorn

## 📧 Contact Form

The contact form uses [Formspree](https://formspree.io/) for handling submissions. No backend configuration needed for the contact form.

## 🔗 Social Media Links

- **LinkedIn**: [Nirjala Deshar](https://linkedin.com/in/nirjala-deshar-69b25a253)
- **GitHub**: [NeeluDeshar](https://github.com/NeeluDeshar)
- **Behance**: [nirjaladeshar98](https://www.behance.net/nirjaladeshar98)
- **Facebook**: [nirjala.desar](https://www.facebook.com/nirjala.desar/)
- **Instagram**: [nirjalade3](https://www.instagram.com/nirjalade3/)
- **Email**: nirjaladeshar98@gmail.com
- **Phone**: +977-9761831697

## 🚀 Deployment

### Frontend Deployment (Netlify/Vercel)

1. Build the project:
```cmd
npm run build
```

2. Deploy the `build` folder to your hosting service

### Backend Deployment (Heroku/Railway)

1. Make sure `requirements.txt` is up to date
2. Deploy using your preferred platform's instructions

## 📝 Customization

To customize the portfolio with your own information:

1. **Personal Info**: Update `src/pages/Home.js` and `src/pages/About.js`
2. **Projects**: Modify `backend/main.py` (projects_db array)
3. **CV**: Replace `public/cv.pdf` with your resume
4. **Profile Photo**: Replace `public/profile.jpeg` with your photo
5. **Contact Info**: Update `src/pages/Contact.js` and `src/components/Footer.js`
6. **Social Links**: Update URLs in Contact and Footer components

## 🐛 Troubleshooting

### Port Already in Use

If port 3000 or 8000 is already in use:

**Frontend:**
```cmd
set PORT=3001 && npm start
```

**Backend:**
```cmd
uvicorn main:app --reload --port 8001
```

### Dependencies Issues

If you encounter dependency issues:

**Frontend:**
```cmd
rm -rf node_modules package-lock.json
npm install
```

**Backend:**
```cmd
pip install --upgrade pip
pip install -r requirements.txt
```

## 📄 License

© 2025 Nirjala Deshar. All rights reserved.

## 💜 Acknowledgments

Designed with 💜 by Nirjala Deshar

---

For any questions or issues, please contact: nirjaladeshar98@gmail.com
