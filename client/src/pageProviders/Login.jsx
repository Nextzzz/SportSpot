import {useSelector} from "react-redux";
import useChangePage from "../hooks/useChangePage";
import {useEffect} from "react";
import LoginPage from 'pages/Login';
import * as PAGES from "../constants/pages";

const Login = () => {
    const user = useSelector(({ user }) => user);
    const changePage = useChangePage();
    useEffect(() => {

        if (user.isAuthorized) {
            changePage({
                path: `/${PAGES.PRODUCTS}`,
            });
        }
    }, [user.isAuthorized]);

    return (
        user.isAuthorized
            ? null
            : (
                <LoginPage />
            )
    );
};

export default Login;