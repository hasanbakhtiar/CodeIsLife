type UserTypes = {
  info: string;
  messageCount: number;
  isLoggedIn: boolean;
};

const User = (props: UserTypes) => {
  return (
    <div>
      {props.isLoggedIn
        ? `Welcome ${props.info}! You have ${props.messageCount} messages.`
        : "Welcome Guest!"}
    </div>
  );
};

export default User;
