import React, { useState } from 'react'

export default function About() {
  const [myStyle, setMyDtyle] = useState(

  {
        color:'black',
        backgroundColor:'white'
    })
    const [btntext, setbtntext] = useState("Enable Dark mode")

     const toggler=()=>{
     if( myStyle.color==='black')
     {
      setMyDtyle({
        color:'white',
        backgroundColor:'black'
      })
      setbtntext("Enable light Mode")
     }
     else{
      setMyDtyle({
        color:'black',
        backgroundColor:'white'
      })
      setbtntext("Enable light mode")
     }
    }
  return (
<>
    <div className="Container my-6 mx-5" style={myStyle}> 
    <h1 className='my-5 mx-3'>About Us</h1>
    <div className="container my-6" style={myStyle}>
      <p my-5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat suscipit quas dolores fugit libero rem veritatis quaerat aspernatur deleniti, asperiores iure impedit, praesentium optio, quasi quibusdam voluptatum? Quos, maxime enim.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, qui earum corrupti quis ullam labore blanditiis. Ab asperiores cupiditate cumque ipsum repudiandae porro reiciendis id at exercitationem, veniam voluptas corporis sint, nisi eveniet ullam eos sequi quia minus vitae perferendis fugit ut suscipit! Expedita obcaecati quia neque dolorem eligendi cum minima quis, quod cumque veritatis voluptate earum esse libero optio molestiae dolores velit! Facilis, magnam nihil aut culpa laboriosam veritatis quidem neque illum temporibus!</p>
    </div>
    
<button type="button" onClick={toggler} class="btn btn-primary my-3 mx-5">{btntext}</button>


    </div>
</>
  )
}
