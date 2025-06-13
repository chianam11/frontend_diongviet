// components/IconWrapper.tsx
import React from "react";
import clsx from "clsx";

type IconWrapperProps = {
  children: React.ReactNode;
  className?: string; // để override nếu muốn
};

export default function IconWrapper({ children, className }: IconWrapperProps) {
  return (
    <div className={clsx("w-6 h-6", className)}>
      {children}
    </div>
  );
}
