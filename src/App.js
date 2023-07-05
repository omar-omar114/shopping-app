import Navbars from './Navbar/Navbars';
import Cardlist from './Cardlist/Cardlist';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './Detail/Detail';


function App() {

  const animes =[{
      image : 'anime1.jpg',
      title: 'Casque',
      description : 'some quick example text to build on the card title and make up the bulkof the card component',
    },
    {
      image : 'anime2.jpg',
      title: 'Camera',
      description : 'some quick example text to build on the card title and make up the bulkof the card component',
    },
    {
      image : 'anime3.jpg',
      title: 'Les écoteurs SONY',
      description : 'some quick example text to build on the card title and make up the bulkof the card component',
    },
    {
      image : 'anime4.jpg',
      title: 'Iphone 14 pro max',
      description : 'some quick example text to build on the card title and make up the bulkof the card component',
    },
    {
      image : 'anime5.jpg',
      title: 'Tablette Sumsung',
      description : 'some quick example text to build on the card title and make up the bulkof the card component',
    },
    {
      image : 'anime6.jpg',
      title: 'Iphone',
      description : 'some quick example text to build on the card title and make up the bulkof the card component',
    },
    {
      image : 'anime7.jpg',
      title: 'Pc portable',
      description : 'some quick example text to build on the card title and make up the bulkof the card component',
    },
    {
      image : 'anime8.jpg',
      title: 'TV Sumsung',
      description : 'some quick example text to build on the card title and make up the bulkof the card component',
    }
  ];
  
  

  

    
    return(

        <BrowserRouter>
        <Navbars />
        <Routes>
          <Route path='/' element={<Cardlist animes={animes}/>}/>
          <Route path='/Detail' element={<Detail/>}/>
        </Routes>
        </BrowserRouter>
        
  
 
      
    );
 
    
    
  
}

export default App;
