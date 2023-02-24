import { withStyles } from "@mui/styles";
import { Component } from "react";
import { styleSheet } from "./style";



class AboutUsPage extends Component{
    constructor (prop){
        super (prop)
    }
    render(){
        <div>
<h1 className={classes.container} >AboutLUs Page</h1>
                <head></head>
                <body></body>
                <footer></footer>
        </div>
    }
}

export default withStyles (styleSheet) (AboutUsPage)