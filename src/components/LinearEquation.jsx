import React,{useState} from 'react';

const LinearEquation = () => {
     const[first,setFirst]=useState('')
     const[second,setSecond]=useState('')
     const[result,setResult]=useState(0)
     const res1=first.split(',')
     const res2=second.split(',')
     const a1=Number(res1[0])
     const b1=Number(res1[1])
     const c1=Number(res1[2])
     const a2=Number(res2[0])
     const b2=Number(res2[1])
     const c2=Number(res2[2])
     const y=((a1*c2)-(a2*c1))/((a2*b1)-(a1*b2))
     const x=(-c1-(b1*y))/a1
     function handleSubmit(e) {
          e.preventDefault()
          if((a1/a2)==(b1/b2) && (a1/a2)==(c1/c2) && (b1/b2)==(c1/c2)) {
               setResult('Infinite Solution')
          }else if((a1/a2)==(b1/b2) && (a1/a2)!=(c1/c2)){
               setResult('No Solution')
          }else{
               setResult(`x = ${x} , y = ${y}`)

          }

     }
     return (
          <div className='w-100'>
          <form onSubmit={handleSubmit} className='p-3  text-light'>
               <p className='mb-1'>Co-efficients of 1st equation(a<sub>1</sub>x+b<sub>1</sub>y+c<sub>1</sub> = 0):</p>
               <input className='form-control mb-3' placeholder="a1 , b1 , c1" type="text" min='0' value={first} onChange={(e)=>{setFirst(e.target.value)}} />

               <p className='mb-1'>Co-efficients of 2nd equation(a<sub>2</sub>x+b<sub>2</sub>y+c<sub>2</sub> = 0):</p>
               <input className='form-control mb-3' placeholder="a2 , b2 , c2" type="text" min='0' value={second} onChange={(e)=>{setSecond(e.target.value)}} />

               <p className='mb-1'>The solutions are:</p>
               <input className='form-control' type="text" name="" id="" value={result} disabled />
               <div className="button text-center  mt-4">
               <button className='btn btn-primary ' type="submit">Calculate</button>
               </div>

          </form>
     </div>
     );
};

export default LinearEquation;