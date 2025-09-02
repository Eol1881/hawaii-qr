import { useCallback, useEffect, useRef, useState } from 'react';

export const useToggleOutsideClick = <T extends HTMLElement>(initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const ref = useRef<T>(null);

  const toggle = useCallback((isOpen?: boolean) => {
    setIsOpen((prev) => (typeof isOpen === 'boolean' ? isOpen : !prev));
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return { isOpen, ref: ref as React.RefObject<T>, toggle };
};
