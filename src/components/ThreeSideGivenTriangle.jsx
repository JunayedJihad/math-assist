import React,{useState} from 'react';

const ThreeSideGivenTriangle = () => {
     const[sides,setSides]=useState('')
     const[result,setResult]=useState(0)
     const res=sides.split(',')
     const a=Number(res[0])
     const b=Number(res[1])
     const c=Number(res[2])
     const s=(a+b+c)/2
     const ans=(Math.sqrt(s*(s-a)*(s-b)*(s-c))).toFixed(3)

     function handleSubmit(e) {
          e.preventDefault()
          if((a+b>c)&&(a+c>b)&&(b+c>a)){

               setResult(`${ans} sq.unit`)
          }else{
               setResult('Not a valid Triangle')
          }
     }
     return (
          <div className='w-100'>
          <form onSubmit={handleSubmit} className='p-3  text-light'>
               <p className='mb-1'>Length of the sides (separated by comma):</p>
               <input className='form-control mb-3' placeholder="a , b , c" type="text" min='0' value={sides} onChange={(e)=>{setSides(e.target.value)}} />
               <p className='mb-1'>Area of the triangle:</p>
               <input className='form-control' type="text" name="" id="" value={result} disabled />
               <div className="button text-center  mt-4">
               <button className='btn btn-primary ' type="submit">Calculate</button>
               </div>

          </form>
     </div>
     );
};

export default ThreeSideGivenTriangle;