import { Header } from './Components/Header/Header'
import { Search } from './Components/Main/Search/Search'
import { Users } from './Components/Main/Users/Users'
import { useState } from 'react'

import './App.css';

function App() {
  const [shouldRefresh, setShouldRefresh] = useState();
  const [value, setValue] = useState('');
  const [grid, setGrid] = useState(false);


  const inputValue = (arg) => {
    setValue(arg)
  }


  return (
    <div className="App">
      <Header refresh={setShouldRefresh} val={inputValue} changeLayout={() => setGrid(!grid)} />
      <Search val={inputValue} />
      <Users refresh={shouldRefresh} value={value} toGrid={grid} />
    </div>
  );
}

export default App;
