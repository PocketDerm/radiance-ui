import * as React from 'react';

function SvgMinusIconSecondary(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.25 8.5H.75C.34 8.5 0 8.16 0 7.75S.34 7 .75 7h14.5c.41 0 .75.34.75.75s-.34.75-.75.75z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMinusIconSecondary;
