import Toolbar from "@mui/material/Toolbar";
import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {useEffect, useState} from "react";
import ActionsProducts from "../../Products/actions/products";
import {useDispatch, useSelector} from "react-redux";


const customDataset =
    [
        {
            "id": 1,
            "name": "Whey Gold Standard",
            "description": "Protein 100% Whey Gold Standard contains a functional combination of whey isolate, concentrate and hydrolyzate.",
            "price": "20.49 $",
            "rating": "3.5",
            "like": true,
            "category": "protein",
            "photoUrl": "https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/o/n/on1.jpg"
        },
        {
            "id": 2,
            "name": "Just Whey",
            "description": "Just Whey is a high-quality whey multicomponent protein with 75% of first-class protein from the milk of cows that graze on green meadows.",
            "price": "16.99 $",
            "rating": "5.0",
            "like": false,
            "category": "protein",
            "photoUrl": "https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/j/u/just_whey_chocolate_milkshake_1_kg_gymbeam_1.png"
        },
        {
            "id": 3,
            "name": "True Whey",
            "description": "True Whey Protein is a whey protein concentrate (WPC) that is among the most popular protein supplements.",
            "price": "9.00 $",
            "rating": "4.3",
            "like": true,
            "category": "protein",
            "photoUrl": "https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/p/r/protei_n_true_whey_-_gymbeam_1000_g_-_chocolate_hazelnut.png"
        },
        {
            "id": 4,
            "name": "True Whey",
            "description": "True Whey Protein is a whey protein concentrate (WPC) that is among the most popular protein supplements.",
            "price": "9.50 $",
            "rating": "4.3",
            "like": false,
            "category": "protein",
            "photoUrl": "https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/p/r/protei_n_true_whey_-_gymbeam_1000_g_-_chocolate_hazelnut.png"
        },
        {
            "id": 5,
            "name": "True Whey",
            "description": "True Whey Protein is a whey protein concentrate (WPC) that is among the most popular protein supplements.",
            "price": "9.00 $",
            "rating": "4.3",
            "like": false,
            "category": "protein",
            "photoUrl": "https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/p/r/protei_n_true_whey_-_gymbeam_1000_g_-_chocolate_hazelnut.png"
        },
        {
            "id": 6,
            "name": "True Whey",
            "description": "True Whey Protein is a whey protein concentrate (WPC) that is among the most popular protein supplements.",
            "price": "9.00 $",
            "rating": "4.3",
            "like": false,
            "category": "protein",
            "photoUrl": "https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/p/r/protei_n_true_whey_-_gymbeam_1000_g_-_chocolate_hazelnut.png"
        },
        {
            "id": 7,
            "name": "True Whey",
            "description": "True Whey Protein is a whey protein concentrate (WPC) that is among the most popular protein supplements.",
            "price": "9.00 $",
            "rating": "4.3",
            "like": false,
            "category": "protein",
            "photoUrl": "https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/p/r/protei_n_true_whey_-_gymbeam_1000_g_-_chocolate_hazelnut.png"
        },
        {
            "id": 8,
            "name": "True Whey",
            "description": "True Whey Protein is a whey protein concentrate (WPC) that is among the most popular protein supplements.",
            "price": "9.00 $",
            "rating": "4.3",
            "like": false,
            "category": "protein",
            "photoUrl": "https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/p/r/protei_n_true_whey_-_gymbeam_1000_g_-_chocolate_hazelnut.png"
        },
        {
            "id": 9,
            "name": "True Whey",
            "description": "True Whey Protein is a whey protein concentrate (WPC) that is among the most popular protein supplements.",
            "price": "9.00 $",
            "rating": "4.3",
            "like": false,
            "category": "protein",
            "photoUrl": "https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/p/r/protei_n_true_whey_-_gymbeam_1000_g_-_chocolate_hazelnut.png"
        },
        {
            "id": 10,
            "name": "True Whey",
            "description": "True Whey Protein is a whey protein concentrate (WPC) that is among the most popular protein supplements.",
            "price": "9.00 $",
            "rating": "4.3",
            "like": false,
            "category": "protein",
            "photoUrl": "https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/p/r/protei_n_true_whey_-_gymbeam_1000_g_-_chocolate_hazelnut.png"
        },
        {
            "id": 11,
            "name": "True Whey",
            "description": "True Whey Protein is a whey protein concentrate (WPC) that is among the most popular protein supplements.",
            "price": "9.00 $",
            "rating": "4.3",
            "like": false,
            "category": "protein",
            "photoUrl": "https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/p/r/protei_n_true_whey_-_gymbeam_1000_g_-_chocolate_hazelnut.png"
        }
    ]
    // Add more data as needed
;

const FilterProducts = () => {
    const dispatch = useDispatch();


    const [currentTime, setCurrentTime] = useState(new Date());
    const [rows, setRows] = React.useState(customDataset);
    const [filterModel, setFilterModel] = React.useState({
        items: [],
    });

    const products = useSelector(({topics}) => topics.ProductsReducer);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 350 },
        { field: 'category', headerName: 'Category', width: 90 },
        { field: 'price', headerName: 'Price', width: 200 },
        { field: 'rating', headerName: 'Rating', width: 200 },
        // Define columns based on your dataset
    ];


    useEffect(() => {
        // dispatch(ActionsProducts.receiveProducts());
        // setRows(products.list)
        // Update the current time every second
        // const interval = setInterval(() => {
        //     setCurrentTime(new Date());
        // }, 1000);
        //
        // // Clean up the interval to avoid memory leaks
        // return () => clearInterval(interval);

        // console.log(products.list);

    }, []);

    // useEffect(() => {
    //
    // }, []);

    const formattedTime = currentTime.toLocaleTimeString();

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
            {/*<div>*/}
            {/*    <h2>Current Time:</h2>*/}
            {/*    <p>{formattedTime}</p>*/}
            {/*</div>*/}
        </>
    )
}

export default FilterProducts;