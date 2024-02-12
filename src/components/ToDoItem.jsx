import React from "react";
function todoItem(props) {
  //pulling function from parent
  //but send props back is only done within a function
  return (
    <div onClick={() => props.onChecked(props.id)}>
      <li>{props.text}</li>;
    </div>
  );
}

export default todoItem;

/*const [isDone, setDone] = useState(false); //state management and declaration
  function toogleDone() {
    setDone(!isDone); //event handling     /
    //console.log(done);
  }
  strike through behavior 
  */

//const style = { textDecoration: isDone ? "line-through" : "none" }; //Ternary operator
