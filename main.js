const root = ReactDOM.createRoot(document.querySelector('#root'));

function Container () {
        return (
            <div class="Container">
    <button class="btn btn-inc">+</button>
    <h3 class="number">0</h3>
    <button class="btn btn-dec">-</button>
    <button class="btn btn-clr">C</button>
  </div>
        )
    }
    

function App(){
    return (
        <div className="Container1">
            <h1 className="Sum">Sum = 0</h1>
            <button> Add Counter</button>
            <Container />
        </div>

    );
}



root.render(<App />)

5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555