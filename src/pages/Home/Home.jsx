import HeroImage from '../../assets/images/hero 1.png';
import { CategoryCard } from '../categoriescard';
import { useState } from 'react';
import { useEffect } from 'react';
export const Home = () => {




    const [data, setData] = useState();
     useEffect(()=>{
        fetch('https://miralou-api.sagarlama.com/api/home')
        .then((response)=> {
            return response.json();
        })
        .then((data)=>{
            setData(data.data);

        }).catch((e) =>{
            setData({
                categories: [],
                new_arrivals: [],
            });
        });
     }, []);
    
     
    
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
                        {data?.categories.map((category) =>(
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