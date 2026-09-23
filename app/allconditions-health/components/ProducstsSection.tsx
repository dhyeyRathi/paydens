import React from 'react'
import ProductCards from './ProductCards';
import { ArrowButton } from '@/components/ui/Button';


interface sectionProps {
    condition?: string;
}

const ProducstsSection = ({ condition }: sectionProps) => {
    const products = [
        {
            "name": "Strepsils Honey & Lemon",
            "description": "Soothes sore throats and relieves irritation",
            "price": "£13/pack",
            "image": "/assets/images/products/strepsils.png"
        },
        {
            "name": "Rehydra Oral Solution",
            "description": "Fast relief for headaches, fever, and mild pain",
            "price": "£9/pack",
            "image": "/assets/images/products/rehydra.png"
        },
        {
            "name": "IMODIUM® Dual Action Tablet",
            "description": "Provides fast-acting relief for throat discomfort",
            "price": "£10/pack",
            "image": "/assets/images/products/imodium.png"
        }
    ]
    return (
        <section className='flex flex-col gap-10 items-center'>
            <h1 className='w-full text-center  px-4 text-xl md:text-3xl lg:text-5xl font-bold'>
                <em className='text-button-hover'>{condition} </em>Relief Products
            </h1>
            <div className='flex  gap-10 flex-wrap lg:flex-nowrap items-center justify-center'>
                {products.map((product) => (
                    <ProductCards
                        key={product.name} name={product.name}
                        description={product.description}
                        price={product.price}
                        img={product.image} />
                ))}

            </div>
            <ArrowButton />

        </section>
    )
}

export default ProducstsSection