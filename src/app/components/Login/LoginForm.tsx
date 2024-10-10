import { Box, Button, Group, TextInput } from "@mantine/core";
import { LoginDecoration } from "./LoginDecoration";
import { useForm } from "@mantine/form";

export function LoginForm() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <Group>
      <LoginDecoration />
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          key={form.key("email")}
          {...form.getInputProps("email")}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Log in</Button>
        </Group>
      </form>
    </Group>
  );
}
