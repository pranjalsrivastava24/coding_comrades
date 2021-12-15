import React from 'react';
import "./bootstrap/bootstrap.min.css";
import { HashRouter, Route, Switch } from 'react-router-dom';
import  Professional from './Professional';
import  Varification from './Varification';


const Upload = () => {


  
  

    return (
 <>
 <HashRouter>
<Switch>
  <Route exact path= "/Professional" component={Professional}/>
  <Route exact path= "/Varification" component={Varification}/>
</Switch></HashRouter>


              <div className="upload_container">
                <h1 className="upload_h1">Upload Following Details :</h1>
           
                <div class="mb-3 my-5">
  <label for="formFile" class="form-label upload_caption mx-5 choose">10th ScoreCard :</label>
  <input class="form-control" type="file" id="formFile"/>
</div>          
                  <div class="mb-3">
  <label for="formFile" class="form-label upload_caption mx-5 choose">12th ScoreCard :</label>
  <input class="form-control" type="file" id="formFile"/>
</div>    
                   <div class="mb-3">
  <label for="formFile" class="form-label upload_caption mx-5 choose">Collage Marksheet :</label>
  <input class="form-control" type="file" id="formFile"/>
</div>
                   <div class="mb-3">
  <label for="formFile" class="form-label upload_caption mx-5 choose">Experience Certificate :</label>
  <input class="form-control" type="file" id="formFile"/>
</div>

<label for="formFile" class="form-label upload_caption mx-2 choose">Choose Govt._Id :</label>
<select id="inputSelect" class=" form-select form-select-sm" aria-label=".form-select-sm example">
    <option selected>Choose any Govt Id</option>
    <option>Adhar Card</option>
    <option>PAN Card</option>
    <option>Driving License</option>
    <option>PassPort</option>
    <option>VoterId</option>
    <option>Ration Card</option>
</select>
  
  <div class="col-md-2">
  <label for="formFile" class="form-label upload_caption mx-2">Govt._Id No :</label>
  <input type="number" class="form-control" id="inputSelect"/>
  </div>
  <div class="d-grid gap-5 my-5 bottom_btn">
  <a href="/Registration/#/Professional" className="previos_professional"><button class="Bswitch_btn" type="button">Previos</button></a>
  <a href="/Registration/#/Varification" className="next_professional"><button class="switch_btn " type="button">Next</button></a>
</div>
            
                </div>
              </>

    );
  }

export default Upload;