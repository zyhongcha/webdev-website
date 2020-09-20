import { useEffect, useState, useRef } from 'react';
import { useIntersection } from "use-intersection";


function useIntersected() {
  const [isIntersectedAt, setIntersectedAt] = useState(0);
  let triggerRefOne = useRef(null);
  let triggerRefTwo = useRef(null);
  let triggerRefThree = useRef(null);


  const intersectionOne = useIntersection(triggerRefOne, {
    rootMargin: "0% 0px -100% 0px",
    threshold: 0
  })
  const intersectionTwo = useIntersection(triggerRefTwo, {
    rootMargin: "0% 0px -100% 0px",
    threshold: 0
  })

  const intersectionThree = useIntersection(triggerRefThree, {
    rootMargin: "0% 0px -100% 0px",
    threshold: 0
  })

  const debounce = (func, wait = 20, immediate = true) => {
    let timeOut
    return () => {
      let context = this,
        args = arguments
      const later = () => {
        timeOut = null
        if (!immediate) func.apply(context, args)
      }
      const callNow = immediate && !timeOut
      clearTimeout(timeOut)
      timeOut = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  }

  useEffect(() => {
    if (intersectionOne) {
      debounce(setIntersectedAt(1))
    } else if (intersectionTwo) {
      debounce(setIntersectedAt(2))
    } else if (intersectionThree) {
      debounce(setIntersectedAt(3))
    }  
    else {
      debounce(setIntersectedAt(0))
    }

  }, [debounce, intersectionOne, intersectionTwo, intersectionThree])


  return { isIntersectedAt, triggerRefOne, triggerRefTwo, triggerRefThree }
};

export default useIntersected