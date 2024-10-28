import { Text, Flex, Title, Code, Space, Box, Table } from "@mantine/core";
import classes from "./Docs.module.css";
import { useEffect } from "react";
import { docsScrollOptions, localUrl, prodUrl } from "../../pages/Docs";
import { scrollToElement } from "../../utils/scoll";

export function DocsAnalytics() {
  // To scroll to the top manually
  useEffect(() => {
    scrollToElement("head", docsScrollOptions);
  });

  const metrics = [
    {
      name: "User Activity",
      description: "Track active users, session lengths, and actions",
    },
    {
      name: "Content Engagement",
      description: "Measure likes, shares, and comments",
    },
    {
      name: "Conversion Tracking",
      description: "Monitor transactions and conversions for business impact",
    },
  ];

  const metricsRows = metrics.map((metric) => (
    <Table.Tr key={metric.name}>
      <Table.Td>{metric.name}</Table.Td>
      <Table.Td>{metric.description}</Table.Td>
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
          Analytics API
        </Title>
        <Text mb={10} className={classes.regularText}>
          The Analytics API provides real-time data for informed decisions.
          Track and analyze various metrics such as user engagement, content
          performance, and transaction history.
        </Text>
        <Title
          id="keyMetrics"
          mt={marginTop}
          mb={marginTop / 2}
          className={classes.title}
        >
          Key Metrics
        </Title>
        <Box className={classes.table}>
          <Table withColumnBorders verticalSpacing="sm" horizontalSpacing="md">
            <Table.Thead>
              <Table.Tr className={classes.tableHeader}>
                <Table.Th>Status Code</Table.Th>
                <Table.Th>Description</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody className={classes.tableBody}>
              {metricsRows}
            </Table.Tbody>
          </Table>
        </Box>

        <Text fw={"bold"} className={classes.regularText}>
          Example Integration (cURL)
        </Text>
        <Code className={classes.code}>
          {`curl -X GET ${localUrl}/api/analytics/user_activity -H "Authorization: Bearer <token>" -d "date_range=2024-09-01_to_2024-10-07"`}
          {`curl -X GET ${prodUrl}/analytics/user_activity -H "Authorization: Bearer <token>" -d "date_range=2024-09-01_to_2024-10-07"`}
        </Code>
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
          onClick={() => scrollToElement("keyMetrics")}
          className={classes.tableOfContentText}
        >
          Key Metrics
        </Text>
      </Flex>
    </Flex>
  );
}
