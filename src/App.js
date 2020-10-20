import React from 'react';

function Food(props){
  //console.log(props.name);
  return <div>
  <h3>I like {props.name}</h3>
  <img src={props.img} />
  </div>;
}
const foodILike = [
  {
  name: "Kimchi",
  image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg"
  },
  {
  name: "bulgogi",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKI8706unb3NS_ATqr7PAccy8aSUcHhNoSOA&usqp=CAU.jpg"
  },
  {
  name: "samgyetang",
  image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg"
  }
]

function renderFood(dish){
  //console.log(dish);
  return <Food name={dish.name} img={dish.image}/>;
}

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <div>
        {console.log(foodILike.map(renderFood))}
        {foodILike.map(renderFood)}</div>
      </div>
    );
}

export default App;
