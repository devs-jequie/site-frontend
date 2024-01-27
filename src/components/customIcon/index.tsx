"use client";
import * as icons from "react-icons/bs";

export const Icon = ({ iconName, ...props }) => {
  const BootstrapIcon = icons[`Bs${iconName}`];

  return BootstrapIcon ? <BootstrapIcon {...props} /> : null;
};
