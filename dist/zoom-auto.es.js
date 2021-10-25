import React$1 from "react";
const PluginWindow = window.open("", "_blank", "width=800, height=780, toolbar=1");
const PluginDocument = PluginWindow.document;
const PluginBody = PluginDocument.body;
const PluginRoot = PluginDocument.createElement("div");
PluginBody.appendChild(PluginRoot);
const ZoomWindow = window;
const ZoomDocument = ZoomWindow.document;
function hover(element) {
  const evt = new MouseEvent("mouseover", {
    bubbles: true,
    cancelable: false
  });
  element.dispatchEvent(evt);
}
function getWaitroomItems() {
  const items = ZoomDocument.querySelectorAll(".waiting-room-list-conatiner__ul .participants-li");
  return [...items].map((item) => {
    return {
      name: item.querySelector(".participants-item__display-name").textContent,
      allow: allowWaiting(item)
    };
  });
}
function allowWaiting(element) {
  return () => {
    hover(element);
    setTimeout(() => {
      const joinButton = element.querySelector(".participants-item__right-section button.btn-primary");
      joinButton.click();
    }, 10);
  };
}
function ensureWaitroomWindow() {
  let container = ZoomDocument.querySelector(".participants-section-container");
  if (container) {
    return true;
  }
  const toggleBtn = ZoomDocument.querySelector(".footer-button__participants-icon").parentElement.parentElement;
  toggleBtn.click();
  return !!ZoomDocument.querySelector(".participants-section-container");
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = React$1, g = 60103;
reactJsxRuntime_production_min.Fragment = 60107;
if (typeof Symbol === "function" && Symbol.for) {
  var h = Symbol.for;
  g = h("react.element");
  reactJsxRuntime_production_min.Fragment = h("react.fragment");
}
var m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = Object.prototype.hasOwnProperty, p = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
function q(c, a, k) {
  var b, d = {}, e = null, l = null;
  k !== void 0 && (e = "" + k);
  a.key !== void 0 && (e = "" + a.key);
  a.ref !== void 0 && (l = a.ref);
  for (b in a)
    n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      d[b] === void 0 && (d[b] = a[b]);
  return {
    $$typeof: g,
    type: c,
    key: e,
    ref: l,
    props: d,
    _owner: m.current
  };
}
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;
const Fragment = jsxRuntime.exports.Fragment;
function AllowList({
  onChange = (newList) => void 0
}) {
  const [names, setNames] = React.useState([]);
  const [input, setInput] = React.useState("");
  const inputRef = React.useRef("");
  inputRef.current = input;
  const onInput = React.useCallback((evt) => setInput(evt.target.value), [setInput]);
  const onAddName = React.useCallback((evt) => {
    if (evt) {
      evt.preventDefault();
      evt.stopPropagation();
    }
    var inputName = inputRef.current;
    setInput("");
    if (names.includes(inputName)) {
      return PluginWindow.alert("\u5DF2\u5B58\u5728\u5141\u8A31\u540D\u55AE\u4E2D");
    }
    setNames((arr) => [...arr, inputName]);
  }, [setInput, setNames]);
  const onDeleteName = React.useCallback((evt) => {
    const removeName = evt.currentTarget.dataset.name;
    setNames((arr) => arr.filter((item) => item !== removeName));
  }, []);
  React.useEffect(() => onChange(names), [names]);
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsxs("h4", {
      children: ["\u5141\u8A31\u540D\u55AE", names.length === 0 ? "" : `\uFF1A ${names.length}\u4EBA`]
    }), /* @__PURE__ */ jsxs("ul", {
      children: [names.map((name) => /* @__PURE__ */ jsxs("li", {
        children: [/* @__PURE__ */ jsx("button", {
          "data-name": name,
          onClick: onDeleteName,
          children: "\u522A\u9664"
        }), " ", name]
      }, name)), /* @__PURE__ */ jsx("li", {
        children: /* @__PURE__ */ jsxs("form", {
          onSubmit: onAddName,
          children: [/* @__PURE__ */ jsx("input", {
            required: true,
            value: input,
            onChange: onInput
          }), /* @__PURE__ */ jsx("button", {
            type: "submit",
            children: "\u65B0\u589E"
          })]
        })
      })]
    })]
  });
}
function Logs({
  logs
}) {
  return /* @__PURE__ */ jsx("ul", {
    style: {
      whiteSpace: "pre-wrap"
    },
    children: logs.map((log) => /* @__PURE__ */ jsxs("li", {
      children: [/* @__PURE__ */ jsx("time", {
        children: log.time.toLocaleTimeString()
      }), " ", /* @__PURE__ */ jsx("span", {
        children: log.message
      })]
    }, +log.time))
  });
}
function App() {
  const [logs, setLogs] = React$1.useState([]);
  const addLog = React$1.useCallback((message) => setLogs((arr) => [...arr, {
    time: new Date(),
    message
  }]), [setLogs]);
  const namesRef = React$1.useRef([]);
  const updateNames = React$1.useCallback((newList) => {
    namesRef.current = newList;
    addLog("\u66F4\u65B0\u5141\u8A31\u540D\u55AE\n" + newList.join("\n"));
  }, [addLog]);
  const unallowed = React$1.useRef([]);
  const detectingRef = React$1.useRef(false);
  const toggleDetecting = React$1.useCallback((evt) => {
    detectingRef.current = evt.target.checked;
  }, []);
  React$1.useEffect(() => {
    const timer = PluginWindow.setInterval(() => {
      if (!detectingRef.current)
        return;
      ensureWaitroomWindow();
      const waitings = getWaitroomItems();
      for (const waiting of waitings) {
        if (namesRef.current.includes(waiting.name)) {
          console.log(namesRef.current, waiting.name);
          waiting.allow();
          addLog(`\u5141\u8A31\u52A0\u5165\uFF1A${waiting.name}`);
        } else if (!unallowed.current.includes(waiting.name)) {
          addLog(`\u672A\u6388\u6B0A\uFF1A${waiting.name}`);
          unallowed.current.push(waiting.name);
        }
      }
    }, 5e3);
    PluginWindow.onbeforeunload = () => PluginWindow.clearInterval(timer);
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs("div", {
      children: [/* @__PURE__ */ jsx("input", {
        type: "checkbox",
        id: "detect",
        defaultChecked: false,
        onChange: toggleDetecting
      }), /* @__PURE__ */ jsx("label", {
        htmlFor: "detect",
        children: "\u5075\u6E2C\u7B49\u5019\u5BA4"
      })]
    }), /* @__PURE__ */ jsxs("div", {
      style: {
        display: "flex"
      },
      children: [/* @__PURE__ */ jsx(AllowList, {
        onChange: updateNames
      }), /* @__PURE__ */ jsx(Logs, {
        logs
      })]
    })]
  });
}
ReactDOM.render(/* @__PURE__ */ jsx(React.StrictMode, {
  children: /* @__PURE__ */ jsx(App, {})
}), PluginRoot);
