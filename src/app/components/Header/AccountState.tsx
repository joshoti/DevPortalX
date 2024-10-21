import { ProfilePicture } from "./ProfilePicture";
import { GetStartedButton } from "./GetStartedButton";
import { useAuth } from "../../hooks/useAuth";

export function AccountState() {
  const authContext = useAuth();
  return (
    <>
      {authContext?.isAuthenticated() ? (
        <ProfilePicture />
      ) : (
        <GetStartedButton />
      )}
    </>
  );
}
