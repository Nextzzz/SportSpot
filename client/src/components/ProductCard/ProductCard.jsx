import './productcard.css'
import {
    Badge,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia, Chip,
    Divider,
    IconButton,
    Rating
} from "@mui/material";
import Typography from "../Typography";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';
import React from "react";
import Tooltip from '@mui/material/Tooltip';


const ProductCard = ({
                         name,
                         description,
                         price,
                         rate,
                         image
                     }) => {

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
                    <IconButton >
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
        </Card>
    )
}

export default ProductCard