import style from "./Button.module.scss";

export const Button = ({action, text}) => {
    return (
        <button className={style.buttonStyling} onClick={() => action()}>{text}</button>
    )
}