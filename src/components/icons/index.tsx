import { CSS, css as styledCss } from "stitches.config";
import React from "react";

export const Hamburger = ({ css = {} }: { css?: CSS }) => {
  return (
    <svg
      width="25"
      height="18"
      viewBox="0 0 25 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styledCss(css)()}
    >
      <path
        d="M18.9473 16.8947L-7.05719e-05 16.8947"
        stroke="white"
        strokeWidth="1.25"
      />
      <path
        d="M15.7891 8.99999L-0.000384808 8.99999"
        stroke="white"
        strokeWidth="1.25"
      />
      <path
        d="M18.9473 1.10527L-7.05719e-05 1.10527"
        stroke="white"
        strokeWidth="1.25"
      />
      <path
        d="M20.2109 13.1052L24.0004 9.31578L20.2109 5.52632"
        stroke="white"
        strokeWidth="1.25"
      />
    </svg>
  );
};

export const SearchIcon = ({ css = {} }: { css?: CSS }) => {
  return (
    <svg
      width="21"
      height="22"
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styledCss(css)()}
    >
      <path
        d="M20 20.5L15.514 16.006M18 10C18 12.2543 17.1045 14.4163 15.5104 16.0104C13.9163 17.6045 11.7543 18.5 9.5 18.5C7.24566 18.5 5.08365 17.6045 3.48959 16.0104C1.89553 14.4163 1 12.2543 1 10C1 7.74566 1.89553 5.58365 3.48959 3.98959C5.08365 2.39553 7.24566 1.5 9.5 1.5C11.7543 1.5 13.9163 2.39553 15.5104 3.98959C17.1045 5.58365 18 7.74566 18 10V10Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const Settings = ({ css = {} }: { css?: CSS }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styledCss(css)()}
    >
      <path
        d="M14.0794 1.5C14.2382 1.50001 14.3929 1.55041 14.5212 1.64394C14.6495 1.73748 14.7448 1.86933 14.7934 2.0205L15.6184 4.584C15.9649 4.7535 16.2964 4.944 16.6129 5.1585L19.2469 4.5915C19.4022 4.55834 19.564 4.57534 19.7091 4.64003C19.8541 4.70473 19.9748 4.81379 20.0539 4.9515L22.1329 8.55C22.2123 8.68763 22.2459 8.84693 22.2289 9.0049C22.212 9.16288 22.1452 9.31139 22.0384 9.429L20.2309 11.424C20.2572 11.8065 20.2572 12.1905 20.2309 12.573L22.0384 14.571C22.1452 14.6886 22.212 14.8371 22.2289 14.9951C22.2459 15.1531 22.2123 15.3124 22.1329 15.45L20.0539 19.05C19.9746 19.1874 19.8538 19.2962 19.7088 19.3606C19.5638 19.425 19.402 19.4418 19.2469 19.4085L16.6129 18.8415C16.2979 19.0545 15.9649 19.2465 15.6199 19.416L14.7934 21.9795C14.7448 22.1307 14.6495 22.2625 14.5212 22.3561C14.3929 22.4496 14.2382 22.5 14.0794 22.5H9.92141C9.76262 22.5 9.60793 22.4496 9.47962 22.3561C9.35131 22.2625 9.256 22.1307 9.20741 21.9795L8.38391 19.4175C8.03834 19.2485 7.70502 19.0555 7.38641 18.84L4.75391 19.4085C4.5986 19.4417 4.43679 19.4247 4.29176 19.36C4.14673 19.2953 4.02598 19.1862 3.94691 19.0485L1.86791 15.45C1.78852 15.3124 1.75489 15.1531 1.77188 14.9951C1.78886 14.8371 1.85558 14.6886 1.96241 14.571L3.76991 12.573C3.74372 12.1914 3.74372 11.8086 3.76991 11.427L1.96241 9.429C1.85558 9.31139 1.78886 9.16288 1.77188 9.0049C1.75489 8.84693 1.78852 8.68763 1.86791 8.55L3.94691 4.95C4.0262 4.81256 4.14704 4.70381 4.29205 4.63939C4.43706 4.57497 4.59876 4.55821 4.75391 4.5915L7.38641 5.16C7.70441 4.9455 8.03741 4.752 8.38391 4.5825L9.20891 2.0205C9.25734 1.86982 9.3522 1.73832 9.47991 1.64482C9.60762 1.55133 9.76163 1.50064 9.91991 1.5H14.0779H14.0794ZM13.5304 3H10.4704L9.61841 5.6505L9.04391 5.931C8.76148 6.06921 8.48885 6.22657 8.22791 6.402L7.69691 6.762L4.97291 6.174L3.44291 8.826L5.31041 10.893L5.26541 11.529C5.24385 11.8426 5.24385 12.1574 5.26541 12.471L5.31041 13.107L3.43991 15.174L4.97141 17.826L7.69541 17.2395L8.22641 17.598C8.48735 17.7734 8.75998 17.9308 9.04241 18.069L9.61691 18.3495L10.4704 21H13.5334L14.3884 18.348L14.9614 18.069C15.2435 17.9311 15.5157 17.7737 15.7759 17.598L16.3054 17.2395L19.0309 17.826L20.5609 15.174L18.6919 13.107L18.7369 12.471C18.7585 12.1569 18.7585 11.8416 18.7369 11.5275L18.6919 10.8915L20.5624 8.826L19.0309 6.174L16.3054 6.759L15.7759 6.402C15.5157 6.22622 15.2435 6.06884 14.9614 5.931L14.3884 5.652L13.5319 3H13.5304ZM12.0004 7.5C13.1939 7.5 14.3385 7.97411 15.1824 8.81802C16.0263 9.66193 16.5004 10.8065 16.5004 12C16.5004 13.1935 16.0263 14.3381 15.1824 15.182C14.3385 16.0259 13.1939 16.5 12.0004 16.5C10.8069 16.5 9.66234 16.0259 8.81843 15.182C7.97451 14.3381 7.50041 13.1935 7.50041 12C7.50041 10.8065 7.97451 9.66193 8.81843 8.81802C9.66234 7.97411 10.8069 7.5 12.0004 7.5V7.5ZM12.0004 9C11.2048 9 10.4417 9.31607 9.87909 9.87868C9.31648 10.4413 9.00041 11.2044 9.00041 12C9.00041 12.7956 9.31648 13.5587 9.87909 14.1213C10.4417 14.6839 11.2048 15 12.0004 15C12.7961 15 13.5591 14.6839 14.1217 14.1213C14.6843 13.5587 15.0004 12.7956 15.0004 12C15.0004 11.2044 14.6843 10.4413 14.1217 9.87868C13.5591 9.31607 12.7961 9 12.0004 9V9Z"
        fill="white"
      />
    </svg>
  );
};

