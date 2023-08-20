import { useState } from 'react'
import Renderer from './Renderer';
import defaultImg from '../assets/defaultimage.jpg';
import triggerURL from '../assets/default.jpg';
import './FileUpload.css';

const FileUpload = ({ handleFileUpload = () => { }, inputId = "input-id", accept = `.jpg, .jpeg, .png, .gif, .mp4, .avi, .mov, .pdf`, uploadTriggerClasses = "", labelContainerClasses = "", customPreviewUrl = defaultImg, customFileType = "image", customUploadIcon = triggerURL }) => {
    const [previewUrl, setPreviewUrl] = useState(customPreviewUrl);
    const [fileType, setFileType] = useState(customFileType);

    const handleFileInputChange = (event) => {
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
    return (
        <div className='file__input__container'>
            <input id={inputId} type="file" accept={accept} className='noshow-input' onChange={handleFileInputChange} />
            <div className={`label__container ${labelContainerClasses}`}>
                {previewUrl && <Renderer fileType={fileType} previewUrl={previewUrl} />}
                <label className={`upload__trigger ${uploadTriggerClasses}`} htmlFor={inputId}>
                    <img src={customUploadIcon} alt="trigger-upload" />
                </label>
            </div>
        </div>
    )
}

export default FileUpload