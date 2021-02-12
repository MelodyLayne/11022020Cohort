import { useCoffee } from '../context/CoffeeContext'

const SelectedCoffeeBean = () => {
  const { coffeeBean, setCoffeeBeanId } = useCoffee()
  return (
    <div className='selected-coffee'>
      <h2>{coffeeBean.name}</h2>
    </div>
  );
}

export default SelectedCoffeeBean;
