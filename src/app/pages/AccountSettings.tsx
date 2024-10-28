import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { AccountSettingsForm } from "../components/AccountSettings/AccountSettings";

export function AccountSettings() {
  return (
    <>
      <Header />
      <AccountSettingsForm />
      <Footer />
    </>
  );
}
