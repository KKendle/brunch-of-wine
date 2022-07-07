import './App.css';
import Hours from './components/Hours';

function App() {
  return (
    <div className="App">
      <h1>Brunch of Wine</h1>

      <h2>Coming Soon</h2>

      <Hours></Hours>

      <section id="address">
        <h2>Address</h2>
        <address>123 Sesame St<br />Cool, AZ 98765</address>
      </section>
    </div>
  );
}

export default App;
