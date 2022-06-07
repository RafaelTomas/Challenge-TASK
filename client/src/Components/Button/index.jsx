import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

import { defaultProps, propTypes } from './types';

function Button(props) {
  const { hoverColor, fontColor, onClick, children } = props;
  return (
    <ChakraButton
      {...props}
      flex={1}
      fontSize={'sm'}
      rounded={'full'}
      color={fontColor}
      _hover={{
        bg: hoverColor,
      }}
      onClick={onClick}
    >
      {children}
    </ChakraButton>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
