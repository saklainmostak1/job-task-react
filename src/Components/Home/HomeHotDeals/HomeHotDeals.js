import React, { useEffect, useState } from 'react';

const HomeHotDeals = () => {

    const [hotProducts, setHotProducts] = useState()

    useEffect(() => {
        fetch('https://api.hiring.masterkey.tech/api/v1/products')
            .then(Response => Response.json())
            .then(data => setHotProducts(data))
    }, [])

    // console.log(hotProducts.products[0].productData);


    return (
        <div className=' w-full  mt-10'>
                <h1 className='hot-deals p-2 text-black'>hot deals for you</h1>
                <div className='grid  lg:grid-cols-5 md:grid-cols-2 mt-10 gap-5  bg-white'>

                    {
                        hotProducts?.products[0]?.productData?.slice(6,11).map(product =>
                            <div className="mt-5 card bg-white mb-5">
                                <figure><img src={product.product_img
                                } alt="Shoes" /></figure>
                                <div className='card text-black mt-5'>
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
    );
};

export default HomeHotDeals;