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
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M15.7891 8.99999L-0.000384808 8.99999"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M18.9473 1.10527L-7.05719e-05 1.10527"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M20.2109 13.1052L24.0004 9.31578L20.2109 5.52632"
        stroke="currentColor"
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
        stroke="currentColor"
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
        fill="currentColor"
      />
    </svg>
  );
};

export const TodoIcon = ({ css = {} }: { css?: CSS }) => {
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
        fill="currentColor"
      />
    </svg>
  );
};

export const MoreIcon = ({ css = {} }: { css?: CSS }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styledCss(css)()}
    >
      <circle cx="4.5" cy="11.5" r="2.5" fill="currentColor" />
      <circle cx="12.5" cy="11.5" r="2.5" fill="currentColor" />
      <circle cx="20.5" cy="11.5" r="2.5" fill="currentColor" />
    </svg>
  );
};

export const RightLayout = ({ css = {} }: { css?: CSS }) => {
  return (
    <svg
      width="97"
      height="48"
      viewBox="0 0 97 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styledCss(css)()}
    >
      <rect width="27" height="48" fill="var(---color,white)" />
      <rect
        x="27.5"
        y="0.5"
        width="69"
        height="47"
        stroke="var(---color,white)"
      />
    </svg>
  );
};

export const LeftLayout = ({ css = {} }: { css?: CSS }) => {
  return (
    <svg
      width="97"
      height="48"
      viewBox="0 0 97 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styledCss(css)()}
    >
      <rect
        x="0.5"
        y="0.5"
        width="69"
        height="47"
        stroke="var(---color,white)"
      />
      <rect x="70" width="27" height="48" fill="var(---color,white)" />
    </svg>
  );
};

