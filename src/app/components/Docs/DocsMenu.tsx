import { Flex, Tabs } from "@mantine/core";
import classes from "./Docs.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export function DocsMenu() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const location = useLocation();
  /**
   * Sets active tab. Useful for when the page is reached from
   * the browser's URL instead of being clicked in the docs page.
   */
  const styleActiveTab = () => {
    const currentPath = location.pathname.substring("/docs/".length);
    if (activeTab !== currentPath) {
      setActiveTab(currentPath);
    }
  };
  styleActiveTab();

  const setActiveTabAndNavigate = (value: string) => {
    navigate(`/docs/${value}`, { replace: true });
  };

  /**
   * Returns the style for active tab/menu to one tab and regular style for the others
   * @param tabName is the name of a tab/menu
   * @returns css class(es)
   */
  const getTabStyle = (tabName: string) => {
    if (tabName !== activeTab) return `${classes.menuText} ${classes.tabs}`;
    return `${classes.menuText} ${classes.tabs} ${classes.focus}`;
  };

  const useCaseMenuHeight = 50;

  return (
    <Flex w={320} direction={"column"}>
      <Tabs
        color="rgb(220, 220, 220)"
        radius={10}
        orientation="vertical"
        variant="pills"
        defaultValue={activeTab}
      >
        <Tabs.List w={"100%"}>
          {/* 1 */}
          <Tabs.Tab
            onFocus={() => setActiveTabAndNavigate("overview")}
            h={useCaseMenuHeight}
            value="overview"
            className={getTabStyle("overview")}
          >
            Overview
          </Tabs.Tab>

          {/* 2 */}
          <Tabs.Tab
            onFocus={() => setActiveTabAndNavigate("login")}
            h={useCaseMenuHeight}
            value="login"
            className={getTabStyle("login")}
          >
            Login SSO
          </Tabs.Tab>

          {/* 3 */}
          <Tabs.Tab
            onFocus={() => setActiveTabAndNavigate("webhooks")}
            h={useCaseMenuHeight}
            value="webhooks"
            className={getTabStyle("webhooks")}
          >
            Webhooks
          </Tabs.Tab>

          {/* 4 */}
          <Tabs.Tab
            onFocus={() => setActiveTabAndNavigate("analytics")}
            h={useCaseMenuHeight}
            value="analytics"
            className={getTabStyle("analytics")}
          >
            Real-time Analytics
          </Tabs.Tab>

          {/* 5 */}
          <Tabs.Tab
            onFocus={() => setActiveTabAndNavigate("error-codes")}
            h={useCaseMenuHeight}
            value="error-codes"
            className={getTabStyle("error-codes")}
          >
            Error Codes
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </Flex>
  );
}
