import React, { Component } from 'react';

class Header extends Component {
    render(){
        return(
        <header className="bck_b_light">
             <div className="container">
                 <div className="left">
                     <div className="logo">
                         CELL
                     </div>
                 </div>
                 <div className="right">
                     <div className="top" >
                            <h1> LINKS</h1>
                     </div>
                     <div className="bottom">
                         LINKS
                     </div>
                 </div>
            </div>
        </header>
           
        )
    };
}

export default Header;