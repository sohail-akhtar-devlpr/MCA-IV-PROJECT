// components/RegistrationModal.js

import React from "react";

const ContestantSuccessModal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-teal-300 bg-opacity-90">
      <div className="bg-white p-5 rounded-lg shadow-lg text-center">
        <h3 className="text-lg font-bold mb-4">Thank You for Registration</h3>
        <p className="mb-4">See you in the contest, good luck!</p>
        <button
          onClick={closeModal}
          className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ContestantSuccessModal;
