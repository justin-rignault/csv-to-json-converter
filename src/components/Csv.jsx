import React from 'react'

function Csv(props){

   return (
       <div className="csv">
           <p>Paste CSV Here:</p>
            <textarea defaultValue={props.data} onChange={props.handleChange}>
            </textarea>
       </div>
   )
}

export default Csv