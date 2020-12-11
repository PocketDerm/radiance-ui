import * as React from 'react';

function SvgCircleSolidIconSecondary(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={8} cy={8} r={4} fill="currentColor" />
    </svg>
  );
}

export default SvgCircleSolidIconSecondary;
