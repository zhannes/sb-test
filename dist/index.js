'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ThemeProvider = require('@mui/material/styles/ThemeProvider');
var createTheme = require('@mui/material/styles/createTheme');
var React = require('react');
var Stack = require('@mui/material/Stack');
var Button = require('@mui/material/Button');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var ThemeProvider__default = /*#__PURE__*/_interopDefaultLegacy(ThemeProvider);
var createTheme__default = /*#__PURE__*/_interopDefaultLegacy(createTheme);
var React__namespace = /*#__PURE__*/_interopNamespace(React);
var Stack__default = /*#__PURE__*/_interopDefaultLegacy(Stack);
var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);

//import ThemeExample from "./stories/ThemeExample";
var theme = {
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: "white",
          color: "red",
          border: "solid 1px orange"
        }
      }
    }
  }
};
var defaultTheme = createTheme__default["default"](theme); // or your custom theme

var ThemeProviderComponent = function ThemeProviderComponent(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__namespace.createElement(ThemeProvider__default["default"], {
    theme: defaultTheme
  }, children);
};
function BasicButton(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/React__namespace.createElement(Stack__default["default"], {
    spacing: 2,
    direction: "row"
  }, /*#__PURE__*/React__namespace.createElement(Button__default["default"], {
    variant: "outlined"
  }, children));
}
function Test(_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/React__namespace.createElement(ThemeProviderComponent, null, /*#__PURE__*/React__namespace.createElement(BasicButton, null, children));
}

exports.BasicButton = BasicButton;
exports.Test = Test;
exports.ThemeProviderComponent = ThemeProviderComponent;
exports.theme = theme;