export const CancelIcon = ({ css = {} }: { css?: CSS }) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styledCss(css)()}
    >
      <path
        d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const HeartIcon = ({ css = {} }: { css?: CSS }) => {
  return (
    <svg
      width="10"
      height="9"
      viewBox="0 0 10 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styledCss(css)()}
    >
      <path
        d="M3.12467 0.666627C1.85905 0.666627 0.833008 1.69267 0.833008 2.95829C0.833008 5.24996 3.54134 7.33329 4.99967 7.81788C6.45801 7.33329 9.16634 5.24996 9.16634 2.95829C9.16634 1.69267 8.1403 0.666627 6.87467 0.666627C6.09967 0.666627 5.41426 1.05142 4.99967 1.64038C4.78836 1.33938 4.50762 1.09373 4.18124 0.924228C3.85486 0.754727 3.49244 0.666367 3.12467 0.666627Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SkipIcon = ({ css = {} }: { css?: CSS }) => {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styledCss(css)()}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7694 1.1273V2.49312C9.5733 1.21384 7.82096 0.400024 5.84712 0.400024C3.32362 0.400024 1.1619 1.73021 0.0617674 3.6633C-0.136766 4.01239 0.169237 4.40002 0.609784 4.40002C0.863283 4.40002 1.08971 4.26621 1.20784 4.06766C2.13078 2.52002 3.8782 1.49093 5.84712 1.49093C7.38206 1.49093 8.78409 2.11639 9.76363 3.1273H8.10317C7.93999 3.1273 7.78349 3.18476 7.6681 3.28706C7.55271 3.38935 7.48789 3.52809 7.48789 3.67275C7.48789 3.81742 7.55271 3.95615 7.6681 4.05845C7.78349 4.16074 7.93999 4.21821 8.10317 4.21821H11.3847C11.7244 4.21821 12 3.97384 12 3.67275V1.1273C12 0.982634 11.9352 0.843895 11.8198 0.741602C11.7044 0.63931 11.5479 0.581843 11.3847 0.581843C11.2215 0.581843 11.065 0.63931 10.9496 0.741602C10.8342 0.843895 10.7694 0.982634 10.7694 1.1273ZM6 7.60002C6.66274 7.60002 7.2 7.06277 7.2 6.40002C7.2 5.73728 6.66274 5.20002 6 5.20002C5.33726 5.20002 4.8 5.73728 4.8 6.40002C4.8 7.06277 5.33726 7.60002 6 7.60002Z"
        fill="currentColor"
      />
    </svg>
  );
};
export const TwitterOutlineIcon = ({ css = {} }: { css?: CSS }) => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styledCss(css)()}
    >
      <path
        d="M9.58366 1.25419C9.58366 1.25419 8.74283 1.75086 8.27533 1.89169C8.02438 1.60315 7.69088 1.39864 7.31992 1.30583C6.94896 1.21301 6.55845 1.23635 6.20119 1.37271C5.84394 1.50907 5.53718 1.75186 5.3224 2.06824C5.10763 2.38462 4.9952 2.75933 5.00033 3.14169V3.55836C4.26809 3.57734 3.54252 3.41495 2.88825 3.08563C2.23397 2.75631 1.67129 2.27029 1.25033 1.67086C1.25033 1.67086 -0.416341 5.42086 3.33366 7.08752C2.47555 7.67001 1.45331 7.96208 0.416992 7.92086C4.16699 10.0042 8.75033 7.92086 8.75033 3.12919C8.75033 3.01336 8.73866 2.89752 8.71699 2.78336C9.14199 2.36419 9.58366 1.25419 9.58366 1.25419Z"
        stroke="currentColor"
        strokeWidth="1.03125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const RepeatIcon = ({ css = {} }: { css?: CSS }) => {
  return (
    <svg
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styledCss(css)()}
    >
      <path
        d="M10.4476 2.70827H3.44763L4.20596 2.00952C4.3158 1.90752 4.37751 1.76918 4.37751 1.62494C4.37751 1.48069 4.3158 1.34235 4.20596 1.24035C4.09612 1.13836 3.94714 1.08105 3.79179 1.08105C3.63645 1.08105 3.48747 1.13836 3.37763 1.24035L1.62763 2.86535C1.57295 2.91571 1.52956 2.97562 1.49994 3.04163C1.47033 3.10763 1.45508 3.17843 1.45508 3.24994C1.45508 3.32144 1.47033 3.39224 1.49994 3.45825C1.52956 3.52426 1.57295 3.58417 1.62763 3.63452L3.37763 5.25952C3.43186 5.31029 3.49637 5.35059 3.56746 5.37809C3.63854 5.40559 3.71479 5.41974 3.79179 5.41974C3.8688 5.41974 3.94505 5.40559 4.01613 5.37809C4.08721 5.35059 4.15173 5.31029 4.20596 5.25952C4.26064 5.20917 4.30403 5.14926 4.33365 5.08325C4.36326 5.01724 4.37851 4.94644 4.37851 4.87494C4.37851 4.80343 4.36326 4.73263 4.33365 4.66663C4.30403 4.60062 4.26064 4.54071 4.20596 4.49035L3.44763 3.7916H10.4476C10.5671 3.78945 10.6859 3.80918 10.7972 3.84967C10.9085 3.89015 11.0101 3.9506 11.0963 4.02756C11.1824 4.10452 11.2514 4.19649 11.2992 4.2982C11.3471 4.39991 11.3729 4.50938 11.3751 4.62035V5.95827C11.3751 6.10193 11.4366 6.2397 11.546 6.34129C11.6554 6.44287 11.8038 6.49994 11.9585 6.49994C12.1132 6.49994 12.2615 6.44287 12.3709 6.34129C12.4803 6.2397 12.5418 6.10193 12.5418 5.95827V4.62035C12.5395 4.36712 12.4835 4.11678 12.377 3.88364C12.2706 3.6505 12.1157 3.43911 11.9212 3.26156C11.7267 3.084 11.4965 2.94375 11.2437 2.84882C10.9908 2.75389 10.7203 2.70613 10.4476 2.70827Z"
        fill="currentColor"
      />
      <path
        d="M10.6231 7.74042C10.5133 7.63842 10.3643 7.58112 10.209 7.58112C10.0536 7.58112 9.90466 7.63842 9.79482 7.74042C9.68497 7.84241 9.62326 7.98075 9.62326 8.125C9.62326 8.26925 9.68497 8.40759 9.79482 8.50958L10.5532 9.20833H3.55315C3.43364 9.21049 3.31485 9.19076 3.20355 9.15027C3.09226 9.10979 2.99064 9.04934 2.90451 8.97238C2.81838 8.89542 2.74942 8.80345 2.70157 8.70174C2.65373 8.60003 2.62793 8.49056 2.62565 8.37958V7.04167C2.62565 6.89801 2.56419 6.76023 2.4548 6.65865C2.3454 6.55707 2.19703 6.5 2.04232 6.5C1.88761 6.5 1.73923 6.55707 1.62984 6.65865C1.52044 6.76023 1.45898 6.89801 1.45898 7.04167V8.37958C1.46127 8.63282 1.51726 8.88315 1.62374 9.1163C1.73022 9.34944 1.88512 9.56083 2.07958 9.73838C2.27404 9.91594 2.50427 10.0562 2.7571 10.1511C3.00994 10.2461 3.28044 10.2938 3.55315 10.2917H10.5532L9.79482 10.9904C9.74014 11.0408 9.69675 11.1007 9.66713 11.1667C9.63752 11.2327 9.62227 11.3035 9.62227 11.375C9.62227 11.4465 9.63752 11.5173 9.66713 11.5833C9.69675 11.6493 9.74014 11.7092 9.79482 11.7596C9.84905 11.8104 9.91356 11.8507 9.98465 11.8781C10.0557 11.9056 10.132 11.9198 10.209 11.9198C10.286 11.9198 10.3622 11.9056 10.4333 11.8781C10.5044 11.8507 10.5689 11.8104 10.6231 11.7596L12.3731 10.1346C12.4278 10.0842 12.4712 10.0243 12.5008 9.95831C12.5305 9.89231 12.5457 9.82151 12.5457 9.75C12.5457 9.67849 12.5305 9.60769 12.5008 9.54169C12.4712 9.47568 12.4278 9.41577 12.3731 9.36542L10.6231 7.74042Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const AddIcon = ({ css = {} }: { css?: CSS }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styledCss(css)()}
    >
      <g clipPath="url(#clip0_424_1414)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.0498 3.19995C8.18788 3.19995 8.2998 3.28949 8.2998 3.39995V12.6C8.2998 12.7104 8.18788 12.8 8.0498 12.8C7.91173 12.8 7.7998 12.7104 7.7998 12.6V3.39995C7.7998 3.28949 7.91173 3.19995 8.0498 3.19995Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.2002 8.05005C3.2002 7.91198 3.28974 7.80005 3.4002 7.80005H12.6002C12.7107 7.80005 12.8002 7.91198 12.8002 8.05005C12.8002 8.18812 12.7107 8.30005 12.6002 8.30005H3.4002C3.28974 8.30005 3.2002 8.18812 3.2002 8.05005Z"
          fill="currentColor"
        />
      </g>
      <rect
        x="0.25"
        y="0.25"
        width="15.5"
        height="15.5"
        rx="3.75"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      <defs>
        <clipPath id="clip0_424_1414">
          <rect
            width="9.6"
            height="9.6"
            fill="currentColor"
            transform="translate(3.2002 3.19995)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const CheckIcon = ({ css = {} }: { css?: CSS }) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styledCss(css)()}
    >
      <path
        d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};
