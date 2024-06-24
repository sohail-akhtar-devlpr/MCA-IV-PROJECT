import React, { useState } from 'react'

function PrizeModal({closeModal,addMorePrizes,defaultValue}) {

  const [formState, setFormState] = useState(defaultValue ||
    {
      prizeRank:"",
      prizeName:"",
      prizeDescription:"",
      prizeCategory:"",
      prizeValue:""
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
  if(formState.prizeRank && formState.prizeName && formState.prizeDescription
    && formState.prizeCategory
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
  addMorePrizes(formState);

  //close the modal automatically when adding the prize gets happened.
  closeModal();
}

  return (
    // blurred part ie the modal-container.
    <div className='modal-container border-2 border-red-500 fixed z-10 left-0 top-0 right-0 w-full h-full flex items-center justify-center bg-gray-300 bg-opacity-70'
     onClick={(e)=>{
      if(e.target.classList.contains("modal-container")) closeModal();
      
      if(e.target.classList.contains("close")) closeModal();
      }}>

      {/* main modal */}
      <div className='border rounded-[5px] p-[32px] bg-white w-[400px]'>
       <h2 className="text-center text-xl mb-4 font-bold">Add Prizes</h2>
       <form>

       <div className='mb-4'>
            <label htmlFor="rank" className="block text-sm font-medium text-gray-700">Prize Rank</label>
            <input 
            type="text" 
            id="rank"
            name="prizeRank" 
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formState.prizeRank}
            onChange={handleChanegInForm} />
          </div>

          <div className='mb-4'>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Prize Name</label>
            <input 
            type="text" 
            id="name"
            name="prizeName" 
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formState.prizeName} 
            onChange={handleChanegInForm}/>
          </div>

          <div className='mb-4'>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 ">Prize Description</label>
            <input 
            type="text"
            name="prizeDescription" 
            id="description"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formState.prizeDescription} 
            onChange={handleChanegInForm}/>
          </div>

          <div className='mb-4'>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 ">Prize Category</label>
            <input 
            type="text" 
            id="category"
            name="prizeCategory"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formState.prizeCategory} 
            onChange={handleChanegInForm}/>
          </div>
              
          <div className='mb-4'>
            <label htmlFor="value" className="block text-sm font-medium text-gray-700 ">Prize Value</label>
            <input 
            type="text" 
            id="value" 
            name="prizeValue" 
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            value={formState.prizeValue}
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

export default PrizeModal