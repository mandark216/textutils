import React, { useState } from 'react';


export default function TextForm(props) {

    const handleUpper=()=>{
        // console.log('uppacse cliked')
        let newText= text.toUpperCase();
        settext(newText)
        props.showAlert("Text converted uppercase ","Successfully")

    }
    const handleLower=()=>{
        // console.log('uppacse cliked')
        let newText= text.toLowerCase();
        settext(newText)
        props.showAlert("Text converted lowercase ","Successfully")

    }
    const handleclear=()=>{
        // console.log('uppacse cliked')
        let newText= ' ';
        settext(newText)
    }
    
    const handlecopy=()=>{
      var text=document.getElementById("mybox")
      text.select();
      navigator.clipboard.writeText(text.value)
      document.getSelection().removeAllRanges();
      props.showAlert("Text Copied ","Successfully")
    }
    

    const handlechange=(event)=>{
        // console.log('handlechnage')
        settext(event.target.value)
    }
    const [text, settext] = useState('');
    // text='new tewxt'  wrong way to set the text 
    // settext('new text') correct way to set the text 
  return (
    <>
    
    <div>
        <h1 my-3 style={{color:props.mode==='light'?'black':'white'}}> {props.heading}</h1>
        <div className="mb-3">
    <textarea className="form-control" style={{backgroundColor :props.mode==='light'?'white': '#1346ee' , color:props.mode==='light'?'black':'white'}} id="mybox" value={text} onChange={handlechange} rows="8"></textarea>
  </div>
  <button disabled={text.length===0}  type="submit" className="btn btn-primary" onClick={handleUpper}>Convert Into Uppercase</button>
  <button disabled={text.length===0}  type="submit" className="btn btn-primary my-2 mx-2" onClick={handleLower}>Convert Into Lowercase</button>
  <button disabled={text.length===0}  type="submit" className="btn btn-primary my-2 mx-2" onClick={handleclear}>Clear Text</button>
  <button disabled={text.length===0}   type="submit" className="btn btn-primary my-2 mx-2" onClick={handlecopy}>copy Text</button>





    </div>
    <div className="container my-3"  style={{color:props.mode==='light'?'black':'white'}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words  and {text.length} Character</p>
    <p>{0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length } min. Read</p>
    <h2>Preview</h2>
    <p>{text.length>0? text:'Nothing to Preview'}</p>
    </div>
    </>
    
  )
}
