import React, { Component } from 'react';
import { Pane, Button, Text, Heading} from  'evergreen-ui';

export class Navbar extends Component {
    render() {
        return (
            <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
            <Pane flex={1} alignItems="center" display="flex">
              <Heading size={600}>Cell/it!</Heading>
            </Pane>
            <Pane>
              {/* Below you can see the marginRight property on a Button. */}
              <Button marginRight={16}>Button</Button>
              <Button appearance="primary">Primary Button</Button>
            </Pane>
          </Pane>
        )
    }
}

export default Navbar
