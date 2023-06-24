interface IProduct {
    id: {
        timestamp: number;
        date: number;
    },
    name: string;
    translitName: string;
    description: string;
    price: number;
    discount: number;
    picture: string;
    available: number;
    categories: [{
        name: string;
        translitName: string;
    }];
    composition: [
        {
            flower: {
                id: {
                    timestamp: number;
                    date: number;
                }
                name: string;
                description: string;
                icon: string;
                colors: [
                    {
                        name: string;
                        translateName: string;
                    }
                ],
            },
            quantity: number;
            color: string;
            translitColor: string;
        }
    ];
    themes: [
        {
            name: string;
            translitName: string;
        }
    ];
    size: {
        height: number;
        width: number;
    }
    wrapping: []
}

export default IProduct;