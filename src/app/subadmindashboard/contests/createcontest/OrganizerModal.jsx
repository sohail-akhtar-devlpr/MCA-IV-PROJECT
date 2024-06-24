import React, { useState } from 'react'

function OrganizerModal({closeModal,addMoreOrganizers,defaultValue}) {

  const [formState, setFormState] = useState(defaultValue ||
    {
      contestNumber:"",
      organizerName:"",
      organizerType:"",
      contactIndividual:"",
      fee:"",
      mobileNumber:"",
      email:""
   }
)

const [errors, setErrors] = useState("")


const handleChanegInForm = (e)=>{
  setFormState({
    ...formState,
    [e.target.name]:e.target.value
  })
}


//validation
const validateForm =()=>{
  if(formState.contestNumber && formState.organizerName && formState.organizerType
    && formState.contactIndividual && formState.mobileNumber && formState.email
  )
  {
    setErrors("");
    return true
  }else{
    let errorFields=[];
    for(const[key,value] of Object.entries(formState)){
      if( !value ){
        errorFields.push(key)
      }
    }
    setErrors(errorFields.join(","))
    return false
  }
}

const handleAddButton =(e)=>{
  e.preventDefault();

  //If not validated dont do anything
  if( !validateForm() ) return;

  // console.log(formState);
  //Add More Prize Button
  addMoreOrganizers(formState);

  //close the modal automatically when adding the prize gets happened.
  closeModal();
}

  return (
    // blurred part ie the modal-container.
    <div className='modal-container border-2 border-red-500 fixed z-10 left-0 top-0 right-0 w-full h-full flex items-center justify-center bg-gray-300 bg-opacity-70'
     onClick={(e)=>{
      // click either on close button or anywhere to close the modal
      if(e.target.classList.contains("modal-container")) closeModal();
      
      if(e.target.classList.contains("close")) closeModal();
      }}>

      {/* main modal */}
      <div className='border rounded-[5px] p-[32px] bg-white w-[400px]'>
       <h2 className="text-center text-xl mb-4 font-bold">Add Organizers</h2>
       <form>

       <div className='mb-4'>
            <label htmlFor="contestNumber" className="block text-sm font-medium text-gray-700">Contest Number:</label>
            <input 
            type="text" 
            id="contestNumber"
            name="contestNumber" 
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formState.contestNumber}
            onChange={handleChanegInForm} />
          </div>

          <div className='mb-4'>
            <label htmlFor="organizerName" className="block text-sm font-medium text-gray-700">Organizer Name:</label>
            <input 
            type="text" 
            id="organizerName"
            name="organizerName" 
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formState.organizerName} 
            onChange={handleChanegInForm}/>
          </div>

          <div className='mb-4'>
            <label htmlFor="organizerType" className="block text-sm font-medium text-gray-700 ">Organizer Type:</label>
            <input 
            type="text"
            name="organizerType" 
            id="organizerType"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formState.organizerType} 
            onChange={handleChanegInForm}/>
          </div>

          <div className='mb-4'>
            <label htmlFor="contactIndividual" className="block text-sm font-medium text-gray-700 ">Contact Person:</label>
            <input 
            type="text" 
            id="contactIndividual"
            name="contactIndividual"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formState.contactIndividual} 
            onChange={handleChanegInForm}/>
          </div>

          <div className='mb-4'>
            <label htmlFor="fee" className="block text-sm font-medium text-gray-700 ">Fee(if any):</label>
            <input 
            type="text" 
            id="fee"
            name="fee"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formState.fee} 
            onChange={handleChanegInForm}/>
          </div>
              
          <div className='mb-4'>
            <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 ">Mobile Number:</label>
            <input 
            type="text" 
            id="mobileNumber" 
            name="mobileNumber" 
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            value={formState.mobileNumber}
            onChange={handleChanegInForm}/>
          </div>

          <div className='mb-4'>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 ">Email Id:</label>
            <input 
            type="email" 
            id="email" 
            name="email" 
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            value={formState.email}
            onChange={handleChanegInForm}/>
          </div>

            {errors &&
             <div
              className='w-full bg-red-200 text-red-600 p-2 border rounded-sm mb-4 whitespace-normal break-words'>
                {`Please include: ${errors}`}
             </div>}

          <div className="mt-4 flex justify-center space-x-2">
              <button 
              type="submit" 
              className="border-none px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-xl shadow-gray-500"
              onClick={handleAddButton}>Add</button>
              <button type="button" className="close border-none px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 shadow-xl shadow-gray-500">Close</button>
          </div>
       </form>
      </div>

    </div>
  )
}

export default OrganizerModal