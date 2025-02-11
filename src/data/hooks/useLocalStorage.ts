'use client';
import { useCallback } from 'react';

export default function useLocalStorage() {
  const get = useCallback((key: string) => {
    if (typeof window !== 'undefined') {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    }
    return null;
  }, []);

  const set = useCallback((key: string, value: unknown) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, []);

  const remove = useCallback((key: string) => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  }, []);

  return { get, set, remove };
}
