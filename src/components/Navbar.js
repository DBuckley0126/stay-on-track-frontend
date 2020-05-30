import React from "react";


function Navbar () {
    function openNav() {
        document.getElementById("nav-collapse").style.width = "100px";
        document.getElementById("main").style.marginright = "20px";
      }
      
     
      function closeNav() {
        document.getElementById("nav-collapse").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
      }
    return (

        <nav className="nav">

            <div>
                <img src="https://via.placeholder.com/45" alt=""></img>
            </div>
            
            <div id="nav-collapse"> 
                <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
                <a href="https://via.placeholder.com/150">Main</a>
                <a href="">About</a>
                <a href="">My projects</a>
                <a href="">Contact</a>
            </div>

            <div id="main">
                <button class="openbtn" onClick={openNav}>&#9776;</button>   
            </div>

        </nav>



    )
}


export default Navbar