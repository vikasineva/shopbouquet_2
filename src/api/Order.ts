import IOrderRequest from "../components/Order/interfaces/IOrderRequest";
import axiosInstance from "./Axios";

class Order {
    static makeAnOrder = async (order: IOrderRequest): Promise<void> => {
        const { data } = await axiosInstance.post<any>(`/order/checkout`, order)
        console.log(data);
    }
}

export default Order;