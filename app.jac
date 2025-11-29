
import from byllm.llm { Model }
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

# --- Data Models ---
node User {
    has name: str;
    has background: str;
    has interests: str;
    has skills: list[str] = [];
}

node Skill {
    has name: str;
    has category: str;
    has proficiency: int;
}

node Course {
    has title: str;
    has provider: str;
    has duration_weeks: int;
    has teaches_skill: str;
    has target_level: int;
}

node Role {
    has title: str;
    has description: str;
    has required_skills: list[str] = [];
}

edge HasSkill {}
edge Requires {}
edge Teaches {}

# =======================================================================
# 🤖 AI HELPER FUNCTIONS (SIMPLIFIED FOR RELIABILITY)
# =======================================================================

"""Provide personalized career advice for someone wanting to transition to a target Role. 
Consider their current skills and suggest 3 specific actionable steps."""
def generate_career_advice(
    target_role: str, 
    current_skills: str
) -> str by llm();

"""Create a 4-week learning roadmap for someone to transition into a target Role. 
Include weekly goals, specific resources, and practice projects."""
def create_learning_roadmap(
    target_role: str, 
    current_skills: str
) -> str by llm();

"""Analyze the job market for a specific role in a location. 
Include demand level, salary range, and top hiring companies."""
def analyze_job_market(
    role_title: str, 
    location: str
) -> str by llm();

"""Suggest 3 alternative career paths based on someone's skills and interests. 
Explain why each path is a good fit."""
def suggest_career_paths(
    current_skills: str, 
    interests: str
) -> str by llm();

"""Generate a professional 2-3 sentence resume summary that highlights skills and alignment with target Role."""
def generate_resume_summary(
    name: str, 
    skills: str, 
    experience: str, 
    target_role: str
) -> str by llm();

# =======================================================================
# 🔗 WALKERS (CONNECTING FRONTEND TO BACKEND)
# =======================================================================

walker get_initial_data {
    can fetch_data with `root entry {
        report {
            "name": "Your Name",
            "role": "Role Title",
            "skills": "skill1, skill2, skill3, ...",
            "target": "target Role",
            "interests": "Data Science, Machine Learning, AI",
            "location": "Remote/ Nairobi, Kenya"
        };
    }
}

walker get_advice {
    has target_role: str;
    has current_skills: str;
    can generate with `root entry {
        print("\n=== CAREER ADVICE AGENT ===");
        print("target Role: " + self.target_role);
        print("Current Skills: " + self.current_skills);
        print("Calling AI...");
        
        try {
            advice = generate_career_advice(
                target_role=self.target_role, 
                current_skills=self.current_skills
            );
            print("✅ Success! AI response length: " + str(len(advice)));
            report advice;
        } except Exception as e {
            error_msg = "Error generating advice: " + str(e);
            print("❌ " + error_msg);
            report error_msg;
        }
    }
}

walker get_roadmap {
    has target_role: str;
    has current_skills: str;
    can generate with `root entry {
        print("\n=== LEARNING ROADMAP AGENT ===");
        print("target Role: " + self.target_role);
        print("Calling AI...");
        
        try {
            roadmap = create_learning_roadmap(
                target_role=self.target_role, 
                current_skills=self.current_skills
            );
            print("✅ Success! Roadmap generated.");
            report roadmap;
        } except Exception as e {
            error_msg = "Error creating roadmap: " + str(e);
            print("❌ " + error_msg);
            report error_msg;
        }
    }
}

walker get_market_analysis {
    has role_title: str;
    has location: str;
    can analyze with `root entry {
        print("\n=== JOB MARKET ANALYSIS AGENT ===");
        print("Role: " + self.role_title + " | Location: " + self.location);
        print("Calling AI...");
        
        try {
            analysis = analyze_job_market(
                role_title=self.role_title, 
                location=self.location
            );
            print("✅ Success! Analysis complete.");
            report analysis;
        } except Exception as e {
            error_msg = "Error analyzing market: " + str(e);
            print("❌ " + error_msg);
            report error_msg;
        }
    }
}

