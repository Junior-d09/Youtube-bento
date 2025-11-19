"use client";
import {useState} from "react";

export default function useFetcher<T>(url: string, initialData: T) {
  const [data, setData] = useState<T>(initialData);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json as T);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
      console.log("fetched data");
    }
  }

  return {data, error, loading, fetchData};
};