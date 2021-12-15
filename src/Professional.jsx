//import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { HashRouter, Route, Switch } from 'react-router-dom';
import  Personal from './Personal';
import  Upload from './Upload';
import Skills from './Skills';
import "./bootstrap/bootstrap.min.css";

const Professional = () => {
 
                
  

 const addEducation = () => {
  var form = document.getElementById('school-form');
  var display = form.classList.contains('d-none');
  
  var formC = document.getElementById('collage-form');
  var display = formC.classList.contains('d-none');

  var schbtn = document.getElementById('sch_btn');
  var display = schbtn.classList.contains('d-none');
  var clgbtn = document.getElementById('clg_btn');
  var display = clgbtn.classList.contains('d-none');
  if(display === true){
    schbtn.classList.remove('d-none')
    clgbtn.classList.remove('d-none')
   
                      }
    else{
    schbtn.classList.add('d-none')
    clgbtn.classList.add('d-none')
    formC.classList.add('d-none')
    form.classList.add('d-none')
    
       }

  }

 

 const addSchool = () => {
  var form = document.getElementById('school-form');
  var display = form.classList.contains('d-none');
  if(display === true){
    form.classList.remove('d-none')
  }
  else{
    form.classList.add('d-none')
  }
}

const addCollage = () => {
  var formC = document.getElementById('collage-form');
  var display = formC.classList.contains('d-none');
  if(display === true){
    formC.classList.remove('d-none')
  }
  else{
    formC.classList.add('d-none')
  
}
}


const addWork = () =>{

  var formW = document.getElementById('work-form');
  var display = formW.classList.contains('d-none');
  if(display === true){
    formW.classList.remove('d-none')
  }
  else{
    formW.classList.add('d-none')
  
}

}



    return (
              <>
              <HashRouter><Switch>
                    <Route exact path= "/Personal" component={Personal}/>
                    <Route exact path= "/Upload" component={Upload}/>
                </Switch></HashRouter>
         
                 <div className="main_professional">
                <form class="was-validated">
                <h1>Add Profesaional Details :</h1>
  <div class="mb-3">
    <label for="validationTextarea" class="form-label my-3">Profession Summary</label>
    <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Teacher for 10+ years and..." required></textarea>
  </div>
</form>
        
        
    
    <Button className="education" onClick={addEducation}>Add Education +</Button> <br/>
    <div class="knowledge">
  <Button className="education d-none mx-3" id="sch_btn" onClick={addSchool}>Add School</Button><br/>
    <div class="gy-5">
<form class="row g-3 gy-3 d-none mx-3" id='school-form'>
  <div class="col-md-6">
   <label for="inputEmail4" class="form-label">School Name</label>
   <input type="text" class="form-control" id="inputText"/>
  </div>
  <div class="col-md-3">
  <label for="inputText" class="form-label">City</label> 
    <input type="text" class="form-control" id="inputText"/>
  </div>
  <div class="col-12">
  <label for="inputAddress" class="form-label">Address</label>
  <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-md-2">
  <label for="inputMarks" class="form-label">% in 10th</label>
  <input type="number" class="form-control" id="inputMarks"/>
  </div>
  <div class="col-md-2">
  <label for="inputMarks" class="form-label">% in 12th</label>
  <input type="number" class="form-control" id="inputMarks"/>
  </div>
  <div class="col-sm-1">
  <label for="inputYear" class="form-label">Joining Year</label>
  <input type="number" class="form-control" id="inputYear"/>
  </div>
  <div class="col-sm-1">
  <label for="inputYear" class="form-label">Passing Year</label>
  <input type="number" class="form-control" id="inputYear"/>
  </div>
  <div class="col-12">
    
  </div>
  <div class="col-12">
  <button  class="btn btn-primary" type="button" onClick={addSchool}>Add</button>
  
  </div>
</form>
</div>
</div>



        <div class="knowledge">
<Button className="education d-none mx-3" onClick={addCollage} id="clg_btn">Add collage</Button>
 <div class="gy-5">
<form class="row g-3 gy-3 d-none mx-3" id="collage-form">

  <div class="col-md-6">
    <label for="inputName" class="form-label">Collage Name</label> 
    <input type="text" class="form-control" id="inputName"/> 
  </div>
  <div class="col-md-3">
  <label for="inputCity" class="form-label">City</label>  
     <input type="text" class="form-control" id="inputCity"/> 
  </div>
  <div class="col-12">
   <label for="inputAddress" class="form-label">Address</label>
   <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-md-2">
   <label for="inputMarks" class="form-label">Avg Agg. %</label> 
   <input type="text" class="form-control" id="inputMarks"/> 
  </div>
  <div class="col-sm-1">
  <label for="inputYear" class="form-label">Joining Year</label>  
     <input type="number" class="form-control" id="inputYear"/> 
  </div><div class="col-sm-1">
  <label for="inputYear" class="form-label">Passing Year</label>  
     <input type="number" class="form-control" id="inputYear"/> 
  </div>
  
  <div class="col-12">
   <button class="btn btn-primary" type="button" onClick={addCollage}>Add</button> 
  
  </div>
</form>
</div>
</div>
  

 
<Button className="Work_btn" onClick={addWork}>Add Work +</Button>
 <div class="gy-5">
<form class="row g-3 gy-3 d-none mx-3" id="work-form">

  <div class="col-md-6">
    <label for="inputName" class="form-label">Worked AT</label> 
    <input type="text" class="form-control" id="inputName"/> 
  </div>
  <div class="col-md-3">
  <label for="inputCity" class="form-label">City</label>  
     <input type="text" class="form-control" id="inputCity"/> 
  </div>
  <div class="col-sm-2">
   <label for="inputAddress" class="form-label">Work Exp.(yrs)</label>
   <input type="text" class="form-control" id="inputAddress"/>
  </div>
  
  <div class="work">
  <div class="mb-3">
  <label for="formFile" class="form-label">Add any certificate</label>
  <input class="form-control" type="file" id="formFile"/>
</div>
</div>
  
  <div class="col-12">
   <button class="btn btn-primary" type="button" onClick={addWork}>Add</button> 
  
  </div>
</form>
</div>

  
 
<div className="professional_skill my-5">
<Skills class="my-3"/>

</div>
<div class="d-grid gap-5 my-5 bottom_btn">
<a href="/Registration/#/Personal" className="previos_professional"><button class="Bswitch_btn" type="button">Previos</button></a>
  <a href="/Registration/#/Upload" className="next_professional"><button class="switch_btn " type="button">Next</button></a>
</div>
</div>
 
              </>

    );
  }


export default Professional;