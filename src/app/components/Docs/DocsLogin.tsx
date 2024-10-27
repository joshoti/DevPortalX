import { Text, Flex, Title, Table, Space, Box, Paper } from "@mantine/core";
import classes from "./Docs.module.css";
import { useEffect } from "react";
import { docsScrollOptions, localUrl } from "../../pages/Docs";
import { scrollToElement } from "../../utils/scoll";

export function DocsLogin() {
  // To scroll to the top manually
  useEffect(() => {
    scrollToElement("head", docsScrollOptions);
  });

  const errors = [
    { code: 200, response: "Ok", description: "Login flow was successful" },
    {
      code: 400,
      response: "Bad Request",
      description:
        "Typically occurs if a required parameter is missing or malformed",
    },
    {
      code: 401,
      response: "Unauthorized",
      description: "Invalid credentials or missing authentication token",
    },
    {
      code: 403,
      response: "Forbidden",
      description: "Access denied due to insufficient permissions",
    },
    {
      code: 429,
      response: "Rate Limit Exceeded",
      description: "Access denied due to insufficient permissions",
    },
    {
      code: 500,
      response: "Internal Server Error",
      description: "A server issue that may require retrying later",
    },
  ];

  const errorTableRows = errors.map((error) => (
    <Table.Tr key={error.code}>
      <Table.Td>{error.code}</Table.Td>
      <Table.Td>{error.response}</Table.Td>
      <Table.Td>{error.description}</Table.Td>
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
          OAuth 2.0 API
        </Title>
        <Text mb={10} className={classes.regularText}>
          Integrate the Login API to authenticate users and manage their
          sessions securely.
        </Text>
        <Title
          id="prerequisites"
          mt={marginTop}
          mb={marginTop / 2}
          className={classes.title}
        >
          Prerequisites
        </Title>
        <Text mb={10} className={classes.regularText}>
          Step by step guide to set up your login flow
        </Text>

        <Title
          id="errorCodes"
          mt={marginTop}
          mb={marginTop / 2}
          className={classes.title}
        >
          Error Codes
        </Title>
        <Text mb={10} className={classes.regularText}>
          Below are error codes you might encounter and what they mean:
        </Text>
        <Box className={classes.table}>
          <Table verticalSpacing="sm" horizontalSpacing="md">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Status Code</Table.Th>
                <Table.Th>Status Response</Table.Th>
                <Table.Th>Description</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{errorTableRows}</Table.Tbody>
          </Table>
        </Box>

        <Text mb={15} fw={"bold"} className={classes.regularText}>
          Example Integration (cURL)
        </Text>
        <Paper bg={"#f1f3f5"} className={classes.codeContainer}>
          <Text className={classes.code}>
            curl -X POST{" "}
            <Text
              span
              className={classes.codeRed}
            >{`'${localUrl}/api/users/login'`}</Text>
          </Text>
          <Text className={`${classes.code} ${classes.codeIndent}`}>
            -H{" "}
            <Text span className={classes.codeRed}>
              {`'Content-Type: application/json'`}
            </Text>
          </Text>
          <Text className={`${classes.code} ${classes.codeIndent}`}>
            -d{" "}
            <Text span className={classes.codeRed}>
              {`'{"email": "user@example.com", "password": "securePass123"}'`}
            </Text>
          </Text>
        </Paper>
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
          onClick={() => scrollToElement("prerequisites")}
          className={classes.tableOfContentText}
        >
          Prerequisites
        </Text>
        <Text
          onClick={() => scrollToElement("errorCodes")}
          className={classes.tableOfContentText}
        >
          Error Codes
        </Text>
      </Flex>
    </Flex>
  );
}
