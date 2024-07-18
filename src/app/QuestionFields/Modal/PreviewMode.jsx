import React from 'react'

function PreviewMode({togglePreviewMode, formData}) {
  return (
    <div className='previewMode border-red-500 fixed z-10 left-0 top-0 right-0 w-full h-full flex flex-col items-center justify-center bg-dark-divider-border-2 bg-opacity-90'>
      <h2 className="text-white text-lg font-bold">Preview Questions</h2>
      <div className="mt-8 border-green-500 w-3/4 mb-4 space-y-8 rounded-lg px-4 h-3/4 overflow-y-auto">
        {formData.questions.map((question, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <p><strong className='mr-2'>Question:</strong> 
              <span className='text-green-500 font-semibold'>{question.questionNumber}</span>
            </p>
            <p><strong className='mr-2'>Title:</strong> 
              <span className='text-green-500 font-semibold'>{question.questionTitle}</span>
            </p>
            <p><strong className='mr-2'>Description:</strong> 
              <span className='text-green-500 font-semibold'>{question.questionDescription}</span>
            </p>
            {question.image && <p><strong className='mr-2'>Image: </strong> {question.image}</p>}
            
            <div>
              <p><strong>Examples:</strong></p>
              <ul className="list-disc list-inside">
                {question.examples.map((example, i) => (
                  <li key={i}>
                    <strong>Example:</strong>
                    <span className='ml-2 text-yellow-400 font-semibold'>{example.exampleNumber}</span>
                    <div className=' border-pink-500 pl-4'>
                      <ul className='list-disc list-inside'>
                        <li><strong className='mr-2'>Input:</strong>
                          <span className='text-green-500 font-semibold'>{example.input}</span>
                        </li>
                        <li>
                          <strong className='mr-2'>Output:</strong> 
                          <span className='text-green-500 font-semibold'>{example.output}</span>
                          </li>
                        <li>
                          <strong className='mr-2'>Explanation:</strong>
                          <span className='text-green-500 font-semibold'>{example.explanation}</span>
                          </li>
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            
            <div>
              <p><strong>Constraints:</strong></p>
              <ul className="list-disc list-inside">
                {question.constraints.map((constraint, i) => (
                  <li key={i}><strong className='mr-2'>Constraint {i + 1}:</strong> 
                    <span className='text-green-500 font-semibold'>{constraint.explanation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <button type="button" className="close border-none px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 shadow-xl shadow-gray-500" onClick={togglePreviewMode}>Close</button>
    </div>
  )
}

export default PreviewMode