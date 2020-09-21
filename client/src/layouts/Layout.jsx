import React from 'react'



export default function Layout(props) {
  return (
    <>
      
      <img src="./hive.png"/>
        
      
      <main>{props.children}</main>
    </>
  )
}
