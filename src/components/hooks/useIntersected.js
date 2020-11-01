import { useEffect, useState, useRef } from 'react';
import { useIntersection } from "use-intersection";


const useIntersected =() => {
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


  useEffect(() => {
    if (intersectionOne) {
      setIntersectedAt(1)
    } else if (intersectionTwo) {
      setIntersectedAt(2)
    } else if (intersectionThree) {
      setIntersectedAt(3)
    }  
    else {
      setIntersectedAt(0)
    }

  }, [intersectionOne, intersectionTwo, intersectionThree])


  return { isIntersectedAt, triggerRefOne, triggerRefTwo, triggerRefThree }
};

export default useIntersected