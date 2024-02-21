export const navigation = {
    categories: [
        {
            id: 'domestic_books',
            name: 'Domestic books',
            featured: [
                {
                    name: 'Văn học',
                    href: '/',
                    imageSrc: 'https://cdn0.fahasa.com/media/catalog/product/_/m/_m_tr_i_d_ng_en_b_a_tr_c.png?_gl=1*1bgcd5d*_gcl_aw*R0NMLjE3MDg0NDQyODIuQ2p3S0NBaUF1Tkd1QmhBa0Vpd0FHSWQ0YW04aVJQcmF2RVYtS0NmaFFlaEN1RG9YUFg0YzQ2Ykp2Q1JXN2VsTnV2TlpWVXBWRzRDMkFSb0MtTDBRQXZEX0J3RQ..*_gcl_au*MTE2Mjg2OTc1My4xNzA3Mzk2ODU1*_ga*NDEwMzkyMS4xNjk1NDM4OTEx*_ga_460L9JMC2G*MTcwODQ0NDI4Mi4xNi4xLjE3MDg0NDQ1OTYuNTMuMC4whttps://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',

                },
                {
                    name: 'Tiểu thuyết',
                    href: '/',
                    imageSrc: 'https://cdn0.fahasa.com/media/catalog/product/b/i/biamem.jpg',

                },
            ],
            sections: [
                {
                    id: 'van_hoc',
                    name: 'Văn học',
                    items: [
                        { name: 'Light Novel', id: "light_novel", href: `{domestic_books/van_hoc/light_novel}` },
                        { name: 'Ngôn tình', id: "ngon_tinh", href: '#' },
                        { name: 'Trinh thám', id: 'trinh_tham' },
                    ],
                },
                {
                    id: 'tieu_thuyet',
                    name: 'Tiểu thuyết',
                    items: [
                        { name: 'Chiến tranh', id: 'chien_tranh' },
                        { name: 'Ngôn tình', id: 'ngon_tinh' },
                        { name: 'Tâm lý', id: 'tam_ly' },
                    ],
                },
                {
                    id: 'truyen_tranh',
                    name: 'Truyện tranh',
                    items: [
                        { name: 'Ngôn tình', id: 'ngon_tinh' },
                        { name: 'Khám phá', id: 'kham_pha' },
                        { name: 'Đời thường', id: 'doi_thuong' },
                    ],
                },
            ],
        },
        {
            id: 'foreign_books',
            name: 'Foreign books',
            featured: [
                {
                    name: `Children's Books`,
                    href: "/",
                    imageSrc: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_233924.jpg',
                },
                {
                    name: 'Dictionaries & Languages',
                    href: "/",
                    imageSrc: 'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/oxford_advanced_learners_dictionary_paperback___10th_edition_with_1_years_access_to_both_premium_online_and_app/2022_07_02_09_44_15_1-390x510.jpg',
                },
            ],
            sections: [
                {
                    id: 'childrens_books',
                    name: `Children's Books`,
                    items: [
                        { name: 'Ficition For Teen', id: 'ficition_for_teen' },
                        { name: 'Non-Fiction', id: 'non_fiction' },
                        { name: 'Education', id: 'education' },
                    ],
                },
                {
                    id: 'dictionaries_&_languages',
                    name: 'Dictionaries & Languages',
                    items: [
                        { name: 'Dictionaries', id: 'dictionaries' },
                        { name: 'Language: Reference & General', id: 'language_reference_general' },
                        { name: 'Linguistics', id: 'linguistics' },
                    ],
                },
                {
                    id: 'biography',
                    name: `Biography`,
                    items: [
                        { name: 'Memoris', id: 'memoris' },
                        { name: 'True Stories', id: 'true_stories' },
                        { name: 'Diaries, Letters & Journals', id: 'diaries_letters_journals' },
                    ],
                },
            ],
        },
    ],
    pages: [
        { name: 'Company', id: '/' },
        { name: 'Stores', id: '/' },
    ],
}