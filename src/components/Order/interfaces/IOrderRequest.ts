interface IOrderRequest {
    recipient: {
        firstName?: string;
        phone?: string;
    }
    delivery: {
        arrivalDate?: string;
        city?: string;
        house?: string;
        apartment?: number;
        street?: string;
    }
    kindPay: string;
    items: any[];
    isAnonymous: boolean;
    postcardText: string;
}

export default IOrderRequest;