import './FoodList.css';
import foods from './../../foods.json';

// let mFoods = foods;

function FoodList() {

  let listaRetornar = foods.map( (current, index, array) => {
    return (
      <div key={current.name} className="Foods">
        <p>{current.name}</p>
        <img src={current.image} alt={current.name}/>
      </div>
    )
  });

  return (
    <div className='FoodList'>

    <p className='FoodsTitulo'>Food List</p>
    {listaRetornar}
      
    </div>
  );
}

export default FoodList;
