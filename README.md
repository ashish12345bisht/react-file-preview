# Note -> Install v0.1.4 or above
# Usage

## Install
###### `npm install react-file-upload-preview@0.1.4`

## Import
###### `import { FileUpload } from 'react-file-upload-preview/dist';`

## Usage
###### `<FileUpload handleFileUpload={(e)=>console.log(e, event)} accept=".jpg, .png" />`

### [Demo](https://ashish12345bisht.github.io/file-upload-preview-demo/)

![Demo Image](https://drive.google.com/file/d/1GL5B9P03tSUV3kK24rilwXVblfEaDES2/view?usp=sharing)

| prop     | type     | usage |
|----------|----------|----------|
| handleFileUpload | function   | to get the event for the file uploaded   |
| inputId | string | input id for your input field  |
| accept | string  | restrict types of file you want to upload  |
| uploadTriggerClasses | string | to add css to upload icon  |
| labelContainerClasses | string  | to add css to label container  |
| customPreviewUrl | string  | custom Preview URL  |
| customFileType | string  | to initialize and prefill the image/video/pdf  |
| customUploadIcon | string  | custom upload icon URL  |
