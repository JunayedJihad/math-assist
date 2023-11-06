import React,{useState} from 'react';

const EquilateralTri = () => {
     const[side,setSide]=useState(0)
     const[result,setResult]=useState(0)
     function handleSubmit(e) {
          e.preventDefault()
          setResult(`${((Math.sqrt(3)/4)*side*side).toFixed(3)} sq.unit`)
     }
     return (
          <div>
               <form onSubmit={handleSubmit} className='p-3  text-light'>
                    <p className='mb-1'>Length of a side of the triangle:</p>
                    <input className='form-control mb-3' type="number" min='0' value={side} onChange={(e)=>{setSide(e.target.value)}} />
                    <p className='mb-1'>Area of the triangle:</p>
                    <input className='form-control' type="text" name="" id="" value={result} disabled />
                    <div className="button text-center  mt-4">
                    <button className='btn btn-success ' type="submit">Calculate</button>
                    </div>

               </form>
          </div>
     );
};

export default EquilateralTri;