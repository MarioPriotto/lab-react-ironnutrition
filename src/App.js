import './App.css';

import FoodBox from './components/FoodBox-1/FoodBox';
import FoodList from './components/FoodList-0/FoodList';
import AddFoodForm from './components/AddFoodForm/AddFoodForm';

import foodsOrigem from './foods.json';
import { useState } from 'react';

function App() {

  const [foods, setFoods] = useState(foodsOrigem)

  const AddFood = (newFood) => {
    setFoods([...foods, newFood])
  }

  return (
    <div className="App">

    {/* iteração 5 */}
    {/* <p className='App-foodsTitulo-03'>Search</p> */}
    {/* <SearchForm searchFunction={SearchFunction}/> */}

    {/* iteração 4 */}
    <p className='App-foodsTitulo-03'>Add Food Entry</p>
    <AddFoodForm addFood={AddFood}/>

    {/* iteração 3 */}
    <div className='App-foodsGlobal-03'>
      <p className='App-foodsTitulo-03'>Food List</p>
      <div className='App-foodsLista-03'>
        {foods.map( (current, index, array) => {
          return (
            <div >
              <FoodBox food={{
                name: current.name, calories: current.calories, 
                image: current.image, servings: current.servings
              }} />
            </div>
          )
        })}
      </div>
    </div>

    {/* iteração 2 */}
    {/* <FoodBox food={ {
      name: "Orange",
      calories: 85,
      image: "https://i.imgur.com/abKGOcv.jpg",
      servings: 1
    }} /> */}

    {/* // iteração 1 */}
    {/* <FoodList /> */}

    </div>
  );
}

export default App;
