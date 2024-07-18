import React, { useState } from "react";

function TestCaseField() {
  const [testCases, setTestCases] = useState([{}]);

  const handleTestCaseChange = (e, index) => {
    const newTestCases = [...testCases];
    newTestCases[index] = e.target.value;
    setTestCases(newTestCases);
  };

  const handleAddTestCases = () => {
    const testCase = [...testCases, {}];
    setTestCases(testCase);
  };

  const handleRemoveTestCase = (indexToRemove) => {
    const removeTestCases = [...testCases];
    removeTestCases.splice(indexToRemove, 1);
    setTestCases(removeTestCases);
  };

  return (
    <div className="border-red-600">
      <label
        htmlFor="testCases"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Add Test Cases <span className="text-red-500">*</span>
      </label>
      {testCases.map((data, index) => (
        <div key={index}>
          <div className="border-green-600">
            <div className="mb-4">
              <label htmlFor="input" className="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Input</label>
              <input 
                type="text" 
                id="input" 
                className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                onChange={e => handleTestCaseChange(e, index)} 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="output" className="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Output</label>
              <input 
                type="text" 
                id="output" 
                className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                onChange={e => handleTestCaseChange(e, index)} 
              />
            </div>
            <div className="flex justify-end mt-2">
              <button
                className="bg-red-600 text-white px-2 py-1 rounded"
                onClick={() => handleRemoveTestCase(index)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
      <button
        type="button"
        className="bg-blue-600 text-white px-2 py-1 rounded"
        onClick={handleAddTestCases}
      >
        Add Test Case
      </button>
    </div>
  );
}

export default TestCaseField;

// CAN BE USE LATER, DONT DELETE

//states for Test Cases
  // const [testCases, setTestCases]=useState([" "]);

// const [testCaseButtonText, setTestCaseButtonText] = useState("Add");
  
  //Dynamically Add/Remove for Test Cases
  // const handleTestCaseChange = (e, index) => {
  //   const newTestCases = [...testCases]; // Create a copy of the array
  //   newTestCases[index] = e.target.value; // Update the value at the specified index
  //   setTestCases(newTestCases); // Update the state with the new array
  // };

  // const handleAddTestCase=()=>{
  //   setTestCases([...testCases,""]);
  //   setTestCaseButtonText('Add More');
  // }

  // const handleRemoveTestCase=(indexToRemove)=>{
  //   const updateTestCases = testCases.filter((_, index) => index !== indexToRemove);
  //   setTestCases(updateTestCases);
  //   if (testCases.length <= 2) {
  //     setTestCaseButtonText('Add');
  //   }
  // }
