import React from 'react'

function Alert(props) {
  return (
    
    <div style={{height:"50px"}}>

   {props.alert.msg && <div className="alert alert-success alert-dismissible fade show" role="alert">
  <strong>    {props.alert.msg}   </strong>{props.alert.type} 
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>  }
    </div>

    
  )
}

export default Alert
