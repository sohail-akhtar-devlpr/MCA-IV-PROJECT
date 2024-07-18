import React from 'react';
import ExampleField from '@/app/QuestionFields/ExampleField/ExampleField';
import ConstraintField from '@/app/QuestionFields/ConstraintField/ConstraintField';
import showToast from '@/utils/Toast/showToast';

import axios from 'axios';

const QuestionForm = ({token, formData, setFormData }) => {

  console.log("EXECUTION 2");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      const updatedQuestions = [...prevFormData.questions];
      updatedQuestions[0] = { ...updatedQuestions[0], [name]: value };
      return { ...prevFormData, questions: updatedQuestions };
    });
  };

  const handleQuestionSubmit=(e)=>{
    e.preventDefault();
    console.log("FORM IS GETTING SAVED");

    try {
      axios.post('http://localhost:8080/subadmin/create/contest-question-set',formData,{
        headers:{
          Authorization: 'Bearer ' + `${token}`
        },
        withCredentials:true
      }).then( (response)=>{
        if(response.status===200){
          showToast('success', 'Questions Created Successfully');
        }
        // console.log("Question Response:: ",response)
      } ).catch( (error)=>{
        if (error.response) {
          if (error.response.status === 500) {
            showToast('error', 'Duplicate Entry is not Allowed');
          }else {
            showToast('error', 'Something went wrong while creating the Questions, Please try again.');
          }
        }
      } )
    } catch (error) {
      showToast('error', 'Something went wrong while try again later..');
    }
  }

  return (
    <div className="flex flex-col items-center h-screen border border-pink-500">
          <div className="text-white text-lg font-bold">Fill the Question Details</div>
           <form className=" border-green-500 w-3/4 mb-4 space-y-8 rounded-lg px-4 h-3/4 overflow-y-auto" onSubmit={handleQuestionSubmit }>
          {/* Contest Number, should come dynamically if any latest contest exist*/}
          <div>
            <label htmlFor="contestNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contest Number <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              id="contestNumber" 
              name="contestNumber"
              className="block w-24 p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              value={formData.contestNumber}
              readOnly />
          </div>
    
          {/* Question Number */}
          <div>
            <label htmlFor="questionNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Question Number <span className="text-red-500">*</span></label>
            <input 
              type="number" 
              min={"1"}
              max={"15"}
              id="questionNumber" 
              name="questionNumber"
              className="block w-24 p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={formData.questions[0].questionNumber} 
              onChange={handleChange}
              />
          </div>
    
          {/* Question Title */}
          <div>
              <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Question Title</label>
              <input 
                type="text" 
                id="title" 
                name="questionTitle"
                className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formData.questionTitle} 
                onChange={handleChange}
                />
            </div>
         
            {/* Question Description */}
            <div>
              <label htmlFor="question-description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Question Descriptions <span className="text-red-500">*</span></label>
              <textarea 
                id="question-description" 
                rows="8" 
                name="questionDescription"
                className="block p-1 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Add Question Description"
                value={formData.questionDescription} 
                onChange={handleChange}></textarea>
            </div>
    
            {/* Image */}
            <div className="">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="image">Add image (if any)</label>
              <input 
                className="block w-full p-1 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
                id="image" 
                type="file"
                name="image"
                value={formData.image} 
                onChange={handleChange} />
            </div>
    
            {/* Examples */}
            <ExampleField setFormData={setFormData}
                formData={formData} questionIndex={0}/>

            {/* Constraints */}
            <ConstraintField setFormData={setFormData}
                formData={formData} questionIndex={0}/>
    
          <div className="flex justify-center">
            <div className="w-full flex justify-center gap-x-8 mb-4">
              <button className=" border-none px-4 py-2 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-500 shadow-md shadow-gray-500">Preview</button>
              <button className=" border-none px-4 py-2 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-500 shadow-md shadow-gray-500">Create More</button>
              <button className=" border-none px-4 py-2 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-500 shadow-md shadow-gray-500"
              type="submit"
              >Save</button>
            </div>
          </div>
          </form>
         </div>
  );
};

export default QuestionForm;