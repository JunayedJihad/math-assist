import React,{useState} from 'react';

const QuadraticEquation = () => {
     const[variables,setVariables]=useState('')
     const[result,setResult]=useState(0)
     const res=variables.split(',')
     const a=Number(res[0])
     const b=Number(res[1])
     const c=Number(res[2])
     const determinant=((b*b)-(4*a*c))
     const ans1=((-b)+Math.sqrt(determinant))/(2*a)
     const ans2=((-b)-Math.sqrt(determinant))/(2*a)
     function handleSubmit(e) {
          e.preventDefault()
          if(determinant>0){
               setResult(`x = ${ans1} ,  ${ans2}`)
          }else if(determinant===0){
               setResult(`x = ${ans1} ,  ${ans2} (Roots are equal)`)
          }else{
               setResult('Complex numbers')
          }
     }
     return (
          <div className='w-100'>
          <form onSubmit={handleSubmit} className='p-3  text-light'>
               <p className='mb-1'>The Co-efficients (ax<sup>2</sup>+bx+c=0):</p>
               <input className='form-control mb-3' placeholder="a , b , c" type="text" min='0' value={variables} onChange={(e)=>{setVariables(e.target.value)}} />
               <p className='mb-1'>The roots are:</p>
               <input className='form-control' type="text" name="" id="" value={result} disabled />
               <div className="button text-center  mt-4">
               <button className='btn btn-primary ' type="submit">Calculate</button>
               </div>

          </form>
     </div>
     );
};

export default QuadraticEquation;