walker get_path_suggestions {
    has current_skills: str;
    has interests: str;
    can suggest with `root entry {
        print("\n=== CAREER PATH SUGGESTIONS AGENT ===");
        print("Skills: " + self.current_skills);
        print("Calling AI...");
        
        try {
            suggestions = suggest_career_paths(
                current_skills=self.current_skills, 
                interests=self.interests
            );
            print("✅ Success! Suggestions generated.");
            report suggestions;
        } except Exception as e {
            error_msg = "Error suggesting paths: " + str(e);
            print("❌ " + error_msg);
            report error_msg;
        }
    }
}

walker get_resume_summary {
    has name: str;
    has skills: str;
    has role: str;
    has target_role: str;
    can generate with `root entry {
        print("\n=== RESUME SUMMARY AGENT ===");
        print("Name: " + self.name + " | Target: " + self.target_role);
        print("Calling AI...");
        
        try {
            summary = generate_resume_summary(
                name=self.name, 
                skills=self.skills, 
                experience=self.role, 
                target_role=self.target_role
            );
            print("✅ Success! Summary generated.");
            report summary;
        } except Exception as e {
            error_msg = "Error generating summary: " + str(e);
            print("❌ " + error_msg);
            report error_msg;
        }
    }
}

# =======================================================================
# 💻 FRONTEND: INTERACTIVE UI
# =======================================================================

