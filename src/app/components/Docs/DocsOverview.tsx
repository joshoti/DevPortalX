import { Text, Flex, Title } from "@mantine/core";
import classes from "./Docs.module.css";
import { useEffect } from "react";
import { docsScrollOptions } from "../../pages/Docs";
import { scrollToElement } from "../../utils/scoll";

export function DocsOverview() {
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
          Overview of Documentation
        </Title>
        <Text mb={30} className={classes.regularText}>
          Welcome to the Developers documentation. Here we'll show you how to
          set up your Developer account and start integrating your app with our
          APIs.
        </Text>
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
        <Text className={classes.tableOfContentText}>Login API</Text>
        <Text className={classes.tableOfContentText}>Analytics</Text>
        <Text className={classes.tableOfContentText}>Webhooks</Text>
      </Flex>
    </Flex>
  );
}
