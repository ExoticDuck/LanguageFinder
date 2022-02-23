import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Catalogue from './Components/Catalogue';
import TasksDisplay from './Components/TasksDisplay';
import Modal from './Components/Modal';

export type TechnologiesType = Array<TechnologyType>
export type TechnologyType = {
  id: number,
  name: string,
  tasks: Array<string>,
  selected: boolean
}
export type ArrayTaskType = Array<TaskType>
export type TaskType = {
  id: number,
  name: string,
  tasks: Array<string>,
  selected: boolean
}

function App() {
  let [technologies, setTechnologies] = useState<TechnologiesType>([
    {id: 1, name: "JavaScript", tasks: ["Front-End", "Back-End", "Dynamic Web pages", "Games", "Browser Extensions", "Server applications", "Mobile applications", "Desktop"], selected: false},
    {id: 2, name: "Java", tasks: ["Desktop development", "Android apps", "Server applications in financial services", "Web applications", "Software tools", "Data processing", "Full Stack"], selected: false},
    {id: 3, name: "Swift", tasks: ["IOS development", "Mobile", "Full Stack"], selected: false},
    {id: 4, name: "C", tasks: ["Embedded", "Back-end", "Full Stack"], selected: false},
    {id: 5, name: "C#", tasks: ["Back-end", "GameDev", "Mobile", "Data processing", "Full Stack", "Desktop", "DevOps", "Front-end"], selected: false},
    {id: 6, name: "C++", tasks: ["Back-end", "GameDev", "Mobile" , "Data processing", "Full Stack", "Embedded", "Desktop"], selected: false},
    {id: 7, name: "Go", tasks: ["Back-end", "Full Stack", "DevOps"], selected: false},
    {id: 8, name: "Clojure", tasks: ["Full Stack"], selected: false},
    {id: 9, name: "Rust", tasks: ["Back-end"], selected: false},
    {id: 10, name: "Objective-C", tasks: ["Mobile"], selected: false},
    {id: 11, name: "Groovy", tasks: ["Full Stack", "DevOps"], selected: false},
    {id: 12, name: "Apex", tasks: ["Back-end", "Full Stack"], selected: false},
    {id: 13, name: "1C", tasks: ["Full Stack"], selected: false},
    {id: 14, name: "Scala", tasks: ["Back-end", "Full Stack", "Data processing"], selected: false},
    {id: 15, name: "Dart", tasks: ["Mobile", "Full Stack"], selected: false},
    {id: 16, name: "Ruby", tasks: ["Back-end", "Full Stack"], selected: false},
    {id: 17, name: "Kotlin", tasks: ["Mobile", "Back-End", "Full Stack"], selected: false},
    {id: 18, name: "TypeScript", tasks: ["Back-end", "Front-end", "Mobile", "Full Stack", "DevOps"], selected: false},
    {id: 19, name: "PHP", tasks: ["Back-end", "Full Stack"], selected: false},
    {id: 20, name: "Python", tasks: ["Back-end", "Data processing", "Full Stack", "DevOps"], selected: false},
    {id: 21, name: "Elixir", tasks: ["Full Stack"], selected: false},
    {id: 22, name: "ABAP", tasks: ["Full Stack"], selected: false},
    {id: 23, name: "Haskell", tasks: ["for creating tools for text processing, parsing", "creating filter systems for spam processing"], selected: false}, //!
    {id: 24, name: "Assembler", tasks: ["Driver development"], selected: false},
    {id: 25, name: "R", tasks: ["data visualization", "data collection and analysis", "search for patterns and deviations in data", "verification and confirmation of hypotheses"], selected: false},
    {id: 26, name: "Perl", tasks: ["system administration", "web development", "network programming", "games", "bioinformatics"], selected: false},//!
    {id: 27, name: "Pascal/Delphi", tasks: ["used for teaching programming"], selected: false},//!
    {id: 28, name: "Erlang", tasks: ["Back-end"], selected: false}
  ]);
  let [tasks, setTasks] = useState<ArrayTaskType>([
    {id: 1, name: "Front-End", tasks: ["JavaScript", "C#", "TypeScript"], selected: false},
    {id: 2, name: "Back-End", tasks: ["JavaScript", "C", "C#", "C++", "Go", "Rust", "Apex", "Scala", "Ruby", "Kotlin", "TypeScript", "PHP", "Python", "Erlang"], selected: false},
    {id: 3, name: "Dynamic Web pages", tasks: ["JavaScript"], selected: false},
    {id: 4, name: "Games", tasks: ["JavaScript"], selected: false},
    {id: 5, name: "Browser Extensions", tasks: ["JavaScript"], selected: false},
    {id: 6, name: "Server applications", tasks: ["JavaScript", "Java"], selected: false},
    {id: 7, name: "Mobile applications", tasks: ["JavaScript"], selected: false},
    {id: 8, name: "Desktop development", tasks: ["JavaScript", "Java", "C#", "C++"], selected: false},
    {id: 9, name: "Android apps", tasks: ["Java"], selected: false},
    {id: 10, name: "Web applications", tasks: ["Java"], selected: false},
    {id: 11, name: "Software tools", tasks: ["Java"], selected: false},
    {id: 12, name: "Data processing", tasks: ["Java", "C#", "C++", "Scala", "Python", "R"], selected: false},
    {id: 13, name: "Full Stack", tasks: ["Java", "Swift", "C", "C#", "C++", "Go", "Clojure", "Groovy", "Apex", "1C", "Scala", "Dart", "Ruby", "Kotlin", "TypeScript", "PHP", "Python", "Elixir", "ABAP"], selected: false},
    {id: 14, name: "IOS development", tasks: ["Swift"], selected: false},
    {id: 15, name: "Mobile", tasks: ["Swift", "C#", "C++", "Objective-C", "Dart", "Kotlin", "TypeScript"], selected: false},
    {id: 16, name: "Embedded", tasks: ["C", "C++"], selected: false},
    {id: 17, name: "DevOps", tasks: ["C#", "Go", "Groovy", "TypeScript", "Python"], selected: false},
    {id: 18, name: "Driver development", tasks: ["Assembler"], selected: false},
    {id: 19, name: "GameDev", tasks: ["C#", "C++"], selected: false},
  ]);

  let [choseTasks, setChoseTasks] = useState<boolean>(false);

  const [modalActive, setModalActive] = useState<boolean>(true);

  const SelectTechnology = (id: number, selected: boolean) => {
    let result = technologies.map(e => e.id === id ? {...e, selected: selected} : {...e, selected: false});
    
    setTechnologies(result);
  }
  const SelectTask = (id: number, selected: boolean) => {
    let result = tasks.map(e => e.id === id ? {...e, selected: selected} : {...e, selected: false});
    console.log(selected);
    setTasks(result);
  }

  const ChoseTasksCallback = (value: boolean) => {
    setChoseTasks(value);
  }
  let TasksForDisplay
  choseTasks ? TasksForDisplay = tasks.find(e => e.selected === true)?.tasks : TasksForDisplay = technologies.find(e => e.selected === true)?.tasks;
  
  return (
    <div className="App">
      <Modal active={modalActive} setActive={setModalActive}/>
      <Catalogue technologies={technologies} selectTechnology={SelectTechnology} selectTask={SelectTask} choseTasks={choseTasks} choseTasksCallback={ChoseTasksCallback} tasks={tasks}/>
      <TasksDisplay tasks={TasksForDisplay} choseTasks={choseTasks}/>
    </div>
  );
}

export default App;
