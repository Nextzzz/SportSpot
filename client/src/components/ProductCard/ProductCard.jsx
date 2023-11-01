import './productcard.css'
import {
    Badge, Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia, Chip,
    Divider,
    IconButton, ImageListItem, Modal,
    Rating
} from "@mui/material";
import Typography from "../Typography";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';
import React, {useState} from "react";
import Tooltip from '@mui/material/Tooltip';
import Box from "@mui/material/Box";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ProductCard = ({
                         name,
                         description,
                         price,
                         rate,
                         image
                     }) => {
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea sx={{ height: '50vh', overflow: 'auto' }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Chip label={price} />
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Divider />
            <CardActions sx={{ height: 50 }}>
                <Tooltip title="Add to Cart">
                    <IconButton onClick={handleOpenModal}>
                        <Badge color="secondary">
                            <ShoppingBasketRoundedIcon />
                        </Badge>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Add to Favourite">
                    <IconButton >
                        <Badge color="secondary">
                            <FavoriteBorderIcon />
                        </Badge>
                    </IconButton>
                </Tooltip>
                {/*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}
                {/*<Rating name="read-only" value={3} readOnly />*/}
                |&nbsp;&nbsp;
                <Chip
                    label={rate}
                    onClick={() => {}}
                    onDelete={() => {}}
                    deleteIcon={<Rating
                        color='red'
                        name="read-only"
                        value={rate}
                        precision={0.1}
                        sx={{
                            '& .MuiRating-iconFilled': {
                                color: '#f5b342',
                            },
                            '& .MuiRating-iconFocus': {
                                color: 'orange',
                            },
                            '& .MuiRating-iconHover': {
                                color: 'orange',
                            },
                        }}
                    />}
                    variant="outlined"
                />
            </CardActions>
            <Modal
                keepMounted
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                        {description}
                    </Typography>
                    <br/>
                    <Chip label={price} />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Chip
                        label={rate}
                        onClick={() => {}}
                        onDelete={() => {}}
                        deleteIcon={<Rating
                            color='red'
                            name="read-only"
                            value={rate}
                            precision={0.1}
                            sx={{
                                '& .MuiRating-iconFilled': {
                                    color: '#f5b342',
                                },
                                '& .MuiRating-iconFocus': {
                                    color: 'orange',
                                },
                                '& .MuiRating-iconHover': {
                                    color: 'orange',
                                },
                            }}
                        />}
                        variant="outlined"
                    />
                    <ImageListItem key={image}>
                        <img
                            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={`${image}?w=164&h=164&fit=crop&auto=format`}
                            alt={name}
                            loading="lazy"
                        />
                    </ImageListItem>
                    <Button variant="contained" color="success">
                        Add to Cart
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant="contained" color="warning">
                        Add to Favourites
                    </Button>

                </Box>
            </Modal>
        </Card>
    )
}

export default ProductCard