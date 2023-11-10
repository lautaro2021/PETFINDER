import { useEffect, useState } from "react";
import axios from "axios";

const getData = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const useFetcher = <T>(url: string, dependecy?: any) => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData(url)
      .then((res) => setData(res))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, [dependecy]);

  return { data, isLoading };
};

export default useFetcher;
