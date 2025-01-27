import React from "react";

const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12.75 11.25V5a.75.75 0 1 0-1.5 0v6.25H5a.75.75 0 1 0 0 1.5h6.25V19a.75.75 0 1 0 1.5 0v-6.25H19a.75.75 0 1 0 0-1.5h-6.25z"
      ></path>
    </svg>
  );
};

export default PlusIcon;
