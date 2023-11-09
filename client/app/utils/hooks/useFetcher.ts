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

const postData = async <T>(url: string, payload: T) => {
  try {
    const response = await axios.post(url, payload);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const useFetcher = <T>({
  url,
  method,
  payload,
}: {
  url: string;
  method: string;
  payload?: T;
}) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<Error | unknown>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;
        switch (method) {
          case "get":
            data = await getData(url);
            break;
          case "post":
            data = await postData(url, payload);
            break;
          default:
            throw new Error(`Unsupported method: ${method}`);
        }
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, error, isLoading };
};

export default useFetcher;
