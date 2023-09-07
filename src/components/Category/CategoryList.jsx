import { Link } from 'react-router-dom';
import { imgs, categories } from '../../data';

const [
    imgCiencia,
	imgDeportes,
	imgFilosofia,
	imgGeografia,
	imgHistoria,
	imgLiteratura,
	imgTecnologia,
] = imgs;

export const CategoryList = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-4 mt-10'>
        {/* Ctategory Link Ciencia */}
        <Link 
            to={`/category/${categories.ciencia}`} 
            className="flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 transition-all hover:scale-105" >
                <div className="p-5 flex justify-center items-center">
                    <img src={imgCiencia} alt={`Category ${categories.ciencia}`} className='w-36' />
                </div>
                <h1 className='text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5'>
                    {categories.ciencia}
                </h1>
        </Link>
        {/* Ctategory Link Deportes */}
        <Link 
            to={`/category/${categories.deportes}`} 
            className="flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 transition-all hover:scale-105" >
                <div className="p-5 flex justify-center items-center">
                    <img src={imgDeportes} alt={`Category ${categories.deportes}`} className='w-36' />
                </div>
                <h1 className='text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5'>
                    {categories.deportes}
                </h1>
        </Link>
        {/* Ctategory Link Filosofia */}
        <Link 
            to={`/category/${categories.filosofia}`} 
            className="flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 transition-all hover:scale-105" >
                <div className="p-5 flex justify-center items-center">
                    <img src={imgFilosofia} alt={`Category ${categories.filosofia}`} className='w-36' />
                </div>
                <h1 className='text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5'>
                    {categories.filosofia}
                </h1>
        </Link>
        {/* Ctategory Link Geografia */}
        <Link 
            to={`/category/${categories.geografia}`} 
            className="flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 transition-all hover:scale-105" >
                <div className="p-5 flex justify-center items-center">
                    <img src={imgGeografia} alt={`Category ${categories.geografia}`} className='w-36' />
                </div>
                <h1 className='text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5'>
                    {categories.geografia}
                </h1>
        </Link>
        {/* Ctategory Link Historia */}
        <Link 
            to={`/category/${categories.historia}`} 
            className="flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 transition-all hover:scale-105" >
                <div className="p-5 flex justify-center items-center">
                    <img src={imgHistoria} alt={`Category ${categories.historia}`} className='w-36' />
                </div>
                <h1 className='text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5'>
                    {categories.historia}
                </h1>
        </Link>
        {/* Ctategory Link Literatura */}
        <Link 
            to={`/category/${categories.literatura}`} 
            className="flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 transition-all hover:scale-105" >
                <div className="p-5 flex justify-center items-center">
                    <img src={imgLiteratura} alt={`Category ${categories.literatura}`} className='w-36' />
                </div>
                <h1 className='text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5'>
                    {categories.literatura}
                </h1>
        </Link>
        {/* Ctategory Link Tecnologia */}
        <Link 
            to={`/category/${categories.tecnologia}`} 
            className="flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 transition-all hover:scale-105" >
                <div className="p-5 flex justify-center items-center">
                    <img src={imgTecnologia} alt={`Category ${categories.tecnologia}`} className='w-36' />
                </div>
                <h1 className='text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5'>
                    {categories.tecnologia}
                </h1>
        </Link>
        
    </div>
  );
}
