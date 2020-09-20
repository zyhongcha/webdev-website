import { useEffect, useState, useRef } from 'react';

function useNavChangeColor() {
  const [hasReached, setHasReached] = useState(false);
  let newWorkElement = useRef(null);
  let aboutMeElement = useRef(null);


  const handleScroll = () => {
    if (window.scrollY > newWorkElement.current.getBoundingClientRect().bottom) {
      setHasReached(true)
    }
    else if (window.scrollY > aboutMeElement.current.getBoundingClientRect().bottom) {
      setHasReached(true)

    }
    else {
      setHasReached(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [handleScroll])

  return { hasReached, newWorkElement, aboutMeElement }
}
export default useNavChangeColor;
