//import styling
import './App.css';
//import Components
import Header from '../Header/Header';
import GameGrid from '../GameGrid/GameGrid';

const App = () => {
  return (
    <main className='App'>
      <Header />
      <GameGrid />
    </main>
  )
}

export default App;
