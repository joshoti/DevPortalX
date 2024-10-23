import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { DocsMenu } from "../components/Docs/DocsMenu";
import { DocsLogin } from "../components/Docs/DocsLogin";
import { Flex } from "@mantine/core";

export function DocsTest() {
  return (
    <>
      <Header />
      <Flex>
        <DocsMenu />
        <DocsLogin />
      </Flex>
      <Footer />
    </>
  );
}
