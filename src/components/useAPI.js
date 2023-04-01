import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useAPI = () => {
  const [search, setSearch] = useState("sport car");
  const [perPage, setPerPage] = useState(10);
  const [result, setResult] = useState([]);
  const [isLoaded, setIsLoaded] = useState("loading");

  // connect Formik to axios
  function serviceControlBringe(values) {
    setSearch(values.inputSearch);
    setPerPage(values.inputAmount);
  }

  // Get data
  const axiosData = useCallback(async () => {
    const ACCESS_TOKEN =
      "563492ad6f91700001000001ff981c4ab12a4096aa425dfe9d443dd0";
    const API_URL = "https://api.pexels.com/v1/search?query=";
    const url = `${API_URL}${search}&per_page=${perPage}`;

    try {
      const { data } = await axios.get(url, {
        headers: { Authorization: ACCESS_TOKEN },
      });
      if (data.photos.length > 0) {
        setResult(data.photos);
        setIsLoaded(true);
      } else {
        setIsLoaded(false);
      }
    } catch (error) {
      setIsLoaded(false);
      console.error(error);
    }
  }, [search, perPage]);

  useEffect(() => {
    axiosData();
  }, [axiosData]);

  return { result, isLoaded, serviceControlBringe };
};

export default useAPI;
