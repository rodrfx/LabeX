import React from 'react';
import * as S from './styles';

function Button({primary, children}) {
  return (
      <div>
        <S.Button primary={primary}>{children}</S.Button>
      </div>
  )
}

export default Button;