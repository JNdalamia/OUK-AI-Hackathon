# 🎯 Smart Career Path Navigator

**AI-Powered Career Guidance Platform built with JacLang**

A full-stack application that provides personalized career advice, learning roadmaps, job market analysis, and alternative career path suggestions using AI (Gemini).

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![JacLang](https://img.shields.io/badge/JacLang-Latest-green.svg)
![Python](https://img.shields.io/badge/python-3.10+-blue.svg)

---

## 🌟 Features

### 🤖 AI-Powered Agents
- **Career Advice Agent** - Personalized guidance for career transitions
- **Learning Roadmap Generator** - 4-week study plans tailored to your goals
- **Job Market Analyzer** - Real-time insights on demand, salaries, and hiring trends
- **Alternative Paths Suggester** - Discover career options based on your skills
- **Resume Summary Generator** - Professional summaries aligned with target roles

### 💻 Modern Tech Stack
- **Backend**: JacLang with OSP (Object-Spatial Programming) graph architecture
- **Frontend**: React-style components using Jac-Client
- **AI**: Google Gemini 2.5 Flash via byLLM
- **UI**: Gradient design with responsive layout

### 🎨 User Experience
- Beautiful gradient interface
- Real-time AI responses
- Editable profile fields
- Error handling and loading states
- Mobile-responsive design

---

## 🚀 Quick Start

### Prerequisites

- Python 3.10 or higher
- pip (Python package manager)
- Google Gemini API key ([Get one free](https://aistudio.google.com/apikey))

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/smart-career-navigator.git
cd smart-career-navigator
```

2. **Install dependencies**
```bash
pip install jaclang jac-cloud byllm
```

3. **Set up environment variables**
```bash
# Copy the example env file
cp .env.example .env

# Edit .env and add your API key
nano .env  # or use any text editor
```

4. **Run the application**
```bash
jac serve app.jac
```

5. **Open your browser**
```
http://localhost:8000
add /page/app to http://localhost:8000/page/app
```

---

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Required: Google Gemini API Key
GEMINI_API_KEY=your_gemini_api_key_here

# Optional: Alternative AI providers
# OPENAI_API_KEY=your_openai_key_here
# ANTHROPIC_API_KEY=your_anthropic_key_here
```

### Model Configuration

By default, the app uses Gemini 2.5 Flash. To change the model, edit `app.jac`:

```jac
# Line 24
glob llm = Model(model_name="gemini/gemini-2.5-flash");

```

---

## 📖 Usage

### 1. Fill Your Profile
- Enter your name and current role
- List your current skills (comma-separated)
- Specify your interests
- Set your target role and location

### 2. Choose an AI Agent
Click any of the 5 AI-powered buttons:
- **✨ Career Advice** - Get personalized transition guidance
- **📅 Study Roadmap** - Receive a structured learning plan
- **📊 Job Market** - Understand current market conditions
- **🔀 Alt Paths** - Explore alternative career options
- **📄 Resume Summary** - Generate a professional summary

### 3. Review AI Insights
Wait 5-15 seconds for the AI to analyze your profile and generate personalized recommendations.

---

## 🏗️ Project Structure

```
smart-career-navigator/
├── app.jac          # Main application file
├── .env                    # Environment variables (not in git)
├── .env.example            # Example environment file
├── .gitignore              # Git ignore rules
├── README.md               # This file
├── LICENSE                 # MIT License

```

---

## 🧠 Architecture

### Backend (JacLang)
- **Nodes**: User, Skill, Course, Role (data models)
- **Edges**: HasSkill, Requires, Teaches (relationships)
- **Walkers**: API endpoints that process requests
- **AI Functions**: byLLM-powered intelligence

### Frontend (Jac-Client)
- **React-style components** using `cl { }` blocks
- **State management** with useState/useEffect hooks
- **Async operations** for AI agent calls
- **Responsive design** with inline styles

### AI Integration
- **byLLM library** for unified AI provider interface
- **Docstring-based prompting** for reliable outputs
- **Error handling** with try-catch blocks
- **Debug mode** for troubleshooting

---

## 🔍 API Endpoints

The application automatically exposes these endpoints:

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/walker/get_initial_data` | POST | Fetch default user profile |
| `/walker/get_advice` | POST | Generate career advice |
| `/walker/get_roadmap` | POST | Create learning roadmap |
| `/walker/get_market_analysis` | POST | Analyze job market |
| `/walker/get_path_suggestions` | POST | Suggest alternative paths |
| `/walker/get_resume_summary` | POST | Generate resume summary |

Visit `http://localhost:8000/docs` for interactive API documentation.

---

## 🛠️ Development

### Running in Development Mode

```bash
# With auto-reload on file changes
jac serve app.jac --reload

# With verbose logging
jac serve app.jac --verbose

# Custom port
jac serve app.jac --port 3000
```

### Testing

```bash
# Test individual walkers
jac run app.jac -w get_advice

```


---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Code Style
- Follow JacLang conventions
- Add docstrings to AI functions
- Include error handling
- Test before submitting

---

## 🐛 Troubleshooting

### Issue: AI returns empty responses
**Solution**: Check that your API key is set correctly
```bash
echo $GEMINI_API_KEY
# Should output your key
```

### Issue: "Module not found" errors
**Solution**: Reinstall dependencies
```bash
pip install --upgrade jaclang jac-cloud byllm
```

### Issue: Port already in use
**Solution**: Use a different port
```bash
jac serve app.jac --port 8001
```

### Issue: LiteLLM errors
**Solution**: Enable debug mode and check terminal output
```jac
litellm.set_verbose = True;
```

For more help, see [TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md)

---

## 📊 Performance

- **Cold start**: ~2-3 seconds
- **AI response time**: 5-15 seconds (depends on Gemini API)
- **Memory usage**: ~150-200 MB
- **Concurrent users**: Supports multiple users (limited by API rate limits)

---

## 🔐 Security

- ✅ API keys stored in `.env` (not committed to git)
- ✅ Input validation on all user inputs
- ✅ Error messages don't expose sensitive data
- ✅ HTTPS recommended for production
- ⚠️ Rate limiting should be added for production use

---

## 🌐 Deployment

### Deploy to Production

1. **Set environment variables** on your hosting platform
2. **Install dependencies**: `pip install -r requirements.txt`
3. **Run with production settings**:
   ```bash
   jac serve app.jac --host 0.0.0.0 --port 8000
   ```

### Recommended Platforms
- **Heroku** - Easy deployment with Procfile
- **Railway** - One-click deploy
- **DigitalOcean** - Full control
- **AWS/GCP/Azure** - Enterprise scale

See [DEPLOYMENT.md](docs/DEPLOYMENT.md) for detailed instructions.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **JacLang Team** - For the amazing language and framework
- **Google** - For Gemini API access
- **byLLM** - For unified AI provider interface
- **Contributors** - Everyone who helps improve this project

---

## 📧 Contact

**Project Maintainer**: Your Name  
**Email**: your.email@example.com  
**GitHub**: [@yourusername](https://github.com/yourusername)  
**Project Link**: [https://github.com/yourusername/smart-career-navigator](https://github.com/yourusername/smart-career-navigator)

---

## 🗺️ Roadmap

### Version 1.0 (Current) ✅
- [x] Basic AI agents
- [x] User profile management
- [x] Responsive UI
- [x] Error handling

### Version 1.1 (Planned)
- [ ] Resume parsing (PDF upload)
- [ ] Job posting scraper
- [ ] Skill proficiency tracking
- [ ] Learning progress dashboard

### Version 2.0 (Future)
- [ ] User authentication
- [ ] Database persistence
- [ ] Multi-language support
- [ ] Mobile app (React Native)
- [ ] Team collaboration features

---

## ⭐ Star History

If you find this project helpful, please consider giving it a star! ⭐

---

## 📸 Screenshots

### Main Dashboard
![Dashboard](docs/images/dashboard.png)

### Career Advice Agent
![Career Advice](docs/images/career-advice.png)

### Learning Roadmap
![Roadmap](docs/images/roadmap.png)

---

<div align="center">

**Built with ❤️ using JacLang**

[Report Bug](https://github.com/yourusername/smart-career-navigator/issues) · 
[Request Feature](https://github.com/yourusername/smart-career-navigator/issues) · 
[Documentation](https://github.com/yourusername/smart-career-navigator/wiki)

</div>