import React from 'react';
import './App.css';
import FilteredFruitList from './Componenet/FilteredFruitList';

function App() {
  return  (
  <>
  <section className='w-screen h-screen bg-stone-600'>
  <div className="App">
      <header className="App-header">
        <FilteredFruitList />
      </header>
    </div>
  </section>
 </>
  );
}

export default App;
