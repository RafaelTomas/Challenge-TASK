import PropTypes from  'prop-types';

export const propTypes = {
  children: PropTypes.string,
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func,
  task: PropTypes.shape({}),
};