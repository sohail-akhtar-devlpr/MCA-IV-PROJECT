import React, { useState } from "react";

function ExampleField({setFormData,formData, questionIndex }) {

  console.log("EXECUTION 3");
  // const [examples, setExamples] = 
  // useState(
  //           [{ exampleNumber: '', input: '', output: '', explanation: '' }]
  //         );
  const [examples, setExamples] = useState(formData.questions[questionIndex].examples || [{ exampleNumber: '', input: '', output: '', explanation: '' }]);
  const [isVisible, setIsVisible] = useState(false);
  const [helperButtonIsVisible, setHelperButtonIsVisible] = useState(true);
  const [exampleButtonText, setExampleButtonText] = useState('Add');

  const handleExampleChange = (e, index) => {
    const { id, value } = e.target;
    const newExamples = [...examples];
    newExamples[index][id] = value;
    setExamples(newExamples);
    const updatedQuestions = formData.questions.map((question, qIndex) => {
      if (qIndex === questionIndex) {
        return { ...question, examples: newExamples };
      }
      return question;
    });
    setFormData({ ...formData, questions: updatedQuestions });
  };

  const handleAddExamples=()=>{
    const example =[...examples,{}]
    setExamples(example);
    setExampleButtonText('Add More');
  }

  // const handleRemoveExample = (indexToRemove) => {
  //   const newExamples = examples.filter((_, i) => i !== indexToRemove);
  //   setExamples(newExamples);
  //   setFormData({ ...formData, examples: newExamples });
  // }

  const handleRemoveExample = (indexToRemove) => {
    const newExamples = examples.filter((_, i) => i !== indexToRemove);
    setExamples(newExamples);
    const updatedQuestions = formData.questions.map((question, qIndex) => {
      if (qIndex === questionIndex) {
        return { ...question, examples: newExamples };
      }
      return question;
    });
    setFormData({ ...formData, questions: updatedQuestions });
  };

  const showAddMore = ()=>{
    if(examples.length === 0){
      handleAddExamples();
      setHelperButtonIsVisible(false);
    }
    if(examples.length===1){
      setHelperButtonIsVisible(false);
    }
    setIsVisible(true);
  }

  return (
    <div className="border-red-600">
    <label 
      htmlFor="examples"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      Add Examples <span className="text-red-500">*</span>
    </label>
    {
      isVisible && (
        examples.map((data,index)=>(
          <div key={index}>
            <div className="border-green-600">
              <div className="mb-4">
                <label htmlFor="" className="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Example Number
                  {/* <span className="text-red-500">*</span> */}
                </label>
                <input 
                  type="number" 
                  min={"1"}
                  max={"5"}
                  id="exampleNumber" 
                  className="block w-24 p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  onChange={e=>handleExampleChange(e,index)}/>
              </div>

              <div className="mb-4">
                <label htmlFor="title" className="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Input</label>
                <input 
                  type="text" 
                  id="input" 
                  className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={e=>handleExampleChange(e,index)}
                  />
              </div>

              <div className="mb-4">
                <label htmlFor="title" className="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Output</label>
                <input 
                  type="text" 
                  id="output" 
                  className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={e=>handleExampleChange(e,index)}/>
              </div>

              <div>
                <label htmlFor="title" className="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Explanation</label>
                <input 
                  type="text" 
                  id="explanation" 
                  className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={e=>handleExampleChange(e,index)}/>
              </div>
            </div>
              
            <div className=" border-pink-600 flex gap-x-8 mt-2 mb-2 justify-end" >
              {
                (examples.length-1)===index &&
                <button 
                  type="button"
                  className="border-none px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md shadow-gray-500" 
                  onClick={()=>handleAddExamples()}>
                    Add More
                </button>
              }
              {
                (examples.length) !== 0 &&
                <button 
                  type="button"
                  className="close border-none px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 shadow-md shadow-gray-500" 
                  onClick={()=>handleRemoveExample(index)}>
                    Remove
                </button>
              }
            </div>
            
          </div>
        ))
      )
    }
    {
      ((examples.length===1 && helperButtonIsVisible) || (examples.length===0)) && (

        <button 
          type="button"
          className="border-none px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md shadow-gray-500" 
          onClick={()=>showAddMore()}>
            {exampleButtonText}
        </button>
      )
    }
</div>
  );
}

export default ExampleField;