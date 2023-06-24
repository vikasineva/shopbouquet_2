import IProduct from "../../interfaces/IProduct";
import "./catalog.css";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import CatalogApi from "../../api/Catalog";
import cross from "../../assets/catalog/cross.svg";
import down_arrow from "../../assets/catalog/down_arrow.svg";
import { Box, CircularProgress, Pagination, Typography } from "@mui/material";
import CatalogItem from "./CatalogItem/CatalogItem";
import IPagination from "../../interfaces/IPagination";
import IFilter from "../../interfaces/IFilter";
import SortType from "../../enums/SortType";

interface CatalogProps {
    path: string;
    catalogName: string;
}

const Catalog = ({ path, catalogName }: CatalogProps): JSX.Element => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [pagination, setPagination] = useState<IPagination>();
    const [page, setPage] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [filter, setFilter] = useState<IFilter>({});

    const [prices, setPrices] = useState([
        { value: "0-500", title: "до 500 грн", checked: false },
        { value: "500-800", title: "500-800 грн", checked: false },
        { value: "800-1500", title: "800-1500 грн", checked: false },
        { value: "1500-3000", title: "1500-3000 грн", checked: false },
        { value: "3000-5000", title: "3000-5000 грн", checked: false },
        { value: "5000-100000", title: "від 5000 грн", checked: false },
    ]);

    const [sizes, setSizes] = useState([
        { value: "S", title: "S (маленький)", checked: false },
        { value: "M", title: "M (середній)", checked: false },
        { value: "L", title: "L (великий)", checked: false },
        { value: "XL", title: "XL (величезний)", checked: false },
    ]);

    const [colors, setColors] = useState([
        { value: "chervonyj", title: "Червоний", checked: false },
        { value: "bilyj", title: "Білий", checked: false },
        { value: "rozhevyj", title: "Рожевий", checked: false },
        { value: "zhovtyj", title: "Жовтий", checked: false },
        { value: "zelenyj", title: "Зелений", checked: false },
        { value: "blakytnyj", title: "Блакитний", checked: false },
        { value: "kremovyj", title: "Кремовий", checked: false },
        { value: "pomaranchevyj", title: "Помаранчевий", checked: false },
        { value: "fioletovyj", title: "Фіолетовий", checked: false },
        { value: "chornyj", title: "Чорний", checked: false },
    ]);

    const [sortTypes, setSortTypes] = useState([
        { value: SortType.CHEAP, title: "Спочатку дешевше", checked: false },
        { value: SortType.POPULARITY, title: "Популярні", checked: false },
        { value: SortType.EXPENSIVE, title: "Спочатку дорожче", checked: false },
        { value: SortType.NOVELTY, title: "Новинки", checked: false },
    ]);

    const [themes, setThemes] = useState([
        {
            category: "osobystyi",
            value: "vesillia",
            title: "Весілля",
            checked: false,
        },
        {
            category: "osobystyi",
            value: "den narodzhennia",
            title: "День народження",
            checked: false,
        },
        {
            category: "osobystyi",
            value: "kokhaiu",
            title: "Кохаю",
            checked: false,
        },
        {
            category: "osobystyi",
            value: "narodzhennia dytyny",
            title: "Народження дитини",
            checked: false,
        },
        {
            category: "kalendarnyi",
            value: "14 liutoho",
            title: "14 лютого",
            checked: false,
        },
        {
            category: "kalendarnyi",
            value: "8 bereznia",
            title: "8 березня",
            checked: false,
        },
        {
            category: "kalendarnyi",
            value: "den materi",
            title: "День матері",
            checked: false,
        },
        {
            category: "kalendarnyi",
            value: "novorichnyi dekor",
            title: "Новорічний декор",
            checked: false,
        },
    ]);

    useEffect(() => {
        const init = async () => {
            setIsLoading(true);
            const data = await CatalogApi.getProducts(path, page, filter);
            setProducts(data.products);
            setPagination(data.pagination);
            setIsLoading(false);
        };

        init();
    }, [page, filter]);

    return (
        <div className="catalog-container">
            <Helmet>
                <title>Catalog - Rosella</title>
                <meta property="og:title" content="Catalog - Rosella" />
            </Helmet>
            <div className="catalog-frame"></div>
            <span className="catalog-text">
                <span>
                    <span>{catalogName}</span>
                </span>
            </span>
            <span className="catalog-text004">
                <span>{catalogName}</span>
            </span>
            <div className="catalog-frame01">
                <div data-thq="thq-dropdown" className="catalog-dropdown">
                    <div data-thq="thq-dropdown-toggle" className="catalog-dropdown-toggle">
                        <span className="catalog-text006">Ціна</span>
                        <div data-thq="thq-dropdown-arrow" className="catalog-dropdown-arrow">
                            <img alt="down_arrow" src={down_arrow} className="catalog-image" />
                        </div>
                    </div>
                    <ul data-thq="thq-dropdown-list" className="catalog-dropdown-list">
                        {prices.map((item) => (
                            <li data-thq="thq-dropdown" className="catalog-dropdown01">
                                <div data-thq="thq-dropdown-toggle" className="catalog-dropdown-toggle01">
                                    <input
                                        type="radio"
                                        className="catalog-checkbox"
                                        name="price"
                                        checked={item.checked}
                                        onChange={() => {
                                            const updatedList = [
                                                ...prices.map((p) => {
                                                    if (p.value === item.value) p.checked = true;
                                                    else p.checked = false;

                                                    return p;
                                                }),
                                            ];

                                            setPrices([...updatedList]);
                                        }}
                                    />
                                    <span className="catalog-text007">{item.title}</span>
                                </div>
                            </li>
                        ))}
                        <li data-thq="thq-dropdown" className="catalog-dropdown07">
                            <div data-thq="thq-dropdown-toggle" className="catalog-dropdown-toggle07">
                                <button
                                    className="catalog-button"
                                    onClick={() => {
                                        const appliedPrice = prices.find((p) => p.checked === true);
                                        if (appliedPrice) setFilter({ ...filter, tsina: appliedPrice.value });
                                    }}>
                                    Застосувати
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div data-thq="thq-dropdown" className="catalog-thq-dropdown">
                    <div data-thq="thq-dropdown-toggle" className="catalog-dropdown-toggle08">
                        <span className="catalog-text013">
                            <span>Розмір</span>
                            <br></br>
                        </span>
                        <div data-thq="thq-dropdown-arrow" className="catalog-dropdown-arrow1">
                            <img alt="down_arrow" src={down_arrow} className="catalog-image01" />
                        </div>
                    </div>
                    <ul data-thq="thq-dropdown-list" className="catalog-dropdown-list1">
                        {sizes.map((item) => (
                            <li data-thq="thq-dropdown" className="catalog-dropdown08">
                                <div data-thq="thq-dropdown-toggle" className="catalog-dropdown-toggle09">
                                    <input
                                        type="checkbox"
                                        className="catalog-checkbox06"
                                        name="size"
                                        checked={item.checked}
                                        onChange={() => {
                                            const updatedList = [
                                                ...sizes.map((size) => {
                                                    if (size.value === item.value) size.checked = !size.checked;
                                                    return size;
                                                }),
                                            ];

                                            setSizes([...updatedList]);
                                        }}
                                    />
                                    <span className="catalog-text016">{item.title}</span>
                                </div>
                            </li>
                        ))}
                        <li data-thq="thq-dropdown" className="catalog-dropdown12">
                            <div data-thq="thq-dropdown-toggle" className="catalog-dropdown-toggle13">
                                <button
                                    className="catalog-button1"
                                    onClick={() => {
                                        const choosenSizes = sizes.filter((s) => s.checked === true);
                                        const sizeValues = choosenSizes.map((value) => value.value).join(",");
                                        if (choosenSizes.length) setFilter({ ...filter, rozmir: sizeValues });
                                    }}>
                                    Застосувати
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div data-thq="thq-dropdown" className="catalog-thq-dropdown1">
                    <div data-thq="thq-dropdown-toggle" className="catalog-dropdown-toggle14">
                        <span className="catalog-text020">
                            <span>Колір</span>
                            <br></br>
                        </span>
                        <div data-thq="thq-dropdown-arrow" className="catalog-dropdown-arrow2">
                            <img alt="down_arrow" src={down_arrow} className="catalog-image02" />
                        </div>
                    </div>
                    <ul data-thq="thq-dropdown-list" className="catalog-dropdown-list2">
                        {colors.map((item) => (
                            <li data-thq="thq-dropdown" className="catalog-dropdown13">
                                <div data-thq="thq-dropdown-toggle" className="catalog-dropdown-toggle15">
                                    <input
                                        type="checkbox"
                                        className="catalog-checkbox10"
                                        name="color"
                                        checked={item.checked}
                                        onChange={() => {
                                            const updatedList = [
                                                ...colors.map((color) => {
                                                    if (color.value === item.value) color.checked = !color.checked;
                                                    return color;
                                                }),
                                            ];

                                            setColors([...updatedList]);
                                        }}
                                    />
                                    <span className="catalog-text023">{item.title}</span>
                                </div>
                            </li>
                        ))}
                        <li data-thq="thq-dropdown" className="catalog-dropdown23">
                            <div data-thq="thq-dropdown-toggle" className="catalog-dropdown-toggle25">
                                <button
                                    className="catalog-button2"
                                    onClick={() => {
                                        const choosenColors = colors.filter((c) => c.checked === true);
                                        const colorValues = choosenColors.map((value) => value.value).join(",");
                                        if (choosenColors.length) setFilter({ ...filter, colir: colorValues });
                                    }}>
                                    Застосувати
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div data-thq="thq-dropdown" className="catalog-thq-dropdown2">
                    <div data-thq="thq-dropdown-toggle" className="catalog-dropdown-toggle26">
                        <span className="catalog-text033">
                            <span>Привід</span>
                            <br></br>
                        </span>
                        <div data-thq="thq-dropdown-arrow" className="catalog-dropdown-arrow3">
                            <img alt="down_arrow" src={down_arrow} className="catalog-image03" />
                        </div>
                    </div>
                    <ul data-thq="thq-dropdown-list" className="catalog-dropdown-list3">
                        <li data-thq="thq-dropdown" className="catalog-dropdown24">
                            <div data-thq="thq-dropdown-toggle" className="catalog-dropdown-toggle27">
                                <span className="catalog-text036">Особистий</span>
                            </div>
                        </li>
                        {themes.map(
                            (item) =>
                                item.category === "osobystyi" && (
                                    <li data-thq="thq-dropdown" className="catalog-dropdown25">
                                        <div data-thq="thq-dropdown-toggle" className="catalog-dropdown-toggle28">
                                            <input
                                                type="checkbox"
                                                className="catalog-checkbox20"
                                                name="theme"
                                                checked={item.checked}
                                                onChange={() => {
                                                    const updatedList = [
                                                        ...themes.map((theme) => {
                                                            if (theme.value === item.value)
                                                                theme.checked = !theme.checked;
                                                            return theme;
                                                        }),
                                                    ];

                                                    setThemes([...updatedList]);
                                                }}
                                            />
                                            <span className="catalog-text037">{item.title}</span>
                                        </div>
                                    </li>
                                )
                        )}
                        <li data-thq="thq-dropdown" className="catalog-dropdown29">
                            <div data-thq="thq-dropdown-toggle" className="catalog-dropdown-toggle32">
                                <div className="catalog-frame02"></div>
                            </div>
                        </li>
                        <li data-thq="thq-dropdown" className="catalog-dropdown30">
                            <div data-thq="thq-dropdown-toggle" className="catalog-dropdown-toggle33">
                                <span className="catalog-text041">Календарний</span>
                            </div>
                        </li>
                        {themes.map(
                            (item) =>
                                item.category === "kalendarnyi" && (
                                    <li data-thq="thq-dropdown" className="catalog-dropdown25">
                                        <div data-thq="thq-dropdown-toggle" className="catalog-dropdown-toggle28">
                                            <input
                                                type="checkbox"
                                                className="catalog-checkbox20"
                                                name="theme"
                                                checked={item.checked}
                                                onChange={() => {
                                                    const updatedList = [
                                                        ...themes.map((theme) => {
                                                            if (theme.value === item.value)
                                                                theme.checked = !theme.checked;
                                                            return theme;
                                                        }),
                                                    ];

                                                    setThemes([...updatedList]);
                                                }}
                                            />
                                            <span className="catalog-text037">{item.title}</span>
                                        </div>
                                    </li>
                                )
                        )}
                        <li data-thq="thq-dropdown" className="catalog-dropdown35">
                            <div data-thq="thq-dropdown-toggle" className="catalog-dropdown-toggle38">
                                <button
                                    className="catalog-button3"
                                    onClick={() => {
                                        const choosenThemes = themes.filter((t) => t.checked === true);
                                        const themeValues = choosenThemes.map((value) => value.value).join(",");
                                        if (choosenThemes.length) setFilter({ ...filter, pryvid: themeValues });
                                    }}>
                                    Застосувати
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div data-thq="thq-dropdown" className="catalog-thq-dropdown3">
                    <div data-thq="thq-dropdown-toggle" className="catalog-dropdown-toggle39">
                        <div data-thq="thq-dropdown-arrow" className="catalog-dropdown-arrow4">
                            <img alt="down_arrow" src={down_arrow} className="catalog-image04" />
                        </div>
                        <span className="catalog-text046">
                            <span>Відсортувати за:</span>
                        </span>
                        <span className="catalog-text048">
                            <span>{filter.sortType}</span>
                        </span>
                    </div>
                    <ul data-thq="thq-dropdown-list" className="catalog-dropdown-list2">
                        {sortTypes.map((item) => (
                            <li data-thq="thq-dropdown" className="catalog-dropdown13">
                                <div data-thq="thq-dropdown-toggle" className="catalog-dropdown-toggle15">
                                    <input
                                        type="radio"
                                        className="catalog-checkbox10"
                                        name="sort"
                                        checked={item.checked}
                                        onChange={() => {
                                            const updatedList = [
                                                ...sortTypes.map((s) => {
                                                    if (s.value === item.value) s.checked = true;
                                                    else s.checked = false;

                                                    return s;
                                                }),
                                            ];

                                            setSortTypes([...updatedList]);
                                        }}
                                    />
                                    <span className="catalog-text023">{item.title}</span>
                                </div>
                            </li>
                        ))}
                        <li data-thq="thq-dropdown" className="catalog-dropdown23">
                            <div data-thq="thq-dropdown-toggle" className="catalog-dropdown-toggle25">
                                <button
                                    className="catalog-button2"
                                    onClick={() => {
                                        const selectedSortType = sortTypes.find((s) => s.checked === true);
                                        if (selectedSortType)
                                            setFilter({ ...filter, sortType: selectedSortType.value });
                                    }}>
                                    Застосувати
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "flex-start",
                    flexDirection: "row",
                    maxWidth: "1150px",
                }}>
                {sizes
                    .filter((s) => s.checked === true && filter.rozmir?.split(",").includes(s.value))
                    .map((size) => (
                        <div className="catalog-frame04 mb-4">
                            <span className="catalog-text053">
                                <span>{size.title}</span>
                            </span>
                            <img
                                style={{ cursor: "pointer" }}
                                alt="cross"
                                src={cross}
                                onClick={() => {
                                    setSizes([
                                        ...sizes.map((item) => {
                                            if (item.value === size.value) {
                                                item.checked = false;

                                                const updatedFilter = filter;

                                                const sizeValues = filter.rozmir
                                                    ?.split(",")
                                                    .filter((r) => r !== item.value)
                                                    .join(",");

                                                updatedFilter.rozmir = sizeValues;

                                                if (!sizeValues) {
                                                    delete updatedFilter.rozmir;
                                                }

                                                setFilter({ ...updatedFilter });
                                            }
                                            return item;
                                        }),
                                    ]);
                                }}
                                className="catalog-image05"
                            />
                        </div>
                    ))}
                {prices
                    .filter((p) => p.checked === true && p.value === filter.tsina)
                    .map((price) => (
                        <div className="catalog-frame04 mb-4">
                            <span className="catalog-text053">
                                <span>{price.title}</span>
                            </span>
                            <img
                                style={{ cursor: "pointer" }}
                                alt="cross"
                                src={cross}
                                onClick={() => {
                                    setPrices([
                                        ...prices.map((item) => {
                                            if (item.value === price.value) {
                                                item.checked = false;

                                                const changedFilter = filter;
                                                delete changedFilter.tsina;
                                                setFilter({ ...changedFilter });
                                            }
                                            return item;
                                        }),
                                    ]);
                                }}
                                className="catalog-image05"
                            />
                        </div>
                    ))}
                {colors
                    .filter((c) => c.checked === true && filter.colir?.split(",").includes(c.value))
                    .map((color) => (
                        <div className="catalog-frame04 mb-4">
                            <span className="catalog-text053">
                                <span>{color.title}</span>
                            </span>
                            <img
                                style={{ cursor: "pointer" }}
                                alt="cross"
                                src={cross}
                                onClick={() => {
                                    setColors([
                                        ...colors.map((item) => {
                                            if (item.value === color.value) {
                                                item.checked = false;

                                                const updatedFilter = filter;

                                                const colorValues = filter.colir
                                                    ?.split(",")
                                                    .filter((c) => c !== item.value)
                                                    .join(",");

                                                updatedFilter.colir = colorValues;

                                                if (!colorValues) {
                                                    delete updatedFilter.colir;
                                                }

                                                setFilter({ ...updatedFilter });
                                            }
                                            return item;
                                        }),
                                    ]);
                                }}
                                className="catalog-image05"
                            />
                        </div>
                    ))}
                {themes
                    .filter((t) => t.checked === true && filter.pryvid?.split(",").includes(t.value))
                    .map((theme) => (
                        <div className="catalog-frame04 mb-4">
                            <span className="catalog-text053">
                                <span>{theme.title}</span>
                            </span>
                            <img
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    setThemes([
                                        ...themes.map((item) => {
                                            if (item.value === theme.value) {
                                                item.checked = false;

                                                const updatedFilter = filter;

                                                const newThemeValues = filter.pryvid
                                                    ?.split(",")
                                                    .filter((p) => p !== item.value)
                                                    .join(",");

                                                updatedFilter.pryvid = newThemeValues;

                                                if (!newThemeValues) {
                                                    delete updatedFilter.pryvid;
                                                }

                                                setFilter({ ...updatedFilter });
                                            }
                                            return item;
                                        }),
                                    ]);
                                }}
                                alt="cross"
                                src={cross}
                                className="catalog-image05"
                            />
                        </div>
                    ))}
                {sortTypes
                    .filter((st) => st.checked === true && st.value === filter.sortType)
                    .map((sortType) => (
                        <div className="catalog-frame04 mb-4">
                            <span className="catalog-text053">
                                <span>{sortType.title}</span>
                            </span>
                            <img
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    setSortTypes([
                                        ...sortTypes.map((item) => {
                                            if (item.value === sortType.value) {
                                                item.checked = false;

                                                const changedFilter = filter;
                                                delete changedFilter.sortType;
                                                setFilter({ ...changedFilter });
                                            }
                                            return item;
                                        }),
                                    ]);
                                }}
                                alt="cross"
                                src={cross}
                                className="catalog-image05"
                            />
                        </div>
                    ))}

                {!!Object.keys(filter).length && (
                    <span
                        className="catalog-text061"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            setFilter({});
                            setColors([
                                ...colors.map((c) => {
                                    c.checked = false;
                                    return c;
                                }),
                            ]);
                            setThemes([
                                ...themes.map((t) => {
                                    t.checked = false;
                                    return t;
                                }),
                            ]);
                            setPrices([
                                ...prices.map((p) => {
                                    p.checked = false;
                                    return p;
                                }),
                            ]);
                            setSizes([
                                ...sizes.map((s) => {
                                    s.checked = false;
                                    return s;
                                }),
                            ]);
                            setSortTypes([
                                ...sortTypes.map((st) => {
                                    st.checked = false;
                                    return st;
                                }),
                            ]);
                        }}>
                        Скинути фільтри
                    </span>
                )}
            </Box>
            <div>
                {isLoading ? (
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <Box mb={1}>
                        {!!products.length ? (
                            <Box>
                                <div className="catalog-grid mb-2">
                                    {products.map((item) => (
                                        <CatalogItem key={item.id.timestamp} product={item} />
                                    ))}
                                </div>
                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                    <Pagination
                                        count={pagination?.numberOfPages}
                                        page={page}
                                        onChange={(e, value) => {
                                            setPage(value);
                                        }}
                                    />
                                </Box>
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
                                    Немає товарів за обраними параметрами
                                </Typography>
                            </Box>
                        )}
                    </Box>
                )}
            </div>
        </div>
    );
};

export default Catalog;
