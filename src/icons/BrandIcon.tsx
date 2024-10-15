import React from "react";

const BrandIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      viewBox="0 0 32 33"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.405 19.276a3.535 3.535 0 1 1 7.07 0 3.535 3.535 0 0 1-7.07 0Zm3.535-2.035a2.035 2.035 0 1 0 0 4.07 2.035 2.035 0 0 0 0-4.07Z"
      ></path>
      <path d="M10.716 19.276a2.035 2.035 0 0 1 3.249-1.633.75.75 0 0 0 .896-1.203 3.535 3.535 0 1 0-.022 5.687.75.75 0 1 0-.887-1.21 2.035 2.035 0 0 1-3.236-1.642Z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m6.151 12.286 7.02-5.89a5.292 5.292 0 0 1 7.456.652l.272.324a5.29 5.29 0 0 1 4.131 3.416l.449 1.231a5.289 5.289 0 0 1 2.534 4.517v5.416a5.292 5.292 0 0 1-5.292 5.292H9.305a5.292 5.292 0 0 1-5.292-5.292v-5.416c0-1.74.84-3.286 2.138-4.25Zm4.666-1.957 3.319-2.784a3.794 3.794 0 0 1 4.743-.107 5.244 5.244 0 0 1-.631.187L7.599 11.5l3.218-1.17Zm12.812.993-.008-.021a3.792 3.792 0 0 0-4.86-2.267l-6.073 2.21h10.033c.31 0 .613.027.908.078ZM9.305 12.744H22.72a3.792 3.792 0 0 1 3.792 3.792v5.416a3.792 3.792 0 0 1-3.792 3.792H9.305a3.792 3.792 0 0 1-3.792-3.792v-5.416a3.792 3.792 0 0 1 3.792-3.792Z"
      ></path>
    </svg>
  );
};

export default BrandIcon;