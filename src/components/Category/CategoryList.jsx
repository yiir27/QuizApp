import { imgs, categories } from '../../data';
import { CategoryCard } from './CategoryCard';

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
        <CategoryCard 
            category = {categories.ciencia} 
            src={imgCiencia} 
            alt={`Category ${categories.ciencia}`} 
            gradientColor = "from-purple-500 to-pink-500"
        />
        {/* Ctategory Link Deportes */}
        <CategoryCard 
            category = {categories.deportes} 
            src={imgDeportes} 
            alt={`Category ${categories.deportes}`} 
            gradientColor = "from-lime-400 to-teal-700"
        />

        {/* Ctategory Link Filosofia */}
        <CategoryCard 
            category = {categories.filosofia} 
            src={imgFilosofia} 
            alt={`Category ${categories.filosofia}`} 
            gradientColor = "from-red-400 to-zinc-400"
        />

        {/* Ctategory Link Geografia */}
        <CategoryCard 
            category = {categories.geografia} 
            src={imgGeografia} 
            alt={`Category ${categories.geografia}`} 
            gradientColor = "from-cyan-500 to-lime-500"
        />

        {/* Ctategory Link Historia */}
        <CategoryCard 
            category = {categories.historia} 
            src={imgHistoria} 
            alt={`Category ${categories.historia}`} 
            gradientColor = "from-sky-300 to-indigo-900"
        />

        {/* Ctategory Link Literatura */}
        <CategoryCard 
            category = {categories.literatura} 
            src={imgLiteratura} 
            alt={`Category ${categories.literatura}`} 
            gradientColor = "from-amber-500 to-emerald-600"
        />


        {/* Ctategory Link Tecnologia */}
        <CategoryCard 
            category = {categories.tecnologia} 
            src={imgTecnologia} 
            alt={`Category ${categories.tecnologia}`} 
            gradientColor = "from-violet-900 to-rose-100"
        />       
    </div>
  );
}
