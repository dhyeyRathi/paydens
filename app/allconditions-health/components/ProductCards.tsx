import { Button } from '@/components/ui/Button';
import IconStarYellow from '@/components/Icon/IconStarYellow';
import IconStarGray from '@/components/Icon/IconStarGray';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
interface ProductCardProps {
    name: string;
    description?: string;
    price?: string;
    img: string | StaticImport;
    width?: number;
    height?: number;
}

const ProductCards = ({ name, description, img, width = 304, height = 270 }: ProductCardProps) => {
    return (
        <div className='flex gap-5 md:h-165 xl:h-auto rounded-xl p-6 border-border border-1 paydens-shadow md:flex-col xl:flex-row'>
            <div className='h-80 bg-gray-100 rounded-xl py-10 flex items-center justify-center'>
                <Image src={img} alt={name} width={width} height={height} className='w-80 h-auto object-contain' />
            </div>
            <div className='flex flex-col justify-between '>
                <div className='flex flex-col gap-4 min-h-[80%]'>
                    <h3 className='text-2xl font-bold'>{name}</h3>
                    <p className='text-xl font-[300] font-quicksand'>{description}</p>
                    <div className='flex gap-1 font-[300] font-quicksand'>
                        <IconStarYellow className="w-5 h-5" />
                        <IconStarYellow className="w-5 h-5" />
                        <IconStarYellow className="w-5 h-5" />
                        <IconStarGray className="w-5 h-5" />
                        <IconStarGray className="w-5 h-5" />

                        <h4 className='px-2'>
                            (9403) </h4>


                    </div>

                    <h4 className='font-[300] font-quicksand'>
                        20g | £15 per 100g
                    </h4>
                </div>

                <Button>Add to Cart</Button>
            </div>
        </div>
    )
}

export default ProductCards