import PropTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <>
    {title && <h2>{title}</h2>}
    {children}
  </>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
