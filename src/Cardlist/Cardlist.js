

import './Cardlist.css'
import Cards from '../Product/Product'






function Cardlist({animes}) {
  return (
    <div className='cardlist-flex'>
     <div className='cards'>
     {
          animes.map((anime,index) =>
               <Cards anime={anime} key={index}
               />)
     }
     </div>
  
    
     
    </div>
    
    
  );
}



export default Cardlist;