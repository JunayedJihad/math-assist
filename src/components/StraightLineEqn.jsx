import React,{useState} from 'react';

const StraightLineEqn = () => {
     const[firstPoint,setFirstPoint]=useState('')
     const[secondData,setSecondData]=useState('')
     const[result,setResult]=useState('')

     const data1=firstPoint.split(',')
     const x1=Number(data1[0])
     const y1=Number(data1[1])






     function handleSubmit(e) {
          e.preventDefault()
          const data2=secondData.split(',')
          if(data2.length===1){
               const m=Number(data2[0])
               if(isNaN(m) || isNaN(x1) || isNaN(y1)) {
                    setResult('Syntax error')
               }else{
                    const c=(-((m*x1)-y1))
                    const a=m
                    const b=Number(-1)
                    setResult(`The equation is ax + by + c = 0 where a=${a} , b=${b} , c=${c}`)
               }

          }else if(data2.length===2){
               const x2=Number(data2[0])
               const y2=Number(data2[1])
               if(isNaN(x2) || isNaN(y2) || isNaN(x1) || isNaN(y1)){
                    setResult('Syntax error')
               }else{
                    const m=((y2-y1)/(x2-x1))
                    const c=(-((m*x1)-y1))
                    const a=m
                    const b=Number(-1)
                    setResult(`The equation is ax + by + c = 0 where a=${a} , b=${b} , c=${c}`)

               }
          }else{
               setResult('Syntax Error')
          }


     }
     return (
          <div className='w-100'>
          <form onSubmit={handleSubmit} className='p-3  text-light'>
               <p className='mb-1'>The first point (separated by comma):</p>
               <input className='form-control mb-3' placeholder="x1 , y1" type="text" min='0' value={firstPoint} onChange={(e)=>{setFirstPoint(e.target.value)}} />

               <p className='mb-1'>The slope or the second point:</p>
               <input className='form-control mb-3' placeholder="m or x2,y2" type="text" min='0' value={secondData} onChange={(e)=>{setSecondData(e.target.value)}} />

               <p className='mb-1'>Equation of the straight line:</p>
               {/* <input className='form-control' type="text" name="" id="" value={result} disabled /> */}
               <textarea className='form-control' value={result}  rows="5" disabled></textarea>
               <div className="button text-center  mt-4">
               <button className='btn btn-primary ' type="submit">Calculate</button>
               </div>

          </form>
     </div>
     );
};

export default StraightLineEqn;