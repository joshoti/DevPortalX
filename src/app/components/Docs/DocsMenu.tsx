import { Flex, Tabs } from "@mantine/core";
import classes from "./Docs.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function DocsMenu() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const setActiveTabAndNavigate = (value: string) => {
    setActiveTab(value);
    navigate(`/docs/${value}`, { replace: true });
  };

  const styleActiveTab = (value: string) => {
    if (value !== activeTab) return `${classes.menuText} ${classes.tabs}`;
    return `${classes.menuText} ${classes.tabs} ${classes.focus}`;
  };
  const useCaseTabStyle = { height: "50px" };

  return (
    <Flex w={350} direction={"column"}>
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
            onFocus={() => setActiveTabAndNavigate("overview")}
            style={useCaseTabStyle}
            value="overview"
            className={styleActiveTab("overview")}
          >
            Overview
          </Tabs.Tab>

          {/* 2 */}
          <Tabs.Tab
            onFocus={() => setActiveTabAndNavigate("login")}
            style={useCaseTabStyle}
            value="login"
            className={styleActiveTab("login")}
          >
            Login SSO
          </Tabs.Tab>

          {/* 3 */}
          <Tabs.Tab
            onFocus={() => setActiveTabAndNavigate("webhooks")}
            style={useCaseTabStyle}
            value="webhooks"
            className={styleActiveTab("webhooks")}
          >
            Webhooks
          </Tabs.Tab>

          {/* 4 */}
          <Tabs.Tab
            onFocus={() => setActiveTabAndNavigate("analytics")}
            style={useCaseTabStyle}
            value="analytics"
            className={styleActiveTab("analytics")}
          >
            Real-time Analytics
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </Flex>
  );
}
