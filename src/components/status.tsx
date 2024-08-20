import React from 'react'
type StatusProps = {
    status:'loading' | 'success' 
}
const Status = (props:StatusProps) => {
    let message
    if(props.status === "loading"){
        message = "Loadinng...."
    }else if(props.status === 'success'){
        message = "Data fetched successfully"
    }else{
        message = 'Error fetched data'
    }
  return (
    <div>
    <h2>
    Status - {message}
    </h2>

    </div>
  )
}

export default Status
