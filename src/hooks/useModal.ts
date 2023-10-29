import { useState, useCallback } from "react";

export const useModal = (defaultIsOpen: boolean = false) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);

  // TODO: useStateのsetの方がuseCallbackで囲むのって意味あるっけ
  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return { isOpen, open, close };
};
