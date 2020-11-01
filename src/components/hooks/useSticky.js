import { useEffect, useState, useRef } from 'react';

const useSticky = () => {
  const [isSticky, setIsSticky] = useState(false);
  const element = useRef(null);

  const handleScroll = () => {
    window.scrollY >= element.current.getBoundingClientRect().top ? setIsSticky(true) : setIsSticky(false);
  }

  
  useEffect(() => {
 
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [handleScroll])

  return { isSticky, element }
}

export default useSticky;