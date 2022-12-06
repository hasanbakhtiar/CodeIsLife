import React from 'react';
import ReactDOM from 'react-dom/client';
import AppUseImperativeHandle from './components/AppUseImperativeHandle';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppUseImperativeHandle />
  </React.StrictMode>
);
