import ProductCards from './ProductCards';
import { ArrowButton } from '@/components/ui/Button';
import Heading, { HeadingHighlight } from '@/components/ui/Heading';
import { productType } from '@/actions/products';


interface productSectionProps {
    condition?: string;
    products?: productType[];
}

const ProducstsSection = ({ condition, products = [] }: productSectionProps) => {

    return (
        <section className='flex flex-col gap-10 items-center animationPopUp'>
            <Heading>
                <HeadingHighlight>{condition}</HeadingHighlight> Relief Products
            </Heading>
            <div className='flex  gap-10 flex-wrap lg:flex-nowrap items-center justify-center'>
                {products.map((product) => (
                    <ProductCards
                        key={product._id} name={product.name}
                        description={product.desc}
                        price={product.price}
                        img={product.imageUrl}
                    />
                ))}

            </div>
            <ArrowButton />

        </section>
    )
}

export default ProducstsSection