import React ,{useState}from 'react';

const StraightLine = () => {
     const[data,setData]=useState('')
     const[result,setResult]=useState('')
     const arr=data.split(',')
     const a=Number(arr[0])
     const b=Number(arr[1])
     const c=Number(arr[2])
     const m=((-a)/b).toFixed(2)
     const x1=((-c)/a).toFixed(2)
     const y2=((-c)/b).toFixed(2)
     function handleSubmit(e) {
          e.preventDefault()
          const ans=`Slope is ${m}
Touches x-axis at (${x1} , 0)
Touches y-axis at (0 , ${y2})
          `
          if(isNaN(y2) || isNaN(m) || isNaN(x1)) {
               setResult('Syntax error,Please use the given format.')
          }else{

               setResult(ans)
          }

     }
     return (
          <div className='w-100'>
          <form onSubmit={handleSubmit} className='p-3  text-light'>
               <p className='mb-1'>The Co-efficients in given format(ax+by+c=0):</p>
               <input className='form-control mb-3' placeholder="a, b, c" type="text" min='0' value={data} onChange={(e)=>{setData(e.target.value)}} />
               <p className='mb-1'>Info of the line:</p>
               {/* <input className='form-control' type="text" value={result} disabled /> */}
               <textarea className='form-control' value={result} disabled cols="30" rows="5"></textarea>
               <div className="button text-center  mt-4">
               <button className='btn btn-primary ' type="submit">Calculate</button>
               </div>

          </form>
     </div>
     );
};

export default StraightLine;