import React$1 from "react";
const PluginWindow = window.open("", "_blank", "width=800, height=780, toolbar=1");
const PluginDocument = PluginWindow.document;
PluginDocument.write(`
<html>
<head>
<title>Zoom\u81EA\u52D5\u7B49\u5019\u5BA4\u5916\u639B</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
<div id="root"></div>
</body>
</html>
`);
const PluginBody = PluginDocument.body;
const PluginRoot = PluginDocument.querySelector("#root");
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
  const items = ZoomDocument.querySelectorAll(".waiting-room-list-container .participants-li");
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
function EditModal({
  names,
  onSave,
  onClose
}) {
  const [editingValue, setEditingValue] = React.useState(names.join("\n"));
  const onChange = React.useCallback((evt) => {
    setEditingValue(evt.target.value);
  }, [setEditingValue]);
  const onSaveClick = () => {
    const values = new Set(editingValue.split("\n").map((name) => name.trim()).filter((name) => name));
    onSave([...values]);
  };
  return ReactDOM.createPortal(/* @__PURE__ */ jsx("div", {
    className: "modal fade show d-block",
    tabindex: "-1",
    role: "dialog",
    "aria-hidden": "true",
    children: /* @__PURE__ */ jsx("div", {
      className: "modal-dialog modal-dialog-centered",
      role: "document",
      children: /* @__PURE__ */ jsxs("div", {
        className: "modal-content",
        children: [/* @__PURE__ */ jsx("div", {
          className: "modal-header",
          children: /* @__PURE__ */ jsx("h5", {
            className: "modal-title",
            children: "\u7DE8\u8F2F\u5141\u8A31\u540D\u55AE"
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "modal-body",
          children: /* @__PURE__ */ jsx("textarea", {
            className: "form-control w-100",
            rows: 10,
            value: editingValue,
            onChange
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "modal-footer",
          children: [/* @__PURE__ */ jsx("button", {
            type: "submit",
            className: "btn btn-primary",
            onClick: onSaveClick,
            children: "\u5132\u5B58"
          }), /* @__PURE__ */ jsx("button", {
            className: "btn btn-secondary",
            onClick: onClose,
            children: "\u53D6\u6D88"
          })]
        })]
      })
    })
  }), PluginBody);
}
function AllowList({
  onChange = (newList) => void 0
}) {
  const [names, setNames] = React.useState([]);
  const [showEdit, setShowEdit] = React.useState(false);
  return /* @__PURE__ */ jsxs("div", {
    className: "px-3 d-flex flex-column h-100",
    children: [/* @__PURE__ */ jsx("button", {
      className: "btn btn-primary mb-2",
      onClick: () => setShowEdit(true),
      children: "\u7DE8\u8F2F\u5141\u8A31\u540D\u55AE"
    }), /* @__PURE__ */ jsxs("ul", {
      className: "list-group flex-grow-1 overflow-auto",
      children: [names.map((name) => /* @__PURE__ */ jsx("li", {
        className: "list-group-item",
        children: name
      }, name)), names.length === 0 && /* @__PURE__ */ jsx("li", {
        className: "list-group-item",
        children: "\u7A7A\u767D\u7684\u5141\u8A31\u6E05\u55AE"
      })]
    }), showEdit && /* @__PURE__ */ jsx(EditModal, {
      names,
      onSave: (newNames) => {
        setNames(newNames);
        setShowEdit(false);
        onChange(newNames);
      },
      onClose: () => setShowEdit(false)
    })]
  });
}
function Logs({
  logs
}) {
  const rootRef = React$1.useRef(null);
  React$1.useEffect(() => {
    if (rootRef.current) {
      rootRef.current.scrollTop = rootRef.current.scrollHeight;
    }
  }, [logs]);
  return /* @__PURE__ */ jsx("div", {
    ref: rootRef,
    style: {
      whiteSpace: "pre-wrap"
    },
    className: "h-100 overflow-auto card",
    children: /* @__PURE__ */ jsx("div", {
      className: "card-body",
      children: logs.map((log) => /* @__PURE__ */ jsxs("div", {
        className: `alert alert-${log.type || "light"}`,
        children: [/* @__PURE__ */ jsx("strong", {
          children: /* @__PURE__ */ jsx("time", {
            children: log.time.toLocaleTimeString()
          })
        }), " ", /* @__PURE__ */ jsx("span", {
          children: log.message
        })]
      }, +log.time))
    })
  });
}
function App() {
  const [logs, setLogs] = React$1.useState([]);
  const addLog = React$1.useCallback((message, type) => setLogs((arr) => [...arr, {
    time: new Date(),
    message,
    type
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
    addLog(`${evt.target.checked ? "\u958B\u59CB" : "\u505C\u6B62"}\u5075\u6E2C\u7B49\u5019\u5BA4`, "info");
  }, [addLog]);
  const strictCompareRef = React$1.useRef(true);
  const toggleStrictCompareRef = React$1.useCallback((evt) => {
    strictCompareRef.current = evt.target.checked;
    addLog(`${evt.target.checked ? "\u958B\u555F" : "\u95DC\u9589"}\u56B4\u683C\u6A21\u5F0F`, "info");
  }, []);
  React$1.useEffect(() => {
    const timer = PluginWindow.setInterval(() => {
      if (!detectingRef.current)
        return;
      ensureWaitroomWindow();
      const waitings = getWaitroomItems();
      for (const waiting of waitings) {
        const match = strictCompareRef.current ? namesRef.current.includes(waiting.name) : namesRef.current.some((name) => new RegExp(name).test(waiting.name));
        if (match) {
          console.debug(namesRef.current, waiting.name);
          waiting.allow();
          addLog(`\u5141\u8A31\u52A0\u5165\uFF1A${waiting.name}`, "success");
        } else if (!unallowed.current.includes(waiting.name)) {
          addLog(`\u672A\u6388\u6B0A\uFF1A${waiting.name}`, "danger");
          unallowed.current.push(waiting.name);
        }
      }
    }, 5e3);
    PluginWindow.onbeforeunload = () => PluginWindow.clearInterval(timer);
  }, []);
  return /* @__PURE__ */ jsxs("div", {
    className: "d-flex flex-column vh-100 vw-100 p-3",
    children: [/* @__PURE__ */ jsxs("header", {
      className: "mb-3 d-flex",
      children: [/* @__PURE__ */ jsxs("div", {
        class: "form-check mx-3",
        children: [/* @__PURE__ */ jsx("input", {
          class: "form-check-input",
          type: "checkbox",
          id: "detect",
          defaultChecked: false,
          onChange: toggleDetecting
        }), /* @__PURE__ */ jsx("label", {
          class: "form-check-label",
          for: "detect",
          children: "\u5075\u6E2C\u7B49\u5019\u5BA4"
        })]
      }), /* @__PURE__ */ jsxs("div", {
        class: "form-check mx-3",
        children: [/* @__PURE__ */ jsx("input", {
          class: "form-check-input",
          type: "checkbox",
          id: "strictCompare",
          defaultChecked: true,
          onChange: toggleStrictCompareRef
        }), /* @__PURE__ */ jsx("label", {
          class: "form-check-label",
          for: "strictCompare",
          children: "\u56B4\u683C\u6A21\u5F0F"
        })]
      })]
    }), /* @__PURE__ */ jsxs("main", {
      className: "d-flex flex-grow-1 conatiner-fluid overflow-hidden",
      children: [/* @__PURE__ */ jsx("div", {
        className: "col-12 col-md-4 h-100",
        children: /* @__PURE__ */ jsx(AllowList, {
          onChange: updateNames
        })
      }), /* @__PURE__ */ jsx("div", {
        className: "col-12 col-md-8 h-100",
        children: /* @__PURE__ */ jsx(Logs, {
          logs
        })
      })]
    })]
  });
}
ReactDOM.render(/* @__PURE__ */ jsx(React.StrictMode, {
  children: /* @__PURE__ */ jsx(App, {})
}), PluginRoot);
ZoomWindow.addEventListener("beforeunload", (evt) => {
  evt.returnValue = "\u4F60\u78BA\u5B9A\u8981\u95DC\u9589Zoom\u6703\u8B70\u55CE\uFF1F";
  evt.preventDefault();
  return true;
});
ZoomWindow.addEventListener("unload", () => {
  PluginWindow.close();
});
