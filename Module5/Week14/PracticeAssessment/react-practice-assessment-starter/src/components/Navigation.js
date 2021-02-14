import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <nav>
      <NavLink to='/' exact></NavLink>
      <NavLink to='fruit/new'></NavLink>
      <NavLink to='fav-fruit'></NavLink>
      <NavLink to='set-fav-fruit'></NavLink>
      <NavLink to='fruits/:fruitId'></NavLink>
    </nav>

  )
}

export default Navigation;
