import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";  //Endre til Home page når den er laget

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;