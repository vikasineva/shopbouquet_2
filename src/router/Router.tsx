import { BrowserRouter, Navigate, Route, Routes, createBrowserRouter, useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Catalog from "../components/Catalog/Catalog";
import Home from "../components/Home/Home";
import ProductInfo from "../components/Catalog/ProductInfo/ProductInfo";
import { useState } from "react";
import LayoutContext from "../store/LayoutContext";

const MyRouter = (): JSX.Element => {
    const [registerOpened, setRegisterOpened] = useState<boolean>(false);
    const [loginOpened, setLoginOpened] = useState<boolean>(false);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <LayoutContext.Provider
                            value={{ registerOpened, setRegisterOpened, loginOpened, setLoginOpened }}>
                            <Layout />
                        </LayoutContext.Provider>
                    }>
                    <Route index element={<Home />} />
                    <Route path="catalog">
                        <Route
                            path="sezonni bukety"
                            element={<Catalog path="sezonni bukety" catalogName="Букети / Сезонні букети" />}
                        />
                        <Route
                            path="monobukety"
                            element={<Catalog path="monobukety" catalogName="Букети / Монобукети" />}
                        />
                    </Route>
                    <Route path="product/:productName" element={<ProductInfo />} />
                </Route>
                <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
        </BrowserRouter>
    );
};

export default MyRouter;
