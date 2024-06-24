"use client"
import React,{useState} from "react";


function DesignQuestionPage() {
  // const [inputList, setInputList]= useState([{firstname:" ",lastname:" "}])
  
  //states for Examples
  const [examples, setExamples]=useState([" "]);

  //states for Test Cases
  const [testCases, setTestCases]=useState([" "]);

  //states for Constraints
  const [constraints, setConstraints]=useState([" "]);

  // FOR TESTING PURPOSE OF DYNAMIC ADD/REMOVE INPUTS
  // const handleInputChange=(e,index)=>{
  //   const{name,value}=e.target;
  //   const list=[...inputList];
  //   list[index][name]=value;
  //   setInputList(list); 
  // }

  // const handleAddClick=()=>{
  //   setInputList([...inputList,{firstname:" ", lastname:" "}])
  // }

  // const handleRemove=index=>{
  //   const list=[...inputList];
  //   list.splice(index,1);
  //   setInputList(list);
  // }

  //Dynamically Add/Remove for Examples
  const handleExampleChange = (e, index) => {
    const newExamples = [...examples]; // Create a copy of the array
    newExamples[index] = e.target.value; // Update the value at the specified index
    setExamples(newExamples); // Update the state with the new array
  };

  const handleAddExamples=index=>{
    setExamples([...examples,""]);
  }

  const handleRemoveExample=(indexToRemove)=>{
    const updatedExamples = examples.filter((_, index) => index !== indexToRemove);
    setExamples(updatedExamples);
  }

  //Dynamix Add/Remove for Test Cases
  const handleTestCaseChange = (e, index) => {
    const newTestCases = [...testCases]; // Create a copy of the array
    newTestCases[index] = e.target.value; // Update the value at the specified index
    setTestCases(newTestCases); // Update the state with the new array
  };

  const handleAddTestCase=index=>{
    setTestCases([...testCases,""]);
  }

  const handleRemoveTestCase=(indexToRemove)=>{
    const updateTestCases = testCases.filter((_, index) => index !== indexToRemove);
    setTestCases(updateTestCases);
  }

  //Dynamix Add/Remove for Constraints
  const handleConstraintsCaseChange = (e, index) => {
    const newConstraints = [...constraints]; // Create a copy of the array
    newConstraints[index] = e.target.value; // Update the value at the specified index
    setConstraints(newConstraints); // Update the state with the new array
  };

  const handleAddConstraints=index=>{
    setConstraints([...constraints,""]);
  }

  const handleRemoveConstraints=(indexToRemove)=>{
    const updateConstraints = constraints.filter((_, index) => index !== indexToRemove);
    setConstraints(updateConstraints);
  }

  return (
    <div className="flex flex-col items-center justify-center border border-yellow-400">
      <div className="text-lg text-white font-bold">A Contest with Contest Number 123 is Live</div>
      <div className="text-lg text-white p-4 font-bold">No Contest is Live. Please Create a Contest creating the questions</div>
      <form className="border border-green-500 w-3/4 mb-4 space-y-8 rounded-lg px-4 h-96 overflow-y-auto">
      
      {/* Contest Number, should come dynamically if any latest contest exist*/}
      <div>
        <label for="contestNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contest Number: </label>
        <input type="text" id="contestNumber" className="block w-24 p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>

      {/* Question ID */}
      <div>
        <label for="questionID" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Question Number: </label>
        <input type="number" id="questionID" className="block w-24 p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>

      {/* Question Title */}
      <div>
          <label for="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Question Title:</label>
          <input type="text" id="title" className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
     
        {/* Question Description */}
        <div>
          <label for="question-description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Question Descriptions:</label>
          <textarea id="question-description" rows="8" className="block p-1 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add Question Description"></textarea>
        </div>

        {/* Image */}
        <div className="">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="image">Add image (if any):</label>
          <input className="block w-full p-1 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="image" type="file" />
          {/* <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div>   aria-describedby="user_avatar_help"  THIS WAS IN THE input tag */  }
        </div>

        {/* Examples */}
        <div>
        {
          examples.map((x,i)=>{
          return (
            <>
              <label for="examples" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Examples:</label>
              <input type="text" id="examples" className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>handleExampleChange(e,i)}/>

              <div className=" border-pink-600 flex gap-x-8 mt-2 mb-2 justify-end" >

                {
                  (examples.length-1)==i &&
                  <button className="dark:bg-gray-700 rounded-lg  border-orange-600 p-2  shadow-orange-500 shadow-md hover:text-green-600" onClick={handleAddExamples}>Add More Examples</button>
                }
                {
                  (examples.length) !== 1 &&
                  <button className="dark:bg-gray-700 rounded-lg  border-orange-600 p-2  shadow-orange-500 shadow-md hover:text-red-600" onClick={()=>handleRemoveExample(i)}>Remove</button>
                }
              </div>

            </>
          )
        })
      }
      </div>

        {/* Test Cases */}
        <div>
        {
          testCases.map((x,i)=>{
          return (
              <>
                <label for="examples" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Test Cases:</label>
                <input type="text" id="examples" className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>handleTestCaseChange(e,i)}/>

                <div className=" border-pink-600 flex gap-x-8 mt-2 mb-2 justify-end" >

                {
                    (testCases.length-1)==i &&
                    <button className="dark:bg-gray-700 rounded-lg  border-orange-600 p-2  shadow-orange-500 shadow-md hover:text-green-600" onClick={handleAddTestCase}>Add More TestCases</button>
                  }

                  {
                    (testCases.length) !== 1 &&
                    <button className="dark:bg-gray-700 rounded-lg  border-orange-600 p-2  shadow-orange-500 shadow-md hover:text-red-600" onClick={()=>handleRemoveTestCase(i)}>Remove</button>
                  }
                </div>

              </>
            )
           })
          }
        </div>

        {/* Constraints */}
        <div>
        {
          constraints.map((x,i)=>{
          return (
              <>
                <label for="constraints" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Constraints(if any):</label>
                <input type="text" id="constraints" className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>handleConstraintsCaseChange(e,i)}/>

                <div className=" border-pink-600 flex gap-x-8 mt-2 mb-2 justify-end" >

                {
                    (constraints.length-1)==i &&
                    <button className="dark:bg-gray-700 rounded-lg  border-orange-600 p-2  shadow-orange-500 shadow-md hover:text-green-600" onClick={handleAddConstraints}>Add More Constraints</button>
                  }

                  {
                    (constraints.length) !== 1 &&
                    <button className="dark:bg-gray-700 rounded-lg  border-orange-600 p-2  shadow-orange-500 shadow-md hover:text-red-600" onClick={()=>handleRemoveConstraints(i)}>Remove</button>
                  }
                </div>

              </>
            )
           })
          }
        </div>


     {/* <div className="col-sm-12">
      {
        inputList.map((x,i)=>{
          return (
            <div className="">
              <div className="">
                <label htmlFor="">First Name</label>
                <input type="text " name="firstname" className="" placeholder="enter the first name" onChange={e=>handleInputChange(e,i)}/>
              </div>
              <div className="">
                <label htmlFor="">Last Name</label>
                <input type="text" name="lastname" className="" placeholder="enter last number" onChange={e=>handleInputChange(e,i)} />
              </div>
              <div className="" >
                
                {
                  (inputList.length) !== 1 &&
                  <button className="" onClick={()=>handleRemove(i)}>Remove</button>
                }

                {
                  (inputList.length-1)==i &&
                  <button className="" onClick={handleAddClick}>Add More</button>
                }
              </div>
            </div>
          )
        })
      }
     </div> */}
      <div className="flex justify-center">
        <div className="w-full flex justify-center gap-x-8 mb-4">
          <button className=" w-20 dark:bg-gray-700 rounded-lg p-2 border border-gray-400 shadow-orange-500 shadow-sm hover:border-fuchsia-500">Preview</button>
          <button className=" w-20 dark:bg-gray-700 rounded-lg p-2 border border-gray-400 shadow-orange-500 shadow-sm hover:border-fuchsia-500">Save</button>
        </div>
      </div>
      </form>
    </div>
  );
}

export default DesignQuestionPage;
