import React, { Component } from "react";
import Modal from "../Modal";

class Display extends Component{ 
   

    render(){
       return(<div >
        <strong> 
           <li className="list-group-item">
            {this.props.title} {this.props.date.substr(0,10)}
            
           </li>
        </strong>
        
       </div> )
    }

}

export default Display;