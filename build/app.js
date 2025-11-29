function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { __jacJsx, __jacSpawn } from "@jac-client/utils";
import { useState, useEffect } from "react";
function Header() {
  return __jacJsx("div", {
    "style": {
      "textAlign": "center",
      "marginBottom": "30px"
    }
  }, [__jacJsx("h1", {
    "style": {
      "color": "#2c3e50",
      "fontSize": "2.5rem"
    }
  }, ["🎯 Smart Career Navigator"]), __jacJsx("p", {
    "style": {
      "color": "#7f8c8d"
    }
  }, ["AI-Powered Career Guidance Platform"])]);
}
function app() {
  var _useState = useState("Loading..."),
    _useState2 = _slicedToArray(_useState, 2),
    name = _useState2[0],
    setName = _useState2[1];
  var _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2),
    role = _useState4[0],
    setRole = _useState4[1];
  var _useState5 = useState(""),
    _useState6 = _slicedToArray(_useState5, 2),
    skills = _useState6[0],
    setSkills = _useState6[1];
  var _useState7 = useState(""),
    _useState8 = _slicedToArray(_useState7, 2),
    target = _useState8[0],
    setTarget = _useState8[1];
  var _useState9 = useState(""),
    _useState0 = _slicedToArray(_useState9, 2),
    interests = _useState0[0],
    setInterests = _useState0[1];
  var _useState1 = useState(""),
    _useState10 = _slicedToArray(_useState1, 2),
    location = _useState10[0],
    setLocation = _useState10[1];
  var _useState11 = useState(""),
    _useState12 = _slicedToArray(_useState11, 2),
    outputTitle = _useState12[0],
    setOutputTitle = _useState12[1];
  var _useState13 = useState(""),
    _useState14 = _slicedToArray(_useState13, 2),
    outputContent = _useState14[0],
    setOutputContent = _useState14[1];
  var _useState15 = useState(false),
    _useState16 = _slicedToArray(_useState15, 2),
    loading = _useState16[0],
    setLoading = _useState16[1];
  var _useState17 = useState(""),
    _useState18 = _slicedToArray(_useState17, 2),
    error = _useState18[0],
    setError = _useState18[1];
  useEffect(function () {
    function load() {
      return _load.apply(this, arguments);
    }
    function _load() {
      _load = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var resp, d, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return __jacSpawn("get_initial_data", "", {});
            case 1:
              resp = _context.v;
              if (resp.reports) {
                d = resp.reports[0];
                setName(d["name"]);
                setRole(d["role"]);
                setSkills(d["skills"]);
                setTarget(d["target"]);
                setInterests(d["interests"]);
                setLocation(d["location"]);
              }
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
              console.error("Error loading initial data:", _t);
              setError("Failed to load initial data");
            case 3:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      }));
      return _load.apply(this, arguments);
    }
    load();
  }, []);
  function runAgent(_x) {
    return _runAgent.apply(this, arguments);
  }
  function _runAgent() {
    _runAgent = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(type) {
      var resp, content, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            setLoading(true);
            setOutputTitle();
            setOutputContent("");
            setError("");
            console.log("\uD83D\uDE80 Starting agent:");
            _context2.p = 1;
            resp = null;
            if (!(type === "Career Advice")) {
              _context2.n = 3;
              break;
            }
            _context2.n = 2;
            return __jacSpawn("get_advice", "", {
              "target_role": target,
              "current_skills": skills
            });
          case 2:
            resp = _context2.v;
            _context2.n = 11;
            break;
          case 3:
            if (!(type === "Study Roadmap")) {
              _context2.n = 5;
              break;
            }
            _context2.n = 4;
            return __jacSpawn("get_roadmap", "", {
              "target_role": target,
              "current_skills": skills
            });
          case 4:
            resp = _context2.v;
            _context2.n = 11;
            break;
          case 5:
            if (!(type === "Market Analysis")) {
              _context2.n = 7;
              break;
            }
            _context2.n = 6;
            return __jacSpawn("get_market_analysis", "", {
              "role_title": target,
              "location": location
            });
          case 6:
            resp = _context2.v;
            _context2.n = 11;
            break;
          case 7:
            if (!(type === "Path Suggestions")) {
              _context2.n = 9;
              break;
            }
            _context2.n = 8;
            return __jacSpawn("get_path_suggestions", "", {
              "current_skills": skills,
              "interests": interests
            });
          case 8:
            resp = _context2.v;
            _context2.n = 11;
            break;
          case 9:
            if (!(type === "Resume Summary")) {
              _context2.n = 11;
              break;
            }
            _context2.n = 10;
            return __jacSpawn("get_resume_summary", "", {
              "name": name,
              "skills": skills,
              "role": role,
              "target_role": target
            });
          case 10:
            resp = _context2.v;
          case 11:
            console.log("\uD83D\uDCE6 Response received:", resp);
            if (resp && resp.reports && resp.reports.length > 0) {
              content = resp.reports[0];
              console.log("\u2705 Content:", content);
              if (content && content.length > 0) {
                setOutputContent(content);
              } else {
                setError("AI returned empty response. Check API key and try again.");
              }
            } else {
              setError("No response from AI. Check terminal for errors.");
            }
            _context2.n = 13;
            break;
          case 12:
            _context2.p = 12;
            _t2 = _context2.v;
            console.error("\u274C Error:", _t2);
            setError("Error: " + func(_t2) + ". Check browser console and terminal.");
          case 13:
            setLoading(false);
          case 14:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 12]]);
    }));
    return _runAgent.apply(this, arguments);
  }
  var resultArea = null;
  if (outputContent) {
    resultArea = __jacJsx("div", {
      "style": {
        "background": "#e8f6f3",
        "padding": "20px",
        "borderRadius": "12px",
        "marginTop": "20px",
        "border": "1px solid #d1e7dd",
        "boxShadow": "0 2px 4px rgba(0,0,0,0.05)"
      }
    }, [__jacJsx("h3", {
      "style": {
        "marginTop": "0",
        "color": "#198754",
        "display": "flex",
        "alignItems": "center",
        "gap": "10px"
      }
    }, [__jacJsx("span", {}, ["✨"]), __jacJsx("span", {}, [outputTitle])]), __jacJsx("div", {
      "style": {
        "background": "white",
        "padding": "15px",
        "borderRadius": "8px",
        "marginTop": "10px"
      }
    }, [__jacJsx("pre", {
      "style": {
        "whiteSpace": "pre-wrap",
        "fontFamily": "inherit",
        "color": "#333",
        "lineHeight": "1.6",
        "margin": "0"
      }
    }, [outputContent])])]);
  }
  var loadingArea = null;
  if (loading) {
    loadingArea = __jacJsx("div", {
      "style": {
        "textAlign": "center",
        "marginTop": "20px",
        "padding": "30px",
        "background": "#f8f9fa",
        "borderRadius": "12px"
      }
    }, [__jacJsx("div", {
      "style": {
        "fontSize": "3rem",
        "marginBottom": "15px",
        "animation": "pulse 2s infinite"
      }
    }, ["🤖"]), __jacJsx("div", {
      "style": {
        "fontSize": "1.1em",
        "color": "#495057",
        "fontWeight": "500"
      }
    }, ["AI Agent is thinking..."]), __jacJsx("div", {
      "style": {
        "fontSize": "0.9em",
        "marginTop": "8px",
        "color": "#6c757d"
      }
    }, ["This may take 5-15 seconds"])]);
  }
  var errorArea = null;
  if (error) {
    errorArea = __jacJsx("div", {
      "style": {
        "background": "#f8d7da",
        "color": "#721c24",
        "padding": "15px",
        "borderRadius": "8px",
        "marginTop": "20px",
        "border": "1px solid #f5c6cb"
      }
    }, [__jacJsx("strong", {}, ["⚠️ Error:"]), __jacJsx("div", {
      "style": {
        "marginTop": "5px"
      }
    }, [error])]);
  }
  return __jacJsx("div", {
    "style": {
      "fontFamily": "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
      "background": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      "minHeight": "100vh",
      "padding": "20px"
    }
  }, [__jacJsx("div", {
    "style": {
      "maxWidth": "1200px",
      "margin": "0 auto"
    }
  }, [__jacJsx(Header, {}, []), __jacJsx("div", {
    "style": {
      "display": "grid",
      "gridTemplateColumns": "1fr 1fr",
      "gap": "25px"
    }
  }, [__jacJsx("div", {
    "style": {
      "background": "white",
      "padding": "25px",
      "borderRadius": "16px",
      "boxShadow": "0 10px 30px rgba(0,0,0,0.1)"
    }
  }, [__jacJsx("h3", {
    "style": {
      "borderBottom": "3px solid #667eea",
      "paddingBottom": "12px",
      "color": "#2c3e50",
      "margin": "0 0 20px 0",
      "fontSize": "1.3em"
    }
  }, ["👤 Your Profile"]), __jacJsx("div", {
    "style": {
      "display": "grid",
      "gridTemplateColumns": "1fr 1fr",
      "gap": "15px"
    }
  }, [__jacJsx("div", {}, [__jacJsx("label", {
    "style": {
      "display": "block",
      "color": "#6c757d",
      "fontSize": "0.85em",
      "marginBottom": "5px",
      "fontWeight": "500"
    }
  }, ["Name"]), __jacJsx("input", {
    "value": name,
    "onChange": function onChange(e) {
      setName(e.target.value);
    },
    "style": {
      "width": "100%",
      "padding": "10px",
      "borderRadius": "6px",
      "border": "2px solid #e9ecef",
      "fontSize": "0.95em"
    }
  }, [])]), __jacJsx("div", {}, [__jacJsx("label", {
    "style": {
      "display": "block",
      "color": "#6c757d",
      "fontSize": "0.85em",
      "marginBottom": "5px",
      "fontWeight": "500"
    }
  }, ["Current Role"]), __jacJsx("input", {
    "value": role,
    "onChange": function onChange(e) {
      setRole(e.target.value);
    },
    "style": {
      "width": "100%",
      "padding": "10px",
      "borderRadius": "6px",
      "border": "2px solid #e9ecef",
      "fontSize": "0.95em"
    }
  }, [])])]), __jacJsx("div", {
    "style": {
      "marginTop": "15px"
    }
  }, [__jacJsx("label", {
    "style": {
      "display": "block",
      "color": "#6c757d",
      "fontSize": "0.85em",
      "marginBottom": "5px",
      "fontWeight": "500"
    }
  }, ["Current Skills"]), __jacJsx("textarea", {
    "value": skills,
    "onChange": function onChange(e) {
      setSkills(e.target.value);
    },
    "style": {
      "width": "100%",
      "padding": "10px",
      "borderRadius": "6px",
      "border": "2px solid #e9ecef",
      "height": "70px",
      "fontSize": "0.95em",
      "resize": "vertical"
    }
  }, [])]), __jacJsx("div", {
    "style": {
      "marginTop": "15px"
    }
  }, [__jacJsx("label", {
    "style": {
      "display": "block",
      "color": "#6c757d",
      "fontSize": "0.85em",
      "marginBottom": "5px",
      "fontWeight": "500"
    }
  }, ["Interests"]), __jacJsx("input", {
    "value": interests,
    "onChange": function onChange(e) {
      setInterests(e.target.value);
    },
    "style": {
      "width": "100%",
      "padding": "10px",
      "borderRadius": "6px",
      "border": "2px solid #e9ecef",
      "fontSize": "0.95em"
    }
  }, [])]), __jacJsx("div", {
    "style": {
      "display": "grid",
      "gridTemplateColumns": "1fr 1fr",
      "gap": "15px",
      "marginTop": "15px"
    }
  }, [__jacJsx("div", {}, [__jacJsx("label", {
    "style": {
      "display": "block",
      "color": "#667eea",
      "fontSize": "0.85em",
      "marginBottom": "5px",
      "fontWeight": "bold"
    }
  }, ["🎯 target Role"]), __jacJsx("input", {
    "value": target,
    "onChange": function onChange(e) {
      setTarget(e.target.value);
    },
    "style": {
      "width": "100%",
      "padding": "10px",
      "borderRadius": "6px",
      "border": "2px solid #667eea",
      "fontSize": "0.95em",
      "fontWeight": "500"
    }
  }, [])]), __jacJsx("div", {}, [__jacJsx("label", {
    "style": {
      "display": "block",
      "color": "#6c757d",
      "fontSize": "0.85em",
      "marginBottom": "5px",
      "fontWeight": "500"
    }
  }, ["🌍 Location"]), __jacJsx("input", {
    "value": location,
    "onChange": function onChange(e) {
      setLocation(e.target.value);
    },
    "style": {
      "width": "100%",
      "padding": "10px",
      "borderRadius": "6px",
      "border": "2px solid #e9ecef",
      "fontSize": "0.95em"
    }
  }, [])])])]), __jacJsx("div", {
    "style": {
      "background": "white",
      "padding": "25px",
      "borderRadius": "16px",
      "boxShadow": "0 10px 30px rgba(0,0,0,0.1)"
    }
  }, [__jacJsx("h3", {
    "style": {
      "borderBottom": "3px solid #764ba2",
      "paddingBottom": "12px",
      "color": "#2c3e50",
      "margin": "0 0 20px 0",
      "fontSize": "1.3em"
    }
  }, ["🤖 AI Career Agents"]), __jacJsx("p", {
    "style": {
      "color": "#6c757d",
      "marginBottom": "20px",
      "fontSize": "0.9em"
    }
  }, ["Click an agent to get AI-powered insights:"]), __jacJsx("div", {
    "style": {
      "display": "grid",
      "gridTemplateColumns": "1fr 1fr",
      "gap": "12px"
    }
  }, [__jacJsx("button", {
    "onClick": function onClick() {
      runAgent("Career Advice");
    },
    "disabled": loading,
    "style": {
      "padding": "14px",
      "background": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      "color": "white",
      "border": "none",
      "borderRadius": "8px",
      "cursor": "pointer",
      "fontSize": "0.95em",
      "fontWeight": "600",
      "transition": "transform 0.2s",
      "boxShadow": "0 4px 10px rgba(102, 126, 234, 0.3)"
    }
  }, ["✨ Career Advice"]), __jacJsx("button", {
    "onClick": function onClick() {
      runAgent("Study Roadmap");
    },
    "disabled": loading,
    "style": {
      "padding": "14px",
      "background": "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      "color": "white",
      "border": "none",
      "borderRadius": "8px",
      "cursor": "pointer",
      "fontSize": "0.95em",
      "fontWeight": "600",
      "transition": "transform 0.2s",
      "boxShadow": "0 4px 10px rgba(240, 147, 251, 0.3)"
    }
  }, ["📅 Study Roadmap"]), __jacJsx("button", {
    "onClick": function onClick() {
      runAgent("Market Analysis");
    },
    "disabled": loading,
    "style": {
      "padding": "14px",
      "background": "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      "color": "white",
      "border": "none",
      "borderRadius": "8px",
      "cursor": "pointer",
      "fontSize": "0.95em",
      "fontWeight": "600",
      "transition": "transform 0.2s",
      "boxShadow": "0 4px 10px rgba(79, 172, 254, 0.3)"
    }
  }, ["📊 Job Market"]), __jacJsx("button", {
    "onClick": function onClick() {
      runAgent("Path Suggestions");
    },
    "disabled": loading,
    "style": {
      "padding": "14px",
      "background": "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      "color": "white",
      "border": "none",
      "borderRadius": "8px",
      "cursor": "pointer",
      "fontSize": "0.95em",
      "fontWeight": "600",
      "transition": "transform 0.2s",
      "boxShadow": "0 4px 10px rgba(250, 112, 154, 0.3)"
    }
  }, ["🔀 Alt Paths"]), __jacJsx("button", {
    "onClick": function onClick() {
      runAgent("Resume Summary");
    },
    "disabled": loading,
    "style": {
      "gridColumn": "1 / -1",
      "padding": "14px",
      "background": "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
      "color": "white",
      "border": "none",
      "borderRadius": "8px",
      "cursor": "pointer",
      "fontSize": "0.95em",
      "fontWeight": "600",
      "transition": "transform 0.2s",
      "boxShadow": "0 4px 10px rgba(48, 207, 208, 0.3)"
    }
  }, ["📄 Resume Summary"])]), errorArea, loadingArea, resultArea])])])]);
}
export { Header, app };