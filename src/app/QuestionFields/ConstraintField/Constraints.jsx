import React from 'react';

const Constraints = ({ constraints, handleConstraintsChange, handleAddConstraint, handleRemoveConstraint }) => (
  <div>
    <label htmlFor="constraints" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Constraints(if any)</label>
    {constraints.map((data, index) => (
      <div key={index}>
        <input
          type="text"
          id="constraints"
          name="constraints"
          className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={data}
          onChange={e => handleConstraintsChange(e, index)}
        />
        <div className="border-pink-600 flex gap-x-8 mt-2 mb-2 justify-end">
          {(constraints.length - 1) === index && (
            <button
              type="button"
              className="border-none px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md shadow-gray-500"
              onClick={handleAddConstraint}
            >
              Add More
            </button>
          )}
          {constraints.length !== 0 && (
            <button
              type="button"
              className="close border-none px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 shadow-md shadow-gray-500"
              onClick={() => handleRemoveConstraint(index)}
            >
              Remove
            </button>
          )}
        </div>
      </div>
    ))}
  </div>
);

export default Constraints;
