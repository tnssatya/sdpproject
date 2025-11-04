# Samvidhan Gyan - Demystifying the Indian Constitution

A comprehensive, mobile-friendly educational web application that makes learning about the Indian Constitution engaging and accessible for all age groups.

## 🎯 Features

### User Paths
- **Teenager Path (13-19 years)**: Focused on fundamental rights, duties, cyber laws, and elections
- **Youth Path (20-35 years)**: In-depth coverage of governance, landmark cases, and workplace rights
- **Senior Citizen Path (60+ years)**: Healthcare schemes, senior rights, pensions, and legal aid

### Interactive Components
- **Personalized Learning**: Content tailored for each demographic
- **AI-Powered Quiz**: Test your constitutional knowledge with intelligent questions
- **Chat with Sahayak**: AI assistant to answer your questions about the Constitution
- **Did You Know**: Rotating interesting facts about Indian Constitution
- **Topic Deep Dives**: Detailed explanations of constitutional concepts

### UI/UX Highlights
- Modern, clean, and intuitive interface
- Fully responsive - works perfectly on mobile, tablet, and desktop
- Smooth animations and transitions
- Accessible design with keyboard navigation support
- ARIA labels for screen readers

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone or navigate to the project directory:
```bash
cd sdpfinalsatya
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

#### Development Mode
```bash
npm run dev
```
The app will start at `http://localhost:5173`

#### Build for Production
```bash
npm run build
```

#### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
sdpfinalsatya/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── AIQuiz.jsx       # Quiz modal component
│   │   ├── AITools.jsx      # AI tools section
│   │   ├── ChatSahayak.jsx  # Chat assistant modal
│   │   ├── DidYouKnow.jsx   # Facts carousel
│   │   ├── TopicDetail.jsx  # Topic detail page
│   │   └── *.css            # Component styles
│   ├── pages/               # Main page components
│   │   ├── LandingPage.jsx  # Home page
│   │   ├── UserPathSelection.jsx  # Path selection
│   │   ├── UserPathSection.jsx    # Path content
│   │   ├── Dashboard.jsx    # User dashboard
│   │   └── *.css            # Page styles
│   ├── data/                # JSON data files
│   │   ├── userPaths.json   # User path definitions
│   │   ├── topics.json      # Topic listings
│   │   ├── topicDetails.json  # Detailed content
│   │   ├── facts.json       # Did You Know facts
│   │   └── members.json     # Constitutional leaders
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # Application entry point
│   ├── index.css            # Global styles
│   └── App.css              # App-level styles
├── index.html               # HTML template
├── package.json             # Project dependencies
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

## 🎨 Key Technologies

- **React 18**: Modern React with hooks
- **React Router v6**: Client-side routing
- **Vite**: Fast build tool and dev server
- **CSS3**: Custom responsive styling with CSS Grid & Flexbox
- **JavaScript ES6+**: Modern JavaScript features

## 📱 Responsive Design

The application is designed with a mobile-first approach and works seamlessly across:
- 📱 Mobile devices (320px and up)
- 📱 Tablets (768px and up)
- 💻 Desktops (1024px and up)
- 🖥️ Large screens (1440px and up)

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators for interactive elements
- Color contrast compliant with WCAG guidelines
- Screen reader friendly

## 🎓 Educational Content

### Topics Covered
- Fundamental Rights (all 6 categories)
- Preamble and its significance
- Fundamental Duties
- Cyber Laws & Digital Safety
- Electoral Process
- Landmark Supreme Court Cases
- Governance Structure
- Senior Citizen Rights & Benefits
- And more...

### Learning Features
- Clear explanations with examples
- Section-wise breakdown of complex topics
- Key points for quick revision
- Interactive Q&A through AI chat
- Progress tracking (Dashboard)

## 🤖 AI-Powered Features

### AI Quiz
- Dynamic question generation
- Multiple choice format
- Instant feedback
- Score tracking
- Retry capability

### Chat with Sahayak
- Context-aware responses
- Natural language understanding
- Quick question suggestions
- Conversation history
- Real-time interaction

## 🎨 Design Philosophy

1. **Simplicity**: Clean, uncluttered interface
2. **Engagement**: Interactive elements and animations
3. **Accessibility**: Inclusive design for all users
4. **Performance**: Fast load times and smooth interactions
5. **Mobile-First**: Optimized for mobile devices

## 🛠️ Customization

### Adding New Topics
Edit `src/data/topics.json` and `src/data/topicDetails.json`

### Adding New Facts
Edit `src/data/facts.json`

### Modifying User Paths
Edit `src/data/userPaths.json`

### Styling Changes
Modify CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #FF6B35;
  --secondary-color: #004E89;
  --accent-color: #F7931E;
  /* ... more variables */
}
```

## 📝 Future Enhancements

- User authentication and profiles
- Progress persistence with local storage
- Bookmarking favorite topics
- Sharing features
- Multilingual support (Hindi, regional languages)
- Offline mode with PWA
- Certificate generation
- Community forum

## 👨‍💻 Development

### Code Style
- Functional components with hooks
- Descriptive variable and function names
- Comprehensive comments
- Modular and reusable code

### Best Practices
- Component-based architecture
- Separation of concerns
- Data-driven UI
- Responsive design patterns
- Accessibility standards

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill the process using port 5173
npx kill-port 5173
# Then run dev server again
npm run dev
```

### Dependencies Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📄 License

This project is open source and available for educational purposes.

## 🙏 Acknowledgments

- Dr. B.R. Ambedkar and the Constitution Assembly members
- Indian Constitution for providing the foundation
- React and Vite communities for excellent tools

## 📞 Support

For issues, questions, or contributions, please create an issue in the project repository.

---

**Made with ❤️ for Indian Citizens**

*Empowering citizens through constitutional knowledge*
