import s from "./Button.module.scss";

const Button = ({ text, btnClick }) => {
  return (
    <div className={s.btnContainer}>
      <button className={s.quoteBtn} onClick={btnClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
