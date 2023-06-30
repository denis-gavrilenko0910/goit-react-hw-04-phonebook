import { styled } from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
  display: flex;
  width: 100%;
  margin-bottom: 25px;
  padding: 15px 16px;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  align-items: center;
  letter-spacing: 0.07em;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  color: rgba(255, 255, 255);
  line-height: 20px;
`;

export const Filter = ({ filter, addFilter }) => {
  return (
    <StyledInput
      type="text"
      name={filter}
      value={filter}
      placeholder="search"
      onChange={addFilter}
    />
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  addFilter: PropTypes.func.isRequired,
};
