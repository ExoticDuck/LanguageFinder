import React from 'react';
import { ArrayTaskType, TechnologiesType } from '../App';
import s from "./Catalogue.module.css"

type CataloguePropsType = {
    technologies: TechnologiesType
    selectTechnology: (id: number, selected: boolean) => void
    selectTask: (id: number, selected: boolean) => void
    choseTasks: boolean;
    choseTasksCallback: (value: boolean) => void
    tasks: ArrayTaskType
}

type CatalogueItemPropsType = {
    id: number
    name: string
    selected: boolean
    selectTechnology: (id: number, selected: boolean) => void
}

const CatalogueItem: React.FC<CatalogueItemPropsType> = (props) => {
    if (props.selected === true) {
        return(
            <div className={s.CatalogueItemSelected} onClick={() => props.selectTechnology(props.id, !props.selected)}>
                <h4>{props.name}</h4>
            </div>
        )
    } else {
        return(
            <div className={s.CatalogueItem} onClick={() => props.selectTechnology(props.id, !props.selected)}>
                <h4>{props.name}</h4>
            </div>
        )
    }
    
    
}

const Catalogue: React.FC<CataloguePropsType> = (props) => {

    let SortedItems, CatalogueItems;

    if (props.choseTasks === false) {
        SortedItems = props.technologies.sort((a, b) => {
            if(a.name[0] > b.name[0]) return 1;
            else if(a.name[0] < b.name[0]) return -1;
            else return 0;
        })
        CatalogueItems = SortedItems.map(e => <CatalogueItem id={e.id} name={e.name} selected={e.selected} selectTechnology={props.selectTechnology}/>)
    } else {
        SortedItems = props.tasks.sort((a, b) => {
            if(a.name[0] > b.name[0]) return 1;
            else if(a.name[0] < b.name[0]) return -1;
            else return 0;
        })
        CatalogueItems = SortedItems.map(e => <CatalogueItem id={e.id} name={e.name} selected={e.selected} selectTechnology={props.selectTask}/>)
    }

    
    
    return (
        <div className={props.choseTasks ? s.CatalogueForTasks : s.Catalogue}>
            <button className={s.Button} onClick={() => {props.choseTasksCallback(!props.choseTasks)}}>Tasks</button>
            {CatalogueItems}
        </div>
    )
}

export default Catalogue;