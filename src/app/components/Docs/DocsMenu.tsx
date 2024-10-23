import {
  Button,
  Group,
  Text,
  Flex,
  Transition,
  Title,
  Paper,
  Tabs,
} from "@mantine/core";
import classes from "./Docs.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export function DocsMenu() {
  const [activeTab, setActiveTab] = useState("overview");

  const styleActiveTab = (value: string) => {
    if (value !== activeTab) return `${classes.menuText}`;
    return `${classes.menuText} ${classes.focus}`;
  };
  const useCaseTabStyle = { height: "50px" };

  return (
    <Flex
      w={350}
      m={20}
      h={"100%"}
      direction={"column"}
      // className={classes.useCaseContainer}
    >
      {/* Menu */}
      <Tabs
        color="rgb(220, 220, 220)"
        radius={10}
        orientation="vertical"
        variant="pills"
        defaultValue="overview"
      >
        <Tabs.List w={"100%"}>
          {/* 1 */}
          <Tabs.Tab
            onFocus={() => setActiveTab("overview")}
            style={useCaseTabStyle}
            value="overview"
            className={`${classes.menuText} ${classes.tabs}`}
          >
            <Link to="/docs/overview" className={styleActiveTab("overview")}>
              Overview
            </Link>
          </Tabs.Tab>
          {/* 2 */}
          <Tabs.Tab
            onFocus={() => setActiveTab("login")}
            style={useCaseTabStyle}
            value="login"
            className={`${classes.menuText} ${classes.tabs}`}
          >
            <Link to="/docs/login-api" className={styleActiveTab("login")}>
              Login SSO
            </Link>
          </Tabs.Tab>
          <Tabs.Tab
            // onClick={scrollToAnalytics}
            style={useCaseTabStyle}
            value="webhooks"
            className={`${classes.menuText} ${classes.tabs}`}
          >
            Webhooks
          </Tabs.Tab>
          <Tabs.Tab
            style={useCaseTabStyle}
            value="analytics"
            className={`${classes.menuText} ${classes.tabs}`}
          >
            Real-time Analytics
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </Flex>
  );
}
