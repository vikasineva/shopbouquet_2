import { Alert, Box, Button, Modal, Snackbar, TextField, Typography } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import IRegisterRequest from "../interfaces/IRegisterRequest";
import Auth from "../../../api/Auth";
import { useContext, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import LayoutContext from "../../../store/LayoutContext";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "../schemas/registerSchema";
import user from "../../../store/user";

const Register = (): JSX.Element => {
    const { setRegisterOpened, setLoginOpened, registerOpened } = useContext(LayoutContext);

    const style = {
        position: "absolute" as "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "767px",
        minHeight: "680px",
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
        formState: { errors, isSubmitting },
    } = useForm<IRegisterRequest>({ resolver: yupResolver(validationSchema), mode: "all" });

    const onSubmit = async (data: FieldValues) => {
        const registerRequest = data as IRegisterRequest;
        const response = await user.register(registerRequest);

        if (response.error) {
            setIsErrorOccured(true);
            setErrorMsg(response.error);
        } else {
            setRegisterOpened(false);
        }
    };

    return (
        <Modal
            keepMounted
            open={registerOpened}
            onClose={() => setRegisterOpened(false)}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description">
            <Box sx={style}>
                <Snackbar open={isErrorOccurred} autoHideDuration={6000} onClose={() => setIsErrorOccured(false)}>
                    <Alert onClose={() => setIsErrorOccured(false)} severity="error" sx={{ width: "100%" }}>
                        {errorMsg}
                    </Alert>
                </Snackbar>
                <CloseIcon
                    onClick={() => setRegisterOpened(false)}
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
                            Реєстрація
                        </Typography>
                        <TextField
                            {...register("firstName")}
                            sx={{ width: "300px", mt: 3 }}
                            id="standard-name"
                            label="Ім'я"
                            type="string"
                            error={!!errors.firstName}
                            helperText={errors.firstName?.message}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                        />
                        <TextField
                            {...register("lastName")}
                            sx={{ width: "300px", mt: 3 }}
                            id="standard-name"
                            label="Прізвище"
                            type="string"
                            error={!!errors.lastName}
                            helperText={errors.lastName?.message}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                        />
                        <TextField
                            {...register("phone")}
                            sx={{ width: "300px", mt: 3 }}
                            id="standard-number"
                            label="Номер телефону"
                            type="string"
                            error={!!errors.phone}
                            helperText={errors.phone?.message}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                        />
                        <TextField
                            {...register("birthday")}
                            sx={{ width: "300px", mt: 3 }}
                            id="standard-email"
                            label="Дата народження"
                            type="date"
                            error={!!errors.birthday}
                            helperText={errors.birthday?.message}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                        />
                        <TextField
                            {...register("email")}
                            sx={{ width: "300px", mt: 3 }}
                            id="standard-email"
                            label="Ел.пошта"
                            type="string"
                            error={!!errors.email}
                            helperText={errors.email?.message}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                        />
                        <TextField
                            {...register("password")}
                            sx={{ width: "300px", mt: 3 }}
                            id="standard-pass"
                            label="Пароль"
                            type="password"
                            error={!!errors.password}
                            helperText={errors.password?.message}
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
                            Зареєструватися
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
                                Вже є акаунт?
                            </Typography>
                            <Typography
                                onClick={() => {
                                    setRegisterOpened(false);
                                    setLoginOpened(true);
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
                                Увійти
                            </Typography>
                        </Box>
                    </Box>
                </form>
            </Box>
        </Modal>
    );
};

export default Register;
