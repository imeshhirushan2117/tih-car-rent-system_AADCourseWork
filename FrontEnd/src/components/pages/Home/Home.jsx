import React from "react";
import "../../../style/Home/Home.css"
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


const Home = () => {
    return(
        <div>
            <div role="presentation" onClick={handleClick} id="homeNav">
      <Breadcrumbs maxItems={2} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="#">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="#">
          Catalog
        </Link>
        <Link underline="hover" color="inherit" href="#">
          Accessories
        </Link>
        <Link underline="hover" color="inherit" href="#">
          New Collection
        </Link>
        <Typography color="text.primary">Belts</Typography>
      </Breadcrumbs>
    </div>
        </div>
    )
}
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
export default Home;