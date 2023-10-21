import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import '../styles/products.css'
import ProductCard from "components/ProductCard";
import {Backdrop, CircularProgress, Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import ActionsProducts from 'pages/Products/actions/products';

const Products = () => {

    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const products = useSelector(({topics}) => topics.ProductsReducer);

    useEffect(() => {
        handleOpen();
        dispatch(ActionsProducts.receiveProducts());
        console.log(products);
    }, []);

    return (
        <>
            <Toolbar />

            <Grid item xs={6} key={1}>
                    <Box
                        sx={{
                            p: 2,
                            borderRadius: 2,
                            bgcolor: '#efefef',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: 2,
                        }}
                    >
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
                        {
                            !products.isLoading &&
                            products.list.map(topic => {
                                return (
                                    <ProductCard
                                        name={topic.name}
                                        description={topic.description}
                                        price={topic.price}
                                        rate={topic.rate}
                                        image={topic.image}
                                    />
                                )}
                            )
                        }


                    </Box>
            </Grid>
        </>
    )
}

export default Products;