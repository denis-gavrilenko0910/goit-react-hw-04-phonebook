import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;

  padding: 25px;
  border-radius: 12px;
  align-items: center;
  width: 80%;
  margin: auto;
  box-shadow: rgb(114 114 114) 0px 50px 100px -20px,
    rgb(255 254 197) 0px 30px 60px -30px,
    rgb(82 69 71 / 35%) 0px -2px 6px 0px inset;

  .wrapper_1 {
    width: 30%;
    margin-right: 30px;
  }
  .wrapper_2 {
    padding: 30px;
    height: 100%;
    height: 250px;
    border-radius: 12px;
    overflow-y: scroll;
    box-shadow: rgb(217 217 217) 0px 3px 14px 0px,
      rgb(255 254 197) 0px 0px 5px 5px,
      rgb(82 69 71 / 35%) 0px -2px 6px 0px inset;
  }
  .list_wrapper {
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
  }
  @media screen and (max-width: 768px) {
    .wrapper_1 {
      margin: auto;
      width: 100%;
    }
    .wrapper_2 {
      height: 350px;
    }
  }
`;

export const Container = ({ children }) => {
  return <StyledContainer className="container">{children}</StyledContainer>;
};
