import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./product.css";
import IProduct from "../../../interfaces/IProduct";
import CatalogApi from "../../../api/Catalog";
import mock_600w from "../../../assets/home/img/mock-600w.png";
import left_arrow from "../../../assets/home/left_arrow.svg";
import right_arrow from "../../../assets/home/right_arrow.svg";
import cart from "../../../store/cart";
import { Box } from "@mui/material";

const ProductInfo = (): JSX.Element => {
    const { productName } = useParams();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [quantity, setQuantity] = useState<number>(0);
    const [product, setProduct] = useState<IProduct>({
        id: {
            timestamp: 0,
            date: 0,
        },
        name: "",
        translitName: "",
        description: "",
        price: 0,
        discount: 0,
        picture: "",
        available: 0,
        categories: [
            {
                name: "",
                translitName: "",
            },
        ],
        composition: [
            {
                flower: {
                    id: {
                        timestamp: 0,
                        date: 0,
                    },
                    name: "",
                    description: "",
                    icon: "",
                    colors: [
                        {
                            name: "",
                            translateName: "",
                        },
                    ],
                },
                quantity: 0,
                color: "",
                translitColor: "",
            },
        ],
        themes: [
            {
                name: "",
                translitName: "",
            },
        ],
        size: {
            height: 0,
            width: 0,
        },
        wrapping: [],
    });

    const addToCart = (product: IProduct, quantity: number) => {
        if (quantity) {
            cart.addToCart(product, quantity);
            setQuantity(0);
        }
    };

    useEffect(() => {
        const init = async () => {
            if (productName) {
                setIsLoading(true);
                const data = await CatalogApi.getProduct(productName);
                setProduct(data);
                setIsLoading(false);
            }
        };

        init();
    }, []);

    return (
        <div className="product-container">
            <Helmet>
                <title>Product - Rosella</title>
                <meta property="og:title" content="Product - Rosella" />
            </Helmet>
            <div className="product-frame"></div>
            <div className="product-frame01">
                <span className="product-text">
                    <span>Квіти / Cезонні букети / Букет “Весняний”</span>
                </span>
                <img alt="mock" src={product.picture} className="product-image" />
                <span className="product-text02">
                    <span>{product.name}</span>
                </span>
                <span className="product-text04">
                    <span>{product.price} грн</span>
                </span>
                <div className="product-frame02">
                    <span className="product-text06">{quantity}</span>
                    <span
                        style={{ cursor: "pointer" }}
                        className="product-text07"
                        onClick={() => setQuantity((prev) => prev + 1)}>
                        +
                    </span>
                    <span
                        style={{ cursor: "pointer" }}
                        className="product-text08"
                        onClick={() => {
                            if (quantity > 0) setQuantity((prev) => prev - 1);
                        }}>
                        -
                    </span>
                </div>
                <Box sx={{ cursor: "pointer" }} className="product-link" onClick={() => addToCart(product, quantity)}>
                    Замовити
                </Box>
                <span className="product-text09">
                    <span>{product.available > 0 ? "в наявності" : "немає в наявності"}</span>
                </span>
                <span className="product-text11">
                    <span>артикул: {product.id.timestamp % 10000}</span>
                </span>
                <div className="product-frame03">
                    <span className="product-text13">
                        <span>Опис</span>
                    </span>
                    <span className="product-text15">{product.description}</span>
                    <div className="product-frame04">
                        <span className="product-text16">
                            <span>Розмір:</span>
                        </span>
                        <span className="product-text18">
                            {product.size.width < 25 ?
                                "S" : product.size.width >= 25 && product.size.width < 35 ?
                                "M" : product.size.width >= 35 && product.size.width < 50 ?
                                "L" : product.size.width >= 50 ?
                                "XL" : ""}
                        </span>
                    </div>
                    <span className="product-text19">
                        <span>Висота: {product.size.height} см</span>
                    </span>
                    <span className="product-text21">
                        <span>Діаметр: {product.size.width} см</span>
                    </span>
                    <span className="product-text23">
                        <span>Склад</span>
                    </span>
                </div>
                <div className="product-frame05">
                    {product.composition.map(
                        (item) =>
                            item.flower && (
                                <div key={item.flower.id.timestamp}>
                                    <div className="product-frame06">
                                        <img
                                            alt="flower"
                                            src={item.flower === null ? "" : item.flower.icon}
                                            className="product-image01"
                                        />
                                        <span className="product-text25">
                                            <span>{item.flower === null ? "" : item.flower.name}</span>
                                        </span>
                                    </div>
                                </div>
                            )
                    )}
                </div>
            </div>
            <div className="product-frame14">
                <span className="product-text41">
                    <span>Схожі товари</span>
                </span>
                <img alt="left_arrow." src={left_arrow} className="product-image09" />
                <img alt="right_arrow" src={right_arrow} className="product-image10" />
                <div className="product-frame15">
                    <div className="product-frame16">
                        <span className="product-text43">
                            <span>700 грн</span>
                        </span>
                        <span className="product-text45">
                            <span>
                                <span>
                                    Букет з трояндами
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: " ",
                                        }}
                                    />
                                </span>
                                <span>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: " ",
                                        }}
                                    />
                                </span>
                            </span>
                        </span>
                        <img alt="mock" src={mock_600w} className="product-image11" />
                        <Link to="/" className="product-text49">
                            Замовити
                        </Link>
                    </div>
                    <div className="product-frame17">
                        <span className="product-text50">
                            <span>700 грн</span>
                        </span>
                        <span className="product-text52">
                            <span>
                                <span>
                                    Букет з трояндами
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: " ",
                                        }}
                                    />
                                </span>
                                <span>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: " ",
                                        }}
                                    />
                                </span>
                            </span>
                        </span>
                        <img alt="mock" src={mock_600w} className="product-image12" />
                        <Link to="/" className="product-text56">
                            Замовити
                        </Link>
                    </div>
                    <div className="product-frame18">
                        <span className="product-text57">
                            <span>700 грн</span>
                        </span>
                        <span className="product-text59">Букет з трояндами</span>
                        <img alt="mock" src={mock_600w} className="product-image13" />
                        <Link to="/" className="product-text63">
                            Замовити
                        </Link>
                    </div>
                    <div className="product-frame19">
                        <span className="product-text64">
                            <span>700 грн</span>
                        </span>
                        <span className="product-text66">
                            <span>
                                <span>
                                    Букет з трояндами
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: " ",
                                        }}
                                    />
                                </span>
                                <span>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: " ",
                                        }}
                                    />
                                </span>
                            </span>
                        </span>
                        <img alt="mock" src={mock_600w} className="product-image14" />
                        <Link to="/" className="product-text70">
                            Замовити
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
