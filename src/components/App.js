/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import '/dist/gui_style.css';
import ImageGallery from './ImageGallery.jsx';

function App() {
    return (
        <div id="interface">
            <div> Testing 123 </div>
            <ImageGallery folderPath="dist/images" />
        </div>
    );
}

export default App;
