import React, { forwardRef } from 'react';
import Link from 'next/link'

const CustomRouterLink = forwardRef((props, ref) => (
  <div
    ref={ref}
    style={{ flexGrow: 1 }}
  >
  </div>
));

export default CustomRouterLink