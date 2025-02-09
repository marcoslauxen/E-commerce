"use client";
import { useCallback } from "react";

export default function useLocalStorage() {
  const get = useCallback((key: string) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }, []);

  const set = useCallback((key: string, value: unknown) => {
    localStorage.setItem(key, JSON.stringify(value));
  }, []);

  const remove = useCallback((key: string) => {
    localStorage.removeItem(key);
  }, []);

  return { get, set, remove };
}
