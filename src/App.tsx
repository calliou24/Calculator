
import Calculator from './components/Calculator/calculator'
import Swicher from './components/ThemeSwicher/swicher';

function App() {

  return (
    <div className="App">
      <div className='calculatorCont'>
        <Swicher/>
        <Calculator/>
      </div>
    </div>
  );
}

export default App;
