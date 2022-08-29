export function skillsReducer(state={}, action) {  
  	console.log(`skillsReducer: action.type = ${action.type}`);
  switch (action.type) {
      case 'stateFromBackend':
		let stFromBackend = Object.assign({}, action.allSkills);
		//console.log(`reducer case STATE_FROM_BACKEND: stFromBackend = ${JSON.stringify(stFromBackend)}`);
		console.log(`skillsReducer case STATE_FROM_BACKEND: we are here`);			
		return stFromBackend;
      case 'toggleButton': 
	   let newPrimarySkills = state.primary_skills.slice();
	   newPrimarySkills[action.index].showCategories = !state.primary_skills[action.index].showCategories;
	   let newState = {primary_skills: newPrimarySkills}
       return newState;    
      default:
	      return state;
  }
}