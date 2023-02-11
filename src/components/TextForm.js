import React, {useState}from 'react'


export default function TextForm(props) {


 
    const[text,setText]=useState("");
    const uppercaseconvert=()=>{
  
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("uppercase","warning")
        if(text.length===0){
            props.showAlert(false)
        }
       
    }
    const lowercaseconvert=()=>{
  
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("lowercase","warning")
        if(text.length===0){
            props.showAlert(false)
        }
       
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("speak","warning")
        if(text.length===0){
            props.showAlert(false)
        }
        
      }
      const handleCapitalize = () => {
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
        props.showAlert("ALL WORDS ARE CAPITALIZED","warning")
        if(text.length===0){
            props.showAlert(false)
        }
   }
   const RemoveSpace=()=>{
    let newString = text.replace(/\s+/g,' ').trim();
    setText(newString);
    props.showAlert("Extra Spaces has been removed","info")
    if(text.length===0){
        props.showAlert(false)
    }

   }
  
    const onChange=(event)=>{
     
        setText(event.target.value);
        if(text.length>500){
            props.showAlert("you Reach the limit of 500","danger ")
        }
    }
    const clear=()=>{
        setText("")
        props.showAlert('all worlds has been cleared.........',"danger")
        if(text.length===0){
            props.showAlert(false)
        }
    }
    
    const copyText=()=>{
        var copyText = document.getElementById("exampleFormControlTextarea1");

        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices
      
         // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
        document.getSelection().removeAllRanges();
        props.showAlert('⚠️ copy '+ copyText.value,"warning")

      
        // Alert the copied text
        
          
    }
    
   
  return (
  <> 
    <div className='container' >
        <h1>{props.heading}</h1>
        <div >

            <label htmlFor="exampleFormControlTextarea1" className="form-label"  style={{color:props.mode==="dark"?"white":"black"}}>You can put your text here</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor:props.mode==="dark"?"#5a1b1b":"white",color:props.mode==="dark"?"white":"black"}} placeholder='Write the text here' rows="8" value={text} onChange={onChange}></textarea>

        </div>

        <button disabled={text.length===0} type="button" style={{color:"white",backgroundColor:"black"}} className="btn btn-primary mx-2" onClick={uppercaseconvert} >Convert to Uppercase</button>
        <button disabled={text.length===0} type="button" style={{color:"white",backgroundColor:"black"}} className="btn btn-primary mx-2" onClick={lowercaseconvert}>Convert to Lowercase</button>
        <button disabled={text.length===0} type="button" style={{color:"white",backgroundColor:"black"}} className="btn btn-primary mx-2" onClick={speak}>speak</button>
        <button disabled={text.length===0} type="button" style={{color:"white",backgroundColor:"black"}} className="btn btn-primary mx-2" onClick={handleCapitalize}>Capitalize</button>
        <button disabled={text.length===0} type="button" style={{color:"white",backgroundColor:"black"}} className="btn btn-primary mx-2" onClick={RemoveSpace}>Remove Space</button>
        <button disabled={text.length===0} type="button" style={{color:"white",backgroundColor:"black"}} className="btn btn-primary mx-2" onClick={clear}>Clear</button>
        <button disabled={text.length===0} type="button" style={{color:"white",backgroundColor:"black"}} className="btn btn-primary mx-2" onClick={copyText}>Copy text</button>

    </div>   
    <div className='container'>
        <h1>
            Your Summery
        </h1>
        <p className='words' style={{color:props.mode==="dark"?"white":"black"}}><b><span>{text.length}</span>&nbsp;&nbsp;&nbsp;charecters</b></p>
        <p className='words' style={{color:props.mode==="dark"?"white":"black"}}><b><span>{text.split(" ").filter((element)=>{return element.length!==0}).length}</span>&nbsp;&nbsp;&nbsp;&nbsp;words</b></p>
        
    </div>
    <div className='container'>
        <h1 className='preview'>
           Preview
        </h1>
        <p style={{color:props.mode==="dark"?"white":"black"}}>{text.length>0?text:"Nothing to Preview"}</p>

    </div>
    
  </>
  )
}
// ---------------------------------
