// import './App.css';
// import Section from './Section'
// import Loren from './components/lorem'
import Planet from './components/planets'

function HelloWorld(){
  return (
    <h1>Hello, World! xD</h1>
  )
}

function App() {
  return (
    <div className="App">
      <HelloWorld></HelloWorld>
      {/* <Section></Section> */}
      {/* <Loren></Loren> */}
      <Planet></Planet>
    </div>
  );
}

export default App;
