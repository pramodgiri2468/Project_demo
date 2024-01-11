import HeroImage from '../../assets/images/hero 1.png';
import Women from '../../assets/images/categories/Women.png';
import Men from '../../assets/images/categories/Men.png';
import Pregwomen from '../../assets/images/categories/Pregwomen.png';
import baby from '../../assets/images/categories/baby.png';
import { CategoryCard } from '../categoriescard';
export const Home = () => {

    const categories =[
        {
            category: 'For Women',
            img: Women,
        },
        {
            category: 'For Men',
            img: Men,
        },
        {
            category: 'For Pregwomen',
            img: Pregwomen,

        },
        {
            category: 'For baby',
            img: baby,
        },
    ]
    return (
        <div>
            <section className="relative flex items-center">
                <img src={HeroImage} alt=''></img>
                <div className='absolute w-full'>
                    <div className='container mx-auto'>
                        <div className='max-w-48'>
                        <h1 className='text-6xl font-bold'>Scandinavian Supremacy</h1>
                        </div>
                    
                    </div>
                    
                    
                </div>
            </section>
            <section>
                <div className='container mx-auto py-36'>
                    <div className='flex justify-between'>
                        {categories.map((category) =>(
                            <CategoryCard category={category} />
                        ))}
                    </div>
                </div>
            </section>
            <div className='max-w-48'>

            </div>
        </div>
    );
};