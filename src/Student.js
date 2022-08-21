import './App.css';

import React, {useEffect} from 'react';
import { Box } from '@mui/system';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useRenderTimes } from './Utils';

import Button from '@mui/material/Button';

function Student({ num }) {
    const count = useRenderTimes();
    const dispatch = useDispatch();
      //const allStudentState = useSelector((state) => state);
      const studentState = useSelector((state) => {
        console.log(`Student useSelector: state = ${JSON.stringify(state)}`)
        return state.students?.[num];
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
    <Button variant="contained" sx={sxObj} key={studentState?.id}
    onClick={() => dispatch({type: 'toggleButton', index: num})}
    >
            {studentState?.name}
    </Button> 
    <Box sx={secondaryAreaObj}>
	  { 
		//console.log(`primarySkill.primary_term = ${primarySkill.primary_term} primarySkill.showCategories = ${primarySkill.showCategories}`);
		studentState.showCourses ? 
		<span> {
			studentState.courses.map((course) => {							
			  return <Button variant="outlined" key={course.id} sx={sxObj}>{course.name}</Button>
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
  
export default Student;
  