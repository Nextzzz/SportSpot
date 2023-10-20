import '../styles/App.css'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import * as PAGES from 'constants/pages';
import Header from "components/Header";
import Products from "pages/Products";

const App = () => {

    return (
        <div className="App">
            <Header />
            <Router>
                <Routes>
                    <Route path={`/${PAGES.PRODUCTS}`} element={<Products />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;