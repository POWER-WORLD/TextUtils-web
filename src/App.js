import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);   

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }
    , 1500);
  }
  const removeBodyClasses = () => {
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-info');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-' + cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#3c3c3c';
      document.body.style.color = 'white';
      // showAlert(": Dark mode has been enabled!", "success");
      //document.title = "TextUtils - Dark Mode";//use for dynamic title
      // setInterval(() => {
      //   document.title = "TextUtils - Dark Mode";//use for blinking title
      // }, 2000);
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing!";
      // }, 1500);

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      // showAlert(": Light mode has been enabled!", "success");
      //document.title = "TextUtils - Light Mode";//use for dynamic title
    }
  }
  return (
    <Router>
    <>
      <Navbar title="TextUtils" abouttext="about" mode={mode} toggleMode={toggleMode}/> {/*here we passing probs as title and about that we can change according our requirment */}
      <Alert alert={alert}/>

      {/* <div className='container my-3'>
        <TextForm heading="Enter Your Text Here" mode={mode} showAlert={showAlert}/>
        <About/>
      </div> */}

      <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextForm heading="Enter Your Text Here" mode={mode} showAlert={showAlert} />} />
            <Route exact path="/About" element={<About mode={mode} />} />
          </Routes>
      </div> 
      
    
    </>
    </Router>
        
  )
}

export default App;
