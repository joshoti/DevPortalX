import {
  Button,
  Group,
  TextInput,
  PasswordInput,
  Image,
  Text,
  Flex,
  ThemeIcon,
  Modal,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import loginArtFlowers from "../../assets/images/hands-no-bg.png";
import classes from "./Login.module.css";
import {
  IconAt,
  IconLockPassword,
  IconAlertTriangle,
} from "@tabler/icons-react";
import { GetSupport } from "./GetSupport";
import { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api/axios-api";
import { useDisclosure } from "@mantine/hooks";

export function RegisterForm() {
  const [displayAlert, setDisplayAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length >= 6 ? null : "Password must be at least 6 characters",
    },
  });

  const textInputStyle = { width: 400 };
  const inputFieldIconStyle = { size: 18, stroke: 1.5 };
  type SignUpT = {
    email: string;
    password: string;
    confirmPassword: string;
  };

  const handleSubmit = (form: SignUpT) => {
    if (form.password !== form.confirmPassword) {
      setAlertMessage("Passwords don't match");
      setDisplayAlert(true);
      return;
    }
    api
      .post("/api/users/register", {
        email: form.email,
        password: form.password,
      })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => {
        const message =
          error.response?.data.message || "Unable to create new account";

        setAlertMessage(message);
        setDisplayAlert(true);
      });
  };

  return (
    <Group gap={0} className={classes.pageContainer}>
      <Group
        h={"100%"}
        flex={0.75}
        className={classes.loginDecorationContainer}
        justify="center"
      >
        <Image fit="contain" src={loginArtFlowers} maw={"100%"} w={"100%"} />
      </Group>
      <Flex align={"center"} justify={"center"} h={"100%"} flex={1}>
        <Flex direction="column">
          <Text className={classes.title}>Sign Up</Text>
          <Text mb={30} c={"dimmed"} className={classes.subtitle}>
            Create a DevPortalX account
          </Text>
          <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
            <TextInput
              leftSection={
                <IconAt
                  stroke={inputFieldIconStyle.stroke}
                  size={inputFieldIconStyle.size}
                />
              }
              style={textInputStyle}
              withAsterisk
              mb={15}
              size="md"
              label="Email"
              placeholder="your@email.com"
              key={form.key("Email")}
              {...form.getInputProps("email")}
            />
            <PasswordInput
              leftSection={
                <IconLockPassword
                  stroke={inputFieldIconStyle.stroke}
                  size={inputFieldIconStyle.size}
                />
              }
              style={textInputStyle}
              withAsterisk
              mb={15}
              size="md"
              label="Password"
              placeholder="Password"
              key={form.key("password")}
              {...form.getInputProps("password")}
            />
            <PasswordInput
              leftSection={
                <IconLockPassword
                  stroke={inputFieldIconStyle.stroke}
                  size={inputFieldIconStyle.size}
                />
              }
              style={textInputStyle}
              withAsterisk
              size="md"
              label="Confirm Password"
              placeholder="Confirm password"
              key={form.key("confirmPassword")}
              {...form.getInputProps("confirmPassword")}
            />

            <Group mt={3} gap={0}>
              <ThemeIcon
                className={`${classes.errorMessage} ${classes.caution}`}
                style={{
                  display: displayAlert ? "flex" : "none",
                }}
              >
                <IconAlertTriangle size={20} />
              </ThemeIcon>
              <Text
                style={{
                  display: displayAlert ? "block" : "none",
                }}
                className={classes.errorMessage}
                children={alertMessage}
              ></Text>
            </Group>

            <Group mt="lg" mb="md">
              <Button color="#5345c8" type="submit">
                Register
              </Button>
            </Group>
          </form>
          <Text span mb={5} c={"dimmed"} className={classes.text}>
            Have an account?{" "}
            <Link className={classes.textLink} to="/login">
              <Text span className={classes.textLink}>
                Log in
              </Text>
            </Link>
          </Text>
          <Text span c={"dimmed"} className={classes.text}>
            Can't create an account?{" "}
            <Link className={classes.textLink} to="#">
              <Text onClick={open} span className={classes.textLink}>
                Get support
              </Text>
            </Link>
          </Text>
        </Flex>
        <Modal opened={opened} onClose={close} title="Support" centered>
          <GetSupport />
        </Modal>
      </Flex>
    </Group>
  );
}
