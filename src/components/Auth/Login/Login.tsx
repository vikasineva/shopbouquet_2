import { Alert, Box, Button, Modal, Snackbar, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FieldValues, useForm } from "react-hook-form";
import ILoginRequest from "../interfaces/ILoginRequest";
import Auth from "../../../api/Auth";
import { useContext, useState } from "react";
import LayoutContext from "../../../store/LayoutContext";
import user from "../../../store/user";

const Login = (): JSX.Element => {
    const { setRegisterOpened, setLoginOpened, loginOpened } = useContext(LayoutContext);

    const style = {
        position: "absolute" as "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "767px",
        height: "424px",
        bgcolor: "background.paper",
        boxShadow: 24,
        border: "1px solid #000000",
        borderRadius: "20px",
        p: 4,
    };

    const [isErrorOccurred, setIsErrorOccured] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>("");

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<ILoginRequest>();

    const onSubmit = async (data: FieldValues) => {
        const loginRequest = data as ILoginRequest;
        const response = await user.login(loginRequest);

        if (response.error) {
            setIsErrorOccured(true);
            setErrorMsg(response.error);
        } else {
            setLoginOpened(false);
        }
    };

    return (
        <Modal
            keepMounted
            open={loginOpened}
            onClose={() => setLoginOpened(false)}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description">
            <Box sx={style}>
                <Snackbar open={isErrorOccurred} autoHideDuration={6000} onClose={() => setIsErrorOccured(false)}>
                    <Alert style={{ whiteSpace: "pre-line" }} onClose={() => setIsErrorOccured(false)} severity="error" sx={{ width: "100%" }}>
                        {errorMsg}
                    </Alert>
                </Snackbar>
                <CloseIcon
                    onClick={() => setLoginOpened(false)}
                    sx={{
                        position: "absolute",
                        top: 30,
                        right: 30,
                        color: "grey",
                        fontSize: "24px",
                        cursor: "pointer",
                    }}
                />
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <Typography
                            sx={{ fontFamily: "Cormorant", fontWeight: "600", lineHeight: "34px", fontSize: "28px" }}>
                            Авторизація
                        </Typography>
                        <TextField
                            sx={{ width: "300px", mt: 3 }}
                            id="standard-email"
                            label="Ел.пошта"
                            {...register("userEmail")}
                            type="string"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: "300px", mt: 3 }}
                            id="standard-pass"
                            label="Пароль"
                            {...register("password")}
                            type="password"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                mt: 4,
                                width: "300px",
                                background: "#FBCBD3",
                                borderRadius: "41px",
                                fontFamily: "Open Sans",
                                textTransform: "none",
                                color: "black",
                                fontWeight: 400,
                                fontSize: "16px",
                                lineHeight: "34px",
                            }}>
                            Увійти
                        </Button>
                        <Box sx={{ width: "300px", display: "flex", justifyContent: "space-between", mt: 3 }}>
                            <Typography
                                sx={{
                                    fontFamily: "Open Sans",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "16px",
                                    lineHeight: "22px",
                                    color: "#828282",
                                }}>
                                Ще немає акаунту?
                            </Typography>
                            <Typography
                                onClick={() => {
                                    setLoginOpened(false);
                                    setRegisterOpened(true);
                                }}
                                sx={{
                                    fontFamily: "Open Sans",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "16px",
                                    lineHeight: "22px",
                                    color: "#E27D8E",
                                    textDecorationLine: "underline",
                                    cursor: "pointer",
                                }}>
                                Зареєструватись
                            </Typography>
                        </Box>
                    </Box>
                </form>
            </Box>
        </Modal>
    );
};

export default Login;
