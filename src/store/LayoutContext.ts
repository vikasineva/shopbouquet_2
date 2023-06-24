import { createContext } from "react";

interface LayoutContextParams {
    registerOpened: boolean;
    setRegisterOpened: (state: boolean) => void;
    loginOpened: boolean;
    setLoginOpened: (state: boolean) => void;
}

const LayoutContext = createContext<LayoutContextParams>({
    registerOpened: false,
    setRegisterOpened: (state: boolean) => { },
    loginOpened: false,
    setLoginOpened: (state: boolean) => { },
});

export default LayoutContext;