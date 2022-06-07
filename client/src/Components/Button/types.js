import PropTypes from 'prop-types';

export const propTypes = {
  hoverColor: PropTypes.string,
  fontColor: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export const defaultProps = {
  fontColor: 'white',
};