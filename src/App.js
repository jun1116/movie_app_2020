import React from 'react';

function Food(props){
  //console.log(props.name);
  return <div>
  <h3>I like {props.name}</h3>
  <img src={props.img} alt={props.img}/>
  </div>;
}
const foodILike = [
  {
    id:1,
  name: "Kimchi",
  image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg"
  },
  {
    id:2,
  name: "bulgogi",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKI8706unb3NS_ATqr7PAccy8aSUcHhNoSOA&usqp=CAU.jpg"
  },
  {
    id:3,
  name: "samgyetang",
  image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg"
  }
]


function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <div>
        {foodILike.map(dish => (
          <Food key={dish.id} name={dish.name} img={dish.image}/>
        )
        )
        }
        </div>
      </div>
    );
}

export default App;
