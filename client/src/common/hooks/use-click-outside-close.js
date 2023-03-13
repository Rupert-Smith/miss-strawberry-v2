import { useState, useEffect } from "react";

export default function useClickOutsideClose(handleClickOutside) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return { open, setOpen };
}
