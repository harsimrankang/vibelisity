import { useState, useEffect } from 'react';

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

const getHeight = () =>
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

function HandleWindowResize() {
  let [dimensions, setDimensions] = useState({
    width: getWidth(),
    height: getHeight(),
  });

  useEffect(() => {
    let timeoutId = null;
    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(
        () => setDimensions({ width: getWidth(), height: getHeight() }),
        150
      );
    };
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return dimensions;
}
export default HandleWindowResize;
