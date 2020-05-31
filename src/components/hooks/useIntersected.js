import { useEffect, useState, useRef } from 'react';
import { useIntersection } from "use-intersection";


function useIntersected() {
  const [isIntersectedWorksOne, setIntersectedWorksOne] = useState(false);
  const [isIntersectedWorksTwo, setIntersectedWorksTwo] = useState(false);
  let triggerRefOne = useRef(null);
  let triggerRefTwo = useRef(null);

  
  const intersectionOne = useIntersection(triggerRefOne, {
    rootMargin: "0% 0px -99% 0px",
    threshold: 0
  })

  const intersectionTwo = useIntersection(triggerRefTwo, {
    rootMargin: "0% 0px -99% 0px",
    threshold: 0
  })

  useEffect(() => {
    if (intersectionOne) {
      setIntersectedWorksOne(true);
    } else {
      setIntersectedWorksOne(false)
    }
  }, [intersectionOne])

  useEffect(() => {
    if (intersectionTwo) {
      setIntersectedWorksTwo(true);
    } else {
      setIntersectedWorksTwo(false)
    }
  }, [intersectionTwo])

  return { isIntersectedWorksOne,isIntersectedWorksTwo, triggerRefOne,triggerRefTwo }
};

export default useIntersected