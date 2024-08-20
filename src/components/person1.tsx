import React from 'react'
type PersonListProsp = {
    names:{
        first:string
        last:string
    }[]
}
const PersonList = (props:PersonListProsp) => {
  return (
    <div>
      {props.names.map((item)=>{
         return <h2>{item.first} {item.last}</h2>
      })}
    </div>
  )
}

export default PersonList
