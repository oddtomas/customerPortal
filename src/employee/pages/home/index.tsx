import React from 'react';

import Header from "@cloudscape-design/components/header";
import Container from "@cloudscape-design/components/container";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Input, { InputProps } from "@cloudscape-design/components/input";
import Button from "@cloudscape-design/components/button";

type Props = {
};

type State = {
  value: string;
};

export default class Home extends React.Component<Props, State> {
  state: State = {
    value: "",
  };

  onChange = (event: InputProps.ChangeDetail) => {
    this.setState({ value: event.value });
  };

  render() {
    return (
      <Container
        header={
          <Header
            variant="h2"
            description=""
          >
            Hello World
          </Header>
        }
      >
        <SpaceBetween size="m">
          <Container>
            <SpaceBetween size="s">
              <span>Start editing to see some magic happen</span>
              <Input
                value={this.state.value}
                onChange={(e) => this.onChange(e.detail)}
              />
              <Button variant="primary">Click me</Button>
              <p>{this.state.value}</p>
            </SpaceBetween>
          </Container>
        </SpaceBetween>
      </Container>
    );
  }
}
