import React from "react";
import "../../../style/Customer/Customer.css"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Customer = () => {
    return (
        <div>
            <h1 className="text">Imesh</h1>

            <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
        </div>
    );
}
export default Customer;

