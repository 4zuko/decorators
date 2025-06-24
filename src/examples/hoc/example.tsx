import { User } from "./User";
import type { UserProps } from "./User";
import withExtraInfo from "./withExtraInfo";

const EnhancedUser = withExtraInfo(User) as React.FC<UserProps>;

export default function App() {
  return (
    <div>
      <EnhancedUser name="Alice" />
      <EnhancedUser name="Bob" />
    </div>
  );
}
