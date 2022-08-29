import './App.css';

import React from 'react';
import { Box } from '@mui/system';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useRenderTimes } from './Utils';

import Button from '@mui/material/Button';

function PrimaryTerm({ num }) {
    const count = useRenderTimes();
    const dispatch = useDispatch();
      //const allStudentState = useSelector((state) => state);
      const primaryTermState = useSelector((state) => {
        // console.log(`PrimaryTerm useSelector: state = ${JSON.stringify(state)}`)
        return state.primary_skills?.[num];
      }, shallowEqual 
      );

      let sxObj = {m: 1, textTransform: 'none'};  
      const secondaryAreaObj = {
        backgroundColor: '#F5F5F5',
        width: 3/4,
        m: 'auto'
      }      
  
    return (
      <div className="App">
    <Button variant="contained" sx={sxObj} key={primaryTermState?.primary_term}
    onClick={() => dispatch({type: 'toggleButton', index: num})}
    >
            {primaryTermState?.primary_term}
			
    </Button> 
    <Box sx={secondaryAreaObj}>
	  { 
		// console.log(`primaryTermState.primary_term = ${primaryTermState.primary_term} primaryTermState.showCourses = ${primaryTermState.showCourses}`);
		primaryTermState?.showCategories ? 
		<span> {			
			primaryTermState?.categories?.map((category) => {							
			  return <Button variant="outlined" key={category.categoryName} sx={sxObj}>{category.categoryName}</Button>
			}
			)
		}
		</span>
		: <p>This component has re-rendered {count} times</p>
	  }
	</Box>    
      </div>
    );
}
  
export default PrimaryTerm;
  