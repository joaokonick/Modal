import React, { useState } from "react";
import Card from "./Card";

function Modal(props){

    function onHideModal(e){
        let target = e.target;
    if(target.id == 'modal'){
        props.onHideModal()
    }
    console.log(target)
    }
    

    return(
        <div id="modal" onClick={hideModal} className={props.show? "modal" : "modal hide"}>
           <CARD className="cardModal">
            {props.children}
           </CARD>
        </div>
    )
}

export default Modal