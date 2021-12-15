import React from 'react';
import "./bootstrap/bootstrap.min.css";
import { HashRouter, Route, Switch } from 'react-router-dom';
import  Professional from './Professional';


const Personal = () => {
 
  
    

    return (
              <>
             
           
              <div className="container">
              <HashRouter> 
              <Switch> <Route exact path="/Professional" component={Professional}/></Switch></HashRouter>
                <div className="row">
                <h1 className="h1_personal_details"> Add Personal Details : </h1>
      <form class="row g-3 my-1">           
 <div class="row g-3">
  <div class="col">
  <label for="inputEmail4" class="form-label">First Name</label>
    <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
  </div>
  <div class="col">
  <label for="inputEmail4" class="form-label">Last Name</label>
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
 </div>
</div>


  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-md-2">
    <label for="inputPincode" class="form-label">Contact Number</label>
    <input type="number" class="form-control" id="inputPincode"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="col-md-2">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
     <div class="col-md-2">
    <label for="inputPincode" class="form-label">Pincode</label>
    <input type="number" class="form-control" id="inputPincode"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>Andhra Pradesh</option>
<option>Arunachal Pradesh</option>
<option>Assam</option>
<option>Bihar</option>
<option>Chhattisgarh</option>
<option>Goa</option>
<option>Gujarat</option>
<option>Haryanav</option>
<option>Himachal Pradesh</option>
<option>Jharkhand</option>
<option>Karnataka</option>
<option>Kerala</option>
<option>Madhya Pradesh</option>
<option>Maharashtra</option>
<option>Manipur</option>
<option>Meghalaya</option>
<option>Mizoram</option>
<option>Nagaland</option>
<option>Odisha</option>
<option>Punjab</option>
<option>Rajasthan</option>
<option>Sikkim</option>
<option>Tamil Nadu</option>
<option>Telangana</option>
<option>Tripura</option>
<option>Uttarakhand</option>
<option>Uttar Pradesh</option>
<option>West Bengal</option>
    </select>
  </div>
  
  
 
 
</form>


                </div>
                <a href="/Registration/#/Professional"><button className="switch_btn my-5">Next</button></a>
                </div>
              </>

    );
  
}
export default Personal;