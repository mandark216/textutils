// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, {useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {
  const [alert, setAlert] = useState("null")
const [mode, setMode] = useState("light")

const showAlert=(msg,type)=>{
  setAlert({
    
    msg:msg,
    type:type
  })
   setTimeout(() => {
    setAlert('null')
   }, 1500);
}


const togda=()=>{
  if(mode === "light"){
    setMode("dark")
   document.body.style.backgroundColor='#042743';
    showAlert("Dark mode is enabled","successfully ")
    document.title="TextUtility_Dark Mode"

  }
  else{
    setMode("light")
    document.body.style.backgroundColor='white';
    showAlert("Light mode is enabled","successfully")
    document.title="TextUtility_Light Mode"


  }
}




  return (
<>
{/* <Router> */}

 <Navbar title={'TextUtils'} mode={mode} togda={togda} />  
 {/* <Navbar /> */}

 <Alert alert={alert}/>



 <div className="container">
 {/* <Switch>
          <Route  path="/about">
            <About/>
          </Route> */}
          
          {/* <Route path="/"> */}
<TextForm  showAlert={showAlert} heading="Enter Your Text" mode={mode}/>
          {/* </Route> */}
        {/* </Switch> */}

 </div>
{/* </Router> */}

</>
  
  );
}

export default App;
