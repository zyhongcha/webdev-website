import { useEffect, useState, useRef } from 'react';

function useNavChangeColor() {
  const [hasReached, setHasReached] = useState(false);
  let newWorkElement = useRef(null);

  const handleScroll = () => {
    window.scrollY > newWorkElement.current.getBoundingClientRect().bottom 
    ? setHasReached(true) : setHasReached(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [handleScroll])

  return { hasReached, newWorkElement }
}
export default useNavChangeColor;
