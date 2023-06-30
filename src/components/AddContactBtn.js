import { styled } from 'styled-components';

const StyledAddContactBtn = styled.button`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 25px;
  align-items: center;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0.07em;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const AddContactBtn = ({ onSubmit }) => {
  return (
    <StyledAddContactBtn className="add_button" onSubmit={onSubmit}>
      Add Contact
    </StyledAddContactBtn>
  );
};
