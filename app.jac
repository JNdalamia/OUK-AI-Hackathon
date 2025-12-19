import from byllm.lib { Model }
import from os { environ }
import litellm;


# =======================================================================
# 🔍 DIAGNOSTICS & SETUP
# =======================================================================
with entry {
    print("\n--------------------------------------------------");
    print("🔍 API KEY CHECK:");
    if "GEMINI_API_KEY" in environ {
        print("✅ GEMINI_API_KEY found.");
    } else {
        print("❌ GEMINI_API_KEY NOT FOUND! App will output gibberish.");
        print("   Run: export GEMINI_API_KEY='your_key' (Linux/Mac)");
        print("   Run: $env:GEMINI_API_KEY='your_key' (Windows)");
    }
    print("--------------------------------------------------\n");
}

# =======================================================================
# 🧠 BACKEND: SMART LOGIC
# =======================================================================

glob llm = Model(model_name="gemini/gemini-2.5-flash");
# =======================================================================
# 🏙️ GRAPH: OSP DATA MODELS
# =======================================================================

node User {
    has name: str;
    has role: str;
}

node Skill {
    has name: str;
    has proficiency: str;
}

node Role {
    has title: str;
    has description: str;
}

node JobPosting {
    has title: str;
    has company: str;
    has location: str;
    has salary: str;
}

node Certification {
    has name: str;
    has issuer: str;
    has year: str;
}

node Course {
    has title: str;
    has provider: str;
}

# Edges
edge HasSkill {}
edge InterestedIn {}
edge RequiredFor {}
edge CertifiedIn {}

# =======================================================================
# 🧠 BRAIN: AI SKILLS (byLLM)
# =======================================================================

def analyze_resume_text(text: str) -> dict by llm(
    context="Extract 'name', 'role', and a list of 'skills' from the resume text. Return JSON."
);

def generate_learning_path(role: str, missing_skills: list) -> str by llm(
    context="Create a short learning path for a {role} missing these skills: {missing_skills}."
);

def analyze_market_trends(role: str) -> str by llm(
    context="Summarize 3 key job market trends for {role} roles right now."
);

# --- AI Helper Functions (From test_llm.jac) ---

"""Generate personalized career advice based on user profile and target role"""
def generate_career_advice(
    target_role: str, 
    current_skills: str
) -> str by llm(
    context="You are a career coach. The user wants to be a {target_role} but only has {current_skills}. Identify the gaps and provide 3 actionable steps."
);

"""Create a detailed learning roadmap with timeline for acquiring new skills"""
def create_learning_roadmap(
    target_role: str, 
    current_skills: str
) -> str by llm(
    context="Create a 4-week study schedule to help a user with {current_skills} become a {target_role}. Be detailed."
);

"""Analyze current job market trends for a specific role and provide insights"""
def analyze_job_market(
    role_title: str, 
    location: str
) -> str by llm(
    context="Analyze the current job market trends for {role_title} in {location}. Include demand level, salary range, and key companies."
);

"""Suggest alternative career paths based on current skills"""
def suggest_career_paths(
    current_skills: str, 
    interests: str
) -> str by llm(
    context="Suggest 3 alternative career paths for someone with skills in {current_skills} and interests in {interests}. Explain why."
);

"""Generate a personalized resume summary based on user profile"""
def generate_resume_summary(
    name: str, 
    skills: str, 
    experience: str, 
    target_role: str
) -> str by llm(
    context="Generate a professional resume summary for {name}, who has experience: '{experience}' and skills: '{skills}', applying for {target_role}."
);

# =======================================================================
# 🚶 WALKERS: BACKEND LOGIC
# =======================================================================

