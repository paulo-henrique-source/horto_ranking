// import Menu from "../../components/menu";
import { Chart } from "../../components/chart";
import * as Styled from "./styles";

function App() {
  return (
    <Styled.AppContainer>
      {/* <div className='menu'>
        <Menu />
      </div> */}
      <div className='title'>
        <h1>Ranking do Kahoot primeiro trimestre de 2025</h1>
      </div>
      <div className='chartContainer'>
        <div className='chart'>
          <Chart />
        </div>
      </div>
    </Styled.AppContainer>
  );
}

export default App;
