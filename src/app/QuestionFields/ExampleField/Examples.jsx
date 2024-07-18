import React from 'react';

const Examples = ({ examples, handleExampleChange, handleAddExample, handleRemoveExample }) => (
  <div className="border-red-600">
    <label htmlFor="examples" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      Add Examples <span className="text-red-500">*</span>
    </label>
    {examples.map((data, index) => (
      <div key={index}>
        <div className="border-green-600">
          <div className="mb-4">
            <label htmlFor="exampleNumber" className="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Example Number</label>
            <input
              type="number"
              min={"1"}
              max={"5"}
              id="exampleNumber"
              className="block w-24 p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={e => handleExampleChange(e, index)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="input" className="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Input</label>
            <input
              type="text"
              id="input"
              className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={e => handleExampleChange(e, index)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="output" className="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Output</label>
            <input
              type="text"
              id="output"
              className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={e => handleExampleChange(e, index)}
            />
          </div>
          <div>
            <label htmlFor="explanation" className="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Explanation</label>
            <input
              type="text"
              id="explanation"
              className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={e => handleExampleChange(e, index)}
            />
          </div>
        </div>
        <div className="border-pink-600 flex gap-x-8 mt-2 mb-2 justify-end">
          {(examples.length - 1) === index && (
            <button
              type="button"
              className="border-none px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md shadow-gray-500"
              onClick={handleAddExample}
            >
              Add More
            </button>
          )}
          {examples.length !== 0 && (
            <button
              type="button"
              className="close border-none px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 shadow-md shadow-gray-500"
              onClick={() => handleRemoveExample(index)}
            >
              Remove
            </button>
          )}
        </div>
      </div>
    ))}
  </div>
);

export default Examples;
