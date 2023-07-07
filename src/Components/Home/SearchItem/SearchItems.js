import React, { useEffect, useState } from 'react';

const SearchItems = () => {
    const [searchProducts, setSearchProducts] = useState([])

    useEffect(() => {
        fetch('https://api.hiring.masterkey.tech/api/v1/products')
            .then(Response => Response.json())
            .then(data => setSearchProducts(data))
    }, [])
    return (
        <div className=' w-full  mt-10'>
        <h1 className='hot-deals p-2 text-black'>hot deals for yoYour searched items</h1>
        <div className='grid  lg:grid-cols-5 md:grid-cols-2 mt-10 gap-5  bg-white'>

            {
                searchProducts?.products[0]?.productData?.slice(12,17).map(product =>
                    <div className="mt-5  bg-white">
                        <figure><img src={product.product_img
                        } alt="Shoes" /></figure>
                        
                    </div>

                )
            }



        </div>
    </div>
    );
};

export default SearchItems;