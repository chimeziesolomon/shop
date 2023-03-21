import React  from 'react';
import { useGlobalContext } from './context';

//components
import Navbar from './Navbar';
import ShopContainer from './ShopContainer';

//items

function App() {
 // const { loading } = useGlobalContext()
 // if (loading) {
  // return (
   //   <div className='loading'>
   //     <h1>loading...</h1>
   //   </div>
   // )
 // }
 
    return (
      <div>
        <main>
          <Navbar />
          <ShopContainer />
        </main>
      </div>
    );
  }


export default App;
