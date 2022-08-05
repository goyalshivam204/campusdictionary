import React from "react";

function Footer(){
    return(
        <footer class="page-footer grey-lighten-2 foot">
        <br/>
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
              <img  style = {{height : "250px"}} src="./CD.png" alt=""/>  
              </div>
              <div class="col 10 offset-l0 s12">
                <h5 class="black-text">| Quick Links</h5>         <br/>

                <ul>
                  <li><a class="white-text text-lighten-3" href="#!">About Us</a></li>
                  <br/>

                  <li><a class="white-text text-lighten-3" href="#!">Our Team</a></li>        <br/>

                  <li><a class="white-text text-lighten-3" href="#!">Terms & Conditions</a></li>        <br/>

                  <li><a class="white-text text-lighten-3" href="#!">Privacy Policy</a></li>       

                </ul>
              </div>


              <div class="col l4 offset-l0 s12">
                <h5 class="black-text">| Contact Us</h5>         <br/>

                <ul>
                  <li><a class="white-text text-lighten-3" href="#!"> <i class="material-icons center">call</i>+91 9931XXXX39</a></li>         <br/>

                  <li><a class="white-text text-lighten-3" href="#!">  <i class="material-icons left">mail</i>ask@campusdictionary.com</a></li> 
                  
                </ul>
              </div>





            </div>
          </div>
          <div class="footer-copyright">
            <div class="container ">
               © COPYRIGHTED CONTENT | ALL RIGHT RESERVED
            
            <a class="white-text text-lighten-4 right" href="#!">
            <i class="material-icons right">facebook</i>
            <i class="material-icons right">whatsapp</i>
            <i class="material-icons right">mail</i>
            <i class="material-icons right">call</i>
            </a>
            </div>

          </div>
        </footer>

    );
}

export default Footer;