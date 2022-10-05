import React from "react";

import {
  Header,
  Container,
  SpaceBetween,
  Input,
  Button,
  Link,
  Alert,
  Box,
  PieChart,
  BarChart,
  Grid,
  ColumnLayout,
} from "@cloudscape-design/components";

import { HeaderSlot } from "../../../components/AppSlots";

export default function Home() {
  const [value, setValue] = React.useState("");
  const [alertVisible, setVisible] = React.useState(true);

  return (
    <div>
      <HeaderSlot>
        <SpaceBetween size="m">
          <Header
            variant="h1"
            info={<Link>Hello Brandon</Link>} //add ink to profile? demographics?
            // description="When you create an Amazon CloudFront distribution."
            // actions={<Button variant="primary">Create distribution</Button>}
          ></Header>
        </SpaceBetween>
      </HeaderSlot>

      <Container>
        <SpaceBetween size="m">
          <Header variant="h1">Your SADA Team</Header>
          <Container>
            <ColumnLayout borders="vertical" columns={3}>
              <div>
                {" "}
                <b>Account Manager:</b>
                <br />
                <a href="mailto:first.last@sada.com">first.last@sada.com</a>
                <br />
                <a href="tel:5554280940">+1 (555)-428-0940</a>
              </div>
              <div>
                {" "}
                <b>TAM:</b>
                <br />
                <a href="mailto:first.last@sada.com">first.last@sada.com</a>
                <br />
                <a href="tel:5554280940">+1 (555)-428-0940</a>
              </div>
              <div>
                {" "}
                <b>Your Account Information:</b>
                <br />
                <br />
                <b>SADA Acct#:</b> 123456789 <br />
                <b>Customer since:</b> 01/01/2020 <br />
                <b>Projects:</b> 3 <br />
                <b>Linked billing IDs:</b> <br />
                - 123456789 <br />
                - 133456797 <br />
                - 144456785 <br />
              </div>
            </ColumnLayout>
          </Container>
          <Container>
            <Grid
              gridDefinition={[
                { colspan: { default: 3, xxs: 6 } },
                { colspan: { default: 3, xxs: 6 } },
              ]}
            >
              <div>
                <BarChart
                  series={[
                    {
                      title: "Site 1",
                      type: "bar",
                      data: [
                        { x: new Date(1601103600000), y: 34503 },
                        { x: new Date(1601110800000), y: 25832 },
                        { x: new Date(1601118000000), y: 4012 },
                        { x: new Date(1601125200000), y: -5602 },
                        { x: new Date(1601132400000), y: 17839 },
                      ],
                      valueFormatter: (e) => "$" + e.toLocaleString("en-US"),
                    },
                    {
                      title: "Average revenue",
                      type: "threshold",
                      y: 19104,
                      valueFormatter: (e) => "$" + e.toLocaleString("en-US"),
                    },
                  ]}
                  xDomain={[
                    new Date(1601103600000),
                    new Date(1601110800000),
                    new Date(1601118000000),
                    new Date(1601125200000),
                    new Date(1601132400000),
                  ]}
                  yDomain={[-10000, 40000]}
                  i18nStrings={{
                    filterLabel: "Filter displayed data",
                    filterPlaceholder: "Filter data",
                    filterSelectedAriaLabel: "selected",
                    legendAriaLabel: "Legend",
                    chartAriaRoleDescription: "line chart",
                    xTickFormatter: (e) =>
                      e
                        .toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          hour: "numeric",
                          minute: "numeric",
                          hour12: !1,
                        })
                        .split(",")
                        .join("\n"),
                    yTickFormatter: undefined,
                  }}
                  ariaLabel="Single data series line chart"
                  detailPopoverSize="small"
                  emphasizeBaselineAxis={false}
                  errorText="Error loading data."
                  height={300}
                  hideFilter
                  loadingText="Loading chart"
                  recoveryText="Retry"
                  xScaleType="categorical"
                  xTitle="Time (UTC)"
                  yTitle="Revenue (USD)"
                  empty={
                    <Box textAlign="center" color="inherit">
                      <b>No data available</b>
                      <Box variant="p" color="inherit">
                        There is no data available
                      </Box>
                    </Box>
                  }
                  noMatch={
                    <Box textAlign="center" color="inherit">
                      <b>No matching data</b>
                      <Box variant="p" color="inherit">
                        There is no matching data to display
                      </Box>
                      <Button>Clear filter</Button>
                    </Box>
                  }
                />
              </div>
              <div>
                <PieChart
                  data={[
                    {
                      title: "123456789",
                      value: 60,
                      lastUpdate: "Dec 7, 2020",
                    },
                    {
                      title: "133456797",
                      value: 30,
                      lastUpdate: "Dec 6, 2020",
                    },
                    {
                      title: "144456785",
                      value: 10,
                      lastUpdate: "Dec 6, 2020",
                    },
                    {
                      title: "Pending",
                      value: 0,
                      lastUpdate: "Dec 7, 2020",
                    },
                  ]}
                  detailPopoverContent={(datum, sum) => [
                    { key: "Resource count", value: datum.value },
                    {
                      key: "Percentage",
                      value: `${((datum.value / sum) * 100).toFixed(0)}%`,
                    },
                    { key: "Last update on", value: datum.lastUpdate },
                  ]}
                  segmentDescription={(datum, sum) =>
                    ` ${((datum.value / sum) * 100).toFixed(0)}% spending`
                  }
                  i18nStrings={{
                    detailsValue: "Value",
                    detailsPercentage: "Percentage",
                    filterLabel: "Filter by project",
                    filterPlaceholder: "Filter project",
                    filterSelectedAriaLabel: "selected",
                    detailPopoverDismissAriaLabel: "Dismiss",
                    legendAriaLabel: "Legend",
                    chartAriaRoleDescription: "pie chart",
                    segmentAriaRoleDescription: "segment",
                  }}
                  ariaDescription="Pie chart showing how many resources are currently in which state."
                  ariaLabel="Pie chart"
                  errorText="Error loading data."
                  loadingText="Loading chart"
                  recoveryText="Retry"
                  empty={
                    <Box textAlign="center" color="inherit">
                      <b>No data available</b>
                      <Box variant="p" color="inherit">
                        There is no data available
                      </Box>
                    </Box>
                  }
                  noMatch={
                    <Box textAlign="center" color="inherit">
                      <b>No matching data</b>
                      <Box variant="p" color="inherit">
                        There is no matching data to display
                      </Box>
                      <Button>Clear filter</Button>
                    </Box>
                  }
                />
              </div>
            </Grid>
          </Container>
        </SpaceBetween>
      </Container>
    </div>
  );
}
