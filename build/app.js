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
      "marginBottom": "30px",
      "background": "#2c3e50",
      "padding": "20px",
      "color": "white",
      "borderRadius": "8px"
    }
  }, [__jacJsx("h1", {}, ["🧭 Smart Career Navigator"]), __jacJsx("p", {}, ["Graph-Based Career Guidance System"])]);
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
  useEffect(function () {
    function load() {
      return _load.apply(this, arguments);
    }
    function _load() {
      _load = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var resp, d;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
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
            case 2:
              return _context.a(2);
          }
        }, _callee);
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
      var resp;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            setLoading(true);
            setOutputTitle();
            setOutputContent("");
            resp = null;
            if (!(type === "Career Advice")) {
              _context2.n = 2;
              break;
            }
            _context2.n = 1;
            return __jacSpawn("get_advice", "", {
              "target_role": target,
              "current_skills": skills
            });
          case 1:
            resp = _context2.v;
            _context2.n = 10;
            break;
          case 2:
            if (!(type === "Study Roadmap")) {
              _context2.n = 4;
              break;
            }
            _context2.n = 3;
            return __jacSpawn("get_roadmap", "", {
              "target_role": target,
              "current_skills": skills
            });
          case 3:
            resp = _context2.v;
            _context2.n = 10;
            break;
          case 4:
            if (!(type === "Market Analysis")) {
              _context2.n = 6;
              break;
            }
            _context2.n = 5;
            return __jacSpawn("get_market_analysis", "", {
              "role_title": target,
              "location": location
            });
          case 5:
            resp = _context2.v;
            _context2.n = 10;
            break;
          case 6:
            if (!(type === "Path Suggestions")) {
              _context2.n = 8;
              break;
            }
            _context2.n = 7;
            return __jacSpawn("get_path_suggestions", "", {
              "current_skills": skills,
              "interests": interests
            });
          case 7:
            resp = _context2.v;
            _context2.n = 10;
            break;
          case 8:
            if (!(type === "Resume Summary")) {
              _context2.n = 10;
              break;
            }
            _context2.n = 9;
            return __jacSpawn("get_resume_summary", "", {
              "name": name,
              "skills": skills,
              "role": role,
              "target_role": target
            });
          case 9:
            resp = _context2.v;
          case 10:
            if (resp.reports) {
              setOutputContent(resp.reports[0]);
            }
            setLoading(false);
          case 11:
            return _context2.a(2);
        }
      }, _callee2);
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
        "border": "1px solid #d1e7dd"
      }
    }, [__jacJsx("h3", {
      "style": {
        "marginTop": "0",
        "color": "#198754"
      }
    }, [outputTitle]), __jacJsx("pre", {
      "style": {
        "whiteSpace": "pre-wrap",
        "fontFamily": "inherit",
        "color": "#333"
      }
    }, [outputContent])]);
  }
  var loadingArea = null;
  if (loading) {
    loadingArea = __jacJsx("div", {
      "style": {
        "textAlign": "center",
        "marginTop": "20px",
        "color": "#7f8c8d"
      }
    }, ["🤖 AI Agent is thinking..."]);
  }
  return __jacJsx("div", {
    "style": {
      "fontFamily": "Segoe UI, sans-serif",
      "background": "#f0f2f5",
      "minHeight": "100vh",
      "padding": "20px"
    }
  }, [__jacJsx(Header, {}, []), __jacJsx("div", {
    "style": {
      "maxWidth": "1100px",
      "margin": "0 auto",
      "display": "grid",
      "gridTemplateColumns": "1fr 1fr",
      "gap": "20px"
    }
  }, [__jacJsx("div", {
    "style": {
      "background": "white",
      "padding": "20px",
      "borderRadius": "12px",
      "boxShadow": "0 4px 6px rgba(0,0,0,0.1)"
    }
  }, [__jacJsx("h3", {
    "style": {
      "borderBottom": "2px solid #3498db",
      "paddingBottom": "10px",
      "color": "#2c3e50"
    }
  }, ["👤 Your Profile"]), __jacJsx("div", {
    "style": {
      "display": "grid",
      "gridTemplateColumns": "1fr 1fr",
      "gap": "10px"
    }
  }, [__jacJsx("div", {
    "style": {
      "marginBottom": "10px"
    }
  }, [__jacJsx("label", {
    "style": {
      "display": "block",
      "color": "#7f8c8d",
      "fontSize": "0.9em"
    }
  }, ["Name"]), __jacJsx("input", {
    "value": name,
    "onChange": function onChange(e) {
      setName(e.target.value);
    },
    "style": {
      "width": "100%",
      "padding": "8px",
      "borderRadius": "4px",
      "border": "1px solid #ddd"
    }
  }, [])]), __jacJsx("div", {
    "style": {
      "marginBottom": "10px"
    }
  }, [__jacJsx("label", {
    "style": {
      "display": "block",
      "color": "#7f8c8d",
      "fontSize": "0.9em"
    }
  }, ["Current Role"]), __jacJsx("input", {
    "value": role,
    "onChange": function onChange(e) {
      setRole(e.target.value);
    },
    "style": {
      "width": "100%",
      "padding": "8px",
      "borderRadius": "4px",
      "border": "1px solid #ddd"
    }
  }, [])])]), __jacJsx("div", {
    "style": {
      "marginBottom": "10px"
    }
  }, [__jacJsx("label", {
    "style": {
      "display": "block",
      "color": "#7f8c8d",
      "fontSize": "0.9em"
    }
  }, ["Current Skills"]), __jacJsx("textarea", {
    "value": skills,
    "onChange": function onChange(e) {
      setSkills(e.target.value);
    },
    "style": {
      "width": "100%",
      "padding": "8px",
      "borderRadius": "4px",
      "border": "1px solid #ddd",
      "height": "60px"
    }
  }, [])]), __jacJsx("div", {
    "style": {
      "marginBottom": "10px"
    }
  }, [__jacJsx("label", {
    "style": {
      "display": "block",
      "color": "#7f8c8d",
      "fontSize": "0.9em"
    }
  }, ["Interests"]), __jacJsx("input", {
    "value": interests,
    "onChange": function onChange(e) {
      setInterests(e.target.value);
    },
    "style": {
      "width": "100%",
      "padding": "8px",
      "borderRadius": "4px",
      "border": "1px solid #ddd"
    }
  }, [])]), __jacJsx("div", {
    "style": {
      "display": "grid",
      "gridTemplateColumns": "1fr 1fr",
      "gap": "10px"
    }
  }, [__jacJsx("div", {
    "style": {
      "marginBottom": "10px"
    }
  }, [__jacJsx("label", {
    "style": {
      "display": "block",
      "color": "#2c3e50",
      "fontWeight": "bold"
    }
  }, ["🎯 Target Role"]), __jacJsx("input", {
    "value": target,
    "onChange": function onChange(e) {
      setTarget(e.target.value);
    },
    "style": {
      "width": "100%",
      "padding": "8px",
      "borderRadius": "4px",
      "border": "2px solid #3498db"
    }
  }, [])]), __jacJsx("div", {
    "style": {
      "marginBottom": "10px"
    }
  }, [__jacJsx("label", {
    "style": {
      "display": "block",
      "color": "#2c3e50",
      "fontWeight": "bold"
    }
  }, ["🌍 Location"]), __jacJsx("input", {
    "value": location,
    "onChange": function onChange(e) {
      setLocation(e.target.value);
    },
    "style": {
      "width": "100%",
      "padding": "8px",
      "borderRadius": "4px",
      "border": "1px solid #ddd"
    }
  }, [])])])]), __jacJsx("div", {
    "style": {
      "background": "white",
      "padding": "20px",
      "borderRadius": "12px",
      "boxShadow": "0 4px 6px rgba(0,0,0,0.1)"
    }
  }, [__jacJsx("h3", {
    "style": {
      "borderBottom": "2px solid #9b59b6",
      "paddingBottom": "10px",
      "color": "#2c3e50"
    }
  }, ["🤖 AI Agents"]), __jacJsx("p", {
    "style": {
      "color": "#7f8c8d",
      "marginBottom": "20px",
      "fontSize": "0.9em"
    }
  }, ["Select an agent to analyze your profile:"]), __jacJsx("div", {
    "style": {
      "display": "grid",
      "gridTemplateColumns": "1fr 1fr",
      "gap": "10px"
    }
  }, [__jacJsx("button", {
    "onClick": function onClick() {
      runAgent("Career Advice");
    },
    "disabled": loading,
    "style": {
      "padding": "12px",
      "background": "#3498db",
      "color": "white",
      "border": "none",
      "borderRadius": "6px",
      "cursor": "pointer"
    }
  }, ["✨ Advice"]), __jacJsx("button", {
    "onClick": function onClick() {
      runAgent("Study Roadmap");
    },
    "disabled": loading,
    "style": {
      "padding": "12px",
      "background": "#9b59b6",
      "color": "white",
      "border": "none",
      "borderRadius": "6px",
      "cursor": "pointer"
    }
  }, ["📅 Roadmap"]), __jacJsx("button", {
    "onClick": function onClick() {
      runAgent("Market Analysis");
    },
    "disabled": loading,
    "style": {
      "padding": "12px",
      "background": "#27ae60",
      "color": "white",
      "border": "none",
      "borderRadius": "6px",
      "cursor": "pointer"
    }
  }, ["📊 Job Market"]), __jacJsx("button", {
    "onClick": function onClick() {
      runAgent("Path Suggestions");
    },
    "disabled": loading,
    "style": {
      "padding": "12px",
      "background": "#e67e22",
      "color": "white",
      "border": "none",
      "borderRadius": "6px",
      "cursor": "pointer"
    }
  }, ["🔀 Alt Paths"]), __jacJsx("button", {
    "onClick": function onClick() {
      runAgent("Resume Summary");
    },
    "disabled": loading,
    "style": {
      "gridColumn": "1 / -1",
      "padding": "12px",
      "background": "#34495e",
      "color": "white",
      "border": "none",
      "borderRadius": "6px",
      "cursor": "pointer"
    }
  }, ["📄 Generate Resume Summary"])]), resultArea, loadingArea])])]);
}
export { Header, app };