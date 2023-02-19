import PropTypes from 'prop-types';
import { Name } from './Contact.styled';

export const Contact = ({ name, number }) => (
  <div>
    <Name>{name}:</Name>
    <span> {number}</span>
  </div>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
