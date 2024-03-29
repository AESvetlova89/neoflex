import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Cart from "./components/Cart";
import Main from "./components/Main";
import {Provider} from "react-redux";
import {store} from "./redux/store";

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
            </Provider>
        </BrowserRouter>
    );
}

export default App;