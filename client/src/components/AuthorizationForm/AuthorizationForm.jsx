import PropTypes from "prop-types";
import Box from "../Box/Box";
import Typography from "../Typography/Typography";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchSignIn} from "../../app/actions/user";
import Toolbar from "@mui/material/Toolbar";
import {FormControl, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, Tab, Tabs} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import Button from "../Button/Button";

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
const AuthorizationForm = ({
                   onSuccess,
               }) => {
    const dispatch = useDispatch();
    const user = useSelector(({ user }) => user);

    useEffect(() => {
        console.log(user, onSuccess);
        if (user.isAuthorized && onSuccess) {
            onSuccess();
        }
    }, [user.isAuthorized]);


    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmitLogInClick = () => {
        console.log(`submit ${email}_${password}`);
        dispatch(fetchSignIn({
            email,
            password,
        }));
    };

    return (
        <>
            <Toolbar />

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        value={value} onChange={handleChange}
                        aria-label="basic tabs example"
                    >
                        <Tab label="Login" {...a11yProps(0)} />
                        <Tab label="Register" {...a11yProps(1)} />
                        {/*<Tab label="Item Three" {...a11yProps(2)} />*/}
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <div>
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-amount">Email</InputLabel>
                                <Input
                                    id="standard-adornment-amount"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                        </div>
                        <Button
                            variant="contained"
                            onClick={handleSubmitLogInClick}
                        >
                            Submit
                        </Button>

                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    Item Two
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    Item Three
                </CustomTabPanel>
            </Box>

        </>
    )
}

AuthorizationForm.propTypes = {
    onSuccess: PropTypes.func,
};

export default AuthorizationForm;