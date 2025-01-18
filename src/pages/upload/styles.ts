// styles.ts
import styled from "styled-components";

type ModalProps = {
  visible: boolean;
};

export const AppContainer = styled.div`
  background-position: center 40%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("/background.jpeg");
  text-align: center;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;

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

  .chart {
    height: 100%;
    width: 90%;
    border-radius: 20px;
    padding: 40px;

    @media screen and (max-width: 768px) {
      padding: 0px;
    }
  }
`;

export const ModalContent = styled.div<ModalProps>`
  width: 100%;
  display: ${(props) => (props.visible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  height: 80%;

  .container {
    background-color: white;
    width: 50%;
    border-radius: 8px;
    padding: 20px;
    overflow: hidden;
    word-wrap: break-word;
  }

  .close {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 1rem;

    .close-button {
      cursor: pointer;
      display: flex;
      align-items: center;
    }
  }

  p {
    word-wrap: break-word;
    word-break: break-word;
    overflow-wrap: break-word;
    white-space: normal;
    margin: 0;
  }
`;
