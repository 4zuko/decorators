import React from "react";

export type UserProps = {
  name: string;
};

export const User: React.FC<UserProps> = ({ name }) => {
  return <p>Hello, {name}!</p>;
};
