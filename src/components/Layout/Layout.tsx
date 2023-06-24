import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Register from "../Auth/Register/Register";
import { useContext, useEffect, useState } from "react";
import LayoutContext from "../../store/LayoutContext";
import Login from "../Auth/Login/Login";
import Cart from "../Cart/Cart";

const Layout = () => {
    const { setLoginOpened } = useContext(LayoutContext);
    const [cartOpened, setCartOpened] = useState<boolean>(false);

    return (
        <div>
            <Cart opened={cartOpened} setOpened={setCartOpened} />
            <Register />
            <Login />
            <Header setLoginOpened={setLoginOpened} setCartOpened={setCartOpened}/>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
