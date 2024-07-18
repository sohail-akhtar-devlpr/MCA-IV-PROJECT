import React, { useState } from 'react';
import ExampleField from '@/app/QuestionFields/ExampleField/ExampleField';
import ConstraintField from '@/app/QuestionFields/ConstraintField/ConstraintField';
import PreviewMode from '@/app/QuestionFields/Modal/PreviewMode'
import { MdDeleteForever } from "react-icons/md";
import showToast from '@/utils/Toast/showToast';
import axios from 'axios';

const QuestionForm = ({ token, formData, setFormData }) => {
  const [previewMode, setPreviewMode] = useState(false);

  const handleChange = (e, questionIndex) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      const updatedQuestions = [...prevFormData.questions];
      updatedQuestions[questionIndex] = { ...updatedQuestions[questionIndex], [name]: value };
      return { ...prevFormData, questions: updatedQuestions };
    });
  };


  console.log("QUESTIONS LENGTH::", formData.questions.length);

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    console.log("FORM IS GETTING SAVED");

    try {
      axios.post('http://localhost:8080/subadmin/create/contest-question-set', formData, {
        headers: {
          Authorization: 'Bearer ' + `${token}`
        },
        withCredentials: true
      }).then((response) => {
        console.log("RESPONSE::",response);
        if (response.status === 201) {
          showToast('success', 'Questions Created Successfully');
        }
      }).catch((error) => {
        if (error.response) {
          if (error.response.status === 500) {
            showToast('error', 'Duplicate Entry is not Allowed');
          } else {
            showToast('error', 'Something went wrong while creating the Questions, Please try again.');
          }
        }
      });
    } catch (error) {
      showToast('error', 'Something went wrong while try again later..');
    }
  };

  const addNewQuestion = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      questions: [
        ...prevFormData.questions,
        {
          questionNumber: '',
          questionTitle: '',
          questionDescription: '',
          image: '',
          examples: [],
          constraints: []
        }
      ]
    }));
  };

  const deleteQuestion = (questionIndex) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      questions: prevFormData.questions.filter((_, index) => index !== questionIndex)
    }));
  };

  const togglePreviewMode = () => {
    // setPreviewModeOpen(true);
    setPreviewMode(!previewMode);
  };

  return (
    <div className="flex flex-col items-center h-screen  border-pink-500">
      <div className="text-white text-lg font-bold">Fill the Question Details</div>
      <form className=" border-green-500 w-3/4 mb-4 space-y-8 rounded-lg px-4 h-3/4 overflow-y-auto" onSubmit={handleQuestionSubmit}>
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

        {formData.questions.map((question, index) => (
          <div key={index} className="relative space-y-8 border  border-x-dark-layer-2 p-2 rounded-lg mb-4">
            {/* Delete Button */}
            <button type="button" className="text-3xl absolute top-2 right-2 text-white hover:text-red-500" onClick={() => deleteQuestion(index)}>
            <MdDeleteForever />
            </button>

            {/* Question Number */}
            <div>
              <label htmlFor={`questionNumber-${index}`} className=" border-yellow-400 block mb-2 text-sm font-medium text-gray-900 dark:text-white w-1/2">Question Number <span className="text-red-500">*</span></label>
              <input
                type="number"
                min={"1"}
                max={"15"}
                id={`questionNumber-${index}`}
                name="questionNumber"
                className="block w-24 p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={question.questionNumber}
                onChange={(e) => handleChange(e, index)}
              />
            </div>

            {/* Question Title */}
            <div>
              <label htmlFor={`title-${index}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Question Title</label>
              <input
                type="text"
                id={`title-${index}`}
                name="questionTitle"
                className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={question.questionTitle}
                onChange={(e) => handleChange(e, index)}
              />
            </div>

            {/* Question Description */}
            <div>
              <label htmlFor={`question-description-${index}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Question Descriptions <span className="text-red-500">*</span></label>
              <textarea
                id={`question-description-${index}`}
                rows="8"
                name="questionDescription"
                className="block p-1 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Add Question Description"
                value={question.questionDescription}
                onChange={(e) => handleChange(e, index)}
              ></textarea>
            </div>

            {/* Image */}
            <div className="">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor={`image-${index}`}>Add image (if any)</label>
              <input
                className="block w-full p-1 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id={`image-${index}`}
                type="file"
                name="image"
                value={question.image}
                onChange={(e) => handleChange(e, index)}
              />
            </div>

            {/* Examples */}
            <ExampleField setFormData={setFormData} formData={formData} questionIndex={index} />

            {/* Constraints */}
            <ConstraintField setFormData={setFormData} formData={formData} questionIndex={index} />
          </div>
        ))}

<div className="flex justify-center">
  {formData.questions.length !== 0 ? (
    <div className="w-full flex justify-center gap-x-8 mb-4">
      <button
        type="button"
        className="border-none px-4 py-2 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-500 shadow-md shadow-gray-500"
        onClick={togglePreviewMode}
      >
        Preview
      </button>
      <button
        type="button"
        className="border-none px-4 py-2 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-500 shadow-md shadow-gray-500"
        onClick={addNewQuestion}
      >
        Create More
      </button>
      <button
        type="submit"
        className="border-none px-4 py-2 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-500 shadow-md shadow-gray-500"
      >
        Save
      </button>
    </div>
  ) : (
    <button
      type="button"
      className="border-none px-4 py-2 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-500 shadow-md shadow-gray-500"
      onClick={addNewQuestion}
    >
      Create Questions
    </button>
  )}
</div>

      </form>

      {previewMode && (
        <PreviewMode togglePreviewMode={togglePreviewMode} formData={formData}/>
      )}
    </div>
  );
};

export default QuestionForm;