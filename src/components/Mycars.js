import React, { Component } from "react";

import Car from "./Cars";

class Mycars extends Component{
    render(){
        console.log(this)
        return(
            <div className="Cars">
                <h1>{this.props.titre} -- Catalogue de voitures</h1>
                <p>ce ci est un test</p>
                <Car color="vert">le car qui part</Car>
                <Car>Mercedes</Car>
                <Car color="gris"></Car>
            </div>
        );
    }
}

export default Mycars;
