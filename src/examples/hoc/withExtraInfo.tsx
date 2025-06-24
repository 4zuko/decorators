import React, { JSX } from "react";

// https://www.patterns.dev/react/hoc-pattern/
// withStyle, withLoader, withLogging, withTracking, withProvider
export default function withExtraInfo<P extends JSX.IntrinsicAttributes>(
  WrappedComponent: React.ComponentType<React.PropsWithChildren<P>>
): React.FC<P> {
  const EnhancedComponent: React.FC<P> = (props) => {
    return (
      <div style={{ border: "1px solid gray", padding: "10px" }}>
        <p>This is extra info!</p>
        <WrappedComponent {...props} />
      </div>
    );
  };

  return EnhancedComponent;
}
