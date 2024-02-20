//import styling
import './App.css';
//import Components
import Header from '../Header/Header';
import GameGrid from '../GameGrid/GameGrid';

const App = () => {
  return (
    <main className='App'>
      <Header />
      <div className='grid-container'>
        <GameGrid />
      </div>
    </main>
  )
}

export default App;
