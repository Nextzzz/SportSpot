import Toolbar from "@mui/material/Toolbar";
import React, {useEffect, useState} from 'react';
import {
    Avatar,
    Button,
    Card, CardContent,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, TextField,
    Typography
} from '@mui/material';
import ActionsProducts from "../../Products/actions/products";
import Box from "@mui/material/Box";
import {useDispatch, useSelector} from "react-redux";
import ActionsProfile from "../../Profile/actions/profile";

// const comments = [
//     {
//         author: 'Alice',
//         text: 'This article is really informative. Great job!',
//         avatar: 'https://example.com/avatar-alice.jpg',
//     },
//     {
//         author: 'Bob',
//         text: 'I have a question about the third paragraph. Could you elaborate more?',
//         avatar: 'https://example.com/avatar-bob.jpg',
//     },
//     {
//         author: 'Charlie',
//         text: 'I love the way you explained the complex topic in such a simple manner!',
//         avatar: 'https://example.com/avatar-charlie.jpg',
//     },
// ];

const ProductComment = () => {


    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState({ author: '', text: '', avatar: '' });

    const dispatch = useDispatch();

    const profile = useSelector(({profile}) => profile.ProfileReducer);


    // Load comments from localStorage on component mount
    useEffect(() => {
        dispatch(ActionsProfile.receiveProfile());

        const storedComments = localStorage.getItem('comments');
        if (storedComments) {
            setComments(JSON.parse(storedComments));
        }

        // const name = `${profile.profile.name}`;
        // console.log(name)
    }, []);

    // Update localStorage when comments change
    useEffect(() => {
        localStorage.setItem('comments', JSON.stringify(comments));
    }, [comments]);

    const handleAddComment = () => {
        const updatedComments = [...comments, newComment];
        setComments(updatedComments);
        setNewComment({ author: '', text: '', avatar: '' });
    };

    return (
        <>
            <Toolbar />


            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Box display="flex" flexDirection="column" alignItems="center">
                                {/*<TextField*/}
                                {/*    label="Your Name"*/}
                                {/*    value={newComment.author}*/}
                                {/*    onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}*/}
                                {/*    margin="normal"*/}
                                {/*/>*/}
                                <TextField
                                    label="Comment"
                                    value={newComment.text}
                                    onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
                                    multiline
                                    rows={4}
                                    margin="normal"
                                />
                                {/*<TextField*/}
                                {/*    label="Avatar URL"*/}
                                {/*    value={newComment.avatar}*/}
                                {/*    onChange={(e) => setNewComment({ ...newComment, avatar: e.target.value })}*/}
                                {/*    margin="normal"*/}
                                {/*/>*/}
                                <Button variant="contained" color="primary" onClick={handleAddComment}>
                                    Add Comment
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                {comments.map((comment, index) => (
                    <Grid item xs={12} key={index}>
                        <Card>
                            <CardContent>
                                <Box display="flex" alignItems="center" marginBottom={1}>
                                    <Avatar src={comment.avatar} alt={comment.author} />
                                    <Typography variant="subtitle2" color="text.primary" marginLeft={1}>
                                        {profile.profile.name}
                                    </Typography>
                                </Box>
                                <Typography variant="body1">{comment.text}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default ProductComment;