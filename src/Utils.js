import * as React from 'react';

function useRenderTimes() {
  const renderRef = React.useRef(0);

  React.useEffect(() => {
    renderRef.current = renderRef.current + 1;
  });

  return renderRef.current;
}

const utils = {
	getButtonClassByRatio(ratio){
	  const ratioNum = parseFloat(ratio);
	  if (ratioNum <= 0.2) {
		  return "color_02"
	  }
	  if (ratioNum <= 0.4) {
		  return "color_04"
	  }
	  if (ratioNum <= 0.6) {
		  return "color_06"
	  }
	  if (ratioNum <= 0.8) {
		  return "color_08"
	  }
	  return "color_10";
  },
  getButtonClass(ratio){
	  const ratioNum = parseInt(ratio);
	  if (ratioNum <= 2) {
		  return "color_02"
	  }
	  if (ratioNum <= 4) {
		  return "color_04"
	  }
	  if (ratioNum <= 6) {
		  return "color_06"
	  }
	  if (ratioNum <= 8) {
		  return "color_08"
	  }
	  return "color_10";
  }  
};

export default utils;		

export { useRenderTimes };