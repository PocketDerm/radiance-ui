import * as React from 'react';

function SvgAcneThreeGlyph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 19.031a2.02 2.02 0 01-2.02-2.02c0-1.116.904-2.011 2.02-2.011s2.02.904 2.02 2.01c0 1.107-.913 2.021-2.02 2.021zm0-2.828a.815.815 0 00-.818.808.817.817 0 101.636 0 .815.815 0 00-.818-.808zm13.98 16.616a2.012 2.012 0 01-2.011-2.021 2.01 2.01 0 012.01-2.01c1.107 0 2.021.904 2.021 2.01 0 1.107-.914 2.02-2.02 2.02zm0-2.83a.807.807 0 00-.809.809c0 .452.366.818.809.818a.823.823 0 00.817-.818.828.828 0 00-.817-.808zM8 30.799a2.02 2.02 0 002.02 2.02c1.107 0 2.011-.913 2.011-2.02a2.01 2.01 0 00-2.01-2.01c-1.117 0-2.021.894-2.021 2.01zm1.203 0c0-.443.365-.808.817-.808.453 0 .809.365.809.808a.809.809 0 01-.809.818.817.817 0 01-.817-.818z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgAcneThreeGlyph;
