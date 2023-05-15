import { FC, PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren {
  show?: boolean;
  keepMounted?: boolean;
}
const Layout: FC<LayoutProps> = ({ children, keepMounted, show = true }) => {
  return (
    <>
      {keepMounted ? (
        <div style={{ display: show ? "block" : "none" }}>{children}</div>
      ) : (
        show && children
      )}
    </>
  );
};

export default Layout;
