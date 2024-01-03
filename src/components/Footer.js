import React from 'react';

const Footer = () => {
    return (
<footer class="footer p-10 bg-neutral text-neutral-content">
        <aside>
            <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
            <p>UMNBC<br/>University of Minnesota Twin Cities Blockchain Club</p>
        </aside> 

        <nav>
            <header class="footer-title">Links</header> 
            <a class="link link-hover">About Us</a>
            <a class="link link-hover">Projects</a>
            <a class="link link-hover">Contact Us</a>
            <a class="link link-hover">Advertisement</a>
        </nav> 

        <nav>
        <header class="footer-title">Social</header> 
        <div class="grid grid-flow-col gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="src\assets\instagram1(24x24).png" alt="Instagram" class="fill-current" width="24" height="24"/>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <img src="src\assets\youtube(24x24).png" alt="YouTube" class="fill-current" width="24" height="24"/>
            </a>
        </div>
   </nav>
    <form id='myForm'  action="https://script.google.com/macros/s/AKfycbzXTtsWv_SqnrBNRj2n9pziKrNETwEgA9KEEMM3805Nl6r8cyYAkP3-bMNCBJhyU0105A/exec" method="post">
         <header class="footer-title">Newsletter</header> 
         <fieldset class="form-control w-80">
           <label class="label">
             <span class="label-text">Enter your email address</span>
           </label> 
           <div class="join">
            <input type="text" placeholder="youremail@gmail.com" class="input input-bordered join-item" for="Email" name="Email"/> 
            <button class="btn btn-primary join-item">Subscribe</button>
           </div>
         </fieldset>
   </form>
  
  
   
</footer>
    );
    document.addEventListener("DOMContentLoaded", function() {
        var form = document.getElementById("myForm");
        
        form.addEventListener("submit", function(e) {
          e.preventDefault();
          var formData = new FormData(form);
      
          fetch(form.action, {
            method: "POST",
            body: formData
          })
          .then(response => response.json())
          
          .then(data => {
            console.log(data);
            console.log('Data received:', data);
            // Here you can add code to update the UI based on the response if necessary
            window.location.reload(); // This will reload the page
          })
          .catch(error => {
            console.error("Error:", error);
          });
        });
      });
}
export default Footer;
