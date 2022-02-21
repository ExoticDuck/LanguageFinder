import React from 'react';
import s from "./TasksDisplay.module.css"

type TasksDisplayPropsType = {
    tasks?: Array<string> 
    choseTasks: boolean
}

type TasksPropsType = {
    name: string
}

const TasksDisplay: React.FC<TasksDisplayPropsType> = (props) => {

    let MappedTasks;
    props.choseTasks ? MappedTasks = props.tasks?.map(t => <Task name={t}/>) : MappedTasks = props.tasks?.map(t => <Task name={t}/>)

    return(
        <div className={s.TasksDisplay}>
            {MappedTasks}
        </div>
    )
}

const Task: React.FC<TasksPropsType> = (props) => {
    return(
        <div className={s.Task}>
            <h1>{props.name}</h1>
        </div>
    )
}

export default TasksDisplay;