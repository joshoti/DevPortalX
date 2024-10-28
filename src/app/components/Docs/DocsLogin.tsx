import { Text, Flex, Title, Space, Paper } from "@mantine/core";
import classes from "./Docs.module.css";
import { useEffect } from "react";
import { docsScrollOptions, localUrl } from "../../pages/Docs";
import { scrollToElement } from "../../utils/scoll";

export function DocsLogin() {
  // To scroll to the top manually
  useEffect(() => {
    scrollToElement("head", docsScrollOptions);
  });

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
      </Flex>
    </Flex>
  );
}
