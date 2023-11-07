import React,{useState} from 'react';

const TriangleArea = () => {
     const[first,setFirst]=useState('')
     const[second,setSecond]=useState('')
     const[third,setThird]=useState('')
     const data1=first.split(',')
     const data2=second.split(',')
     const data3=third.split(',')
     const x1=Number(data1[0])
     const y1=Number(data1[1])
     const x2=Number(data2[0])
     const y2=Number(data2[1])
     const x3=Number(data3[0])
     const y3=Number(data3[1])
     const a=Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2))
     const b=Math.sqrt(Math.pow((x3-x1),2)+Math.pow((y3-y1),2))
     const c=Math.sqrt(Math.pow((x2-x3),2)+Math.pow((y2-y3),2))
     const ans=((Math.abs((x1*y2)+(x2*y3)+(x3*y1)-(x2*y1)-(x3*y2)-(x1*y3)))*(1/2))
     const[result,setResult]=useState(0)
     function handleSubmit(e) {
          e.preventDefault()
          if(isNaN(x1) || isNaN(x2) || isNaN(x3) || isNaN(y1) || isNaN(y2) || isNaN(y3)){
               setResult('Invalid input')
          }else if(((a+b)>c) && ((b+c)>a) && ((c+a)>b)){

               setResult(`${ans} sq. unit`)
          }else{
               setResult('Triangle not possible !!!')
          }

     }
     return (
          <div className='w-100'>
          <form onSubmit={handleSubmit} className='p-3  text-light'>
               <p className='mb-1'>The three co-ordinates (separated by comma):</p>
               <div>
                    <input className='form-control mb-3' placeholder="x1 , y1" type="text" min='0' value={first} onChange={(e)=>{setFirst(e.target.value)}} />
                    <input className='form-control mb-3' placeholder="x2 , y2" type="text" min='0' value={second} onChange={(e)=>{setSecond(e.target.value)}} />
                    <input className='form-control mb-3' placeholder="x3 , y3" type="text" min='0' value={third} onChange={(e)=>{setThird(e.target.value)}} />


               </div>


               <p className='mb-1'>Area of the triangle:</p>
               <input className='form-control' type="text" name="" id="" value={result} disabled />
               <div className="button text-center  mt-4">
               <button className='btn btn-primary ' type="submit">Calculate</button>
               </div>

          </form>
     </div>
     );
};

export default TriangleArea;