export const Todo = ({ css = {} }: { css?: CSS }) => {
  return (
    <svg
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styledCss(css)()}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 6.5C11.8011 6.5 11.6103 6.42098 11.4697 6.28033C11.329 6.13968 11.25 5.94891 11.25 5.75V4.25H9.75C9.55109 4.25 9.36032 4.17098 9.21967 4.03033C9.07902 3.88968 9 3.69891 9 3.5C9 3.30109 9.07902 3.11032 9.21967 2.96967C9.36032 2.82902 9.55109 2.75 9.75 2.75H11.25V1.25C11.25 1.05109 11.329 0.860322 11.4697 0.71967C11.6103 0.579018 11.8011 0.5 12 0.5C12.1989 0.5 12.3897 0.579018 12.5303 0.71967C12.671 0.860322 12.75 1.05109 12.75 1.25V2.75H14.25C14.4489 2.75 14.6397 2.82902 14.7803 2.96967C14.921 3.11032 15 3.30109 15 3.5C15 3.69891 14.921 3.88968 14.7803 4.03033C14.6397 4.17098 14.4489 4.25 14.25 4.25H12.75V5.75C12.75 5.94891 12.671 6.13968 12.5303 6.28033C12.3897 6.42098 12.1989 6.5 12 6.5ZM2 14C1.86739 14 1.74021 13.9473 1.64645 13.8536C1.55268 13.7598 1.5 13.6326 1.5 13.5V3.5C1.5 3.36739 1.55268 3.24021 1.64645 3.14645C1.74021 3.05268 1.86739 3 2 3H6.25C6.44891 3 6.63968 2.92098 6.78033 2.78033C6.92098 2.63968 7 2.44891 7 2.25C7 2.05109 6.92098 1.86032 6.78033 1.71967C6.63968 1.57902 6.44891 1.5 6.25 1.5H2C1.46957 1.5 0.960859 1.71071 0.585786 2.08579C0.210714 2.46086 0 2.96957 0 3.5V13.5C0 14.0304 0.210714 14.5391 0.585786 14.9142C0.960859 15.2893 1.46957 15.5 2 15.5H12C12.5304 15.5 13.0391 15.2893 13.4142 14.9142C13.7893 14.5391 14 14.0304 14 13.5V9.25C14 9.05109 13.921 8.86032 13.7803 8.71967C13.6397 8.57902 13.4489 8.5 13.25 8.5C13.0511 8.5 12.8603 8.57902 12.7197 8.71967C12.579 8.86032 12.5 9.05109 12.5 9.25V13.5C12.5 13.6326 12.4473 13.7598 12.3536 13.8536C12.2598 13.9473 12.1326 14 12 14H2Z"
        fill="white"
      />
    </svg>
  );
};

export const More = ({ css = {} }: { css?: CSS }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styledCss(css)()}
    >
      <circle cx="4.5" cy="11.5" r="2.5" fill="white" />
      <circle cx="12.5" cy="11.5" r="2.5" fill="white" />
      <circle cx="20.5" cy="11.5" r="2.5" fill="white" />
    </svg>
  );
};
