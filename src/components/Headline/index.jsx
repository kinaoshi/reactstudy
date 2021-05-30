import classes from "src/components/Headline/Headline.module.css";

export function Headline(props) {
  const handleOnClick = () => {
    alert("次は#17から");
  };
  return (
    <div>
      <h1 className={classes.title}>{props.page} page</h1>

      <p className={classes.description}>
        アイアムの数は {props.children}個です
      </p>
      <button onClick={props.handleReduce}>減らす</button>
      <button onClick={handleOnClick}>進捗状況</button>
      
    </div>
  );
}
