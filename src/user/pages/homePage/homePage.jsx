import React, { useEffect } from 'react'
import MainCarousel from '../../components/homeCarousel/mainCarousel'
import CarouselHomeSection from '../../components/carouselHomeSection/carouselHomeSection'
import { useDispatch, useSelector } from 'react-redux'

import { useLocation, useNavigate } from 'react-router-dom'
import { findProducts } from '../../../state/product/Action'
import { light_novel } from '../../../Data/light_novel'
import { tieu_thuyet } from '../../../Data/tieu_thuyet'
import { truyen_tranh } from '../../../Data/truyen_tranh'

const HomePage = () => {

    const dispatch = useDispatch();
    const products = useSelector(store => store.products)


    const fetchData = async () => {
        const dataLight_novel = {
            category: "light_novel",
            colors: "",
            sizes: "",
            minPrice: "",
            maxPrice: "",
            minDiscount: "",
            sort: "",
            pageNumber: "",
            pageSize: "",
            stock: "",
        };

        await dispatch(findProducts(dataLight_novel));

        console.log("findProducts: ", products?.products?.content)
    };
    // const dataNgon_tinh = {
    //     category: "ngon_tinh",
    //     colors: "",
    //     sizes: "",
    //     minPrice: "",
    //     maxPrice: "",
    //     minDiscount: "",
    //     sort: "",
    //     pageNumber: "",
    //     pageSize: "",
    //     stock: ""
    // };

    useEffect(() => {
        fetchData();
    }, [])



    return (
        <div>
            <MainCarousel />
            <div className='py-20 space-y-10 flex flex-col justify-center px-6'>
                <CarouselHomeSection data={light_novel} sectionName={"Văn học"} />
                <CarouselHomeSection data={tieu_thuyet} sectionName={"Tiểu thuyết"} />
                <CarouselHomeSection data={truyen_tranh} sectionName={"Truyện tranh"} />
            </div>
        </div>

    )
}

export default HomePage