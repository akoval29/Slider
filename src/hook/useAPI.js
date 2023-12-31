import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export const useAPI = () => {
  const [search, setSearch] = useState("cats");
  const [perPage, setPerPage] = useState(15);
  const [photos, setphotos] = useState([]);
  const [isLoaded, setIsLoaded] = useState("loading");

  // connect Formik to axios
  const FormikHandler = (values) => {
    setSearch(values.inputSearch);
    setPerPage(values.inputAmount);
    setIsLoaded("loading");
  };

  // Get data
  const GetData = useCallback(async () => {
    const ACCESS_TOKEN =
      "563492ad6f91700001000001ff981c4ab12a4096aa425dfe9d443dd0";
    const API_URL = "https://api.pexels.com/v1/search?query=";
    const url = `${API_URL}${search}&per_page=${perPage}`;
    try {
      const { data } = await axios.get(url, {
        headers: { Authorization: ACCESS_TOKEN },
      });
      if (data.photos.length > 0) {
        setphotos(data.photos);
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
    GetData();
  }, [GetData]);

  return { photos, isLoaded, FormikHandler };
};
