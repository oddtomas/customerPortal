import React from "react";
// import { Link } from "react-router-dom";
import { HeaderSlot } from "../../../components/AppSlots";
import {
  Box,
  Button,
  Cards,
  Container,
  Header,
  Link,
  Pagination,
  SpaceBetween,
  Table,
  TextFilter,
} from "@cloudscape-design/components";

export default class Billing extends React.Component {
  render() {
    return (
      <div>
        <HeaderSlot>
          <SpaceBetween size="m">
            <Header variant="h1">Current Bill</Header>
          </SpaceBetween>
        </HeaderSlot>

        {/* <Container> */}
        <SpaceBetween size="m">
          <br></br>
          <br></br>
          <Header variant="h1">October 2022</Header>
          {/* ------------ */}
          <Cards
            ariaLabels={{
              itemSelectionLabel: (e, t) => `select ${t.name}`,
              selectionGroupLabel: "Item selection",
            }}
            cardDefinition={{
              header: (item) => (
                <Link fontSize="heading-m" color="normal">
                  {item.name}
                </Link>
              ),
              sections: [
                {
                  id: "description",

                  content: (item) => item.description,
                },
              ],
            }}
            cardsPerRow={[{ cards: 1 }, { minWidth: 500, cards: 3 }]}
            items={[
              {
                name: "Overall Costs",
                alt: "First",
                description: "$10,000.00",
              },
              {
                name: "Spending Owner",
                alt: "Second",
                description: "Joe Smith",
              },
              {
                name: "Top Project",
                alt: "Third",
                description: "Mobile-Guru",
              },
            ]}
          />

          <Table
            columnDefinitions={[
              {
                id: "name",
                header: "Project Name",
                cell: (e) => e.name,
                width: 170,
                minWidth: 165,
                sortingField: "name",
              },
              {
                id: "cost",
                header: "Costs",
                cell: (e) => e.cost,
                width: 110,
                minWidth: 110,
                sortingField: "cost",
              },
              {
                id: "owner",
                header: "Project Owner",
                cell: (e) => e.owner,
                width: 110,
                minWidth: 90,
              },
              {
                id: "description",
                header: "Description",
                cell: (e) => e.description,
                width: 200,
                minWidth: 170,
              },
            ]}
            items={[
              {
                name: "Mobile Guru",
                alt: "First",
                description: "This is the first item",
                cost: "$3,000.00",
                owner: "Joe Smith",
              },
              {
                name: "Getflix",
                alt: "Second",
                description: "This is the second item",
                cost: "$1500.00",
                owner: "Steve Mills",
              },
              {
                name: "Juju Eats",
                alt: "Third",
                description: "This is the third item",
                cost: "$1500.00",
                owner: "Dumbfoundead",
              },
              {
                name: "Chicken Farming",
                alt: "Fourth",
                description: "This is the fourth item",
                cost: "$1500.00",
                owner: "Milly Rock",
              },
              {
                name: "Dungeons and Drogans",
                alt: "-",
                description: "This is the fifth item with a longer description",
                cost: "$1500.00",
                owner: "Daenerys Targaryen",
              },
              {
                name: "Funko Pop",
                alt: "Sixth",
                description: "This is the sixth item",
                cost: "$1000.00",
                owner: "David Yu",
              },
            ]}
            loadingText="Loading resources"
            resizableColumns
            selectedItems={[{ name: "Item 2" }]}
            selectionType="multi"
            empty={
              <Box textAlign="center" color="inherit">
                <b>No resources</b>
                <Box padding={{ bottom: "s" }} variant="p" color="inherit">
                  No resources to display.
                </Box>
                <Button>Create resource</Button>
              </Box>
            }
            filter={
              <TextFilter
                filteringPlaceholder="Find resources"
                filteringText=""
              />
            }
            header={<Header>Top Spending Projects</Header>}
            pagination={
              <Pagination
                currentPageIndex={1}
                pagesCount={1}
                ariaLabels={{
                  nextPageLabel: "Next page",
                  previousPageLabel: "Previous page",
                  pageLabel: (pageNumber) => `Page ${pageNumber} of all pages`,
                }}
              />
            }
          />
          <Link
            // external
            // externalIconAriaLabel="Opens in a new tab"
            fontSize="heading-m"
            href="documents"
          >
            View past invoices
          </Link>
        </SpaceBetween>
        {/* </Container> */}
      </div>
      //  -----------------------------------
    );
  }
  styles = {
    links: {
      textDecoration: "none",
      color: "black",
    },
  } as const;
}
