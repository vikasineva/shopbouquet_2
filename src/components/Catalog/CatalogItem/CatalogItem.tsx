import { Box } from "@mui/material";
import IProduct from "../../../interfaces/IProduct";
import { Link, useNavigate } from "react-router-dom";
import { styles } from "./styles";
import cart from "../../../store/cart";
import { useEffect } from "react";

interface CatalogItemProps {
    product: IProduct;
}

const CatalogItem = ({ product }: CatalogItemProps): JSX.Element => {
    const navigate = useNavigate();

    return (
        <Box>
            <div key={product.id.timestamp}>
                <div style={styles.catalogFrame}>
                    <span style={styles.catalogPrice}>
                        <span>{product.price} грн</span>
                    </span>
                    <span style={styles.catalogTitle}>{product.name}</span>
                    <img
                        alt={product.translitName}
                        className="catalog-image09"
                        src={product.picture}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            navigate(`/product/${product.translitName}`);
                        }}
                    />
                    <Box
                        className="catalog-text069"
                        sx={{ cursor: "pointer" }}
                        onClick={() => cart.addToCart(product, 1)}>
                        Замовити
                    </Box>
                </div>
            </div>
        </Box>
    );
};

export default CatalogItem;
