import { useState } from 'react';
import { DataContext } from './context/DataContext';
import Navigator from './navigation/Navigator';

export default function App() {
  const [ dataCities, setDataCities] = useState(null);
  return (
    <DataContext.Provider
      value={{
        dataCities,
        setDataCities,
      }}
    >
      <Navigator />
    </DataContext.Provider>
  );
}
