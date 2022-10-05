import * as React from "react";
import Tabs from "@cloudscape-design/components/tabs";
import {
  Box,
  Button,
  CollectionPreferences,
  Container,
  Header,
  Icon,
  Pagination,
  SpaceBetween,
  Table,
  TextFilter,
} from "@cloudscape-design/components";

export default class Billing extends React.Component {
  //       const [
  //     selectedItems,
  //     setSelectedItems
  //   ] = React.useState([{ name: "Item 2" }]);
  render() {
    return (
      <>
        <br />
        <br />

        <SpaceBetween size="m">
          <Tabs
            tabs={[
              {
                label: "Contracts",
                id: "first",
                content: (
                  <Table
                    // onSelectionChange={({ detail }) =>
                    //   setSelectedItems(detail.selectedItems)
                    // }
                    // selectedItems={selectedItems}
                    ariaLabels={{
                      selectionGroupLabel: "Items selection",
                      allItemsSelectionLabel: ({ selectedItems }) =>
                        `${selectedItems.length} ${
                          selectedItems.length === 1 ? "item" : "items"
                        } selected`,
                      itemSelectionLabel: ({ selectedItems }, item) => {
                        const isItemSelected = selectedItems.filter(
                          (i) => i.name === item.name
                        ).length;
                        return `${item.name} is ${
                          isItemSelected ? "" : "not"
                        } selected`;
                      },
                    }}
                    columnDefinitions={[
                      {
                        id: "variable",
                        header: "Contract Name",
                        cell: (e) => e.name,
                        sortingField: "name",
                      },
                      {
                        id: "value",
                        header: "Date Last Modified",
                        cell: (e) => e.alt,
                        sortingField: "alt",
                      },
                      {
                        id: "download",
                        header: "Download",
                        cell: (e) => e.dl,
                        sortingField: "dl",
                      },
                    ]}
                    items={[
                      {
                        name: "Anthos",
                        alt: "10/05/2022",
                        description: "This is the first item",
                        type: "1A",
                        size: "Small",
                        dl: <Icon name="external" variant="link" />,
                      },
                      {
                        name: "BigQuery",
                        alt: "09/15/2022",
                        description: "This is the second item",
                        type: "1B",
                        size: "Large",
                        dl: <Icon name="external" variant="link" />,
                      },
                      {
                        name: "GKE",
                        alt: "06/15/2022",
                        description: "-",
                        type: "1A",
                        size: "Large",
                        dl: <Icon name="external" variant="link" />,
                      },
                    ]}
                    loadingText="Loading resources"
                    selectionType="multi"
                    trackBy="name"
                    visibleColumns={["variable", "value", "download"]}
                    empty={
                      <Box textAlign="center" color="inherit">
                        <b>No resources</b>
                        <Box
                          padding={{ bottom: "s" }}
                          variant="p"
                          color="inherit"
                        >
                          No resources to display.
                        </Box>
                        <Button>Create resource</Button>
                      </Box>
                    }
                    filter={
                      <TextFilter
                        filteringPlaceholder="Find contracts"
                        filteringText=""
                      />
                    }
                    header={
                      <Header
                      // counter={
                      //   selectedItems.length
                      // ? "(" + selectedItems.length + "/10)"
                      // : "(10)"
                      // }
                      >
                        Your Contracts
                      </Header>
                    }
                    pagination={
                      <Pagination
                        currentPageIndex={1}
                        pagesCount={2}
                        ariaLabels={{
                          nextPageLabel: "Next page",
                          previousPageLabel: "Previous page",
                          pageLabel: (pageNumber) =>
                            `Page ${pageNumber} of all pages`,
                        }}
                      />
                    }
                    preferences={
                      <CollectionPreferences
                        title="Preferences"
                        confirmLabel="Confirm"
                        cancelLabel="Cancel"
                        preferences={{
                          pageSize: 10,
                          visibleContent: ["variable", "value", "download"],
                        }}
                        pageSizePreference={{
                          title: "Select page size",
                          options: [
                            { value: 10, label: "10 resources" },
                            { value: 20, label: "20 resources" },
                          ],
                        }}
                        visibleContentPreference={{
                          title: "Select visible content",
                          options: [
                            {
                              label: "Main distribution properties",
                              options: [
                                {
                                  id: "variable",
                                  label: "Variable name",
                                  editable: false,
                                },
                                { id: "value", label: "Text value" },
                                { id: "type", label: "Type" },
                                {
                                  id: "description",
                                  label: "Description",
                                },
                              ],
                            },
                          ],
                        }}
                      />
                    }
                  />
                ),
              },
              {
                label: "Past Invoices",
                id: "second",
                content: (
                  <Table
                    // onSelectionChange={({ detail }) =>
                    //   setSelectedItems(detail.selectedItems)
                    // }
                    // selectedItems={selectedItems}
                    ariaLabels={{
                      selectionGroupLabel: "Items selection",
                      allItemsSelectionLabel: ({ selectedItems }) =>
                        `${selectedItems.length} ${
                          selectedItems.length === 1 ? "item" : "items"
                        } selected`,
                      itemSelectionLabel: ({ selectedItems }, item) => {
                        const isItemSelected = selectedItems.filter(
                          (i) => i.name === item.name
                        ).length;
                        return `${item.name} is ${
                          isItemSelected ? "" : "not"
                        } selected`;
                      },
                    }}
                    columnDefinitions={[
                      {
                        id: "variable",
                        header: "Invoice",
                        cell: (e) => e.name,
                        sortingField: "name",
                      },
                      {
                        id: "value",
                        header: "Dates",
                        cell: (e) => e.alt,
                        sortingField: "alt",
                      },
                      {
                        id: "download",
                        header: "Download",
                        cell: (e) => e.dl,
                        sortingField: "type",
                      },
                    ]}
                    items={[
                      {
                        name: "October Invoice",
                        alt: "10/05/2022",
                        description: "This is the first item",
                        type: "1A",
                        size: "Small",
                        dl: <Icon name="external" variant="link" />,
                      },
                      {
                        name: "September Invoice",
                        alt: "09/15/2022",
                        description: "This is the second item",
                        type: "1B",
                        size: "Large",
                        dl: <Icon name="external" variant="link" />,
                      },
                      {
                        name: "June Invoice",
                        alt: "06/15/2022",
                        description: "-",
                        type: "1A",
                        size: "Large",
                        dl: <Icon name="external" variant="link" />,
                      },
                    ]}
                    loadingText="Loading resources"
                    selectionType="multi"
                    trackBy="name"
                    visibleColumns={["variable", "value", "download"]}
                    empty={
                      <Box textAlign="center" color="inherit">
                        <b>No resources</b>
                        <Box
                          padding={{ bottom: "s" }}
                          variant="p"
                          color="inherit"
                        >
                          No resources to display.
                        </Box>
                        <Button>Create resource</Button>
                      </Box>
                    }
                    filter={
                      <TextFilter
                        filteringPlaceholder="Find contracts"
                        filteringText=""
                      />
                    }
                    header={
                      <Header
                      // counter={
                      //   selectedItems.length
                      // ? "(" + selectedItems.length + "/10)"
                      // : "(10)"
                      // }
                      >
                        Past Invoices
                      </Header>
                    }
                    pagination={
                      <Pagination
                        currentPageIndex={1}
                        pagesCount={2}
                        ariaLabels={{
                          nextPageLabel: "Next page",
                          previousPageLabel: "Previous page",
                          pageLabel: (pageNumber) =>
                            `Page ${pageNumber} of all pages`,
                        }}
                      />
                    }
                    preferences={
                      <CollectionPreferences
                        title="Preferences"
                        confirmLabel="Confirm"
                        cancelLabel="Cancel"
                        preferences={{
                          pageSize: 10,
                          visibleContent: ["variable", "value", "download"],
                        }}
                        pageSizePreference={{
                          title: "Select page size",
                          options: [
                            { value: 10, label: "10 resources" },
                            { value: 20, label: "20 resources" },
                          ],
                        }}
                        visibleContentPreference={{
                          title: "Select visible content",
                          options: [
                            {
                              label: "Main distribution properties",
                              options: [
                                {
                                  id: "variable",
                                  label: "Variable name",
                                  editable: false,
                                },
                                { id: "value", label: "Text value" },
                                { id: "type", label: "Type" },
                                {
                                  id: "description",
                                  label: "Description",
                                },
                              ],
                            },
                          ],
                        }}
                      />
                    }
                  />
                ),
              },
            ]}
          />
        </SpaceBetween>
      </>
    );
  }
}
