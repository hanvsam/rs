import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap"



function Btn (){
    return(
        <>
            <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

            <script
            src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
            crossorigin></script>

            <script
            src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
            crossorigin></script>
            <Button variant="primary">Click</Button>
        </>
    )
}
export default Btn;