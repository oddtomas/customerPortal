import React from "react";
import { Link } from "react-router-dom";
import { HeaderSlot } from "../../../components/AppSlots";
import {
  Box,
  Button,
  Cards,
  ColumnLayout,
  Container,
  Form,
  FormField,
  Header,
  Input,
  Select,
  SpaceBetween,
  Textarea,
} from "@cloudscape-design/components";
type State = {
  text: string;
};
export default class Help extends React.Component {
  state: State = {
    text: "",
  };

  setText = (text: string) => {
    this.setState({ inputText: text });
  };
  onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ text: e.currentTarget.value });
  };

  render() {
    return (
      <div>
        <HeaderSlot>
          <SpaceBetween size="m">
            <Header variant="h1">How can we help?</Header>
          </SpaceBetween>
        </HeaderSlot>
        <Container>
          <SpaceBetween size="m">
            <a
              href="https://cs.sada.com/csm?id=csm_index"
              target="_blank"
              style={this.styles.linkStyle}
            >
              <b>Chat live with support</b>
            </a>

            <p style={this.styles.linkStyle}>
              <b>Phone</b> -{" "}
              <a href="tel:8187662400" style={this.styles.linkStyle}>
                +1-818-766-2400
              </a>{" "}
              opt. 1
              <br />
              <b>Email</b> -{" "}
              <a href="mailto:support@sada.com" style={this.styles.linkStyle}>
                support@sada.com
              </a>
            </p>

            <a
              href="https://cs.sada.com/csm?id=csm_sc_category"
              target="_blank"
              style={this.styles.linkStyle}
            >
              <b>Submit Case or Request</b>
            </a>
            <SpaceBetween size="m"></SpaceBetween>
            <form onSubmit={(e) => e.preventDefault()}>
              <Form
                actions={
                  <SpaceBetween direction="horizontal" size="xs">
                    <Button formAction="none" variant="link">
                      Cancel
                    </Button>
                    <Button variant="primary">Submit</Button>
                  </SpaceBetween>
                }
              >
                <Container>
                  <SpaceBetween direction="vertical" size="l">
                    <FormField label="Subject">
                      <Select
                        options={[
                          { label: "Account" },
                          { label: "Billing" },
                          { label: "Other" },
                        ]}
                        selectedOption={null}
                      />
                    </FormField>
                    <FormField
                      description="Enter your request here"
                      label={<span>Request</span>}
                    >
                      <Textarea value={""} />
                    </FormField>
                  </SpaceBetween>
                </Container>
              </Form>
            </form>

            <h1>
              <b>Commonly Asked Questions</b>
            </h1>
            <ColumnLayout borders="vertical" columns={3}>
              <div>
                <a
                  href="https://cs.sada.com/csm?id=search&spa=1&q=billing"
                  target="_blank"
                  style={this.styles.linkStyle}
                >
                  <h2>
                    <b>Billing Questions</b>
                  </h2>
                </a>
                <br />
                Find out what your bill means
              </div>
              <div>
                <a
                  href="https://sada.com/cloud-computing-insights/cloud-engineering-blog/"
                  target="_blank"
                  style={this.styles.linkStyle}
                >
                  <h2>
                    <b>GCP technical Questions</b>
                  </h2>
                </a>
                <br />
                Find answers about the Google Cloud Console
              </div>
              <div>
                <a
                  href="https://sada.com/about/cloud-computing-solutions-services/?"
                  target="_blank"
                  style={this.styles.linkStyle}
                >
                  <h2>
                    <b>SADA services</b>
                  </h2>
                </a>
                <br />
                Click here to find out more about SADA services
              </div>
            </ColumnLayout>
          </SpaceBetween>
        </Container>
      </div>
    );
  }
  styles = {
    links: {
      textDecoration: "none",
    },
    spacing: {
      padding: "10px",
    },
    linkStyle: {
      fontFamily: "sans-serif",
      textDecoration: "none",
      color: "#0972d3",
      fontSize: "16px",
      margin: "0px",
    },
  } as const;
}
