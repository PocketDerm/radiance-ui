import * as React from 'react';

function SvgCombinationGlyph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.277 30.325c1.349 1.114 3.156 1.723 5.054 1.723 1.887 0 3.671-.61 5.032-1.688 3.763-3.048 4.357-7.995 1.441-12.052-.869-1.219-1.727-2.286-2.481-3.224-1.876-2.333-3.226-4.02-3.271-5.99V9h-1.43c0 2.114-1.419 3.868-3.579 6.536l-.023.03a86.458 86.458 0 00-2.15 2.719c-2.95 3.892-2.356 8.957 1.407 12.04zm1.83-13.822c1.383-1.712 2.538-3.142 3.224-4.584.622 1.262 1.596 2.493 2.705 3.894l.166.21c.743.914 1.578 1.969 2.436 3.153 2.47 3.435 2.001 7.468-1.178 10.035-1.098.891-2.573 1.384-4.14 1.384-1.578 0-3.054-.504-4.163-1.407-3.168-2.603-3.648-6.718-1.166-10 .71-.941 1.399-1.796 2.027-2.576l.088-.109zm17.046 9.81l9.16-3.08.446 1.392-9.16 3.081-.446-1.392zm-2.923 5.659l-.92 1.121 4.561 3.931.92-1.122-4.561-3.93zm7.561 1.194l4.451-2.852.758 1.242-4.45 2.853-.759-1.243zm-13.137 1.739l-4.45 2.852L17.96 39l4.451-2.853-.758-1.242zm6.45-15.228l2.182-4.919 1.301.607-2.183 4.92-1.3-.608z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgCombinationGlyph;
