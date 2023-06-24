import SortType from "../enums/SortType";

interface IFilter {
    tsina?: string;
    rozmir?: string;
    colir?: string;
    pryvid?: string;
    sortType?: SortType;
}

export default IFilter;