cl {
    import from react { useState, useEffect }

    def Header() -> any {
        return <div style={{"textAlign": "center", "marginBottom": "30px"}}>
            <h1 style={{"color": "#2c3e50", "fontSize": "2.5rem"}}>🎯 Smart Career Navigator</h1>
            <p style={{"color": "#7f8c8d"}}>AI-Powered Career Guidance Platform</p>
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
        let [error, setError] = useState("");

        useEffect(lambda -> None {
            async def load() -> None {
                try {
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
                } except Exception as e {
                    console.error("Error loading initial data:", e);
                    setError("Failed to load initial data");
                }
            }
            load();
        }, []);

        # --- Handlers ---
        async def runAgent(type: str) -> None {
            setLoading(True);
            setOutputTitle(type);
            setOutputContent("");
            setError("");
            
            console.log("🚀 Starting agent:", type);
            
            try {
                resp = null;
                
                if type == "Career Advice" {
                    resp = await root spawn get_advice(
                        target_role=target, 
                        current_skills=skills
                    );
                } elif type == "Study Roadmap" {
                    resp = await root spawn get_roadmap(
                        target_role=target, 
                        current_skills=skills
                    );
                } elif type == "Market Analysis" {
                    resp = await root spawn get_market_analysis(
                        role_title=target, 
                        location=location
                    );
                } elif type == "Path Suggestions" {
                    resp = await root spawn get_path_suggestions(
                        current_skills=skills, 
                        interests=interests
                    );
                } elif type == "Resume Summary" {
                    resp = await root spawn get_resume_summary(
                        name=name, 
                        skills=skills, 
                        role=role, 
                        target_role=target
                    );
                }

                console.log("📦 Response received:", resp);

                if resp and resp.reports and resp.reports.length > 0 {
                    let content = resp.reports[0];
                    console.log("✅ Content:", content);
                    
                    if content and content.length > 0 {
                        setOutputContent(content);
                    } else {
                        setError("AI returned empty response. Check API key and try again.");
                    }
                } else {
                    setError("No response from AI. Check terminal for errors.");
                }
            } except Exception as e {
                console.error("❌ Error:", e);
                setError("Error: " + str(e) + ". Check browser console and terminal.");
            }
            
            setLoading(False);
        }

        # --- Helper for Output ---
        let resultArea = null;
        if outputContent {
            resultArea = <div style={{"background": "#e8f6f3", "padding": "20px", "borderRadius": "12px", "marginTop": "20px", "border": "1px solid #d1e7dd", "boxShadow": "0 2px 4px rgba(0,0,0,0.05)"}}>
                <h3 style={{"marginTop": "0", "color": "#198754", "display": "flex", "alignItems": "center", "gap": "10px"}}>
                    <span>✨</span>
                    <span>{outputTitle}</span>
                </h3>
                <div style={{"background": "white", "padding": "15px", "borderRadius": "8px", "marginTop": "10px"}}>
                    <pre style={{"whiteSpace": "pre-wrap", "fontFamily": "inherit", "color": "#333", "lineHeight": "1.6", "margin": "0"}}>{outputContent}</pre>
                </div>
            </div>;
        }

        let loadingArea = null;
        if loading {
            loadingArea = <div style={{"textAlign": "center", "marginTop": "20px", "padding": "30px", "background": "#f8f9fa", "borderRadius": "12px"}}>
                <div style={{"fontSize": "3rem", "marginBottom": "15px", "animation": "pulse 2s infinite"}}>🤖</div>
                <div style={{"fontSize": "1.1em", "color": "#495057", "fontWeight": "500"}}>AI Agent is thinking...</div>
                <div style={{"fontSize": "0.9em", "marginTop": "8px", "color": "#6c757d"}}>This may take 5-15 seconds</div>
            </div>;
        }

        let errorArea = null;
        if error {
            errorArea = <div style={{"background": "#f8d7da", "color": "#721c24", "padding": "15px", "borderRadius": "8px", "marginTop": "20px", "border": "1px solid #f5c6cb"}}>
                <strong>⚠️ Error:</strong>
                <div style={{"marginTop": "5px"}}>{error}</div>
            </div>;
        }

        return <div style={{"fontFamily": "Segoe UI, Tahoma, Geneva, Verdana, sans-serif", "background": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", "minHeight": "100vh", "padding": "20px"}}>
            <div style={{"maxWidth": "1200px", "margin": "0 auto"}}>
                <Header />

                <div style={{"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "25px"}}>
                    
                    
                    <div style={{"background": "white", "padding": "25px", "borderRadius": "16px", "boxShadow": "0 10px 30px rgba(0,0,0,0.1)"}}>
                        <h3 style={{"borderBottom": "3px solid #667eea", "paddingBottom": "12px", "color": "#2c3e50", "margin": "0 0 20px 0", "fontSize": "1.3em"}}>👤 Your Profile</h3>
                        
                        <div style={{"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "15px"}}>
                            <div>
                                <label style={{"display": "block", "color": "#6c757d", "fontSize": "0.85em", "marginBottom": "5px", "fontWeight": "500"}}>Name</label>
                                <input value={name} onChange={lambda e: any -> None { setName(e.target.value); }} style={{"width": "100%", "padding": "10px", "borderRadius": "6px", "border": "2px solid #e9ecef", "fontSize": "0.95em"}} />
                            </div>
                            <div>
                                <label style={{"display": "block", "color": "#6c757d", "fontSize": "0.85em", "marginBottom": "5px", "fontWeight": "500"}}>Current Role</label>
                                <input value={role} onChange={lambda e: any -> None { setRole(e.target.value); }} style={{"width": "100%", "padding": "10px", "borderRadius": "6px", "border": "2px solid #e9ecef", "fontSize": "0.95em"}} />
                            </div>
                        </div>

                        <div style={{"marginTop": "15px"}}>
                            <label style={{"display": "block", "color": "#6c757d", "fontSize": "0.85em", "marginBottom": "5px", "fontWeight": "500"}}>Current Skills</label>
                            <textarea value={skills} onChange={lambda e: any -> None { setSkills(e.target.value); }} style={{"width": "100%", "padding": "10px", "borderRadius": "6px", "border": "2px solid #e9ecef", "height": "70px", "fontSize": "0.95em", "resize": "vertical"}} />
                        </div>

                        <div style={{"marginTop": "15px"}}>
                            <label style={{"display": "block", "color": "#6c757d", "fontSize": "0.85em", "marginBottom": "5px", "fontWeight": "500"}}>Interests</label>
                            <input value={interests} onChange={lambda e: any -> None { setInterests(e.target.value); }} style={{"width": "100%", "padding": "10px", "borderRadius": "6px", "border": "2px solid #e9ecef", "fontSize": "0.95em"}} />
                        </div>

                        <div style={{"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "15px", "marginTop": "15px"}}>
                            <div>
                                <label style={{"display": "block", "color": "#667eea", "fontSize": "0.85em", "marginBottom": "5px", "fontWeight": "bold"}}>🎯 target Role</label>
                                <input value={target} onChange={lambda e: any -> None { setTarget(e.target.value); }} style={{"width": "100%", "padding": "10px", "borderRadius": "6px", "border": "2px solid #667eea", "fontSize": "0.95em", "fontWeight": "500"}} />
                            </div>
                            <div>
                                <label style={{"display": "block", "color": "#6c757d", "fontSize": "0.85em", "marginBottom": "5px", "fontWeight": "500"}}>🌍 Location</label>
                                <input value={location} onChange={lambda e: any -> None { setLocation(e.target.value); }} style={{"width": "100%", "padding": "10px", "borderRadius": "6px", "border": "2px solid #e9ecef", "fontSize": "0.95em"}} />
                            </div>
                        </div>
                    </div>

                    
                    <div style={{"background": "white", "padding": "25px", "borderRadius": "16px", "boxShadow": "0 10px 30px rgba(0,0,0,0.1)"}}>
                        <h3 style={{"borderBottom": "3px solid #764ba2", "paddingBottom": "12px", "color": "#2c3e50", "margin": "0 0 20px 0", "fontSize": "1.3em"}}>🤖 AI Career Agents</h3>
                        
                        <p style={{"color": "#6c757d", "marginBottom": "20px", "fontSize": "0.9em"}}>
                            Click an agent to get AI-powered insights:
                        </p>

                        <div style={{"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "12px"}}>
                            <button onClick={lambda -> None { runAgent("Career Advice"); }} disabled={loading} style={{"padding": "14px", "background": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", "color": "white", "border": "none", "borderRadius": "8px", "cursor": "pointer", "fontSize": "0.95em", "fontWeight": "600", "transition": "transform 0.2s", "boxShadow": "0 4px 10px rgba(102, 126, 234, 0.3)"}}>
                                ✨ Career Advice
                            </button>
                            <button onClick={lambda -> None { runAgent("Study Roadmap"); }} disabled={loading} style={{"padding": "14px", "background": "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", "color": "white", "border": "none", "borderRadius": "8px", "cursor": "pointer", "fontSize": "0.95em", "fontWeight": "600", "transition": "transform 0.2s", "boxShadow": "0 4px 10px rgba(240, 147, 251, 0.3)"}}>
                                📅 Study Roadmap
                            </button>
                            <button onClick={lambda -> None { runAgent("Market Analysis"); }} disabled={loading} style={{"padding": "14px", "background": "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", "color": "white", "border": "none", "borderRadius": "8px", "cursor": "pointer", "fontSize": "0.95em", "fontWeight": "600", "transition": "transform 0.2s", "boxShadow": "0 4px 10px rgba(79, 172, 254, 0.3)"}}>
                                📊 Job Market
                            </button>
                            <button onClick={lambda -> None { runAgent("Path Suggestions"); }} disabled={loading} style={{"padding": "14px", "background": "linear-gradient(135deg, #fa709a 0%, #fee140 100%)", "color": "white", "border": "none", "borderRadius": "8px", "cursor": "pointer", "fontSize": "0.95em", "fontWeight": "600", "transition": "transform 0.2s", "boxShadow": "0 4px 10px rgba(250, 112, 154, 0.3)"}}>
                                🔀 Alt Paths
                            </button>
                            <button onClick={lambda -> None { runAgent("Resume Summary"); }} disabled={loading} style={{"gridColumn": "1 / -1", "padding": "14px", "background": "linear-gradient(135deg, #30cfd0 0%, #330867 100%)", "color": "white", "border": "none", "borderRadius": "8px", "cursor": "pointer", "fontSize": "0.95em", "fontWeight": "600", "transition": "transform 0.2s", "boxShadow": "0 4px 10px rgba(48, 207, 208, 0.3)"}}>
                                📄 Resume Summary
                            </button>
                        </div>

                        {errorArea}
                        {loadingArea}
                        {resultArea}
                    </div>

                </div>
            </div>
        </div>;
    }
}