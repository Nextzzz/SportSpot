import Toolbar from "@mui/material/Toolbar";
import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {useEffect} from "react";
import ActionsProducts from "../../Products/actions/products";
import {useDispatch, useSelector} from "react-redux";


const customDataset = [
    { id: 1, name: 'John Doe', age: 25, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 30, email: 'jane@example.com' },
    // Add more data as needed
];

const FilterProducts = () => {
    const dispatch = useDispatch();


    const [rows, setRows] = React.useState(customDataset);
    const [filterModel, setFilterModel] = React.useState({
        items: [],
    });

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 350 },
        { field: 'category', headerName: 'Category', width: 90 },
        { field: 'price', headerName: 'Price', width: 200 },
        { field: 'rating', headerName: 'Rating', width: 200 },
        // Define columns based on your dataset
    ];

    const products = useSelector(({topics}) => topics.ProductsReducer);

    useEffect(() => {
        dispatch(ActionsProducts.receiveProducts());
        console.log(products.list);
        setRows(products.list)
    }, []);

    return (
        <>
            <Toolbar />
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    slots={{ toolbar: GridToolbar }}
                    columns={columns}
                    pageSize={5}
                    // rowsPerPageOptions={[5, 10, 20]}
                    // checkboxSelection
                    filterModel={filterModel}
                    onFilterModelChange={(model) => setFilterModel(model)}
                />
            </div>
        </>
    )
}

export default FilterProducts;