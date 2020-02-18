import React, { Component } from 'react';
import { Pane, Card, Button, Text, Heading } from 'evergreen-ui';
import Items from "./StoreItems";

export class Store extends Component {
  render() {
    return (
      <Pane>
        <Pane display='flex' padding={16} background='tint2' borderRadius={3}>
          <Pane flex={1} alignItems='center' display='flex'>
            <Heading size={600}>Our Items For Sale</Heading>
          </Pane>
          <Pane>
            {/* Below you can see the marginRight property on a Button. */}
            {/* <Button marginRight={16}>Button</Button> */}
            <Button >Search</Button>
          </Pane>
        </Pane>
        <Pane>
          {/* <Pane background='tint1' padding={24} marginBottom={16}>
            <Text>tint1</Text>
          </Pane>
          <Pane background='tint2' padding={24}>
            <Text>tint2</Text>
          </Pane> */}
          <Items/>
        </Pane>
      </Pane>
    );
  }
}

export default Store;
