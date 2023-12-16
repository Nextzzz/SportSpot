import React, {useEffect, useState} from 'react';
import {List, ListItem, ListItemText, Divider, Typography, Backdrop, CircularProgress} from '@mui/material';
import Toolbar from "@mui/material/Toolbar";
import Button from "../../../components/Button/Button";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";

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
        }
    ];

const Cart = ({  }) => {

    const [open, setOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [rows, setRows] = React.useState(customDataset);
    const [filterModel, setFilterModel] = React.useState({
        items: [],
    });
    const columns = [
        // { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 350 },
        // { field: 'category', headerName: 'Category', width: 90 },
        { field: 'price', headerName: 'Price', width: 200 },
        // { field: 'rating', headerName: 'Rating', width: 200 },
        // Define columns based on your dataset
    ];

    const handleOpen = () => {
        setOpen(true);
    };

    const handleBuyClick = () => {
        localStorage.setItem('cart', '[]');
        setProducts([])
    }

    useEffect(() => {
        console.log('effect')
        setProducts(JSON.parse(localStorage.getItem('cart')))
        console.log(products);
    }, []);

    return (
        <div>
            <Toolbar />
            <Typography variant="h5" gutterBottom>
                Cart Products
            </Typography>
            <List>
                {
                    products.isLoading && (
                        <div>
                            <Backdrop
                                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                open={open}
                                onClick={() => {}}
                            >
                                <CircularProgress color="inherit" />
                            </Backdrop>
                        </div>
                    )
                }
                {/*{products.map((product, index) => (*/}
                {/*    <React.Fragment key={index}>*/}
                {/*        <ListItem>*/}
                {/*            <ListItemText primary={product.name} secondary={`Price: $${product.price}`} />*/}
                {/*        </ListItem>*/}
                {/*        {index !== products.length - 1 && <Divider />}*/}
                {/*    </React.Fragment>*/}
                {/*))}*/}
                <DataGrid
                    rows={products}
                    slots={{ toolbar: GridToolbar }}
                    columns={columns}
                    pageSize={5}
                    // rowsPerPageOptions={[5, 10, 20]}
                    checkboxSelection
                    filterModel={filterModel}
                    onFilterModelChange={(model) => setFilterModel(model)}
                />
            </List>
            <Button color="error" onClick={handleBuyClick}>
                Buy
            </Button>
        </div>
    );
};

export default Cart;