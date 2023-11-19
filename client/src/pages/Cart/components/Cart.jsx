import React, {useEffect, useState} from 'react';
import {List, ListItem, ListItemText, Divider, Typography, Backdrop, CircularProgress} from '@mui/material';
import Toolbar from "@mui/material/Toolbar";
import Button from "../../../components/Button/Button";

const Cart = ({  }) => {

    const [open, setOpen] = useState(false);
    const [products, setProducts] = useState([]);

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
                {products.map((product, index) => (
                    <React.Fragment key={index}>
                        <ListItem>
                            <ListItemText primary={product.name} secondary={`Price: $${product.price}`} />
                        </ListItem>
                        {index !== products.length - 1 && <Divider />}
                    </React.Fragment>
                ))}
            </List>
            <Button color="error" onClick={handleBuyClick}>
                Buy
            </Button>
        </div>
    );
};

export default Cart;