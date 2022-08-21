export const originalState = {
    students: [
      {
        id: 111,
        name: "Foo1 Bar1",
        courses: [
          { id: 221, name: "Underwater basket weaving" },
          { id: 222, name: "Data structures and algorithms" }
        ],
        showCourses: false
      },
      {
        id: 112,
        name: "Foo2 Bar2",
        courses: [
          { id: 222, name: "Data structures and algorithms" },
          { id: 223, name: "Philosophy of Coffee" },
          { id: 224, name: "Differential equations" }
        ],
        showCourses: false
      },
      {
        id: 113,
        name: "Foo3 Bar3",
        courses: [
          { id: 221, name: "Underwater basket weaving" },
          { id: 224, name: "Differential equations" },
          { id: 225, name: "Ancient civilizations" }
        ],
        showCourses: false        
      }
    ]
  };

export function reducer(state={}, action) {  
  	//console.log(`reducer: action.type = ${action.type}`);
  switch (action.type) {
      case 'getStudents':
        console.log(`reducer, case getStudents: originalState.students.length = ${originalState.students.length} `);
        return originalState;   
      case 'toggleButton': 
       let newStudents = state.students.slice();
       newStudents[action.index].showCourses = !state.students[action.index].showCourses;
       let newState = {students: newStudents}
       return newState;    
      default:
	      return state;
  }
}
