import React from 'react'

const Renderer = ({ fileType = "image", previewUrl }) => {
    if (fileType === 'image') {
        return <img src={previewUrl} alt="Preview" className='image__preview' />;
    }
    else if (fileType === 'video') {
        return <video className='image__preview' controls src={previewUrl} />;
    }
    else if (fileType === 'pdf') {
        return <iframe className='image__preview iframe__preview' src={previewUrl} title="Preview" />;
    }
    else {
        return <p>Unsupported file type</p>;
    }
}

export default Renderer