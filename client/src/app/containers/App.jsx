import '../styles/App.css'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import * as PAGES from 'constants/pages';
import Header from "components/Header";
import Products from "pages/Products";
import Favourites from "pages/Favourites";
import LoginProvider from 'pageProviders/Login';
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {fetchUser} from "../actions/user";
import Profile from "../../pages/Profile";
import Cart from "../../pages/Cart";

const App = () => {
    const [state, setState] = useState({
        componentDidMount: false,
    });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser());
        setState(prevState => ({
            ...prevState,
            componentDidMount: true,
        }));
    }, []);

    return (
        <div className="App">
            <Header />
            <Router>
                {state.componentDidMount && (
                    <Routes>
                        <Route path={`/${PAGES.PRODUCTS}`} element={<Products />} />
                        <Route path={`/${PAGES.LOGIN}`} element={<LoginProvider />} />
                        <Route path={`/${PAGES.PROFILE}`} element={<Profile />} />
                        <Route path={`/${PAGES.FAVOURITES}`} element={<Favourites />} />
                        <Route path={`/${PAGES.CART}`} element={<Cart />} />
                    </Routes>
                )}
            </Router>
        </div>
    )
}

export default App;