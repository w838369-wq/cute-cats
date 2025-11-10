# 🐱 Cute Cats - Anonymous Cat Photo Community

An anonymous community platform where users can browse, like, and comment on cat photos without registration. Built with a full-stack approach to demonstrate end-to-end web development capabilities.

**[Live Demo](#live-demo-coming-soon)** | **[GitHub Repository](https://github.com/w838369-wq/cute-cats)**

---

## 🎯 Project Overview

Cute Cats solves a simple problem elegantly: **how can users interact with content anonymously without creating accounts?** 

This project uses **browser fingerprinting technology** to identify anonymous users, eliminating the need for registration while maintaining user continuity. It's a showcase of full-stack development skills, from database design to frontend interactivity.

### Key Achievements

- ✅ Zero-friction user experience (no registration required)
- ✅ Browser fingerprinting for anonymous user identification
- ✅ Full REST API with 6 endpoints
- ✅ Responsive design supporting 320px to 1600px screens
- ✅ WCAG 2.1 accessibility compliance
- ✅ Production-ready error handling and validation

---

## ✨ Core Features

### 📸 Browse Cat Photos
- 7 curated cat photos with descriptions
- Responsive grid layout (3 cards on desktop, 2 on tablet, 1 on mobile)
- High-quality images from Unsplash

### 👍 Like System
- Users can like their favorite cats
- Like count updates in real-time
- Persistent storage in MongoDB

### 💬 Comments
- Leave comments without registration
- View all comments for each cat
- Delete your own comments
- Comments tied to anonymous user sessions

### 🎭 Anonymous Identity
- Browser fingerprinting for user identification
- No personal data collection
- Session-based tracking

---

## 🛠️ Technology Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Responsive design with CSS Grid (12-column system)
- **Vanilla JavaScript** - DOM manipulation, fetch API
- **Google Fonts & Material Icons** - Design assets

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB Atlas** - Cloud database
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-origin request handling

### Tools & Services
- Git for version control
- GitHub for repository hosting
- MongoDB Atlas for cloud database
- nodemon for development

---

## 📊 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/cats` | Fetch all cat photos with metadata |
| POST | `/api/cats/:catId/like` | Add/remove like for a cat |
| GET | `/api/cats/:catId/comments` | Fetch comments for a cat |
| POST | `/api/cats/:catId/comments` | Post a new comment |
| DELETE | `/api/cats/:catId/comments/:commentId` | Delete a comment |
| POST | `/api/seed` | Initialize database with sample data |

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (free tier available)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/w838369-wq/cute-cats.git
cd cute-cats
```

2. **Install dependencies**
```bash
cd backend
npm install
```

3. **Set up environment variables**
```bash
# Copy the example file
cp .env.example .env

# Edit .env and add your MongoDB connection string
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/cute_cats_db
```

4. **Seed the database**
```bash
npm run seed
```

5. **Start the server**
```bash
npm start
```

6. **Access the application**
Open your browser and navigate to:
```
http://localhost:5001
```

---

## 📁 Project Structure

```
cute-cats/
├── backend/
│   ├── models/
│   │   ├── Cat.js              # Cat photo schema
│   │   ├── Like.js             # Like relationship schema
│   │   └── Comment.js          # Comment schema
│   ├── routes/
│   │   ├── cats.js             # Cat endpoints
│   │   ├── likes.js            # Like endpoints
│   │   └── comments.js         # Comment endpoints
│   ├── public/                 # Frontend files
│   │   ├── index.html          # Main page
│   │   ├── about.html          # About page
│   │   ├── gallery.html        # Gallery page
│   │   ├── register.html       # Register form (unused)
│   │   ├── css/                # Stylesheets
│   │   └── images/             # Cat photos & icons
│   ├── server.js               # Express server setup
│   ├── seed.js                 # Database initialization
│   ├── package.json            # Dependencies
│   └── .env.example            # Environment template
├── .gitignore                  # Git ignore rules
└── README.md                   # This file
```

---

## 🎓 Technical Highlights

### Browser Fingerprinting
Instead of requiring registration, this project implements browser fingerprinting to identify anonymous users. The fingerprint is generated from:
- User agent
- Screen resolution
- Timezone
- Language preferences
- Browser features

This allows the system to track user interactions (likes, comments) across sessions without storing personal data.

### Database Schema
**Cats Collection**: Stores cat photo metadata (name, description, image URL)
**Likes Collection**: Records which user fingerprints liked which cats
**Comments Collection**: Stores comments with user fingerprints and timestamps

### Responsive Design
- **Desktop (1200px+)**: 3-4 cards per row
- **Tablet (768px-1199px)**: 2 cards per row
- **Mobile (< 768px)**: 1 card per row

All breakpoints tested and optimized for user experience.

### Error Handling
- Comprehensive MongoDB error management
- Type conversion for ObjectId operations
- User-friendly error messages
- Proper HTTP status codes (200, 201, 400, 404, 500)

---

## 🔍 Key Learning Outcomes

Through building this project, I gained experience with:

1. **Full-stack integration** - Connecting frontend, backend, and database seamlessly
2. **REST API design** - Building scalable, RESTful endpoints
3. **MongoDB operations** - CRUD operations, schema design, indexing
4. **Frontend interactivity** - Real-time updates, fetch API, event handling
5. **Responsive design** - CSS Grid layouts, mobile-first approach
6. **Error debugging** - MongoDB type conversion, CORS configuration
7. **Database management** - Cloud database setup and security
8. **Code organization** - Modular architecture with clear separation of concerns

---

## 🔒 Security Considerations

- ✅ Environment variables stored securely (.env not tracked in git)
- ✅ CORS properly configured
- ✅ Input validation on all endpoints
- ✅ MongoDB connection string never exposed
- ✅ No sensitive data stored for anonymous users

---

## 📈 Future Enhancements

- [ ] Deployment to Vercel (frontend) and Railway (backend)
- [ ] User authentication (optional feature branch)
- [ ] Advanced filters and search functionality
- [ ] Image upload capability
- [ ] Admin dashboard for content management
- [ ] Rate limiting and spam prevention
- [ ] User preference persistence (favorite cats, comment sorting)
- [ ] Dark mode support

---

## 📝 Available Scripts

```bash
# Start the server
npm start

# Start with auto-reload (requires nodemon)
npm run dev

# Initialize database with sample data
npm run seed
```

---

## 📄 License

This project uses third-party assets as documented in `backend/public/licenses.txt`:
- Cat photos from [Unsplash](https://unsplash.com)
- Icons from [Google Fonts](https://fonts.google.com/icons)

Code is available for educational and portfolio purposes.

---

## 📞 Questions or Feedback?

Feel free to check out the code, open an issue, or reach out through GitHub!

**GitHub**: [@w838369-wq](https://github.com/w838369-wq)

---

**Created**: 2025 
