"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _Renderer = _interopRequireDefault(require("./Renderer"));
var _defaultimage = _interopRequireDefault(require("../assets/defaultimage.jpg"));
var _default2 = _interopRequireDefault(require("../assets/default.jpg"));
require("./FileUpload.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const FileUpload = _ref => {
  let {
    handleFileUpload = () => {},
    inputId = "input-id",
    accept = ".jpg, .jpeg, .png, .gif, .mp4, .avi, .mov, .pdf",
    uploadTriggerClasses = "",
    labelContainerClasses = "",
    customPreviewUrl = _defaultimage.default,
    customFileType = "image",
    customUploadIcon = _default2.default
  } = _ref;
  const [previewUrl, setPreviewUrl] = (0, _react.useState)(customPreviewUrl);
  const [fileType, setFileType] = (0, _react.useState)(customFileType);
  const handleFileInputChange = event => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    handleFileUpload(event);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const extension = file.name.split('.').pop().toLowerCase();
        setPreviewUrl(reader.result);
        if (extension === 'jpg' || extension === 'jpeg' || extension === 'png') {
          setFileType('image');
        } else if (extension === 'mp4' || extension === 'avi' || extension === 'mov') {
          setFileType('video');
        } else if (extension === 'pdf') {
          setFileType('pdf');
        } else {
          setFileType('unknown');
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "file__input__container"
  }, /*#__PURE__*/_react.default.createElement("input", {
    id: inputId,
    type: "file",
    accept: accept,
    className: "noshow-input",
    onChange: handleFileInputChange
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "label__container ".concat(labelContainerClasses)
  }, previewUrl && /*#__PURE__*/_react.default.createElement(_Renderer.default, {
    fileType: fileType,
    previewUrl: previewUrl
  }), /*#__PURE__*/_react.default.createElement("label", {
    className: "upload__trigger ".concat(uploadTriggerClasses),
    htmlFor: inputId
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: customUploadIcon,
    alt: "trigger-upload"
  }))));
};
var _default = FileUpload;
exports.default = _default;