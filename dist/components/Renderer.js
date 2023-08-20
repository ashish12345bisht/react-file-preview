"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Renderer = _ref => {
  let {
    fileType = "image",
    previewUrl
  } = _ref;
  if (fileType === 'image') {
    return /*#__PURE__*/_react.default.createElement("img", {
      src: previewUrl,
      alt: "Preview",
      className: "image__preview"
    });
  } else if (fileType === 'video') {
    return /*#__PURE__*/_react.default.createElement("video", {
      className: "image__preview",
      controls: true,
      src: previewUrl
    });
  } else if (fileType === 'pdf') {
    return /*#__PURE__*/_react.default.createElement("iframe", {
      className: "image__preview iframe__preview",
      src: previewUrl,
      title: "Preview"
    });
  } else {
    return /*#__PURE__*/_react.default.createElement("p", null, "Unsupported file type");
  }
};
var _default = Renderer;
exports.default = _default;