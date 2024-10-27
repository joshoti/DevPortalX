import { Text, Flex, Title, Paper, Space } from "@mantine/core";
import classes from "./Docs.module.css";
import { useEffect } from "react";
import { docsScrollOptions, localUrl } from "../../pages/Docs";
import { scrollToElement } from "../../utils/scoll";
import { Link } from "react-router-dom";

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
        <Text mb={20} className={classes.regularText}>
          Welcome to the Developers documentation. Here we'll show you how to
          set up your Developer account and start integrating your app with our
          APIs.
        </Text>
        <Title
          id="supportedLanguages"
          mt={marginTop}
          mb={marginTop / 2}
          className={classes.title}
        >
          Supported Languages
        </Title>
        <Text mb={30} className={classes.regularText}>
          DevPortalX supports integration across multiple programming languages,
          offering flexibility to developers from various environments.
        </Text>
        <Text className={classes.regularText}>
          <Text span fw={"bold"} className={classes.regularText}>
            • JavaScript:
          </Text>{" "}
          Integration examples for web-based applications.
        </Text>
        <Text className={classes.regularText}>
          <Text span fw={"bold"} className={classes.regularText}>
            • Python:
          </Text>{" "}
          Ideal for data-heavy processes and backend automation.
        </Text>
        <Text className={classes.regularText}>
          <Text span fw={"bold"} className={classes.regularText}>
            • Java:
          </Text>{" "}
          Reliable for enterprise applications with strict performance
          standards.
        </Text>
        <Text className={classes.regularText}>
          <Text span fw={"bold"} className={classes.regularText}>
            • Ruby:
          </Text>{" "}
          Lightweight and simple integration options for smaller projects.
        </Text>
        <Text mb={30} className={classes.regularText}>
          <Text span fw={"bold"} className={classes.regularText}>
            • cURL:
          </Text>{" "}
          Command-line examples for quick testing.
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
            >{`'${localUrl}/api/resource'`}</Text>
          </Text>
          <Text className={`${classes.code} ${classes.codeIndent}`}>
            -H{" "}
            <Text span className={classes.codeRed}>
              {`'Authorization: Bearer <token>'`}
            </Text>
          </Text>
          <Text className={`${classes.code} ${classes.codeIndent}`}>
            -d{" "}
            <Text span className={classes.codeRed}>
              {`'param=value'`}
            </Text>
          </Text>
        </Paper>
        <Title
          id="rateLimiting"
          mt={marginTop}
          mb={marginTop / 2}
          className={classes.title}
        >
          Rate Limiting
        </Title>
        <Text mb={10} className={classes.regularText}>
          To ensure a smooth experience and fair use, API requests are subject
          to rate limiting.
        </Text>{" "}
        <Text mb={10} className={classes.regularText}>
          <Text span fw={"bold"} className={classes.regularText}>
            • Basic Tier:
          </Text>{" "}
          1000 requests per hour{" "}
        </Text>
        <Text mb={20} className={classes.regularText}>
          <Text span fw={"bold"} className={classes.regularText}>
            • Pro Tier:
          </Text>{" "}
          5000 requests per hour
        </Text>{" "}
        <Text mb={20} className={classes.regularText}>
          For more details, see our{" "}
          <Link to="/docs/rate-limiting">Rate Limiting guide.</Link>
        </Text>
        <Space h={30} />
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
          onClick={() => scrollToElement("supportedLanguages")}
          className={classes.tableOfContentText}
        >
          Supported Languages
        </Text>
        <Text
          onClick={() => scrollToElement("rateLimiting")}
          className={classes.tableOfContentText}
        >
          Rate Limiting
        </Text>
      </Flex>
    </Flex>
  );
}
