import { createRoot } from 'react-dom/client'
import App from './App'
import React from 'react';
import studio from "@theatre/studio"
import extension from "@theatre/r3f/dist/extension"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

studio.extend(extension)
studio.initialize()
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/*' element={<App/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);