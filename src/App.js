import React from 'react';

function Potato(props){
  console.log(props.fav);
  //console.log(props.fav);
  return <h3>I like {props.fav}</h3>;
}
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Potato fav="kimchi" />
      <Potato fav="라면" />
      <Potato fav="삼겹살" />
      <Potato fav="두루치기" />
      <Potato fav="김밥" />
      </div>
    );
}
export default App;
