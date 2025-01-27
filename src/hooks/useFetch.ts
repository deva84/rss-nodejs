import { useEffect, useState } from "react";
import { FetchProps } from "./hooks.model";
import { useNavigate } from "react-router-dom";

export const useFetch = ({
  toFetch,
  url,
  method,
  body,
  headers,
  navigateLink,
}: FetchProps) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!toFetch) {
      return;
    }
    setLoading(true);

    fetch(url, { method, body: method === "POST" ? body : null, headers })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        if (navigateLink) {
          navigate(navigateLink);
        }
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [toFetch, url, method, body, headers, navigateLink, navigate]);

  return { data, loading, error };
};
