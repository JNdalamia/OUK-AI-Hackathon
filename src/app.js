import {__jacJsx, __jacSpawn} from "@jac-client/utils";
import { useState, useEffect } from "react";
function Header() {
  return __jacJsx("div", {"style": {"textAlign": "center", "marginBottom": "30px", "background": "#2c3e50", "padding": "20px", "color": "white", "borderRadius": "8px"}}, [__jacJsx("h1", {}, ["🧭 Smart Career Navigator"]), __jacJsx("p", {}, ["Graph-Based Career Guidance System"])]);
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
  useEffect(() => {
    async function load() {
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
    }
    load();
  }, []);
  async function runAgent(type) {
    setLoading(true);
    setOutputTitle();
    setOutputContent("");
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
    if (resp.reports) {
      setOutputContent(resp.reports[0]);
    }
    setLoading(false);
  }
  let resultArea = null;
  if (outputContent) {
    resultArea = __jacJsx("div", {"style": {"background": "#e8f6f3", "padding": "20px", "borderRadius": "12px", "marginTop": "20px", "border": "1px solid #d1e7dd"}}, [__jacJsx("h3", {"style": {"marginTop": "0", "color": "#198754"}}, [outputTitle]), __jacJsx("pre", {"style": {"whiteSpace": "pre-wrap", "fontFamily": "inherit", "color": "#333"}}, [outputContent])]);
  }
  let loadingArea = null;
  if (loading) {
    loadingArea = __jacJsx("div", {"style": {"textAlign": "center", "marginTop": "20px", "color": "#7f8c8d"}}, ["🤖 AI Agent is thinking..."]);
  }
  return __jacJsx("div", {"style": {"fontFamily": "Segoe UI, sans-serif", "background": "#f0f2f5", "minHeight": "100vh", "padding": "20px"}}, [__jacJsx(Header, {}, []), __jacJsx("div", {"style": {"maxWidth": "1100px", "margin": "0 auto", "display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "20px"}}, [__jacJsx("div", {"style": {"background": "white", "padding": "20px", "borderRadius": "12px", "boxShadow": "0 4px 6px rgba(0,0,0,0.1)"}}, [__jacJsx("h3", {"style": {"borderBottom": "2px solid #3498db", "paddingBottom": "10px", "color": "#2c3e50"}}, ["👤 Your Profile"]), __jacJsx("div", {"style": {"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "10px"}}, [__jacJsx("div", {"style": {"marginBottom": "10px"}}, [__jacJsx("label", {"style": {"display": "block", "color": "#7f8c8d", "fontSize": "0.9em"}}, ["Name"]), __jacJsx("input", {"value": name, "onChange": e => {
    setName(e.target.value);
  }, "style": {"width": "100%", "padding": "8px", "borderRadius": "4px", "border": "1px solid #ddd"}}, [])]), __jacJsx("div", {"style": {"marginBottom": "10px"}}, [__jacJsx("label", {"style": {"display": "block", "color": "#7f8c8d", "fontSize": "0.9em"}}, ["Current Role"]), __jacJsx("input", {"value": role, "onChange": e => {
    setRole(e.target.value);
  }, "style": {"width": "100%", "padding": "8px", "borderRadius": "4px", "border": "1px solid #ddd"}}, [])])]), __jacJsx("div", {"style": {"marginBottom": "10px"}}, [__jacJsx("label", {"style": {"display": "block", "color": "#7f8c8d", "fontSize": "0.9em"}}, ["Current Skills"]), __jacJsx("textarea", {"value": skills, "onChange": e => {
    setSkills(e.target.value);
  }, "style": {"width": "100%", "padding": "8px", "borderRadius": "4px", "border": "1px solid #ddd", "height": "60px"}}, [])]), __jacJsx("div", {"style": {"marginBottom": "10px"}}, [__jacJsx("label", {"style": {"display": "block", "color": "#7f8c8d", "fontSize": "0.9em"}}, ["Interests"]), __jacJsx("input", {"value": interests, "onChange": e => {
    setInterests(e.target.value);
  }, "style": {"width": "100%", "padding": "8px", "borderRadius": "4px", "border": "1px solid #ddd"}}, [])]), __jacJsx("div", {"style": {"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "10px"}}, [__jacJsx("div", {"style": {"marginBottom": "10px"}}, [__jacJsx("label", {"style": {"display": "block", "color": "#2c3e50", "fontWeight": "bold"}}, ["🎯 Target Role"]), __jacJsx("input", {"value": target, "onChange": e => {
    setTarget(e.target.value);
  }, "style": {"width": "100%", "padding": "8px", "borderRadius": "4px", "border": "2px solid #3498db"}}, [])]), __jacJsx("div", {"style": {"marginBottom": "10px"}}, [__jacJsx("label", {"style": {"display": "block", "color": "#2c3e50", "fontWeight": "bold"}}, ["🌍 Location"]), __jacJsx("input", {"value": location, "onChange": e => {
    setLocation(e.target.value);
  }, "style": {"width": "100%", "padding": "8px", "borderRadius": "4px", "border": "1px solid #ddd"}}, [])])])]), __jacJsx("div", {"style": {"background": "white", "padding": "20px", "borderRadius": "12px", "boxShadow": "0 4px 6px rgba(0,0,0,0.1)"}}, [__jacJsx("h3", {"style": {"borderBottom": "2px solid #9b59b6", "paddingBottom": "10px", "color": "#2c3e50"}}, ["🤖 AI Agents"]), __jacJsx("p", {"style": {"color": "#7f8c8d", "marginBottom": "20px", "fontSize": "0.9em"}}, ["Select an agent to analyze your profile:"]), __jacJsx("div", {"style": {"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "10px"}}, [__jacJsx("button", {"onClick": () => {
    runAgent("Career Advice");
  }, "disabled": loading, "style": {"padding": "12px", "background": "#3498db", "color": "white", "border": "none", "borderRadius": "6px", "cursor": "pointer"}}, ["✨ Advice"]), __jacJsx("button", {"onClick": () => {
    runAgent("Study Roadmap");
  }, "disabled": loading, "style": {"padding": "12px", "background": "#9b59b6", "color": "white", "border": "none", "borderRadius": "6px", "cursor": "pointer"}}, ["📅 Roadmap"]), __jacJsx("button", {"onClick": () => {
    runAgent("Market Analysis");
  }, "disabled": loading, "style": {"padding": "12px", "background": "#27ae60", "color": "white", "border": "none", "borderRadius": "6px", "cursor": "pointer"}}, ["📊 Job Market"]), __jacJsx("button", {"onClick": () => {
    runAgent("Path Suggestions");
  }, "disabled": loading, "style": {"padding": "12px", "background": "#e67e22", "color": "white", "border": "none", "borderRadius": "6px", "cursor": "pointer"}}, ["🔀 Alt Paths"]), __jacJsx("button", {"onClick": () => {
    runAgent("Resume Summary");
  }, "disabled": loading, "style": {"gridColumn": "1 / -1", "padding": "12px", "background": "#34495e", "color": "white", "border": "none", "borderRadius": "6px", "cursor": "pointer"}}, ["📄 Generate Resume Summary"])]), resultArea, loadingArea])])]);
}
export { Header, app };