# 1. Graph Builder: Creates the User and Skills nodes
walker onboard_user {
    has name: str;
    has role: str;
    has skills: list[str];

    can setup with `root entry {
        # Create User node connected to root with generic edge first
        user_node = spawn here ++> User(name=self.name, role=self.role);
        
        # Create Skills and Connect
        for s in self.skills {
            # FIX: Separate instantiation and connection to avoid syntax errors
            # 1. Create the skill node
            skill_node = spawn user_node ++> Skill(name=s, proficiency="Intermediate");
            # 2. Add the specific 'HasSkill' edge
            user_node + HasSkill ++> skill_node;
        }

        report {"id": str(user_node.id), "message": "Graph created successfully"};
    }
}

# 2. Data Fetcher: Traverses graph to get dashboard data
walker fetch_dashboard {
    can collect with `root entry {
        # Traverse to find the user
        user_node = null;
        for n in [here -->] {
            if (type(n) == User) {
                user_node = n;
                break;
            }
        }

        if not user_node {
            report {"error": "No user found. Please onboard first."};
            disengage;
        }

        # Traverse from User to Skills (Graph Traversal)
        skills = [];
        for s in [user_node -->] {
            if (type(s) == Skill) {
                skills.append(s.name);
            }
        }

        # Generate AI Insights
        print(f"Fetching market trends for {user_node.role}...");
        trends = analyze_market_trends(user_node.role);
        print(f"Trends received: {trends[:50]}...");

        report {
            "user": {
                "name": user_node.name,
                "role": user_node.role,
                "skills": skills
            },
            "market_trends": trends,
            "notifications": [
                "🚀 High demand for " + user_node.role + " in Q4",
                "⚠️ New certification required for Senior levels"
            ]
        };
    }
}

# 3. Resume Parser: Takes text, simulates graph update
walker parse_resume_update {
    has resume_text: str;

    can process with `root entry {
        print("Analyzing resume text...");
        extracted = analyze_resume_text(self.resume_text);
        print(f"Extraction result: {extracted}");
        report extracted;
    }
}

# --- Walkers (Connecting Frontend to Backend) ---

walker get_initial_data {
    can fetch_data with `root entry {
        report {
            "name": "Jason Ndalamia",
            "role": "Junior Developer",
            "skills": "Python, SQL, Git",
            "target": "AI Engineer",
            "interests": "Data Science, Machine Learning, AI",
            "location": "Remote / Kenya"
        };
    }
}

walker get_advice {
    has target_role: str;
    has current_skills: str;
    can generate with `root entry {
        print(f"Getting advice for {self.target_role}...");
        advice = generate_career_advice(target_role=self.target_role, current_skills=self.current_skills);
        print("Advice received.");
        report advice;
    }
}

walker get_roadmap {
    has target_role: str;
    has current_skills: str;
    can generate with `root entry {
        print(f"Creating roadmap for {self.target_role}...");
        roadmap = create_learning_roadmap(target_role=self.target_role, current_skills=self.current_skills);
        print("Roadmap created.");
        report roadmap;
    }
}

walker get_market_analysis {
    has role_title: str;
    has location: str;
    can analyze with `root entry {
        print(f"Analyzing market for {self.role_title} in {self.location}...");
        analysis = analyze_job_market(role_title=self.role_title, location=self.location);
        print("Analysis complete.");
        report analysis;
    }
}

walker get_path_suggestions {
    has current_skills: str;
    has interests: str;
    can suggest with `root entry {
        print("Suggesting paths...");
        suggestions = suggest_career_paths(current_skills=self.current_skills, interests=self.interests);
        print("Paths suggested.");
        report suggestions;
    }
}

