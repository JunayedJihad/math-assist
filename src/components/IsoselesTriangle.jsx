import React,{useState} from 'react';

const IsoselesTriangle = () => {
     const[equalSide,setEqualSide]=useState(0)
     const[unequalSide,setUnequalSide]=useState(0)
     const[result,setResult]=useState(0)
     function handleSubmit(e) {
          e.preventDefault()
          let res=((unequalSide/4)*Math.sqrt((equalSide*equalSide)-(unequalSide*unequalSide))).toFixed(3)
          setResult(`${res} sq.unit`)
     }
     return (
          <div className='w-100'>
          <form onSubmit={handleSubmit} className='p-3  text-light'>
               <p className='mb-1'>Length of the equal sides:</p>
               <input className='form-control mb-3' type="number" min='0' value={equalSide} onChange={(e)=>{setEqualSide(Number(e.target.value))}} />

               <p className='mb-1'>Length of unequal side (base):</p>
               <input className='form-control mb-3' type="number" min='0' value={unequalSide} onChange={(e)=>{setUnequalSide(Number(e.target.value))}} />

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