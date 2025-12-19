# 🎯 Smart Career Path Navigator
AI HACKATHON
NAME: JASON NDALAMIA
GITHUB REPOSITORY LINK: https://github.com/JNdalamia/OUK-AI-Hackathon.git
GOOGLE DRIVE LINK: https://drive.google.com/drive/folders/1xogGO_19iAZ2UGfkRB4TFMOjXgCJr6IQ?usp=sharing 
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
- **Frontend**: Jac-Client
- **AI**: Google Gemini 1.5 Flash via byLLM
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
git clone https://github.com/JNdalamia/OUK-AI-Hackathon.git
cd smart-career-navigator
```

2. **Install dependencies**
```bash
pip install jaclang jac-cloud byllm
```

3. **Set up environment**
```bash
Create the environment: Run the appropriate command in the terminal (using .venv as the folder name is standard practice):
Windows: python -m venv .venv
macOS/Linux: python3 -m venv .venv
```

4. **Run the application**
```bash
jac build app.jac #to compile
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

By default, the app uses Gemini 1.5 Flash. To change the model, edit `app.jac`:

```jac
# Line 24
glob llm = Model(model_name="gemini/gemini-1.5-flash");

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

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **JacLang Team** - For the amazing language and framework
- **Google** - For Gemini API access
- **byLLM** - For unified AI provider interface
- **Contributors** - Everyone at Open University Kenya and the BCS team

---

## 📧 Contact

**Project Maintainer**: Jason Ndalamia
**Email**: jahson.ndalamia@gmail.com 
**GitHub**: [https://github.com/JNdalamia]  
**Project Link**: [https://github.com/JNdalamia/OUK-AI-Hackathon.git]

---

## ⭐ Star History

If you find this project helpful, please consider giving it a star! ⭐

---

---

<div align="center">

**Built with ❤️ using JacLang**


</div>

