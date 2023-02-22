import { Component } from "react";
import { withStyles, WithStyles } from "@mui/styles";
import { styleSheet } from "./style";

class VehiclePage extends Component{
    constructor (prop){
        super(prop)
    }
    render(){
        const {classes} = this.props;
        return(
            <div>
                <h1 className={classes.container} >Vehicle Page</h1>

                <head></head>
                <body></body>
                <footer></footer>
            </div>
        )
    }
}

export default withStyles (styleSheet) (VehiclePage)