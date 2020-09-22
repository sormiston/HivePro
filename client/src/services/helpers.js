import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// export function mergeDateTime(dateObj, durN) {
//   const startDateTime = dateObj
//     .clone()
//     .set('hours', durN)
// } 

export function ScrollToTop() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;

}