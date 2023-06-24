interface AuthProps {
    openLogin: boolean;
    handleLoginClose: (state: boolean) => void;
    openRegister: boolean;
    handleRegisterClose: (state: boolean) => void;
}

export default AuthProps;