import { Header } from './Components/Header/Header'
import { Search } from './Components/Main/Search/Search'
import { Users } from './Components/Main/Users/Users'
import { useState } from 'react'

import './App.css';

function App() {
  const [shouldRefresh, setShouldRefresh] = useState();
  const [value, setValue] = useState('');

  return (
    <div className="App">
      <Header refresh={setShouldRefresh} />
      <Search />
      <Users refresh={shouldRefresh} />
    </div>
  );
}

export default App;
