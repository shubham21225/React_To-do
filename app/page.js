"use client"

import { useState } from "react"

import React from 'react'

const page = () => {
  const [task, settask] = useState("");
   const [desc, setdesc] =  useState("")
   const [finaltask,setfinaltask] = useState([])
 
  const submithandler = (e)=> {
    e.preventDefault()
    setfinaltask([...finaltask,{task, desc}])
    console.log(finaltask);
    
    settask("")
    setdesc("")
  }

  const deleteHandler = (index) => {
    const copydata = [...finaltask]
    copydata.splice(index)
    setfinaltask(copydata)
  }



  let render = <h1 className=" bg-zinc-800 text-3xl text-center py-4 " >no task avialable</h1>
  

  if(finaltask.length > 0 ) {
  render = finaltask.map((items,index)=> {
   return <div key={index} className="mb-1"  >
      <div className="flex bg-zinc-600 py-2 justify-between font-semibold px-10 text-xl " >
      <h5 className="w-1/4" >{items.task} </h5>

      <h6 className="font-medium w-2/4 " >{items.desc} </h6>
      <button
      onClick={()=>deleteHandler(index) }
       className="bg-red-800  px-3 py-2 rounded-md" >
        Delete Task
      </button>

    </div>
   </div>
   
  } )
 
  }
  




 

  return (
    <>
    <div className="" >
      <h1 className='bg-zinc-800 mt-5 text-3xl text-center capitalize px-4 py-5 font-bold  ' >shubham to-do list</h1>


      <div className='px-10 py-4 ' >
      <form
      onSubmit={submithandler}
       className=' py-10 flex items-center justify-center flex-wrap gap-3 ' >
        <input placeholder='Enter the task'
        className='capitalize rounded-md border text-2xl px-2 py-2 mx-5  '
        value={task}
        onChange={(e)=>{
          settask(e.target.value)
          //  console.log(task);
           
        }}
        ></input>
        <input placeholder='Enter the Discription '
        className=' capitalize rounded-md border text-2xl px-2 py-2  mx-5 '
        value={desc}
        onChange={(e)=>{
           setdesc(e.target.value)
        }}
         ></input>

         <button className="border-2 font-bold bg-zinc-100 text-zinc-900 px-4 py-3 rounded-md text-xl" >
          Submit task
         </button>
 

      </form>
      </div>
     <hr></hr>
     <div>
          
            {
              render
            }
         
     </div>


    </div>
    </>
  )
}

export default page