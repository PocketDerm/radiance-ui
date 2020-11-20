import * as React from 'react';

function SvgHeartEmoji(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24.24 38l-.371-.25c-.484-.33-11.857-8.205-14.327-12.337C6.6 20.49 8.36 15.777 10.746 13.236c1.832-1.951 4.57-3.042 7.308-2.922 1.595.07 3.746.57 5.825 2.322.607-.43 1.132-.78 1.554-1.031 4.982-3.042 9.675-1.35 12.114 1.67 2.769 3.423 3.232 8.065 1.194 12.098C36.56 29.725 25.094 37.43 24.6 37.76l-.36.24zm-6.598-26.445c-2.244 0-4.446.93-5.938 2.521-2.1 2.232-3.634 6.364-1.04 10.706 2.09 3.503 11.6 10.286 13.596 11.687 2.007-1.37 11.507-8.004 13.339-11.646 2.161-4.303.875-8.395-1.05-10.777-1.935-2.391-5.825-4.192-10.416-1.38-.35.22-.792.51-1.307.86.268.28.535.59.793.92l-1.02.761c-2.243-2.862-4.816-3.562-6.586-3.642-.124 0-.247-.01-.37-.01z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHeartEmoji;