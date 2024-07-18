import { useState } from 'react';

const useConstraintsState = () => {
  const [constraints, setConstraints] = useState([""]);
  const handleConstraintsChange = (e, index) => {
    const newConstraints = [...constraints];
    newConstraints[index] = e.target.value;
    setConstraints(newConstraints);
  };
  const handleAddConstraint = () => {
    setConstraints([...constraints, ""]);
  };
  const handleRemoveConstraint = (indexToRemove) => {
    const newConstraints = constraints.filter((_, i) => i !== indexToRemove);
    setConstraints(newConstraints);
  };
  return { constraints, handleConstraintsChange, handleAddConstraint, handleRemoveConstraint };
};

export default useConstraintsState;
