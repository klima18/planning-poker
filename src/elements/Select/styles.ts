import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  position: relative;
  
  .input-display {
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-size: 16px;
    font-weight: 500;
    background-color: #e5e5e5;
    border: 0;
    border-radius: 6px;
    color: #35353A;
  }
`;

export const Options = styled.div<{ open: boolean }>`
  position: ${({open}) => open ? 'absolute' : 'none'};
  top: 50px;
  z-index: 1;
  width: 100%;
  padding: 5px;
  background-color: #e5e5e5;
  border-radius: 6px;

  button {
    width: 100%;
    background-color: #e5e5e5;
    border: 0;
    padding: 5px;
    color: #35353A;
    transition: filter 0.4s;
    border-radius: 6px;
    display: flex;
    padding-left: 15px;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;