export function Info({ css = {} }: { css?: CSS }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={styledCss(css)()}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      />
    </svg>
  );
}

export function DownloadIcon({ css = {} }: { css?: CSS }) {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styledCss(css)()}
    >
      <path
        d="M4.24968 6.06197C4.18023 6.06197 4.11513 6.05121 4.05436 6.02968C3.9936 6.00815 3.93718 5.97117 3.88509 5.91874L2.01009 4.04374C1.91461 3.94826 1.86686 3.82673 1.86686 3.67916C1.86686 3.53159 1.91461 3.41006 2.01009 3.31458C2.10558 3.21909 2.22936 3.16926 2.38145 3.1651C2.53353 3.16093 2.65714 3.20642 2.75228 3.30156L3.72884 4.27812V0.55416C3.72884 0.406591 3.77884 0.282806 3.87884 0.182806C3.97884 0.0828063 4.10245 0.0329798 4.24968 0.033327C4.39724 0.033327 4.52103 0.083327 4.62103 0.183327C4.72103 0.283327 4.77086 0.406938 4.77051 0.55416V4.27812L5.74707 3.30156C5.84256 3.20607 5.96634 3.16041 6.11843 3.16458C6.27051 3.16874 6.39412 3.21874 6.48926 3.31458C6.58474 3.41006 6.63249 3.53159 6.63249 3.67916C6.63249 3.82673 6.58474 3.94826 6.48926 4.04374L4.61426 5.91874C4.56218 5.97083 4.50575 6.00781 4.44499 6.02968C4.38422 6.05156 4.31912 6.06232 4.24968 6.06197ZM1.12468 8.36666C0.838217 8.36666 0.592904 8.26458 0.388738 8.06041C0.184571 7.85624 0.0826615 7.6111 0.0830087 7.32499V6.28333C0.0830087 6.13576 0.133009 6.01197 0.233009 5.91197C0.333009 5.81197 0.45662 5.76215 0.603842 5.76249C0.751411 5.76249 0.875196 5.81249 0.975196 5.91249C1.0752 6.01249 1.12502 6.1361 1.12468 6.28333V7.32499H7.37468V6.28333C7.37468 6.13576 7.42468 6.01197 7.52468 5.91197C7.62468 5.81197 7.74829 5.76215 7.89551 5.76249C8.04308 5.76249 8.16686 5.81249 8.26686 5.91249C8.36686 6.01249 8.41669 6.1361 8.41634 6.28333V7.32499C8.41634 7.61145 8.31426 7.85676 8.11009 8.06093C7.90593 8.2651 7.66079 8.36701 7.37468 8.36666H1.12468Z"
        fill="currentColor"
      />
    </svg>
  );
}
export function ExternalLinkIcon({ css = {} }: { css?: CSS }) {
  return (
    <svg
      width="11"
      height="10"
      viewBox="0 0 11 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styledCss(css)()}
    >
      <path
        d="M6.54167 0.512451V1.55412H8.41146L3.29167 6.67391L4.02604 7.40828L9.14583 2.28849V4.15828H10.1875V0.512451M9.14583 8.84578H1.85417V1.55412H5.5V0.512451H1.85417C1.5779 0.512451 1.31295 0.622198 1.1176 0.817548C0.922247 1.0129 0.8125 1.27785 0.8125 1.55412V8.84578C0.8125 9.12205 0.922247 9.387 1.1176 9.58235C1.31295 9.7777 1.5779 9.88745 1.85417 9.88745H9.14583C9.4221 9.88745 9.68705 9.7777 9.8824 9.58235C10.0778 9.387 10.1875 9.12205 10.1875 8.84578V5.19995H9.14583V8.84578Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function WatchIcon({ css = {} }: { css?: CSS }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={styledCss(css)()}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

export function StarIcon({ css = {} }: { css?: CSS }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={styledCss(css)()}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
}
export function SuggestionIcon({ css = {} }: { css?: CSS }) {
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
        d="M15.5 14L20.5 19L19 20.5L14 15.5V14.71L13.73 14.43C12.554 15.4439 11.0527 16.0011 9.5 16C7.77609 16 6.12279 15.3152 4.90381 14.0962C3.68482 12.8772 3 11.2239 3 9.5C3 7.77609 3.68482 6.12279 4.90381 4.90381C6.12279 3.68482 7.77609 3 9.5 3C11.2239 3 12.8772 3.68482 14.0962 4.90381C15.3152 6.12279 16 7.77609 16 9.5C16 11.11 15.41 12.59 14.43 13.73L14.71 14H15.5ZM9.5 4.5L8.95 4.53C8.71 5.05 8.34 5.93 8.07 7H10.93C10.66 5.93 10.29 5.05 10.05 4.53C9.87 4.5 9.69 4.5 9.5 4.5ZM13.83 7C13.2353 5.9596 12.2829 5.17067 11.15 4.78C11.39 5.31 11.7 6.08 11.93 7H13.83ZM5.17 7H7.07C7.3 6.08 7.61 5.31 7.85 4.78C6.7171 5.17067 5.76469 5.9596 5.17 7ZM4.5 9.5C4.5 10 4.58 10.53 4.73 11H6.87L6.75 9.5L6.87 8H4.73C4.58 8.47 4.5 9 4.5 9.5ZM14.27 11C14.42 10.53 14.5 10 14.5 9.5C14.5 9 14.42 8.47 14.27 8H12.13C12.2892 8.99366 12.2892 10.0063 12.13 11H14.27ZM7.87 8L7.75 9.5L7.87 11H11.13C11.2892 10.0063 11.2892 8.99366 11.13 8H7.87ZM9.5 14.5C9.68 14.5 9.86 14.5 10.03 14.47C10.28 13.95 10.66 13.07 10.93 12H8.07C8.34 13.07 8.72 13.95 8.97 14.47L9.5 14.5ZM13.83 12H11.93C11.7 12.92 11.39 13.69 11.15 14.22C12.2829 13.8293 13.2353 13.0404 13.83 12ZM5.17 12C5.76469 13.0404 6.7171 13.8293 7.85 14.22C7.61 13.69 7.3 12.92 7.07 12H5.17Z"
        fill="white"
      />
    </svg>
  );
}
export function BookmarkIcon({ css = {} }: { css?: CSS }) {
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
        d="M5 21V5C5 4.45 5.196 3.979 5.588 3.587C5.98 3.195 6.45067 2.99934 7 3H17C17.55 3 18.021 3.196 18.413 3.588C18.805 3.98 19.0007 4.45067 19 5V21L12 18L5 21ZM7 17.95L12 15.8L17 17.95V5H7V17.95Z"
        fill="white"
      />
    </svg>
  );
}
export function HistoryIcon({ css = {} }: { css?: CSS }) {
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
        d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z"
        fill="white"
      />
    </svg>
  );
}
export const Quotes = ({ css = {} }: { css?: CSS }) => {
  return (
    <svg
      width="74"
      height="64"
      viewBox="0 0 74 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styledCss(css)()}
    >
      <g>
        <path
          d="M73.9487 0V11.2165C70.4298 11.803 67.5707 13.2692 65.3713 15.6151C63.172 17.9611 61.4859 20.8935 60.3129 24.4124C59.2866 27.9313 58.7734 31.7434 58.7734 35.8488H72.4091V64H44.4779V38.268C44.4779 29.6174 45.8708 22.7262 48.6566 17.5945C51.4424 12.3162 55.0346 8.28408 59.4332 5.49829C63.9784 2.71249 68.8169 0.879731 73.9487 0ZM29.5225 0V11.2165C26.0036 11.803 23.1445 13.2692 20.9452 15.6151C18.7459 17.9611 17.0598 20.8935 15.8868 24.4124C14.8605 27.9313 14.3473 31.7434 14.3473 35.8488H27.983V64H0.0517578V38.268C0.0517578 29.6174 1.44466 22.7262 4.23045 17.5945C7.01625 12.3162 10.6085 8.28408 15.0071 5.49829C19.5523 2.71249 24.3908 0.879731 29.5225 0Z"
          fill="currentColor"
        />
      </g>
      <g>
        <path
          d="M73.9487 0V11.2165C70.4298 11.803 67.5707 13.2692 65.3713 15.6151C63.172 17.9611 61.4859 20.8935 60.3129 24.4124C59.2866 27.9313 58.7734 31.7434 58.7734 35.8488H72.4091V64H44.4779V38.268C44.4779 29.6174 45.8708 22.7262 48.6566 17.5945C51.4424 12.3162 55.0346 8.28408 59.4332 5.49829C63.9784 2.71249 68.8169 0.879731 73.9487 0ZM29.5225 0V11.2165C26.0036 11.803 23.1445 13.2692 20.9452 15.6151C18.7459 17.9611 17.0598 20.8935 15.8868 24.4124C14.8605 27.9313 14.3473 31.7434 14.3473 35.8488H27.983V64H0.0517578V38.268C0.0517578 29.6174 1.44466 22.7262 4.23045 17.5945C7.01625 12.3162 10.6085 8.28408 15.0071 5.49829C19.5523 2.71249 24.3908 0.879731 29.5225 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
export const LikeIcon = ({ css = {} }: { css?: CSS }) => {
  return (
    <svg
      width="14"
      height="13"
      viewBox="0 0 14 13"
      className={styledCss(css)()}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.83073 1.11051L6.66094 0.758944L6.83021 1.11051H6.83073ZM2.3125 5.3303L2.70156 5.29696C2.6926 5.19692 2.64544 5.10417 2.56988 5.03799C2.49432 4.97181 2.39617 4.93728 2.29581 4.94157C2.19546 4.94586 2.10061 4.98864 2.03098 5.06103C1.96134 5.13342 1.92227 5.22985 1.92188 5.3303H2.3125ZM11.2896 6.27978L10.9219 8.40478L11.6922 8.53811L12.0594 6.41311L11.2896 6.27978ZM7.64844 11.0678H5.22708V11.849H7.64844V11.0678ZM4.7526 10.6319L4.32969 5.73967L3.55104 5.80686L3.97448 10.699L4.7526 10.6319ZM10.9219 8.40478C10.6578 9.93082 9.28177 11.0678 7.64844 11.0678V11.849C9.64115 11.849 11.3599 10.4589 11.6922 8.53811L10.9219 8.40478ZM7.65365 2.65634L7.30833 4.76311L8.07917 4.88915L8.42448 2.7829L7.65365 2.65634ZM4.49375 5.33655L5.24323 4.69071L4.73281 4.09905L3.98438 4.74488L4.49375 5.33655ZM6.60625 2.58967L6.85417 1.63446L6.09792 1.43863L5.85 2.39332L6.60625 2.58967ZM7.22812 1.44696L7.30365 1.47144L7.54271 0.727694L7.46719 0.703215L7.22812 1.44696ZM6.23073 3.55009C6.39342 3.24592 6.51948 2.92353 6.60625 2.58967L5.85 2.39332C5.77879 2.66761 5.67529 2.93248 5.54167 3.18238L6.23125 3.55009H6.23073ZM7.30365 1.47144C7.37796 1.49397 7.44538 1.5349 7.49965 1.59044C7.55392 1.64598 7.59327 1.71433 7.61406 1.78915L8.37031 1.59332C8.31649 1.39098 8.21241 1.20552 8.06772 1.05419C7.92303 0.902848 7.74243 0.790539 7.54271 0.727694L7.30365 1.47144ZM6.85417 1.63446C6.86455 1.59695 6.88297 1.56214 6.90815 1.53246C6.93334 1.50278 6.96468 1.47894 7 1.46259L6.66094 0.758944C6.38385 0.892277 6.17552 1.13915 6.09792 1.43863L6.85417 1.63446ZM7 1.46259C7.07128 1.42854 7.15286 1.42296 7.22812 1.44696L7.46719 0.703215C7.2012 0.617965 6.91266 0.637909 6.66094 0.758944L6.99948 1.46259H7ZM8.12187 5.72092H10.8198V4.93967H8.12187V5.72092ZM3.20781 11.149L2.70156 5.29696L1.92344 5.36415L2.42865 11.2162L3.20781 11.149ZM2.70312 11.2048V5.3303H1.92188V11.2048H2.70312ZM2.42865 11.2162C2.42706 11.1973 2.42994 11.1783 2.43611 11.1603C2.44228 11.1423 2.45212 11.1258 2.465 11.1119C2.47788 11.0979 2.49353 11.0868 2.51094 11.0792C2.52835 11.0716 2.54715 11.0677 2.56615 11.0678V11.849C2.94427 11.849 3.2401 11.5251 3.20781 11.149L2.42917 11.2168L2.42865 11.2162ZM8.42448 2.7829C8.48944 2.38693 8.47099 1.98175 8.37031 1.59332L7.61406 1.78967C7.68747 2.07265 7.70095 2.36785 7.65365 2.65634L8.42448 2.7829ZM5.22708 11.0678C5.10782 11.0676 4.99296 11.0227 4.90513 10.942C4.81731 10.8613 4.76289 10.7507 4.7526 10.6319L3.97448 10.699C4.00158 11.0127 4.14525 11.3048 4.37714 11.5176C4.60903 11.7305 4.91229 11.8488 5.22708 11.849V11.0678ZM5.24323 4.69071C5.5974 4.38551 5.97865 4.02249 6.23125 3.55009L5.54167 3.18238C5.36146 3.5204 5.07448 3.8053 4.73281 4.09905L5.24323 4.69071ZM12.0594 6.41311C12.0907 6.23237 12.0822 6.04697 12.0344 5.86988C11.9865 5.69279 11.9006 5.5283 11.7825 5.38793C11.6644 5.24756 11.517 5.13471 11.3507 5.05728C11.1844 4.97984 11.0032 4.93971 10.8198 4.93967V5.72092C11.1151 5.72092 11.3406 5.98759 11.2896 6.27978L12.0594 6.41311ZM2.56615 11.0678C2.64219 11.0678 2.70312 11.1293 2.70312 11.2048H1.92188C1.92188 11.56 2.2099 11.849 2.56615 11.849V11.0678ZM7.30833 4.76311C7.28892 4.88112 7.29541 5.00194 7.32735 5.11719C7.3593 5.23244 7.41594 5.33937 7.49333 5.43054C7.57073 5.52172 7.66704 5.59496 7.77558 5.64519C7.88411 5.69543 8.00228 5.72092 8.12187 5.72092V4.93967C8.11552 4.9397 8.10924 4.93885 8.10347 4.93617C8.09771 4.9335 8.09261 4.92958 8.08853 4.92471C8.08445 4.91983 8.0815 4.91412 8.07988 4.90797C8.07826 4.90183 8.07802 4.8954 8.07917 4.88915L7.30833 4.76311ZM4.32969 5.73967C4.32325 5.66425 4.33429 5.58837 4.3629 5.51829C4.39152 5.4482 4.43636 5.38592 4.49375 5.33655L3.98333 4.74436C3.8323 4.87459 3.71435 5.03882 3.6392 5.22354C3.56404 5.40826 3.53383 5.60818 3.55104 5.80686L4.32969 5.73915V5.73967Z"
        fill="currentColor"
      />
    </svg>
  );
};
export const AlarmIcon = ({ css = {} }: { css?: CSS }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styledCss(css)()}
    >
      <path
        d="M10.5798 10.1666L8.33317 8.83327V5.81327C8.33317 5.54661 8.11983 5.33327 7.85317 5.33327H7.81317C7.5465 5.33327 7.33317 5.54661 7.33317 5.81327V8.95994C7.33317 9.19327 7.45317 9.41327 7.65983 9.53327L10.0932 10.9933C10.3198 11.1266 10.6132 11.0599 10.7465 10.8333C10.8865 10.5999 10.8132 10.2999 10.5798 10.1666ZM14.1198 3.33994L12.0665 1.63327C11.7865 1.39994 11.3665 1.43327 11.1265 1.71994C10.8932 1.99994 10.9332 2.41994 11.2132 2.65994L13.2598 4.36661C13.5398 4.59994 13.9598 4.56661 14.1998 4.27994C14.2564 4.21299 14.2991 4.13555 14.3257 4.05206C14.3523 3.96857 14.3621 3.88066 14.3547 3.79336C14.3473 3.70605 14.3227 3.62107 14.2824 3.54327C14.2421 3.46547 14.1869 3.39638 14.1198 3.33994ZM2.73317 4.36661L4.77983 2.65994C5.0665 2.41994 5.1065 1.99994 4.8665 1.71994C4.81123 1.6525 4.74312 1.5967 4.66612 1.55578C4.58912 1.51486 4.50476 1.48964 4.41794 1.48158C4.33112 1.47352 4.24356 1.48278 4.16034 1.50882C4.07713 1.53486 3.99991 1.57716 3.93317 1.63327L1.87983 3.33994C1.81281 3.39638 1.75757 3.46547 1.71727 3.54327C1.67698 3.62107 1.65241 3.70605 1.64498 3.79336C1.63755 3.88066 1.6474 3.96857 1.67397 4.05206C1.70054 4.13555 1.74331 4.21299 1.79983 4.27994C2.03317 4.56661 2.45317 4.59994 2.73317 4.36661ZM7.99983 2.66661C6.40844 2.66669 4.88227 3.29896 3.75705 4.4243C2.63183 5.54964 1.99974 7.07589 1.99983 8.66727C1.99992 10.2587 2.63218 11.7848 3.75752 12.9101C4.88287 14.0353 6.40911 14.6674 8.0005 14.6673C8.78847 14.6672 9.56872 14.512 10.2967 14.2104C11.0247 13.9088 11.6861 13.4668 12.2433 12.9096C12.8004 12.3524 13.2424 11.6909 13.5439 10.9629C13.8454 10.2348 14.0005 9.45458 14.0005 8.66661C14.0005 7.87863 13.8452 7.09838 13.5436 6.3704C13.242 5.64243 12.8 4.98098 12.2428 4.42383C11.6856 3.86668 11.0241 3.42473 10.2961 3.12323C9.56808 2.82172 8.78781 2.66656 7.99983 2.66661ZM7.99983 13.3333C5.4265 13.3333 3.33317 11.2399 3.33317 8.66661C3.33317 6.09327 5.4265 3.99994 7.99983 3.99994C10.5732 3.99994 12.6665 6.09327 12.6665 8.66661C12.6665 11.2399 10.5732 13.3333 7.99983 13.3333Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const EditIcon = ({ css = {} }: { css?: CSS }) => {
  return (
    <svg
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styledCss(css)()}
    >
      <path
        d="M7.9917 12.1073H11.7116"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.49891 3.39085C7.92883 2.8431 8.62358 2.87168 9.17191 3.3016L9.98274 3.93744C10.5311 4.36735 10.7253 5.0341 10.2954 5.58302L5.46016 11.7518C5.29858 11.9583 5.05183 12.0802 4.78933 12.0831L2.92441 12.107L2.50208 10.2899C2.44258 10.035 2.50208 9.76669 2.66366 9.5596L7.49891 3.39085Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.59326 4.54614L9.38976 6.73831"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const DeleteIcon = ({ css = {} }: { css?: CSS }) => {
  return (
    <svg
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styledCss(css)()}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.1665 3.70841C1.1665 3.54733 1.29709 3.41675 1.45817 3.41675H12.5415C12.7026 3.41675 12.8332 3.54733 12.8332 3.70841C12.8332 3.8695 12.7026 4.00008 12.5415 4.00008H1.45817C1.29709 4.00008 1.1665 3.8695 1.1665 3.70841Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.20817 3.41675C3.36925 3.41675 3.49984 3.54733 3.49984 3.70841V12.4584C3.49984 12.939 3.89425 13.3334 4.37484 13.3334H9.62484C10.1054 13.3334 10.4998 12.939 10.4998 12.4584V3.70841C10.4998 3.54733 10.6304 3.41675 10.7915 3.41675C10.9526 3.41675 11.0832 3.54733 11.0832 3.70841V12.4584C11.0832 13.2612 10.4276 13.9167 9.62484 13.9167H4.37484C3.57209 13.9167 2.9165 13.2612 2.9165 12.4584V3.70841C2.9165 3.54733 3.04709 3.41675 3.20817 3.41675Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.0835 2.54159C4.0835 1.73884 4.73908 1.08325 5.54183 1.08325H8.4585C9.26125 1.08325 9.91683 1.73884 9.91683 2.54159V3.70825C9.91683 3.86934 9.78625 3.99992 9.62516 3.99992C9.46408 3.99992 9.3335 3.86934 9.3335 3.70825V2.54159C9.3335 2.061 8.93908 1.66659 8.4585 1.66659H5.54183C5.06125 1.66659 4.66683 2.061 4.66683 2.54159V3.70825C4.66683 3.86934 4.53625 3.99992 4.37516 3.99992C4.21408 3.99992 4.0835 3.86934 4.0835 3.70825V2.54159Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.54167 5.75C5.70275 5.75 5.83333 5.88058 5.83333 6.04167V11.2917C5.83333 11.4527 5.70275 11.5833 5.54167 11.5833C5.38058 11.5833 5.25 11.4527 5.25 11.2917V6.04167C5.25 5.88058 5.38058 5.75 5.54167 5.75Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.45817 5.75C8.61925 5.75 8.74984 5.88058 8.74984 6.04167V11.2917C8.74984 11.4527 8.61925 11.5833 8.45817 11.5833C8.29709 11.5833 8.1665 11.4527 8.1665 11.2917V6.04167C8.1665 5.88058 8.29709 5.75 8.45817 5.75Z"
        fill="currentColor"
      />
    </svg>
  );
};
