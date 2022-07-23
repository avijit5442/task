import { useForm } from "react-hook-form";
import React from 'react'

export default function ReactHookForm() {
  const {register,handleSubmit,formState:{errors}}=useForm({
    defaultValues:{
      Name:'',
      Number:'',
      Module:'',
      Category:[],
      Gender:'',
      Agree:'',
    },
  })
  const onSubmit=data=>console.log(data)
  return (
    <div className="container-fluid">ReactHookForm
      <form onSubmit={handleSubmit(onSubmit)}>
       <dl>
        <dt>Name</dt>
          <dd>
            <input {...register("Name",{required:true})} type="text"/>
            {errors.Name&&<p>Enter Name</p>}
          </dd>
       </dl>
       <dl>
        <dt> Number</dt>
          <dd>
            <input {...register("Number",{required:true})} type="number"/>
            {errors.Number&&<p>Enter Number</p>}
          </dd>
       </dl>
       <dl>
        <dt>Select Module</dt>
          <dd>
        <select {...register("Module",{required:true})}>
          <option>Module1</option>
          <option>Module2</option>
          <option>Module3</option>
          <option>Module4</option>
          <option>Module5</option>
        </select>
        {errors.Module&&<p>Choose module</p>}
          </dd>
       </dl>
       <dl>
        <dt>Category</dt>
        <dd {...register("Category",{required:true})}>
        <input type="checkbox"/>
        <label>Category1</label>
        &nbsp;
        <input type="checkbox"/>
        <label>Category2</label>
        &nbsp;
        <input type="checkbox"/>
        <label>Category3</label>
        </dd>
        {errors.Category&&<p>Enter Category</p>}
       </dl>
       <dl>
        <dt>Gender</dt>
        <dd {...register("Gender",{required:true})}>
         <input type="radio"name="gender"/>
         <label>Male</label>&nbsp;
         <input type="radio"name="gender"/>
         <label>Female</label>
         {errors.Gender&&<p>Enter Gender</p>}
         </dd>
       </dl>
       
       <dl>
          <dd>
            <span className="text-success">Agree to Terms and Conditions</span><br/>
            <input type="checkbox"/>
          </dd>
       </dl>
       <input type="submit"/>
      </form>
    </div>
  )
}

