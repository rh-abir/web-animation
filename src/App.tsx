import "./App.css";

function App() {
  const name = "Programming Here";

  const nameArrr = name.split("");

  return (
    <div className="main">
      {/* <button className="btn">Hove me</button> */}
      {/* <div className="box"></div> */}
      {/* 
      <div className="loading">
        <div className="glass"></div>
        <div className="box"></div>
      </div> */}

      {/* <div className="card">
        <h1>Heading</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          doloremque ut molestiae ex nostrum maxime, quas sapiente velit tenetur
          nisi, nulla saepe accusa
        </p>
      </div> */}

      <div className="container">
        {nameArrr.map((item, i) => (
          <span
            className="alphabet"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