walker get_resume_summary {
    has name: str;
    has skills: str;
    has role: str;
    has target_role: str;
    can generate with `root entry {
        print(f"Generating resume summary for {self.name}...");
        # Mapping frontend 'role' to AI 'experience' parameter
        summary = generate_resume_summary(
            name=self.name, 
            skills=self.skills, 
            experience=self.role, 
            target_role=self.target_role
        );
        print("Resume generated.");
        report summary;
    }
}

# =======================================================================
# 💻 FRONTEND: INTERACTIVE UI
# =======================================================================

cl {
    import from react { useState, useEffect }

    def Header() -> any {
        return <div style={{"textAlign": "center", "marginBottom": "30px", "background": "#2c3e50", "padding": "20px", "color": "white", "borderRadius": "8px"}}>
            <h1>🧭 Smart Career Navigator</h1>
            <p>Graph-Based Career Guidance System</p>
        </div>;
    }

    def app() -> any {
        # --- State ---
        let [name, setName] = useState("Loading...");
        let [role, setRole] = useState("");
        let [skills, setSkills] = useState("");
        let [target, setTarget] = useState("");
        let [interests, setInterests] = useState("");
        let [location, setLocation] = useState("");
        
        # --- Output State ---
        let [outputTitle, setOutputTitle] = useState("");
        let [outputContent, setOutputContent] = useState("");
        let [loading, setLoading] = useState(False);

        useEffect(lambda -> None {
            async def load() -> None {
                resp = await root spawn get_initial_data();
                if resp.reports {
                    d = resp.reports[0];
                    setName(d["name"]);
                    setRole(d["role"]);
                    setSkills(d["skills"]);
                    setTarget(d["target"]);
                    setInterests(d["interests"]);
                    setLocation(d["location"]);
                }
            }
            load();
        }, []);

        # --- Handlers ---
        async def runAgent(type: str) -> None {
            setLoading(True);
            setOutputTitle(type);
            setOutputContent("");
            
            resp = null;
            
            if type == "Career Advice" {
                resp = await root spawn get_advice(target_role=target, current_skills=skills);
            } elif type == "Study Roadmap" {
                resp = await root spawn get_roadmap(target_role=target, current_skills=skills);
            } elif type == "Market Analysis" {
                resp = await root spawn get_market_analysis(role_title=target, location=location);
            } elif type == "Path Suggestions" {
                resp = await root spawn get_path_suggestions(current_skills=skills, interests=interests);
            } elif type == "Resume Summary" {
                resp = await root spawn get_resume_summary(name=name, skills=skills, role=role, target_role=target);
            }

            if resp.reports { setOutputContent(resp.reports[0]); }
            setLoading(False);
        }

        # --- Helper for Output ---
        let resultArea = null;
        if outputContent {
            resultArea = <div style={{"background": "#e8f6f3", "padding": "20px", "borderRadius": "12px", "marginTop": "20px", "border": "1px solid #d1e7dd"}}>
                <h3 style={{"marginTop": "0", "color": "#198754"}}>{outputTitle}</h3>
                <pre style={{"whiteSpace": "pre-wrap", "fontFamily": "inherit", "color": "#333"}}>{outputContent}</pre>
            </div>;
        }

        let loadingArea = null;
        if loading {
            loadingArea = <div style={{"textAlign": "center", "marginTop": "20px", "color": "#7f8c8d"}}>
                🤖 AI Agent is thinking...
            </div>;
        }

        return <div style={{"fontFamily": "Segoe UI, sans-serif", "background": "#f0f2f5", "minHeight": "100vh", "padding": "20px"}}>
            <Header />

            <div style={{"maxWidth": "1100px", "margin": "0 auto", "display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "20px"}}>
                
                #{/* LEFT: Profile Form */}
                <div style={{"background": "white", "padding": "20px", "borderRadius": "12px", "boxShadow": "0 4px 6px rgba(0,0,0,0.1)"}}>
                    <h3 style={{"borderBottom": "2px solid #3498db", "paddingBottom": "10px", "color": "#2c3e50"}}>👤 Your Profile</h3>
                    
                    <div style={{"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "10px"}}>
                        <div style={{"marginBottom": "10px"}}>
                            <label style={{"display": "block", "color": "#7f8c8d", "fontSize": "0.9em"}}>Name</label>
                            <input value={name} onChange={lambda e: any -> None { setName(e.target.value); }} style={{"width": "100%", "padding": "8px", "borderRadius": "4px", "border": "1px solid #ddd"}} />
                        </div>
                        <div style={{"marginBottom": "10px"}}>
                            <label style={{"display": "block", "color": "#7f8c8d", "fontSize": "0.9em"}}>Current Role</label>
                            <input value={role} onChange={lambda e: any -> None { setRole(e.target.value); }} style={{"width": "100%", "padding": "8px", "borderRadius": "4px", "border": "1px solid #ddd"}} />
                        </div>
                    </div>

                    <div style={{"marginBottom": "10px"}}>
                        <label style={{"display": "block", "color": "#7f8c8d", "fontSize": "0.9em"}}>Current Skills</label>
                        <textarea value={skills} onChange={lambda e: any -> None { setSkills(e.target.value); }} style={{"width": "100%", "padding": "8px", "borderRadius": "4px", "border": "1px solid #ddd", "height": "60px"}} />
                    </div>

                    <div style={{"marginBottom": "10px"}}>
                        <label style={{"display": "block", "color": "#7f8c8d", "fontSize": "0.9em"}}>Interests</label>
                        <input value={interests} onChange={lambda e: any -> None { setInterests(e.target.value); }} style={{"width": "100%", "padding": "8px", "borderRadius": "4px", "border": "1px solid #ddd"}} />
                    </div>

                    <div style={{"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "10px"}}>
                        <div style={{"marginBottom": "10px"}}>
                            <label style={{"display": "block", "color": "#2c3e50", "fontWeight": "bold"}}>🎯 Target Role</label>
                            <input value={target} onChange={lambda e: any -> None { setTarget(e.target.value); }} style={{"width": "100%", "padding": "8px", "borderRadius": "4px", "border": "2px solid #3498db"}} />
                        </div>
                        <div style={{"marginBottom": "10px"}}>
                            <label style={{"display": "block", "color": "#2c3e50", "fontWeight": "bold"}}>🌍 Location</label>
                            <input value={location} onChange={lambda e: any -> None { setLocation(e.target.value); }} style={{"width": "100%", "padding": "8px", "borderRadius": "4px", "border": "1px solid #ddd"}} />
                        </div>
                    </div>
                </div>

                #{/* RIGHT: AI Actions */}
                <div style={{"background": "white", "padding": "20px", "borderRadius": "12px", "boxShadow": "0 4px 6px rgba(0,0,0,0.1)"}}>
                    <h3 style={{"borderBottom": "2px solid #9b59b6", "paddingBottom": "10px", "color": "#2c3e50"}}>🤖 AI Agents</h3>
                    
                    <p style={{"color": "#7f8c8d", "marginBottom": "20px", "fontSize": "0.9em"}}>
                        Select an agent to analyze your profile:
                    </p>

                    <div style={{"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "10px"}}>
                        <button onClick={lambda -> None { runAgent("Career Advice"); }} disabled={loading} style={{"padding": "12px", "background": "#3498db", "color": "white", "border": "none", "borderRadius": "6px", "cursor": "pointer"}}>
                            ✨ Advice
                        </button>
                        <button onClick={lambda -> None { runAgent("Study Roadmap"); }} disabled={loading} style={{"padding": "12px", "background": "#9b59b6", "color": "white", "border": "none", "borderRadius": "6px", "cursor": "pointer"}}>
                            📅 Roadmap
                        </button>
                        <button onClick={lambda -> None { runAgent("Market Analysis"); }} disabled={loading} style={{"padding": "12px", "background": "#27ae60", "color": "white", "border": "none", "borderRadius": "6px", "cursor": "pointer"}}>
                            📊 Job Market
                        </button>
                        <button onClick={lambda -> None { runAgent("Path Suggestions"); }} disabled={loading} style={{"padding": "12px", "background": "#e67e22", "color": "white", "border": "none", "borderRadius": "6px", "cursor": "pointer"}}>
                            🔀 Alt Paths
                        </button>
                        <button onClick={lambda -> None { runAgent("Resume Summary"); }} disabled={loading} style={{"gridColumn": "1 / -1", "padding": "12px", "background": "#34495e", "color": "white", "border": "none", "borderRadius": "6px", "cursor": "pointer"}}>
                            📄 Generate Resume Summary
                        </button>
                    </div>

                    {resultArea}
                    {loadingArea}
                </div>

            </div>
        </div>;
    }
}