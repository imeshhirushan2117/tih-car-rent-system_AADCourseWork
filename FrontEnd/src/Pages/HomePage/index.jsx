import { Component } from "react";
import { withStyles } from "@mui/styles";
import { styleSheet } from "./style";



class HomePage extends Component{
    constructor (props){
        super(props)
    }
    render(){
        const {classes} = this.props;

        return(
            <div>
                <h1 className={classes.container}> Home Page</h1>

                <head>
                    <nav>
                        <ul>
                        <li>Home</li>
                        <li>Vehicle</li>
                        <li>About</li>
                        <li>Driver</li>
                        </ul>
                    </nav>
                </head>
                <body>
                <img className={classes.imgHomePage} src="https://cdn.wallpapersafari.com/46/74/WnEYQ6.jpg" alt="" />
                </body>
                <footer></footer>
                
            </div>
        )
    }
}

export default withStyles (styleSheet) (HomePage)