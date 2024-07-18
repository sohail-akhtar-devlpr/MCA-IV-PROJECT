import { useState } from 'react';

const useExamplesState = () => {
  const [examples, setExamples] = useState([{ exampleNumber: '', input: '', output: '', explanation: '' }]);
  const handleExampleChange = (e, index) => {
    const { id, value } = e.target;
    const newExamples = [...examples];
    newExamples[index][id] = value;
    setExamples(newExamples);
  };
  const handleAddExample = () => {
    setExamples([...examples, { exampleNumber: '', input: '', output: '', explanation: '' }]);
  };
  const handleRemoveExample = (indexToRemove) => {
    const newExamples = examples.filter((_, i) => i !== indexToRemove);
    setExamples(newExamples);
  };
  return { examples, handleExampleChange, handleAddExample, handleRemoveExample };
};

export default useExamplesState;
