import classes from "./TodoDate.module.css";

function TodoDate({ date }) {
  const month = date.toLocaleString("en-UK", { month: "short" });
  const day = date.toLocaleString("en-UK", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className={classes["expense-date"]}>
      <div className={classes["expense-date__month"]}>{month}</div>
      <div className={classes["expense-date__day"]}>{day}</div>
      <div className={classes["expense-date__year"]}>{year}</div>
    </div>
  );
}

export default TodoDate;
