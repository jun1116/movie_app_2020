import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id:1,
  name: "Kimchi",
  image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
  rating:5
  },
  {
    id:2, 
    name: "bulgogi",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKI8706unb3NS_ATqr7PAccy8aSUcHhNoSOA&usqp=CAU.jpg",
  rating:4
},
{
    id:3,
  name: "samgyetang",
  image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
  rating:1
}
]

function Food(props){
  //console.log(props.name);
  return <div>
  <h3>I like {props.name}</h3>
<h4>{props.rating}/5.0</h4>
  <img src={props.img} alt={props.img}/>
  </div>;
} 
Food.propTypes={}
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <div>
        {foodILike.map(dish => (
          <Food key={dish.id} name={dish.name} img={dish.image} rating={dish.rating} />
        )
        )
        }
        </div>
      </div>
    );
}

export default App;
