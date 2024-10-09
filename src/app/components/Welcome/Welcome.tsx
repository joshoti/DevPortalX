import {
  Anchor,
  Text,
  Title,
  Space,
  Button,
  Affix,
  Transition,
  rem,
} from "@mantine/core";
import classes from "./Welcome.module.css";
import { IconArrowUp } from "@tabler/icons-react";
import { useWindowScroll } from "@mantine/hooks";

export function Welcome() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{" "}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: "pink", to: "yellow" }}
        >
          Mantine
        </Text>
      </Title>

      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This starter Vite project includes a minimal setup, if you want to learn
        more on Mantine + Vite integration follow{" "}
        <Anchor href="https://mantine.dev/guides/vite/" size="lg">
          this guide
        </Anchor>
        . To get started edit pages/Home.page.tsx file.
      </Text>
      <Space h={700} />

      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              radius={"md"}
              variant="gradient"
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
              gradient={{ from: "indigo", to: "violet", deg: 90 }}
              leftSection={
                <IconArrowUp
                  stroke={4}
                  style={{ width: rem(16), height: rem(16) }}
                />
              }
            >
              <Text className={`${classes.text}`}>Scroll to top</Text>
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}
