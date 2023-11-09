import React,{useState} from 'react';

function TriangleAngleGiven() {
     const[sides,setSides]=useState('')
     const[angle,setAngle]=useState('')
     const[result,setResult]=useState('')
     const sideArr=sides.split(',')
     const a=Number(sideArr[0])
     const b=Number(sideArr[1])



     function handleSubmit(e) {
          e.preventDefault()
          if(sideArr.length>2 || isNaN(a) || isNaN(b) || isNaN(angle)){
               setResult('Syntax Error')
          }else{
               const c=((3.1416/180)*angle)
               const ans=(0.5*(a*b*Math.sin(c))).toFixed(2)
               setResult(`${ans} sq. unit`)
          }

     }
  return (
     <div className='w-100'>
          <form onSubmit={handleSubmit} className='p-3  text-light'>
               <p className='mb-1'>Length of any two sides (separated by comma):</p>
               <input className='form-control mb-3' placeholder="a , b" type="text" min='0' value={sides} onChange={(e)=>{setSides(e.target.value)}} />

               <p className='mb-1'>Their included angle (in Degree):</p>
               <input className='form-control mb-3' placeholder="Angle" type="text" min='0' value={angle} onChange={(e)=>{setAngle(e.target.value)}} />

               <p className='mb-1'>Area of the triangle is :</p>
               <input className='form-control' type="text"  value={result} disabled />
               <div className="button text-center  mt-4">
               <button className='btn btn-primary ' type="submit">Calculate</button>
               </div>

          </form>
     </div>
  )
}

export default TriangleAngleGiven