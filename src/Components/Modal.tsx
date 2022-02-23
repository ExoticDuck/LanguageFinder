import React from 'react';
import s from "./Modal.module.css"

type ModalPropsType = {
    active: boolean;
    setActive: (value: boolean) => void
}

const Modal = (props: ModalPropsType) => {
    return(
        <div className={props.active === true ? s.ModalActive : s.Modal}>
            <div className={s.ModalContent}>
                <p>
                Привет, друг! LanguageFinder - это путеводитель по языкам программирования. Тут ты можешь узнать для чего какой язык нужен и подобрать самый оптимальный вариант для своих задач, не перебирая десятки сайтов в поисках информации. 
                </p>
                <button className={s.Button} onClick={() => props.setActive(false)}>Ok</button>
            </div>
        </div>
    )
}

export default Modal;