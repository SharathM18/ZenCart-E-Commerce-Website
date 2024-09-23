import { useEffect, useState } from "react";
import axiosInstance from "../utils/axios/axiosInstance";

const useFetch = (endpoint, customConfig, deps) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () => {
      const fetchData = async () => {
        try {
          setIsLoading(true);
          const res = await axiosInstance.get(endpoint, customConfig);
          setData(res.data);
        } catch (error) {
          if (error.response) {
            // Server responded with an error
            setError("API Error:", error.response.status, error.response.data);
          } else if (error.request) {
            // Request was made but no response received
            setError("Network Error:", error.request);
          } else {
            // Other errors
            setError("Error:", error.message);
          }
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    },
    deps ? deps : []
  );

  return { data, error, isLoading };
};

export default useFetch;
