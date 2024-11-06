import {
  IconCopyright,
  IconBrandGithubFilled,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { Group, Text, Anchor, Image, Flex, Box } from "@mantine/core";
import IgLogo from "../../assets/images/igLogo.jpg";
import classes from "./Footer.module.css";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const iconSize = 45;
  const siteNameSize = 25;
  const navigate = useNavigate();

  function goToPage(link: string) {
    navigate(link, { replace: true });
  }

  return (
    <Box className={classes.container}>
      {/* <Divider pb={20} my={0} /> */}
      <Group gap={4} className={classes.siteName}>
        <IconCopyright size={siteNameSize} color="gray" />
        <Text
          fw={400}
          fz={siteNameSize}
          style={{ color: "gray", margin: 0, padding: 0 }}
        >
          2024
        </Text>
        <Text className={classes.title}>DevPortalX</Text>
      </Group>

      <Flex justify="space-between" className={classes.footerContent}>
        {/* Products */}
        <Flex direction="column">
          <Text className={classes.subtitle}>Products</Text>
          <Text
            className={classes.clickable}
            onClick={() => goToPage("/docs/login")}
          >
            OAuth 2.0 API
          </Text>
          <Text
            className={classes.clickable}
            onClick={() => goToPage("/docs/webhooks")}
          >
            Webhooks API
          </Text>
          <Text
            className={classes.clickable}
            onClick={() => goToPage("/docs/analytics")}
          >
            Analytics API
          </Text>
        </Flex>

        {/* Support */}
        <Flex direction="column">
          <Text className={classes.subtitle}>Support</Text>
          <Text
            className={classes.clickable}
            onClick={() => goToPage("/support")}
          >
            Get Support
          </Text>
          <Text className={classes.text}>Contribute</Text>
        </Flex>

        {/* Company */}
        <Flex direction="column">
          <Text className={classes.subtitle}>Company</Text>
          <Text className={classes.text}>About Us</Text>
          <Text className={classes.text}>Events</Text>
          <Text className={classes.text}>Contact</Text>
        </Flex>

        {/* Contact */}
        <Flex direction="column" gap={10}>
          <Anchor
            href="https://www.linkedin.com/in/joshua-oti/"
            target="_blank"
          >
            <IconBrandLinkedin size={iconSize} />
          </Anchor>
          <Anchor href="https://github.com/joshoti" target="_blank">
            <IconBrandGithubFilled color="white" size={iconSize} />
          </Anchor>
          <Anchor href="https://instagram.com/josh_ohtee" target="_blank">
            <Image src={IgLogo} w={iconSize} h={iconSize} />
          </Anchor>
        </Flex>
      </Flex>
    </Box>
  );
};
