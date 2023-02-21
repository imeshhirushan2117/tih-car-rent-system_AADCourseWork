import { withStyles } from "@mui/styles";
import { Component } from "react";
import { styleSheet } from "./style";


class HomePage extends Component{
    constructor (props){
        super(props)
    }
    render(){
        const {classes} = this.props;

        return(
            <div>
                <h1 className={classes.container} >Car Rental System</h1>

                <head>
                    <nav>
                        <ul>
                        <li>Home</li>
                        <li>Pasenger</li>
                        <li>Driver</li>
                        <li>Vehicle</li>
                        <li>Rent</li>
                        <li>Payment</li>
                        </ul>
                    </nav>
                </head>
                <body>
                    <img src="" alt="" />
                </body>
                <footer></footer>
                
            </div>
        )
    }
}

export default withStyles (styleSheet) (HomePage)