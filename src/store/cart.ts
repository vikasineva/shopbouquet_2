import { makeAutoObservable } from "mobx";
import IProduct from "../interfaces/IProduct";


class Cart {
    cartItems: IProduct[] = [];

    constructor() {
        makeAutoObservable(this);

        const recievedItems = localStorage.getItem("shoppingCart");
        this.cartItems = JSON.parse(recievedItems ?? "[]");
    }

    addToCart(product: IProduct, countProductsToAdd: number) {
        if (this.cartItems.find((cartItem) => cartItem.id.timestamp === product.id.timestamp))
            this.cartItems = this.cartItems.map((cartItem) =>
                cartItem.id.timestamp === product.id.timestamp
                    ? {
                        ...cartItem,
                        available: cartItem.available + countProductsToAdd,
                    }
                    : cartItem
            );
        else {
            product.available = countProductsToAdd;
            this.cartItems.push(product);
        }

        localStorage.setItem("shoppingCart", JSON.stringify(this.cartItems));
    }

    removeFromCart(itemId: number) {
        const filterPredicate = (cartItem: IProduct) => cartItem.id.timestamp !== itemId;

        this.cartItems = this.cartItems.filter(filterPredicate);

        localStorage.setItem("shoppingCart", JSON.stringify(this.cartItems));
    }

    changeProductQuantity(itemId: number, valueOnChange: number) {
        this.cartItems = this.cartItems.map((cartItem) =>
            cartItem.id.timestamp === itemId
                ? {
                    ...cartItem,
                    available:
                        valueOnChange < 0 && cartItem.available > 1
                            ? cartItem.available + valueOnChange
                            : valueOnChange > 0
                                ? cartItem.available + valueOnChange
                                : 1,
                }
                : cartItem
        );

        localStorage.setItem("shoppingCart", JSON.stringify(this.cartItems));
    }

    cleanCart(): void {
        this.cartItems = [];
        localStorage.setItem("shoppingCart", JSON.stringify(this.cartItems));
    }

    get totalPrice(): number {
        const receivedValue = this.cartItems.reduce(
            (accumulator, currCartItem) => accumulator + currCartItem.price * currCartItem.available,
            0
        );
        return receivedValue;
    }

    get guantityOfGoodsInCart(): number {
        const quantityOfItems = this.cartItems
            .reduce((accumulator, currCartItem) => accumulator + currCartItem.available, 0)

        return quantityOfItems;
    }
}

export default new Cart();
