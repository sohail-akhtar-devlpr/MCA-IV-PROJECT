import React, { useState } from "react";

function ConstraintField({ setFormData, formData, questionIndex }) {
  console.log("EXECUTION 4");

  //constraint or explanation both are same.
  const [constraints, setConstraints] = useState(
    formData.questions[questionIndex].constraints || [{ explanation: "" }]
  );
  const [constraintButtonText, setConstraintButtonText] = useState("Add");
  const [helperButtonIsVisible, setHelperButtonIsVisible] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const handleConstraintChange = (e, index) => {
    const newConstraints = [...constraints];
    newConstraints[index] = { explanation: e.target.value };
    setConstraints(newConstraints);
    const updatedQuestions = formData.questions.map((question, qIndex) => {
      if (qIndex === questionIndex) {
        return { ...question, constraints: newConstraints };
      }
      return question;
    });
    setFormData({ ...formData, questions: updatedQuestions });
  };

  const handleAddConstraints = () => {
    setConstraints([...constraints, { explanation: "" }]);
    setConstraintButtonText("Add More");
  };

  const handleRemoveConstraints = (indexToRemove) => {
    const newConstraints = constraints.filter((_, i) => i !== indexToRemove);
    setConstraints(newConstraints);
    const updatedQuestions = formData.questions.map((question, qIndex) => {
      if (qIndex === questionIndex) {
        return { ...question, constraints: newConstraints };
      }
      return question;
    });
    setFormData({ ...formData, questions: updatedQuestions });
  };

  const showAddMore = () => {
    if (constraints.length === 0) {
      handleAddConstraints();
      setHelperButtonIsVisible(false);
    }
    if (constraints.length === 1) {
      setHelperButtonIsVisible(false);
    }
    setIsVisible(true);
  };

  return (
    <div>
      <label
        htmlFor="constraints"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Add Constraints (if any)
      </label>
      {isVisible &&
        constraints.map((data, index) => (
          <div key={index}>
            <input
              type="text"
              id="constraints"
              name="constraints"
              className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={data.constraint}
              onChange={(e) => handleConstraintChange(e, index)}
            />
            <div className="border-pink-600 flex gap-x-8 mt-2 mb-2 justify-end">
              {constraints.length - 1 === index && (
                <button
                  type="button"
                  className="border-none px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md shadow-gray-500"
                  onClick={handleAddConstraints}
                >
                  Add More
                </button>
              )}
              {constraints.length !== 0 && (
                <button
                  type="button"
                  className="close border-none px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 shadow-md shadow-gray-500"
                  onClick={() => handleRemoveConstraints(index)}
                >
                  Remove
                </button>
              )}
            </div>
          </div>
        ))}
      {(constraints.length === 1 && helperButtonIsVisible) ||
        (constraints.length === 0 && (
          <button
            type="button"
            className="border-none px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md shadow-gray-500"
            onClick={() => showAddMore()}
          >
            {constraintButtonText}
          </button>
        ))}
    </div>
  );
}

export default ConstraintField;
