import { Box, Container, Divider, TextField, Typography } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import IOrderRequest from "./interfaces/IOrderRequest";
import cart from "../../store/cart";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import Order from "../../api/Order";
import { yupResolver } from "@hookform/resolvers/yup";
import IOrderValidate from "./interfaces/IOrderValidate";
import validationSchema from "./schemas/checkoutSchema";

const Checkout = observer((): JSX.Element => {
    const [order, setOrder] = useState<IOrderRequest>({
        recipient: {
            firstName: "",
            phone: "",
        },
        delivery: {
            arrivalDate: "",
            city: "",
            house: "",
        },
        kindPay: "CASH",
        items: [],
        isAnonymous: false,
        postcardText: "None",
    });

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<IOrderValidate>({ resolver: yupResolver(validationSchema), mode: "all" });

    const checkoutOrder = async (data: FieldValues) => {
        console.log(order);

        Order.makeAnOrder(order);
    };

    useEffect(() => {
        const mapped = cart.cartItems.map((cartItem) => {
            return {
                item: {
                    id: cartItem.id,
                },
                price: cartItem.price,
                amount: cartItem.available,
            };
        });

        if (mapped.length) setOrder({ ...order, items: [...mapped] });
    }, [cart.cartItems]);

    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    paddingTop: "130px",
                }}>
                <Box mx="auto">
                    <Typography
                        sx={{
                            fontSize: "36px",
                            fontFamily: "Cormorant",
                            fontWeight: 700,
                            textAlign: "center",
                        }}>
                        Оформлення замовлення
                    </Typography>
                </Box>
                <form onSubmit={handleSubmit(checkoutOrder)}>
                    <Box mt={4} sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box sx={{ width: "66%" }}>
                            <Box
                                sx={{
                                    borderRadius: "12px",
                                    border: "1px solid #FBCBD3",
                                    background: "#FFF",
                                    p: 4,
                                }}>
                                <Box
                                    sx={{
                                        fontSize: "28px",
                                        fontFamily: "Cormorant",
                                        fontStyle: "normal",
                                        fontWeight: 600,
                                    }}>
                                    1. Контактні дані отримувача
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "column", paddingLeft: 2 }}>
                                    <TextField
                                        sx={{ width: "300px", mt: 3 }}
                                        id="standard-name"
                                        label="Ім'я"
                                        type="string"
                                        error={!!errors.firstName}
                                        helperText={errors.firstName?.message}
                                        {...register("firstName")}
                                        onChange={(e) =>
                                            setOrder({
                                                ...order,
                                                recipient: {
                                                    firstName: e.target.value,
                                                    phone: order.recipient.phone,
                                                },
                                            })
                                        }
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="standard"
                                    />
                                    <TextField
                                        sx={{ width: "300px", mt: 3 }}
                                        id="standard-name"
                                        label="Номер телефону"
                                        error={!!errors.phone}
                                        helperText={errors.phone?.message}
                                        type="string"
                                        {...register("phone")}
                                        onChange={(e) =>
                                            setOrder({
                                                ...order,
                                                recipient: {
                                                    firstName: order.recipient.firstName,
                                                    phone: e.target.value,
                                                },
                                            })
                                        }
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="standard"
                                    />
                                </Box>
                            </Box>
                            <Box
                                mt={4}
                                sx={{ borderRadius: "12px", border: "1px solid #FBCBD3", background: "#FFF", p: 4 }}>
                                <Typography
                                    sx={{
                                        fontSize: "28px",
                                        fontFamily: "Cormorant",
                                        fontStyle: "normal",
                                        fontWeight: 600,
                                    }}>
                                    2. Доставка
                                </Typography>
                                <Box sx={{ paddingLeft: 2 }}>
                                    <Typography
                                        sx={{
                                            fontSize: "22px",
                                            fontFamily: "Cormorant",
                                            fontStyle: "normal",
                                            fontWeight: 500,
                                        }}
                                        mt={3}>
                                        Адреса доставки:
                                    </Typography>
                                    <TextField
                                        {...register("city")}
                                        onChange={(e) =>
                                            setOrder({
                                                ...order,
                                                delivery: {
                                                    ...order.delivery,
                                                    city: e.target.value,
                                                },
                                            })
                                        }
                                        sx={{ width: "200px", mt: 3 }}
                                        id="standard-name"
                                        error={!!errors.city}
                                        helperText={errors.city?.message}
                                        label="Місто"
                                        type="string"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="standard"
                                    />
                                    <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
                                        <TextField
                                            {...register("street")}
                                            onChange={(e) =>
                                                setOrder({
                                                    ...order,
                                                    delivery: {
                                                        ...order.delivery,
                                                        street: e.target.value,
                                                    },
                                                })
                                            }
                                            id="standard-name"
                                            error={!!errors.street}
                                            helperText={errors.street?.message}
                                            label="Вулиця"
                                            type="string"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant="standard"
                                        />
                                        <TextField
                                            {...register("house")}
                                            onChange={(e) =>
                                                setOrder({
                                                    ...order,
                                                    delivery: {
                                                        ...order.delivery,
                                                        house: e.target.value,
                                                    },
                                                })
                                            }
                                            id="standard-name"
                                            label="Дім"
                                            error={!!errors.house}
                                            helperText={errors.house?.message}
                                            type="string"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant="standard"
                                        />
                                        <TextField
                                            {...register("apartment")}
                                            onChange={(e) =>
                                                setOrder({
                                                    ...order,
                                                    delivery: {
                                                        ...order.delivery,
                                                        apartment: +e.target.value,
                                                    },
                                                })
                                            }
                                            id="standard-name"
                                            error={!!errors.apartment}
                                            helperText={errors.apartment?.message}
                                            label="Квартира"
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant="standard"
                                        />
                                    </Box>
                                    <Typography
                                        mt={4}
                                        mb={3}
                                        sx={{
                                            fontSize: "22px",
                                            fontFamily: "Cormorant",
                                            fontStyle: "normal",
                                            fontWeight: 500,
                                        }}>
                                        Дата та час доставки
                                    </Typography>
                                    {!!errors.arrivalDate && (
                                        <Box sx={{ color: "red" }}>* {errors.arrivalDate?.message}</Box>
                                    )}
                                    <input
                                        {...register("arrivalDate")}
                                        type="datetime-local"
                                        onChange={(e) =>
                                            setOrder({
                                                ...order,
                                                delivery: { ...order.delivery, arrivalDate: e.target.value },
                                            })
                                        }
                                    />
                                    <Box mt={3} sx={{ display: "flex" }}>
                                        <input
                                            type="checkbox"
                                            value={order.isAnonymous ? "on" : "off"}
                                            onChange={(e) => {
                                                setOrder({
                                                    ...order,
                                                    isAnonymous: e.target.checked,
                                                });
                                            }}
                                        />
                                        <Typography
                                            sx={{
                                                ml: 1,
                                                fontSize: "14px",
                                                fontFamily: "Open Sans",
                                                fontWeight: 400,
                                                color: "#5E5E5E",
                                            }}>
                                            Відправити замовлення анонімно
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box
                                mt={4}
                                sx={{ borderRadius: "12px", border: "1px solid #FBCBD3", background: "#FFF", p: 4 }}>
                                <Typography
                                    sx={{
                                        fontSize: "28px",
                                        fontFamily: "Cormorant",
                                        fontStyle: "normal",
                                        fontWeight: 600,
                                    }}>
                                    3. Оплата
                                </Typography>
                                <Box
                                    sx={{ paddingLeft: 2 }}
                                    component="div"
                                    onChange={(e: any) => {
                                        console.log(e.target.value);
                                    }}>
                                    <Box sx={{ display: "flex" }}>
                                        <input type="radio" name="payment" value="CASH" />
                                        <Typography
                                            ml={1}
                                            sx={{ fontSize: "16px", fontFamily: "Open Sans", fontWeight: 500 }}>
                                            Оплатити готівкою під час отримання
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: "flex" }}>
                                        <input type="radio" name="payment" value="BANK_CARD" />
                                        <Typography
                                            ml={1}
                                            sx={{ fontSize: "16px", fontFamily: "Open Sans", fontWeight: 500 }}>
                                            Оплата картою
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box
                                onClick={() => {
                                    checkoutOrder(order);
                                }}
                                mt={2}
                                mb={2}
                                sx={{
                                    borderRadius: "41px",
                                    backgroundColor: "#FBCBD3",
                                    padding: "13px 66px",
                                    width: "330px",
                                    cursor: "pointer",
                                }}
                                mx="auto">
                                <Typography
                                    sx={{
                                        fontSize: "16px",
                                        fontFamily: "Open Sans",
                                        fontWeight: 600,
                                    }}>
                                    Оформити замовлення
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ width: "33%" }}>
                            <Box
                                sx={{
                                    p: 3,
                                    backgroundColor: "#FFF3F6",
                                    borderRadius: "12px",
                                    border: "1px solid #FBCBD3",
                                }}>
                                <Typography
                                    sx={{
                                        fontSize: "28px",
                                        fontFamily: "Cormorant",
                                        fontStyle: "normal",
                                        fontWeight: 600,
                                    }}>
                                    Замовлення
                                </Typography>
                                <Box sx={{ maxHeight: "400px", overflowY: "auto" }}>
                                    {cart.cartItems.map((item) => (
                                        <Box mt={1} sx={{ display: "flex" }} key={item.id.timestamp}>
                                            <img
                                                src={item.picture}
                                                alt="product"
                                                height={86}
                                                width={86}
                                                style={{ borderRadius: "4px" }}
                                            />
                                            <Box
                                                ml={2}
                                                sx={{
                                                    maxHeight: "86px",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "space-between",
                                                }}>
                                                <Typography
                                                    sx={{
                                                        fontSize: "14px",
                                                        fontFamily: "Open Sans",
                                                        width: "200px",
                                                        overflow: "hidden",
                                                        fontWeight: 600,
                                                    }}>
                                                    {item.name}
                                                </Typography>
                                                <Box>
                                                    <Typography
                                                        sx={{
                                                            fontSize: "12px",
                                                            fontFamily: "Open Sans",
                                                            fontWeight: 400,
                                                        }}>
                                                        Кількість: {item.available} шт
                                                    </Typography>
                                                    <Typography
                                                        mt={1}
                                                        sx={{
                                                            fontSize: "12px",
                                                            fontFamily: "Open Sans",
                                                            fontWeight: 400,
                                                        }}>
                                                        Ціна: {item.price} грн
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    ))}
                                </Box>
                                <Divider sx={{ borderColor: "#E27D8E", mt: 3, mb: 2 }} />
                                <Box>
                                    <Typography
                                        sx={{
                                            fontSize: "12px",
                                            fontFamily: "Open Sans",
                                            fontWeight: 400,
                                        }}>
                                        Сума замовлення:{" "}
                                        <span style={{ fontWeight: "bold", float: "right" }}>
                                            {cart.totalPrice} грн
                                        </span>
                                    </Typography>
                                </Box>
                                <Box mt={1}>
                                    <Typography
                                        sx={{
                                            fontSize: "12px",
                                            fontFamily: "Open Sans",
                                            fontWeight: 400,
                                        }}>
                                        Вартість доставки:{" "}
                                        <span style={{ fontWeight: "bold", float: "right" }}>Безкоштовно</span>
                                    </Typography>
                                </Box>
                                <Divider sx={{ borderColor: "#E27D8E", mt: 2, mb: 2 }} />
                                <button type="submit">
                                    <Typography
                                        sx={{
                                            fontSize: "14px",
                                            fontFamily: "Open Sans",
                                            fontWeight: 700,
                                        }}>
                                        Загальна вартість:
                                        <span style={{ float: "right" }}>{cart.totalPrice} грн</span>
                                    </Typography>
                                </button>
                            </Box>
                        </Box>
                    </Box>
                </form>
            </Box>
        </Container>
    );
});

export default Checkout;
