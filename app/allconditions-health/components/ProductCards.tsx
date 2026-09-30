import React from 'react'
import { Button } from '@/components/ui/Button';
import IconStarYellow from '@/components/Icon/IconStarYellow';
import IconStarGray from '@/components/Icon/IconStarGray';
interface ProductCardProps {
    name?: string;
    description?: string;
    price?: string;
    img?: string | Blob | undefined;
}

const ProductCards = ({ name, description, price, img }: ProductCardProps) => {
    return (
        <div className='flex gap-5 md:h-165 xl:h-auto  rounded-xl flex p-6 border-border border-1 paydens-shadow  md:flex-col xl:flex-row'>
            <div className='h-80 bg-gray-100 rounded-xl py-10'>
                <img src={img} alt={name} className='w-80' />
            </div>
            <div className='flex flex-col justify-between '>
                <div className='flex flex-col gap-4 min-h-[80%]'>
                    <h1 className='text-2xl font-bold'>{name}</h1>
                    <p className='text-xl font-[300] font-quicksand'>{description}</p>
                    <div className='flex gap-1 font-[300] font-quicksand'>
                        <IconStarYellow className="w-5 h-5" />
                        <IconStarYellow className="w-5 h-5" />
                        <IconStarYellow className="w-5 h-5" />
                        <IconStarGray className="w-5 h-5" />
                        <IconStarGray className="w-5 h-5" />

                        <h1 className='px-2'>
                            (9403) </h1>


                    </div>

                    <h2 className='font-[300] font-quicksand'>
                        20g | £15 per 100g
                    </h2>
                </div>

                <Button className='mt-4'>Add to Cart</Button>
            </div>
        </div>
    )
}

export default ProductCards