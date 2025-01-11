// styles.ts
import styled from "styled-components";

export const AppContainer = styled.div`
  background-position: center 40%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("/background.jpeg");
  text-align: center;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: auto;

  .menu {
    color: #f8b960;

    padding: 3rem 0 0 3rem;
  }

  .title {
    color: #f6f5d7;
    border-radius: 10px;
    padding: 8px;

    h1 {
      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
    }
  }

  .chartContainer {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 1rem;

    @media screen and (max-width: 768px) {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      margin-bottom: 1rem;
      margin-left: 0.5rem;
    }
  }

  .chart {
    height: 100%;
    width: 90%;

    /* background-color: #ffffff; */
    border-radius: 20px;
    padding: 40px;

    @media screen and (max-width: 768px) {
      padding: 0px;
    }
  }
`;
