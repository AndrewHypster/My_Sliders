import Slider from "./slider/Slider";
import { Ps } from "./slider/Slider-styles";

function App() {

  console.log(`\n\n*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.\nstarted: 03.07.2023\nfinished: 04.07.2023 18:37\n- - - - - - - - - - - - - - -\nReact (useState)\nstyled-components (ThemeProvider)\n*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.\n\n\n`);

  return (
    <div className="App">
      <Slider />
      <Ps>
        started: 03.07.2023<br/>
        finished: 04.07.2023 18:37<br/><br/>
        React {'(useState)'}<br/>{'styled-components (ThemeProvider)'}
      </Ps>
    </div>
  );
}

export default App;