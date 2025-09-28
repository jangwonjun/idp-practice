import Hello from "./Hello";
import './App.css';
import wrapper from "./Wrapper";

function App() {
  const name = 'react';
  const style = {
        backgroundColor : 'black',
        color : 'aqua',
        fontSize : 24,
        padding : '1rem'
    }
    

  return (
    <wrapper>
      <Hello name = "장원준" color="red" isSpecial={true}/>
      
    </wrapper>
  );
}

export default App;
