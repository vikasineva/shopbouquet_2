import IFilter from "../interfaces/IFilter";
import IPaginatedProducts from "../interfaces/IPaginatedProducts";
import IProduct from "../interfaces/IProduct";
import axiosInstance from "./Axios";

class Catalog {
    static getProducts = async (catalogName: string, page: number = 1, filters?: IFilter): Promise<IPaginatedProducts<IProduct>> => {
        const baseUrl = `/${catalogName}?page=${page}`;

        const urlParams = new URLSearchParams();

        if (filters) {
            if (Object.keys(filters).length) {
                for (const key in filters) {
                    const parameter = filters[key as keyof IFilter];
                    if (parameter) {
                        urlParams.append(key, parameter);
                    }
                }
            }
        }

        const completeUrl = urlParams.toString() ? `${baseUrl}&${urlParams.toString()}` : `${baseUrl}`;

        const data = await axiosInstance.get<IPaginatedProducts<IProduct>>(completeUrl)
            .then(response => response.data).catch(err => {
                const emptyData: IPaginatedProducts<IProduct> = {
                    products: [],
                    pagination: {
                        curPage: 0,
                        itemsCount: 0,
                        itemsPerPage: 0,
                        numberOfPages: 0,
                    }
                }

                return emptyData
            });

        return data;
    };

    static getProduct = async (productName: string): Promise<IProduct> => {
        const { data } = await axiosInstance.get<IProduct>(
            `/product/${productName}`
        );

        return data;
    };
}

export default Catalog;