import React from 'react';
import Menu from '../../components/Menu';


const MenuCategory = ({ items }) => {
  return (
    <>

      <div className='grid gap-4 md:grid-cols-2 mt-20'>
        {
          items.map(item => <Menu items={item} key={item._id} />)
        }
      </div>
      <div className='flex justify-center'>
      <button className="btn btn-xs sm:btn-sm md:btn-md rounded-lg content-center border-black border-b-2 border-t-0 border-l-0 border-r-0 uppercase my-12">order now</button>
      </div>
      </>
     
      );
};

      export default MenuCategory;