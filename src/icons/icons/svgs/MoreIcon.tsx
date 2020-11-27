import * as React from 'react';

function SvgMoreIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.16 7.09c.5 0 .91.41.91.91s-.41.91-.91.91-.91-.41-.91-.91.41-.91.91-.91zm0-1.25C6.97 5.84 6 6.81 6 8c0 1.19.97 2.16 2.16 2.16 1.19 0 2.16-.97 2.16-2.16 0-1.19-.97-2.16-2.16-2.16zM8.16 12.69c.5 0 .91.41.91.91s-.41.91-.91.91-.91-.41-.91-.91.41-.91.91-.91zm0-1.25c-1.19 0-2.16.96-2.16 2.15s.97 2.16 2.16 2.16c1.19 0 2.16-.97 2.16-2.16 0-1.19-.97-2.15-2.16-2.15zM8.16 1.5c.5 0 .91.41.91.91s-.41.91-.91.91-.91-.41-.91-.91.41-.91.91-.91zm0-1.25C6.97.25 6 1.22 6 2.41c0 1.19.97 2.16 2.16 2.16 1.19 0 2.16-.97 2.16-2.16 0-1.19-.97-2.16-2.16-2.16z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMoreIcon;