import coffeeBean from "./mockData/coffeeBeans.json";
import SelectedCoffeeBean from './components/SelectedCoffeeBean';
import SetCoffeeBean from './components/SetCoffeeBean';

function App() {
  return (
    <>
      <h1>Welcome to Coffee App</h1>
      <SelectedCoffeeBean />
      <SetCoffeeBean />

    </>
  );
}

export default App;
