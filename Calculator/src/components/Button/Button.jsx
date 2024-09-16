import style from "./Button.module.scss";

export const Button = ({action, text, type}) => {
    return (
        <button className={style.buttonStyling} onClick={() => action(type)}>{text}</button>
    )
}