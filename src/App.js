import React from 'react';
import  Professional from './Professional';
import  Personal from './Personal';
import  Upload from './Upload';
import  Varification from './Varification';
import { Route, Switch, } from 'react-router-dom';
import './index.css';
import "./bootstrap/bootstrap.min.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


 

const App = () => {

 
       
         
    

    return (
              <>
                   <div className="markee">
               <h1 className="main-caption text-center my-5"><marquee behavior="alternate">GAUTAM BUDDHA UNIVERSITY</marquee></h1>
               
               <div className="socialMedia mb-2">
               <button className="fb"><FacebookIcon/></button>
               <button  className="twit"><TwitterIcon/></button>
               <button  className="ig"><InstagramIcon/></button>
               <button  className="wp"><WhatsAppIcon/></button>
               </div></div>
                     <div className="container mx-auto my-5">
                       <h3 className="start-cap">Fill following Details for Registration in code fellas:-</h3>
                         <div className="row_btns" id="navbar">

                 <div class="btn-group my-5" role="group" aria-label="Basic outlined example">
                   <a href="/Registration/#/Personal"><button type="button" class="btn btn-outline-primary mrg_btns">Personal Details</button></a>
                   <a href="/Registration/#/Professional"><button type="button" class="btn btn-outline-primary mrg_btns">Professional Details</button></a>
                   <a href="/Registration/#/Upload"><button type="button" class="btn btn-outline-primary mrg_btns">Upload Sample</button></a>
                   <a href="/Registration/#/Varification"><button type="button" class="btn btn-outline-primary mrg_btns">Verification of Information</button></a>
</div>
                        
                         
                         
                    </div>
                    
                    </div>
                 

                   
                <Switch>
                    <Route path='/Personal' render={Personal}/>
                    <Route path='/Professional' render={Professional}/>
                    <Route path='/Upload' render={Upload}/>
                    <Route path='/Varification' render={Varification}/>
                </Switch>
                </>
                
              

    );
  }



export default App;