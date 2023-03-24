import { useEffect } from "react";

export const useOutsideClick = (ref, setFunction) => {
  return useEffect(() => {
    const handler = (e) => {
      if (!ref.current.contains(e.target)) {
        setFunction(false)
      }
    }
    document.addEventListener("mousedown", handler)

    return () => {
      document.removeEventListener("mousedown", handler)
    }
  }, [setFunction, ref])
}