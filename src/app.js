import {__jacJsx, __jacSpawn} from "@jac-client/utils";
import { useState, useEffect } from "react";
function Header() {
  return __jacJsx("div", {"style": {"textAlign": "center", "marginBottom": "30px"}}, [__jacJsx("h1", {"style": {"color": "#2c3e50", "fontSize": "2.5rem"}}, ["🎯 Smart Career Navigator"]), __jacJsx("p", {"style": {"color": "#7f8c8d"}}, ["AI-Powered Career Guidance Platform"])]);
}
function app() {
  let [name, setName] = useState("Loading...");
  let [role, setRole] = useState("");
  let [skills, setSkills] = useState("");
  let [target, setTarget] = useState("");
  let [interests, setInterests] = useState("");
  let [location, setLocation] = useState("");
  let [outputTitle, setOutputTitle] = useState("");
  let [outputContent, setOutputContent] = useState("");
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState("");
  useEffect(() => {
    async function load() {
      try {
        let resp = await __jacSpawn("get_initial_data", "", {});
        if (resp.reports) {
          let d = resp.reports[0];
          setName(d["name"]);
          setRole(d["role"]);
          setSkills(d["skills"]);
          setTarget(d["target"]);
          setInterests(d["interests"]);
          setLocation(d["location"]);
        }
      } catch (e) {
        console.error("Error loading initial data:", e);
        setError("Failed to load initial data");
      }
    }
    load();
  }, []);
  async function runAgent(type) {
    setLoading(true);
    setOutputTitle();
    setOutputContent("");
    setError("");
    console.log("\ud83d\ude80 Starting agent:");
    try {
      let resp = null;
      if (type === "Career Advice") {
        resp = await __jacSpawn("get_advice", "", {"target_role": target, "current_skills": skills});
      } else if (type === "Study Roadmap") {
        resp = await __jacSpawn("get_roadmap", "", {"target_role": target, "current_skills": skills});
      } else if (type === "Market Analysis") {
        resp = await __jacSpawn("get_market_analysis", "", {"role_title": target, "location": location});
      } else if (type === "Path Suggestions") {
        resp = await __jacSpawn("get_path_suggestions", "", {"current_skills": skills, "interests": interests});
      } else if (type === "Resume Summary") {
        resp = await __jacSpawn("get_resume_summary", "", {"name": name, "skills": skills, "role": role, "target_role": target});
      }
      console.log("\ud83d\udce6 Response received:", resp);
      if (resp && resp.reports && resp.reports.length > 0) {
        let content = resp.reports[0];
        console.log("\u2705 Content:", content);
        if (content && content.length > 0) {
          setOutputContent(content);
        } else {
          setError("AI returned empty response. Check API key and try again.");
        }
      } else {
        setError("No response from AI. Check terminal for errors.");
      }
    } catch (e) {
      console.error("\u274c Error:", e);
      setError("Error: " + func(e) + ". Check browser console and terminal.");
    }
    setLoading(false);
  }
  let resultArea = null;
  if (outputContent) {
    resultArea = __jacJsx("div", {"style": {"background": "#e8f6f3", "padding": "20px", "borderRadius": "12px", "marginTop": "20px", "border": "1px solid #d1e7dd", "boxShadow": "0 2px 4px rgba(0,0,0,0.05)"}}, [__jacJsx("h3", {"style": {"marginTop": "0", "color": "#198754", "display": "flex", "alignItems": "center", "gap": "10px"}}, [__jacJsx("span", {}, ["✨"]), __jacJsx("span", {}, [outputTitle])]), __jacJsx("div", {"style": {"background": "white", "padding": "15px", "borderRadius": "8px", "marginTop": "10px"}}, [__jacJsx("pre", {"style": {"whiteSpace": "pre-wrap", "fontFamily": "inherit", "color": "#333", "lineHeight": "1.6", "margin": "0"}}, [outputContent])])]);
  }
  let loadingArea = null;
  if (loading) {
    loadingArea = __jacJsx("div", {"style": {"textAlign": "center", "marginTop": "20px", "padding": "30px", "background": "#f8f9fa", "borderRadius": "12px"}}, [__jacJsx("div", {"style": {"fontSize": "3rem", "marginBottom": "15px", "animation": "pulse 2s infinite"}}, ["🤖"]), __jacJsx("div", {"style": {"fontSize": "1.1em", "color": "#495057", "fontWeight": "500"}}, ["AI Agent is thinking..."]), __jacJsx("div", {"style": {"fontSize": "0.9em", "marginTop": "8px", "color": "#6c757d"}}, ["This may take 5-15 seconds"])]);
  }
  let errorArea = null;
  if (error) {
    errorArea = __jacJsx("div", {"style": {"background": "#f8d7da", "color": "#721c24", "padding": "15px", "borderRadius": "8px", "marginTop": "20px", "border": "1px solid #f5c6cb"}}, [__jacJsx("strong", {}, ["⚠️ Error:"]), __jacJsx("div", {"style": {"marginTop": "5px"}}, [error])]);
  }
  return __jacJsx("div", {"style": {"fontFamily": "Segoe UI, Tahoma, Geneva, Verdana, sans-serif", "background": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", "minHeight": "100vh", "padding": "20px"}}, [__jacJsx("div", {"style": {"maxWidth": "1200px", "margin": "0 auto"}}, [__jacJsx(Header, {}, []), __jacJsx("div", {"style": {"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "25px"}}, [__jacJsx("div", {"style": {"background": "white", "padding": "25px", "borderRadius": "16px", "boxShadow": "0 10px 30px rgba(0,0,0,0.1)"}}, [__jacJsx("h3", {"style": {"borderBottom": "3px solid #667eea", "paddingBottom": "12px", "color": "#2c3e50", "margin": "0 0 20px 0", "fontSize": "1.3em"}}, ["👤 Your Profile"]), __jacJsx("div", {"style": {"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "15px"}}, [__jacJsx("div", {}, [__jacJsx("label", {"style": {"display": "block", "color": "#6c757d", "fontSize": "0.85em", "marginBottom": "5px", "fontWeight": "500"}}, ["Name"]), __jacJsx("input", {"value": name, "onChange": e => {
    setName(e.target.value);
  }, "style": {"width": "100%", "padding": "10px", "borderRadius": "6px", "border": "2px solid #e9ecef", "fontSize": "0.95em"}}, [])]), __jacJsx("div", {}, [__jacJsx("label", {"style": {"display": "block", "color": "#6c757d", "fontSize": "0.85em", "marginBottom": "5px", "fontWeight": "500"}}, ["Current Role"]), __jacJsx("input", {"value": role, "onChange": e => {
    setRole(e.target.value);
  }, "style": {"width": "100%", "padding": "10px", "borderRadius": "6px", "border": "2px solid #e9ecef", "fontSize": "0.95em"}}, [])])]), __jacJsx("div", {"style": {"marginTop": "15px"}}, [__jacJsx("label", {"style": {"display": "block", "color": "#6c757d", "fontSize": "0.85em", "marginBottom": "5px", "fontWeight": "500"}}, ["Current Skills"]), __jacJsx("textarea", {"value": skills, "onChange": e => {
    setSkills(e.target.value);
  }, "style": {"width": "100%", "padding": "10px", "borderRadius": "6px", "border": "2px solid #e9ecef", "height": "70px", "fontSize": "0.95em", "resize": "vertical"}}, [])]), __jacJsx("div", {"style": {"marginTop": "15px"}}, [__jacJsx("label", {"style": {"display": "block", "color": "#6c757d", "fontSize": "0.85em", "marginBottom": "5px", "fontWeight": "500"}}, ["Interests"]), __jacJsx("input", {"value": interests, "onChange": e => {
    setInterests(e.target.value);
  }, "style": {"width": "100%", "padding": "10px", "borderRadius": "6px", "border": "2px solid #e9ecef", "fontSize": "0.95em"}}, [])]), __jacJsx("div", {"style": {"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "15px", "marginTop": "15px"}}, [__jacJsx("div", {}, [__jacJsx("label", {"style": {"display": "block", "color": "#667eea", "fontSize": "0.85em", "marginBottom": "5px", "fontWeight": "bold"}}, ["🎯 target Role"]), __jacJsx("input", {"value": target, "onChange": e => {
    setTarget(e.target.value);
  }, "style": {"width": "100%", "padding": "10px", "borderRadius": "6px", "border": "2px solid #667eea", "fontSize": "0.95em", "fontWeight": "500"}}, [])]), __jacJsx("div", {}, [__jacJsx("label", {"style": {"display": "block", "color": "#6c757d", "fontSize": "0.85em", "marginBottom": "5px", "fontWeight": "500"}}, ["🌍 Location"]), __jacJsx("input", {"value": location, "onChange": e => {
    setLocation(e.target.value);
  }, "style": {"width": "100%", "padding": "10px", "borderRadius": "6px", "border": "2px solid #e9ecef", "fontSize": "0.95em"}}, [])])])]), __jacJsx("div", {"style": {"background": "white", "padding": "25px", "borderRadius": "16px", "boxShadow": "0 10px 30px rgba(0,0,0,0.1)"}}, [__jacJsx("h3", {"style": {"borderBottom": "3px solid #764ba2", "paddingBottom": "12px", "color": "#2c3e50", "margin": "0 0 20px 0", "fontSize": "1.3em"}}, ["🤖 AI Career Agents"]), __jacJsx("p", {"style": {"color": "#6c757d", "marginBottom": "20px", "fontSize": "0.9em"}}, ["Click an agent to get AI-powered insights:"]), __jacJsx("div", {"style": {"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "12px"}}, [__jacJsx("button", {"onClick": () => {
    runAgent("Career Advice");
  }, "disabled": loading, "style": {"padding": "14px", "background": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", "color": "white", "border": "none", "borderRadius": "8px", "cursor": "pointer", "fontSize": "0.95em", "fontWeight": "600", "transition": "transform 0.2s", "boxShadow": "0 4px 10px rgba(102, 126, 234, 0.3)"}}, ["✨ Career Advice"]), __jacJsx("button", {"onClick": () => {
    runAgent("Study Roadmap");
  }, "disabled": loading, "style": {"padding": "14px", "background": "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", "color": "white", "border": "none", "borderRadius": "8px", "cursor": "pointer", "fontSize": "0.95em", "fontWeight": "600", "transition": "transform 0.2s", "boxShadow": "0 4px 10px rgba(240, 147, 251, 0.3)"}}, ["📅 Study Roadmap"]), __jacJsx("button", {"onClick": () => {
    runAgent("Market Analysis");
  }, "disabled": loading, "style": {"padding": "14px", "background": "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", "color": "white", "border": "none", "borderRadius": "8px", "cursor": "pointer", "fontSize": "0.95em", "fontWeight": "600", "transition": "transform 0.2s", "boxShadow": "0 4px 10px rgba(79, 172, 254, 0.3)"}}, ["📊 Job Market"]), __jacJsx("button", {"onClick": () => {
    runAgent("Path Suggestions");
  }, "disabled": loading, "style": {"padding": "14px", "background": "linear-gradient(135deg, #fa709a 0%, #fee140 100%)", "color": "white", "border": "none", "borderRadius": "8px", "cursor": "pointer", "fontSize": "0.95em", "fontWeight": "600", "transition": "transform 0.2s", "boxShadow": "0 4px 10px rgba(250, 112, 154, 0.3)"}}, ["🔀 Alt Paths"]), __jacJsx("button", {"onClick": () => {
    runAgent("Resume Summary");
  }, "disabled": loading, "style": {"gridColumn": "1 / -1", "padding": "14px", "background": "linear-gradient(135deg, #30cfd0 0%, #330867 100%)", "color": "white", "border": "none", "borderRadius": "8px", "cursor": "pointer", "fontSize": "0.95em", "fontWeight": "600", "transition": "transform 0.2s", "boxShadow": "0 4px 10px rgba(48, 207, 208, 0.3)"}}, ["📄 Resume Summary"])]), errorArea, loadingArea, resultArea])])])]);
}
export { Header, app };
