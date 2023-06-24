interface IPaginatedProducts<T> {
    products: T[];
    pagination: {
        curPage: number;
        itemsCount: number;
        itemsPerPage: number;
        numberOfPages: number;
    };
}

export default IPaginatedProducts;