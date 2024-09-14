import React, { useState } from 'react';

const FilteredFruitList = () => {
  const [add, setAdd] = useState('');
  const [list, setList] = useState([]);


    const handleAdd = (event) => {
      setAdd(event.target.value);
    };
  const handleAddToList = () => {
    setList([...list, add]);
    setAdd('');
  };
  


  return (
    <>
      <div className='bg-gray-950 p-10'>
        <div className='flex justify-between w-96 h-auto p-8'>
          <p>Count : {this.state.count}</p>
          <button 
            onClick={handleAddToList} 
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              + Add to list
            </span>
          </button>
          <button
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Remove
            </span>
          </button>
        </div>
        <div className="flex justify-center flex-col w-96 h-auto">
          <p className="text-start ml-2 flex text-sm text-gray-600">Link</p>{" "}
          <input
            value={add}
            onChange={handleAdd}
            type="text"
            placeholder=" e.g Umar"
            className="text-indigo-500 border-gray-300 text-md rounded-md h-12 border-[1px] hover:border-red-500"
          />
          <input
            type="email"
            id="helper-text"
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
          />
        </div>
        <p className='text-start mr-4 font-normal flex text-lg text-white'>{add}</p>
        <ul className='text-white'>
          {list.map((item, index) => (
            <li key={index} className='w-96 h-10  m-4 text-start text-blue-400 bg-black text-lg border-[3px] rounded-md border-rose-600'>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FilteredFruitList;
