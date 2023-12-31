import React,{useState} from 'react';

const IsoselesTriangle = () => {
     const[sides,setSides]=useState('')
     const[result,setResult]=useState(0)
     let data=sides.split(',')
     const a=Number(data[0])
     const b=Number(data[1])
     let res=((b/4)*Math.sqrt((a*a)-(b*b))).toFixed(3)
     function handleSubmit(e) {
          e.preventDefault()
          if((a+a>b) && (a+b>a)){
               if(isNaN(res)){
                    setResult('Invalid input')
               }else{
                    setResult(`${res} sq.unit`)
               }
          }else{
               setResult('Not a valid Triangle')
          }

     }
     return (
          <div className='w-100'>
          <form onSubmit={handleSubmit} className='p-3  text-light'>
               <p className='mb-1'>Length of the the sides(a,b):</p>
               <input className='form-control mb-3' type="text" min='0' placeholder='a=equal sides , b=base' value={sides} onChange={(e)=>{setSides(e.target.value)}} />

               <p className='mb-1'>Area of the triangle:</p>
               <input className='form-control' type="text" name="" id="" value={result} disabled />
               <div className="button text-center  mt-4">
               <button className='btn btn-primary ' type="submit">Calculate</button>
               </div>

          </form>
     </div>
     );
};

export default IsoselesTriangle;