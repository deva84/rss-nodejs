import { useCallback, useEffect, useState } from "react";
import {
  ApiResponseType,
  FetchError,
  FetchProps,
  ResponseData,
} from "./hooks.model";
import { useNavigate } from "react-router-dom";
import { ApiError } from "../error";
import { ErrorType } from "../error/error.model";

export const useFetch = ({
  toFetch,
  resetToFetch,
  url,
  method,
  body,
  headers,
  navigateLink,
}: FetchProps) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState<FetchError | null>(null);

  const navigate = useNavigate();

  const completeRequest = useCallback(
    ({
      responseType,
      data,
      error,
    }: {
      responseType: ApiResponseType;
      data?: ResponseData;
      error?: any;
    }) => {
      if (responseType === "data") {
        setData(data?.result);
      } else if (responseType === "error") {
        const type = error?.type ?? ErrorType.SERVER;
        const errors = error?.errors ?? [`${error.name}: ${error.message}`];
        setFetchError({ type, errors });
      } else {
        throw new Error(`Api Response Type ${responseType} is not supported!`);
      }

      setLoading(false);
      resetToFetch();
    },
    [resetToFetch]
  );

  const fetchData = useCallback(async () => {
    setLoading(true);
    setFetchError(null);
    try {
      const response = await fetch(url, {
        method,
        body: method === "POST" ? body : null,
        headers,
      });
      const data: ResponseData = await response.json();

      if (data.errors) {
        throw new ApiError("Error occurred!", data.errors, ErrorType.USER);
      }

      completeRequest({ responseType: "data", data });

      if (navigateLink) {
        navigate(navigateLink);
      }
    } catch (error) {
      completeRequest({ responseType: "error", error });
    }
  }, [url, method, body, headers, navigateLink, navigate, completeRequest]);

  useEffect(() => {
    if (toFetch) {
      void fetchData();
    }
  }, [toFetch, fetchData]);

  return { data, loading, fetchError };
};
