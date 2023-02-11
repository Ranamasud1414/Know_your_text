import React from 'react'

export default function Alert(props) {


  const myStyle={
    height:"50px",
    width:"500px",
    marginLeft:"35%",
    // alignItems:"center",
    textAlign:"center"
    
  }
  return (
   <div style={myStyle}>
     {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                        <strong>{props.alert.type}</strong> {props.alert.msg}
                    
                    </div>}
  </div>
   
  )
}
