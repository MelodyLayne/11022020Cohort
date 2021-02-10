import { Movies, MovieDetails, Stocks, Home } from './components';

function App() {
  return (
    <div className="main">
      <h1>App Component</h1>
      <Home />
      <Stocks />
      <Movies />
      <MovieDetails />
    </div>
  );
}

export default App;
