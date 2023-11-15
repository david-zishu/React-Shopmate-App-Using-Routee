import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | shopmate`.toUpperCase();
  }, [title]);
  return null;
};
