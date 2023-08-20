"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
var _Renderer = _interopRequireDefault(require("./Renderer"));
var _defaultimage = _interopRequireDefault(require("../assets/defaultimage.jpg"));
var _default2 = _interopRequireDefault(require("../assets/default.jpg"));
require("./FileUpload.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
  return /*#__PURE__*/React.createElement("div", {
    className: "file__input__container"
  }, /*#__PURE__*/React.createElement("input", {
    id: inputId,
    type: "file",
    accept: accept,
    className: "noshow-input",
    onChange: handleFileInputChange
  }), /*#__PURE__*/React.createElement("div", {
    className: "label__container ".concat(labelContainerClasses)
  }, previewUrl && /*#__PURE__*/React.createElement(_Renderer.default, {
    fileType: fileType,
    previewUrl: previewUrl
  }), /*#__PURE__*/React.createElement("label", {
    className: "upload__trigger ".concat(uploadTriggerClasses),
    htmlFor: inputId
  }, /*#__PURE__*/React.createElement("img", {
    src: customUploadIcon,
    alt: "trigger-upload"
  }))));
};
var _default = FileUpload;
exports.default = _default;