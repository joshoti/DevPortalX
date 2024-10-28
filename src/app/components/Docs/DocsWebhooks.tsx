import { Text, Flex, Title, Space, Box, Table } from "@mantine/core";
import classes from "./Docs.module.css";
import { useEffect } from "react";
import { docsScrollOptions } from "../../pages/Docs";
import { scrollToElement } from "../../utils/scoll";

export function DocsWebhooks() {
  // To scroll to the top manually
  useEffect(() => {
    scrollToElement("head", docsScrollOptions);
  });

  const webhooks = [
    { name: "Payload URL", description: "URL to send the webhook payload to" },
    {
      name: "Content Type",
      description: "Content type of the webhook request",
    },
    {
      name: "Events",
      description:
        "Name of the events to trigger the webhook. Multiple options are provided",
    },
    {
      name: "Signature",
      description: "Secret key to protect webhook notifications",
    },
  ];
  const payloads = [
    { name: "id", description: "Id of the triggered event" },
    { name: "event", description: "Name of the triggered event" },
    {
      name: "status",
      description: "Webhook status. Options are: Failed, Pending, Success",
    },
    {
      name: "timestamp",
      description: "The time of the event in UTC",
    },
  ];

  const webhookRows = webhooks.map((webhook) => (
    <Table.Tr key={webhook.name}>
      <Table.Td>{webhook.name}</Table.Td>
      <Table.Td>{webhook.description}</Table.Td>
    </Table.Tr>
  ));
  const payloadRows = payloads.map((payload) => (
    <Table.Tr key={payload.name}>
      <Table.Td>{payload.name}</Table.Td>
      <Table.Td>{payload.description}</Table.Td>
    </Table.Tr>
  ));

  const marginTop = 40;

  return (
    <Flex h={"100%"}>
      {/* Content section */}
      <Flex flex={1} direction="column">
        <Title
          id="head"
          mt={marginTop}
          mb={marginTop / 2}
          className={classes.title}
        >
          Webhooks Integration
        </Title>{" "}
        <Text mb={10} className={classes.regularText}>
          Integrate webhooks to automate notifications and data syncing. Use the
          following structure and customize parameters to suit your needs.
        </Text>
        <Title
          id="registerStructure"
          mt={marginTop}
          mb={marginTop / 2}
          className={classes.title}
        >
          Registering Webhook
        </Title>
        <Box className={classes.table}>
          <Table withColumnBorders verticalSpacing="sm" horizontalSpacing="md">
            <Table.Thead>
              <Table.Tr className={classes.tableHeader}>
                <Table.Th>Field Name</Table.Th>
                <Table.Th>Description</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody className={classes.tableBody}>
              {webhookRows}
            </Table.Tbody>
          </Table>
        </Box>
        <Title
          id="webhookDelivery"
          mt={marginTop}
          mb={marginTop / 2}
          className={classes.title}
        >
          Webhook Delivery
        </Title>
        <Text mb={10} fw="bold" className={classes.regularText}>
          Payload Structure
        </Text>
        <Box className={classes.table}>
          <Table withColumnBorders verticalSpacing="sm" horizontalSpacing="md">
            <Table.Thead>
              <Table.Tr className={classes.tableHeader}>
                <Table.Th>Name</Table.Th>
                <Table.Th>Description</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody className={classes.tableBody}>
              {payloadRows}
            </Table.Tbody>
          </Table>
        </Box>
        <Space h={40} />
      </Flex>

      {/* Table of Contents */}
      <Flex flex={0.4} direction="column" className={classes.tocContainer}>
        <Text
          className={classes.tableOfContentTitle}
          mt={marginTop + 10}
          mb={marginTop / 2}
        >
          Table of Contents
        </Text>
        <Text
          onClick={() => scrollToElement("registerStructure")}
          className={classes.tableOfContentText}
        >
          Registering Webhook
        </Text>
        <Text
          onClick={() => scrollToElement("webhookDelivery")}
          className={classes.tableOfContentText}
        >
          Webhook Delivery
        </Text>
      </Flex>
    </Flex>
  );
}
