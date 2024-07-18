import { useState, useEffect } from "react";
import axios from "axios";

function useContestData(token) {
  const [isCreated, setIsCreated] = useState(false);
  const [contestNumbers, setContestNumbers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showContestDetail, setShowContestDetail] = useState(true);
  const [selectedContestNumber, setSelectedContestNumber] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get('http://localhost:8080/subadmin/check/status', {
      headers: { Authorization: 'Bearer ' + `${token}` },
      withCredentials: true
    }).then((response) => {
      console.log("Contest Response:: ", response);
      if (response.data.contestStatus === 'Created') {
        setIsCreated(true);
        setContestNumbers(response.data.contestNumbers);
      }
      setIsLoading(false);
    }).catch((error) => {
      console.log("CAUGHT ERROR", error);
      setIsLoading(false);
    });
  }, [token]);

  return {
    isCreated,
    contestNumbers,
    isLoading,
    showContestDetail,
    setShowContestDetail,
    selectedContestNumber,
    setSelectedContestNumber,
    isFormOpen,
    setIsFormOpen,
  };
}

export default useContestData;
