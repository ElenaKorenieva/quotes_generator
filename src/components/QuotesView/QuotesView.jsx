import s from "./Quotes.module.scss";

const QuotesView = ({ quote, author }) => {
  return (
    <div>
      <div className={s.quoteContainer}>
        <p className={s.quoteText} style={{ textTransform: "capitalize" }}>
          {`"${quote}"`}
        </p>
        <p className={s.author} style={{ textTransform: "capitalize" }}>
          {author}
        </p>
      </div>
    </div>
  );
};

export default QuotesView;
