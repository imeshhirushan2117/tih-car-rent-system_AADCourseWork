import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styled from "styled-components";

const Customer = () => {
    return (
        <MainCustomerDivContener>
            <h1 className="text">Imesh</h1>

            <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
        </MainCustomerDivContener>
    );
}

const MainCustomerDivContener = styled.div`
    
`
export default Customer;

