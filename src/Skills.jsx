import React, { useState } from 'react';
import './index.css';
import SkillList from './SkillList.jsx';
import AddIcon from '@material-ui/icons/Add';
import "./bootstrap/bootstrap.min.css";


const Skills = () => {
const [item,setItem] = useState("");
const [list,setList] = useState([]);
const [input,setInput] = useState("Add Skills");


const addItems = () => {
  if(item===""){
    setInput("Input is Empty");
  }
  else {
  setList((oldvalue) => {
  return [...oldvalue,item]
  } )
  setItem("");
  setInput("Add Skills");
   }
}


const itemEvent = (event) =>{
  setItem(event.target.value);
}

const deleteItems = (id) => {
  //console.log("delete");
  setList((oldvalue) => {
    return oldvalue.filter((arrEle, index) => {
      return index !== id ;
    }
    );
  } );
} 

const viewSkills = () => {
  var sklbtn = document.getElementById('skills');
  var display = sklbtn.classList.contains('d-none');
  if(display === true){
    sklbtn.classList.remove('d-none')
  }
  else{
    sklbtn.classList.add('d-none')
  }
}

return(

  <>
     
     
  
  <div className="main_Skill_div">
         <button className="skill_btn" on onClick={viewSkills}>Add Skills +</button>
         <div className = "Skill_List d-none" id="skills">
         
  
  <br/>
  <input className="Skill_input" type="text" placeholder={input} onChange={itemEvent} value={item} maxLength="15"/>
  <button className="add_skill" onClick={addItems}><AddIcon/></button>
  <br/>
  
  
  <ol>
       { list.map( (itemvalue,index) => {
         return  <SkillList text={itemvalue} id={index} key={index} onSelect={deleteItems} /> ;
         
       }) }
    
   
  </ol>


</div>
    </div>

  </>
)
      }


export default Skills;