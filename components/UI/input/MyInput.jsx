import React from "react";
import classes from "./MyInput.module.css";
//
// const MyInput = React.forwardRef((props, ref) => {
//   return <input ref={ref} {...props} className={classes.myInput} />;
// });
// export default MyInput;
const MyInput = (props) => {
  return <input type="text" {...props} className={classes.myInput} />;
};
export default MyInput;
