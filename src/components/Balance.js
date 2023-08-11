import React from 'react';

import {
  Menu,
  Button,
  Container,
  Icon,
  Image,
  Label
} from 'semantic-ui-react';

function Balance ({ balance }) {
  return (
      <Container>
        <Menu.Menu position='right' style={{ textAlign: 'center' }}>
          <Label pointing='left'>
            <Icon name='money' color='green' />
            {balance} ETH
          </Label>
        </Menu.Menu>
      </Container>
  );
}

export default Balance