import React, { useEffect, useState } from 'react';
import './style.css'

const HomeProducts = () => {

    const [product, setProducts] = useState()

    useEffect(() => {
        fetch('https://api.hiring.masterkey.tech/api/v1/products')
            .then(Response => Response.json())
            .then(data => setProducts(data))
    }, [])

    // console.log(Object.entries(product));



    return (
        <div className='lg:flex gap-5'>
            <div className='lg:w-[40%] w-full'>
                <h2 className='lg:mt-32 products-text md:mb-5 mb-5 lg:mb-0'>We picked some <span className='text-[#FFAE5D]'>cool things</span> for you!</h2>
            </div>
            <div className='lg:w-[60%] w-full'>
                <h1 className='hot-deals p-2 '>hot deals for you</h1>
                <div className='grid  lg:grid-cols-3 md:grid-cols-2 mt-10  bg-white '>

                {
                     product?.products[0]?.productData.slice(6,12).map(product =>
                        <div className="mt-5 card  bg-white mb-5">
                            <figure><img src={product.product_img
                            } alt="Shoes" className='flex justify-center'/></figure>
                            <div className=' text-black mt-5'>
                                <h2 className='product-name px-5'>{product.product_name}</h2>
                                <div className='flex justify-between  mt-3 px-5'>
                                    <p>{product.product_price}</p>
                                    <p className='text-[#FF3232]'>-{product.product_discount}% off   </p>
                                </div>
                            </div>
                        </div>

                    )
                }

               

                </div>
               
            </div>
        </div>
    );
};

export default HomeProducts;