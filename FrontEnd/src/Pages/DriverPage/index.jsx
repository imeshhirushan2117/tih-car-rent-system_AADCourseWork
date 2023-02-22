import { withStyles } from "@mui/styles";
import { Component } from "react";
import { styleSheet } from "./style";


class DriverPage extends Component{
    constructor (prop){
        super (prop)
    }
    render(){
        const {classes} = this.prop;
        return(
            <div>
                <h1 className={classes.container}>Driver Page</h1>

                <head></head>
                <body> </body>
                <footer></footer>
            </div>
        )
    }
}

export default withStyles (styleSheet) (DriverPage)