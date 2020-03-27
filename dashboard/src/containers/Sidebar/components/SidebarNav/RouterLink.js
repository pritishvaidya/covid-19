import React, { forwardRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

const CustomRouterLink = forwardRef((props, ref) => {
  const router = useRouter();
  const { to, children, className, activeClassName, ...rest } = props;
  const isCurrentPath =
    router.pathname === to || (to !== "/" && router.pathname.includes(to));
  return (
    <div ref={ref} style={{ flexGrow: 1 }}>
      <Link href={to}>
        <div
          className={clsx(className, isCurrentPath && activeClassName)}
          {...rest}
        >
          {children}
        </div>
      </Link>
    </div>
  );
});

export default CustomRouterLink;
