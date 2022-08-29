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

/*
export const originalPSState = {
    students: 
	[
		{
		id: 111,
		"primary_term": "Typescript",
		categories: [
		{
			categoryName: "Compiled languages", 
			filesAndPhrases: [
				{
				filename: "MyProjects/Python/SCP3/SkillClusters/DataFilesByDate/20200105/2022/202201/20220127/3a7e274a-e064-4e3a-a828-3ebabbca9528.txt",
				phrase: "Compiled languages - e.g. Typescript"
				}						
			]
		},		
		{
			"categoryName": "Development languages", 
			"filesAndPhrases": [
				{
				"filename": "MyProjects/Python/SCP3/SkillClusters/DataFilesByDate/20200105/2021/202109/20210925/6bd7096a-8c34-4a86-b162-064340dd9d41.txt",
				"phrase": "Development languages: C# .NET Core, HTML, CSS, TypeScript"
				}
			]
		},	
		{
			"categoryName": "front-end technologies", 
			"filesAndPhrases": [
				{
				"filename": "MyProjects/Python/SCP3/SkillClusters/DataFilesByDate/20200105/2021/202103/20210328/78b01320-fc8d-4a1c-af34-1723a622c94c.txt",
				"phrase": "front end technologies (Javascript - preferably React/Redux and React-Native, Typescript"
				},
				{
				"filename": "MyProjects/Python/SCP3/SkillClusters/DataFilesByDate/20200105/2022/202204/20220424/65c27fe4-fbc9-4881-b39b-d52a191cce58.txt",
				"phrase": "front-end technologies such as React, VueJS, Bootstrap, HTML, JavaScript, TypeScript"
				}			
			]
		},	
		{
			"categoryName": "JavaScript", 
			"filesAndPhrases": [
				{
				"filename": "MyProjects/Python/SCP3/SkillClusters/DataFilesByDate/20200105/2022/202207/20220710/44f39ecf-32a7-42ef-9048-d7c0c09feff1.txt",
				"phrase": "JavaScript (Typescript"
				}
			]
		},			
		{
			"categoryName": "JavaScript and frameworks",
			"filesAndPhrases": [
				{
				"filename": "MyProjects/Python/SCP3/SkillClusters/DataFilesByDate/20200105/2022/202208/20220819/ab8428a7-1e10-4334-bb6a-139cdbc7f19f.txt",
				"phrase": "JavaScript and frameworks (e.g. ES6, TypeScript"
				}			
			]
		},	
		{
			"categoryName": "languages", 
			"filesAndPhrases": [
				{
				"filename": "MyProjects/Python/SCP3/SkillClusters/DataFilesByDate/20200105/2021/202105/20210520/568e2765-61ca-4639-891b-b0668f4630b4.txt",
				"phrase": "Languages: Javascript, Typescript"
				},
				{
				"filename": "MyProjects/Python/SCP3/SkillClusters/DataFilesByDate/20200105/2022/202205/20220504/3fcbaee5-8d61-4856-8c21-3a38d43b2738.txt",
				"phrase": "languages such as Javascript/Typescript"
				}			
			]
		},		
		{
			"categoryName": "modern JavaScript and frameworks",
			"filesAndPhrases": [
				{
				"filename": "MyProjects/Python/SCP3/SkillClusters/DataFilesByDate/20200105/2022/202208/20220819/ab8428a7-1e10-4334-bb6a-139cdbc7f19f.txt",
				"phrase": "modern JavaScript and frameworks (e.g. ES6, TypeScript"
				}			
			]
		},		
		{
			"categoryName": "modern programming languages", 
			"filesAndPhrases": [
				{
				"filename": "MyProjects/Python/SCP3/SkillClusters/DataFilesByDate/20200105/2022/202207/20220717/bc4f3667-2ce7-46b5-b635-6df4dc664cff.txt",
				"phrase": "modern programming languages like Ruby on Rails, Javascript, Typescript"
				}						
			]
		},	
		{
			"categoryName": "object oriented languages", 
			"filesAndPhrases": [
				{
				"filename": "MyProjects/Python/SCP3/SkillClusters/DataFilesByDate/20200105/2022/202207/20220722/7638da0a-005f-4bae-a5b1-3c4a38237b8a.txt",
				"phrase": "TypeScript with Node.js or another strongly typed, object oriented language"
				}			
			]
		},	
		{
			"categoryName": "Programming Languages", 
			"filesAndPhrases": [
				{
				"filename": "MyProjects/Python/SCP3/SkillClusters/DataFilesByDate/20200105/2022/202202/20220221/882e1b01-13e9-434b-b7d0-0a416b819def.txt",
				"phrase": "Programming Languages: Ruby, JavaScript and TypeScript"
				},
				{
				"filename": "MyProjects/Python/SCP3/SkillClusters/DataFilesByDate/20200105/2022/202207/20220717/bc4f3667-2ce7-46b5-b635-6df4dc664cff.txt",
				"phrase": "modern programming languages like Ruby on Rails, Javascript, Typescript"
				}									
			]
		},	
		{
			"categoryName": "strongly typed, object oriented languages", 
			"filesAndPhrases": [
				{
				"filename": "MyProjects/Python/SCP3/SkillClusters/DataFilesByDate/20200105/2022/202207/20220722/7638da0a-005f-4bae-a5b1-3c4a38237b8a.txt",
				"phrase": "TypeScript with Node.js or another strongly typed, object oriented language"
				}			
			]
		},			
		{
			"categoryName": "UI technologies", 
			"filesAndPhrases": [
				{
				"filename": "MyProjects/Python/SCP3/SkillClusters/DataFilesByDate/20200105/2022/202208/20220824/e98b3a2a-fbb9-4781-89d3-036415e6f936.txt",
				"phrase": "UI technologies such as JavaScript, CSS, HTML, and/or TypeScript"
				}			
			]
		}
		],
		showCourses: false
		},
		{
			id: 112,
			"primary_term": "SQL",
			"categories": [	
			{
				"categoryName": "database technologies", 
				"filesAndPhrases": [
					{
					"filename": "MyProjects/Python/SCP3/SkillClusters/DataFilesByDate/20200105/2020/202011/20201127/cd702e48-9b3e-4232-845d-d4739bf0eeda.txt",
					"phrase": "database technology such as SQL"
					},
					{
					"filename": "MyProjects/Python/SCP3/SkillClusters/DataFilesByDate/20200105/2021/202112/20211204/ead97651-2bff-4060-ada0-11003e9ce9a9.txt",
					"phrase": "database technologies (e.g. SQL"
					}			
				]
			},
			{
				"categoryName": "languages", 
				"filesAndPhrases": [
					{
					"filename": "MyProjects/Python/SCP3/SkillClusters/DataFilesByDate/20200105/2013/201310/20131024/3c1555cb-6959-4487-bf06-71efa8b45999.txt",
					"phrase": "Languages: JavaScript, JSON, C#, HTML5, CSS3, SQL"
					},
					{
					"filename": "MyProjects/Python/SCP3/SkillClusters/DataFilesByDate/20200105/2022/202204/20220421/4c50062f-118e-4001-8370-e042ff9555a8.txt",
					"phrase": "Languages: PHP, .NET, C#, JavaScript, HTML/CSS, XML/XML Schema, SQL"
					},
					{
					"filename": "MyProjects/Python/SCP3/SkillClusters/DataFilesByDate/20200105/2022/202205/20220504/3fcbaee5-8d61-4856-8c21-3a38d43b2738.txt",
					"phrase": "languages such as Javascript/Typescript and SQL"
					}			
				]
			}	
			],
			showCourses: false
		},
		{
			id: 113,
			"primary_term": "Git",
			"categories": [
			{
				"categoryName": "code versioning tools", 
				"filesAndPhrases": [
					{
					"filename": "MyProjects/Python/SCP3/SkillClusters/DataFilesByDate/20200105/2022/20220115/112144b7-1892-4de4-9ed1-f098e396ea50.txt",
					"phrase": "code versioning tools such as Git"
					},
					{
					"filename": "MyProjects/Python/SCP3/SkillClusters/DataFilesByDate/20200105/2022/202204/20220422/e4ac3765-45db-45d1-8947-b46d4d5e6393.txt",
					"phrase": "code versioning tools, such as Git"
					}						
				]
			},	
			{
				"categoryName": "source code repositories", 
				"filesAndPhrases": [
					{
					"filename": "MyProjects/Python/SCP3/SkillClusters/DataFilesByDate/20200105/2013/201310/20131009/3d9a0a02-8513-4963-878b-41c31c5d67d4.txt",
					"phrase": "source code repositories (Git"
					},		
					{
					"filename": "MyProjects/Python/SCP3/SkillClusters/DataFilesByDate/20200105/2021/202109/20210930/f3978bc3-df46-452d-85fb-9116df604993.txt",
					"phrase": "GIT or other source code repositories"
					}				
				]
			},
			{
				"categoryName": "source code/version control tools", 
				"filesAndPhrases": [
					{
					"filename": "MyProjects/Python/SCP3/SkillClusters/DataFilesByDate/20200105/2022/202207/20220729/8be37f51-51c7-4efd-9587-37fc8a680173.txt",
					"phrase": "source code/version control tools such as Git"
					}
				]
			},
			{
				"categoryName": "source control management systems", 
				"filesAndPhrases": [
					{
					"filename": "MyProjects/Python/SCP3/SkillClusters/DataFilesByDate/20200105/2022/202207/20220731/b0018267-b7b1-41db-86a1-a77082999f1a.txt",
					"phrase": "source control management systems, preferably Git"
					}			
				]
			},	
			{
				"categoryName": "source control systems", 
				"filesAndPhrases": [
					{
					"filename": "MyProjects/Python/SCP3/SkillClusters/DataFilesByDate/20200105/2021/202109/20210909/67619263-5e5f-47b5-aacf-a25977492f19.txt",
					"phrase": "source control systems like git"
					},
					{
					"filename": "MyProjects/Python/SCP3/SkillClusters/DataFilesByDate/20200105/2022/202205/20220527/fee99d49-9a1e-437e-83fb-309f0aa5b843.txt",
					"phrase": "source control systems (i.e., GIT"
					},
					{
					"filename": "MyProjects/Python/SCP3/SkillClusters/DataFilesByDate/20200105/2022/202205/20220529/c8dfdfa4-338f-4f61-8d1b-4d2942255c97.txt",
					"phrase": "source control systems, such as Git"
					},
					{
					"filename": "MyProjects/Python/SCP3/SkillClusters/DataFilesByDate/20200105/2022/202208/20220814/7ecddafd-312e-4004-818d-5b0d3c72b9e6.txt",
					"phrase": "source control systems and workflows in a small team environment - preferably with Git"
					}			
				]
			},	
			{
				"categoryName": "version control", 
				"filesAndPhrases": [
					{
					"filename": "MyProjects/Python/SCP3/SkillClusters/DataFilesByDate/20200105/2021/202112/20211204/ead97651-2bff-4060-ada0-11003e9ce9a9.txt",
					"phrase": "version control (e.g. Git"
					},
					{
					"filename": "MyProjects/Python/SCP3/SkillClusters/DataFilesByDate/20200105/2022/202202/20220210/c5d530c0-f702-4e5f-95cd-12595237bf94.txt",
					"phrase": "version control via Git"
					},
					{
					"filename": "MyProjects/Python/SCP3/SkillClusters/DataFilesByDate/20200105/2022/202204/20220414/de2f2cf8-0ca2-47f7-935c-0b154d7feee1.txt",
					"phrase": "version control (Git"
					},
					{
					"filename": "MyProjects/Python/SCP3/SkillClusters/DataFilesByDate/20200105/2022/202205/20220515/4eea708e-a96d-4a29-847e-12e8c4ced23e.txt",
					"phrase": "Git version control"
					}						
				]
			},
			{
				"categoryName": "version control systems", 
				"filesAndPhrases": [	
					{
					"filename": "MyProjects/Python/SCP3/SkillClusters/DataFilesByDate/20200105/2022/202204/20220408/cce13448-99c5-4581-a36e-c159b4f61f2d.txt",
					"phrase": "git Version control system"
					},
					{
					"filename": "MyProjects/Python/SCP3/SkillClusters/DataFilesByDate/20200105/2022/202208/20220813/fc5b546c-cab5-4a76-9e85-2d364c8b9d75.txt",
					"phrase": "Git or another version control system"
					}			
				]
			}
			],
			showCourses: false
		}
	]
};
*/

export function reducer(state={}, action) {  
  	//console.log(`reducer: action.type = ${action.type}`);
  switch (action.type) {
      case 'getStudents':
        console.log(`reducer, case getStudents: originalState.students.length = ${originalState.students.length} `);
        return originalState;   
		// return originalPSState;
		/*
      case 'stateFromBackend':
		let stFromBackend = Object.assign({}, action.allSkills);
		//console.log(`reducer case STATE_FROM_BACKEND: stFromBackend = ${JSON.stringify(stFromBackend)}`);
		console.log(`reducer case STATE_FROM_BACKEND: we are here`);
			
		return stFromBackend;
		*/
      case 'toggleButton': 
       let newStudents = state.students.slice();
	   // let newPrimarySkills = state.primary_skills.slice();
       newStudents[action.index].showCourses = !state.students[action.index].showCourses;
	   // newPrimarySkills[action.index].showCategories = !state.primary_skills[action.index].showCategories;
       let newState = {students: newStudents}
	   // let newState = {primary_skills: newPrimarySkills}
       return newState;    
      default:
	      return state;
  }
}
