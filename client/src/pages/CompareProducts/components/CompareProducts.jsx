import Toolbar from "@mui/material/Toolbar";
import React, {useEffect} from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import ActionsProducts from "../../Products/actions/products";



// const product1 = {
//     name: 'Product A',
//     price: 25.99,
//     color: 'Red',
//     size: 'Medium',
//     brand: 'Brand X',
// };
//
// const product2 = {
//     name: 'Product A',
//     price: 29.99,
//     color: 'Blue',
//     size: 'Medium',
//     brand: 'Brand X',
// };

const product1 = JSON.parse(localStorage.getItem('compare'))[0];
const product2 = JSON.parse(localStorage.getItem('compare'))[1];

const CompareProducts = () => {
    const renderTableRows = () => {
        const fields = Object.keys(product1);
        return fields.map((field) => (
            <TableRow key={field} style={{ backgroundColor: product1[field] !== product2[field] ? '#ffeeba' : 'inherit' }}>
                <TableCell>{field}</TableCell>
                <TableCell>{product1[field]}</TableCell>
                <TableCell>{product2[field]}</TableCell>
            </TableRow>
        ));
    };

    useEffect(() => {
        console.log(product1);
        console.log(product2);
    }, []);

    return (
        <>
            <Toolbar />
            <TableContainer component={Paper}>
                <Table style={{ minWidth: 650 }} aria-label="product comparison table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Product 1</TableCell>
                            <TableCell>Product 2</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {renderTableRows()}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default CompareProducts;