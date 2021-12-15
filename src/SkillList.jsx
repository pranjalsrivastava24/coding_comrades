import React from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import "./bootstrap/bootstrap.min.css";

const SkillList = (props) =>{
     
     return (
          <>
          <div className="todo_style">
          <i class = "fa fa-times" aria-hidden="true" onClick={() => {
               props.onSelect(props.id);
          } }><CancelIcon/></i>
     <li>{props.text}</li>
     </div>
     </>
     ) ;
}
export default SkillList; 