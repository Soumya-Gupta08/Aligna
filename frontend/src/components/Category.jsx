import {useState} from 'react';
import CircularProgress from './CircularProgress';

function Category() {
    const [name, setName]= useState('');
    const [total, setTotal]= useState(0);
    const [fraction, setFraction]= useState(0);
    const [percentage, setPercentage]= useState(0);

    return (
        <div className='h-40 w-1/2  relative top-50 left-16 glass flexAll'>
            <div className='flexAll flex-col'>
                <div>
                    <h1>{name}</h1>
                </div>
                <div>
                    <h1>{fraction}/{total}</h1>
                </div>
            </div>
            <div>
                <CircularProgress percentage={50}/>
            </div>
        </div>
        // <div className="space-y-4">
        // {categories.map(cat => (
        //     <div key={cat.id}>
        //     <button
        //         onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
        //         className="w-full p-4 bg-gray-200 rounded-lg text-left font-bold hover:bg-gray-300"
        //     >
        //         {cat.name}
        //     </button>

        //     {activeCategory === cat.id && (
        //         <div className="p-4 bg-gray-100 rounded-lg mt-2">
        //         <p className="text-sm text-gray-700">Subcategories will go here...</p>
        //         </div>
        //     )}
        //     </div>
        // ))}
        // </div>
    )
}

export default Category;
