import { useEffect } from "react";

export default function useKeyDown(key, action, stateDependency) {
  useEffect(() => {
    function onKeyup(e) {
      if (e.key === key) action();
    }
    window.addEventListener("keyup", onKeyup);
    return () => window.removeEventListener("keyup", onKeyup);
  }, [stateDependency]);
}
