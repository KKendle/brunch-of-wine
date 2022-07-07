import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Brunch of Wine</h1>

      <h2>Coming Soon</h2>

      <section id="hours">
        <h2>Hours</h2>
        <ol>
          <li>
            <span className="hours__day">Monday</span>
            <span className="hours__time">9am - 2pm</span>
          </li>
          <li>
            <span className="hours__day">Tuesday</span>
            <span className="hours__time">9am - 2pm</span>
          </li>
          <li>
            <span className="hours__day">Wednesday</span>
            <span className="hours__time">9am - 2pm</span>
          </li>
          <li>
            <span className="hours__day">Thursday</span>
            <span className="hours__time">9am - 2pm</span>
          </li>
          <li>
            <span className="hours__day">Friday</span>
            <span className="hours__time">9am - 2pm</span>
          </li>
          <li>
            <span className="hours__day">Saturday</span>
            <span className="hours__time">9am - 2pm</span>
          </li>
          <li>
            <span className="hours__day">Sunday</span>
            <span className="hours__time">9am - 2pm</span>
          </li>
        </ol>
      </section>

      <section id="address">
        <h2>Address</h2>
        <address>123 Sesame St<br />Cool, AZ 98765</address>
      </section>
    </div>
  );
}

export default App;
