import classes from "./Card.module.css";

function Card(props) {
  // props.children  Card의 자식 컴포넌트를 렌더링 해줌
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;
