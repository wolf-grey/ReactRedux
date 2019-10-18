import React from 'react';

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  };
}

export default mapDispatchToProps;