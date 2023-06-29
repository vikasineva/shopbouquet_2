import { Box, Divider, Modal, Typography } from "@mui/material";
import { observer } from "mobx-react";
import cart from "../../store/cart";
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import cartImage from "../../assets/cart/shopping.png";
import { useNavigate } from "react-router-dom";
import user from "../../store/user";

interface CartProps {
    opened: boolean;
    setOpened: (state: boolean) => void;
}

const Cart = observer(({ opened, setOpened }: CartProps): JSX.Element => {
    const navigate = useNavigate();

    const style = {
        position: "absolute" as "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "970px",
        maxHeight: "750px",
        minHeight: "500px",
        bgcolor: "background.paper",
        boxShadow: 24,
        border: "1px solid #000000",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: cart.cartItems.length ? "space-between" : "start",
        p: 8,
    };

    return (
        <Modal
            keepMounted
            open={opened}
            onClose={() => setOpened(false)}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description">
            <Box sx={style}>
                <CloseIcon
                    onClick={() => setOpened(false)}
                    sx={{
                        position: "absolute",
                        top: 30,
                        right: 30,
                        color: "grey",
                        fontSize: "24px",
                        cursor: "pointer",
                    }}
                />
                <Typography sx={{ fontFamily: "Cormorant", fontWeight: 600, fontSize: "32px", lineHeight: "39px" }}>
                    Кошик
                </Typography>
                {!!cart.cartItems.length ? (
                    <Box mb={2} sx={{ overflowY: "auto" }}>
                        {cart.cartItems.map((item, index) => (
                            <Box>
                                <Box
                                    key={item.id.timestamp}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        mt: 2,
                                    }}>
                                    <Box sx={{ display: "flex", width: "400px" }}>
                                        <img style={{ borderRadius: "4px" }} src={item.picture} height={150} />
                                        <Typography
                                            sx={{
                                                fontFamily: "Open Sans",
                                                fontWeight: 600,
                                                fontSize: "16px",
                                                lineHeight: "25px",
                                                mx: 1,
                                            }}>
                                            {item.name}
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            minWidth: "100px",
                                            justifyContent: "space-between",
                                            borderRadius: "32px",
                                            backgroundColor: "#FFF3F6",
                                            px: 2,
                                        }}>
                                        <Typography
                                            onClick={() => {
                                                cart.changeProductQuantity(item.id.timestamp, -1);
                                            }}
                                            sx={{
                                                fontFamily: "Inter",
                                                fontWeight: 500,
                                                fontSize: "18px",
                                                lineHeight: "45px",
                                                cursor: "pointer",
                                            }}>
                                            -
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontFamily: "Inter",
                                                fontWeight: 500,
                                                fontSize: "18px",
                                                lineHeight: "45px",
                                            }}>
                                            {item.available}
                                        </Typography>
                                        <Typography
                                            onClick={() => {
                                                cart.changeProductQuantity(item.id.timestamp, 1);
                                            }}
                                            sx={{
                                                fontFamily: "Inter",
                                                fontWeight: 500,
                                                fontSize: "18px",
                                                lineHeight: "45px",
                                                cursor: "pointer",
                                            }}>
                                            +
                                        </Typography>
                                    </Box>
                                    <Typography
                                        sx={{
                                            fontFamily: "Open Sans",
                                            fontWeight: 700,
                                            fontSize: "16px",
                                            lineHeight: "25px",
                                        }}>
                                        {item.price} грн
                                    </Typography>
                                    <DeleteOutlineIcon
                                        sx={{ cursor: "pointer" }}
                                        onClick={() => {
                                            cart.removeFromCart(item.id.timestamp);
                                        }}
                                    />
                                </Box>
                                {index != cart.cartItems.length - 1 && <Divider sx={{ mt: 2, borderBottomWidth: 2 }} />}
                            </Box>
                        ))}
                    </Box>
                ) : (
                    <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", mt: 2 }}>
                        <Typography
                            sx={{
                                fontFamily: "Open Sans",
                                fontWeight: 400,
                                fontSize: "20px",
                                lineHeight: "25px",
                                mb: 1,
                            }}>
                            Кошик пустий, але ніколи не пізно його наповнити :)
                        </Typography>
                        <img src={cartImage} height={200}></img>
                    </Box>
                )}
                {!!cart.cartItems.length && user.isAuthorized && (
                    <Box sx={{ display: "flex", mt: "auto", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography
                            sx={{ fontFamily: "Open Sans", fontWeight: 700, fontSize: "20px", lineHeight: "25px" }}>
                            Загальна сума: {cart.totalPrice} грн
                        </Typography>
                        <Box
                            onClick={() => {
                                setOpened(false);
                                navigate("order/checkout");
                            }}
                            sx={{
                                px: 4,
                                fontFamily: "Open Sans",
                                fontWeight: 400,
                                fontSize: "16px",
                                lineHeight: "42px",
                                backgroundColor: "#FBCBD3",
                                borderRadius: "32px",
                                cursor: "pointer",
                            }}>
                            Оформити замовлення
                        </Box>
                        <Box
                            sx={{
                                px: 3,
                                fontFamily: "Open Sans",
                                fontWeight: 400,
                                fontSize: "16px",
                                lineHeight: "42px",
                                border: "1px solid #FBCBD3",
                                borderRadius: "32px",
                                cursor: "pointer",
                            }}
                            onClick={() => setOpened(false)}>
                            Продовжити покупки
                        </Box>
                    </Box>
                )}
            </Box>
        </Modal>
    );
});

export default Cart;
