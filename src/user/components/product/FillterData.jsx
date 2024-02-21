
export const filters = [
    {
        id: "size",
        name: "Option",
        options: [
            {
                value: "mua_le", label: "Mua lẻ"
            },
            {
                value: "mua_bo", label: "Mua bộ"
            },
            {
                value: "ban_dac_biet", label: "Bản đặc biệt"
            },
        ]
    },

];

export const singleFilter = [
    {
        id: "price",
        name: "Price",
        options: [
            {
                value: "1-100000", label: "1-100.000"
            },
            {
                value: "100000-200000", label: "100.000-200.000"
            },
            {
                value: "200000-300000", label: "200.000-300.000"
            },
            {
                value: "300000-400000", label: "300.000-400.000"
            },
            {
                value: "400000-500000", label: "400.000-500.000"
            },

        ]
    },
    {
        id: "discount",
        name: "Discount Range",
        options: [
            {
                value: "10", label: ">10%"
            },
            {
                value: "20", label: ">20%"
            },
            {
                value: "30", label: ">30%"
            },
            {
                value: "40", label: ">40%"
            },
            {
                value: "50", label: ">50%"
            },
            {
                value: "60", label: ">60%"
            },
            {
                value: "70", label: ">70%"
            },
            {
                value: "80", label: ">80%"
            },
        ]
    },

    {
        id: "stock",
        name: "Availability",
        options: [
            {
                value: "in_stock", label: "In Stock"
            },
            {
                value: "out_of_stock", label: "Out Of Stock"
            },
        ]
    }

]

export const sortOptions = [
    { name: "Price: Low to High", query: "price_low", current: false },
    { name: "Price: High to Low", query: "price_high", current: false },
];
