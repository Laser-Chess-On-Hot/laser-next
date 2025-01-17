import { PlayerColor } from "@/store/types";

export function Fire({ color }: { color: PlayerColor }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.6">
        <mask
          id="mask0_11_632"
          // style="mask-type:luminance"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="30"
          height="30"
        >
          <path d="M0 0H30V30H0V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_11_632)">
          <path
            d="M26.296 13.7829C25.6651 12.3643 24.7481 11.0913 23.6025 10.0436L22.6564 9.17788C22.6243 9.1492 22.5857 9.12884 22.5439 9.11859C22.5022 9.10834 22.4585 9.10851 22.4168 9.1191C22.3751 9.12968 22.3366 9.15035 22.3048 9.17928C22.273 9.20821 22.2488 9.24453 22.2342 9.28503L21.8121 10.4957C21.5485 11.2543 21.0642 12.03 20.3785 12.7929C20.3537 12.8193 20.3222 12.8386 20.2873 12.8488C20.2525 12.859 20.2155 12.8596 20.1803 12.8507C20.1522 12.8428 20.1265 12.828 20.1053 12.8079C20.0834 12.7886 20.0663 12.7646 20.0551 12.7377C20.044 12.7107 20.0392 12.6816 20.041 12.6525C20.161 10.6993 19.576 8.49538 18.2957 6.09753C17.236 4.10467 15.7639 2.5511 13.9242 1.46681L12.5839 0.678242C12.5434 0.655353 12.4976 0.643664 12.4511 0.644379C12.4047 0.645094 12.3592 0.658188 12.3195 0.682311C12.2797 0.706434 12.2472 0.740714 12.2251 0.781619C12.203 0.822524 12.1922 0.868575 12.1939 0.915027L12.2657 2.47288C12.315 3.53681 12.1907 4.4786 11.8982 5.26074C11.5392 6.22065 11.0233 7.11424 10.3714 7.90503C9.9147 8.45977 9.39717 8.96148 8.82853 9.40074C7.45814 10.4522 6.34351 11.8001 5.56818 13.3436C4.84513 14.801 4.44614 16.3977 4.39861 18.024C4.35108 19.6502 4.65613 21.2675 5.29282 22.7647C5.96236 24.3213 6.96996 25.7095 8.24254 26.8284C9.51512 27.9474 11.0208 28.7691 12.6503 29.234C13.6767 29.5286 14.7417 29.6775 15.8303 29.6775C17.3732 29.6775 18.8689 29.3786 20.2789 28.7915C21.6369 28.2269 22.872 27.4034 23.9153 26.3668C24.9782 25.3208 25.8221 24.0736 26.3979 22.698C26.9737 21.3224 27.2698 19.8459 27.2689 18.3547C27.2689 16.7711 26.9432 15.2325 26.2971 13.7818L26.296 13.7829Z"
            fill="#1F1F1F"
            stroke="#1F1F1F"
            strokeWidth="1.656"
          />
          <path
            d="M2.14389 17.7096C2.14389 15.9729 2.54782 14.2596 3.32032 12.7018L5.55961 13.3436C4.78693 14.8996 4.38431 16.6131 4.38318 18.3504L2.14282 17.7107L2.14389 17.7096Z"
            fill="#1F1F1F"
            stroke="#1F1F1F"
            strokeWidth="1.656"
            strokeLinejoin="round"
          />
          <path
            d="M3.31931 12.7029C4.09434 11.1595 5.2086 9.81155 6.57859 8.76001L8.81788 9.40072C7.44752 10.4522 6.33289 11.8001 5.55752 13.3436L3.31824 12.7029H3.31931Z"
            fill="#1F1F1F"
            stroke="#1F1F1F"
            strokeWidth="1.656"
            strokeLinejoin="round"
          />
          <path
            d="M3.04285 22.1239C2.44585 20.7289 2.13961 19.2269 2.14285 17.7096L4.38213 18.3514C4.38213 19.8835 4.68428 21.3664 5.28213 22.7646L3.04285 22.1239Z"
            fill="#1F1F1F"
            stroke="#1F1F1F"
            strokeWidth="1.656"
            strokeLinejoin="round"
          />
          <path
            d="M6.58923 8.75893C7.15793 8.31934 7.67546 7.81726 8.13209 7.26215L10.3714 7.90393C9.91388 8.45893 9.39638 8.96036 8.82852 9.39965L6.58923 8.75893Z"
            fill="#1F1F1F"
            stroke="#1F1F1F"
            strokeWidth="1.656"
            strokeLinejoin="round"
          />
          <path
            d="M9.9504 0.273173C9.94878 0.232139 9.95686 0.191302 9.97397 0.153971C9.99108 0.116639 10.0167 0.0838634 10.0489 0.0582991C10.081 0.0327348 10.1187 0.0151011 10.1589 0.00682671C10.1992 -0.00144768 10.2408 -0.000129958 10.2804 0.0106731L12.5197 0.651387C12.48 0.640552 12.4383 0.639246 12.398 0.647576C12.3576 0.655907 12.3199 0.673637 12.2877 0.699325C12.2556 0.725012 12.2299 0.757931 12.2129 0.795402C12.1958 0.832873 12.1879 0.873837 12.1897 0.914959L9.9504 0.273173Z"
            fill="#1F1F1F"
            stroke="#1F1F1F"
            strokeWidth="1.656"
            strokeLinejoin="round"
          />
          <path
            d="M10.0232 1.83105L9.95142 0.273193L12.1907 0.913908L12.2614 2.47176L10.0232 1.83105Z"
            fill="#1F1F1F"
            stroke="#1F1F1F"
            strokeWidth="1.656"
            strokeLinejoin="round"
          />
          <path
            d="M10.2815 0.0107422C10.3025 0.0167299 10.3226 0.025371 10.3415 0.0364565L12.5808 0.677171C12.5616 0.666012 12.5411 0.657369 12.5197 0.651456L10.2815 0.0107422Z"
            fill="#1F1F1F"
            stroke="#1F1F1F"
            strokeWidth="1.656"
            strokeLinejoin="round"
          />
          <path
            d="M8.13 7.26429C8.78208 6.47285 9.29804 5.57852 9.65679 4.61786L11.8961 5.25964C11.5372 6.21993 11.0213 7.11389 10.3693 7.905L8.13 7.26322V7.26429Z"
            fill="#1F1F1F"
            stroke="#1F1F1F"
            strokeWidth="1.656"
            strokeLinejoin="round"
          />
          <path
            d="M9.64612 4.62007C9.93862 3.83793 10.0618 2.89614 10.0136 1.83221L12.2529 2.47293C12.3011 3.53793 12.1779 4.47864 11.8854 5.26079L9.64612 4.62007Z"
            fill="#1F1F1F"
            stroke="#1F1F1F"
            strokeWidth="1.656"
            strokeLinejoin="round"
          />
          <path
            d="M10.3349 0.036438L11.6764 0.825009L13.9156 1.46679L12.5731 0.678224L10.3349 0.036438Z"
            fill="#1F1F1F"
            stroke="#1F1F1F"
            strokeWidth="1.656"
            strokeLinejoin="round"
          />
          <path
            d="M5.50069 25.7229C4.45782 24.6927 3.62459 23.4702 3.04712 22.1229L5.2864 22.7646C5.86397 24.1116 6.6972 25.3338 7.73998 26.3636L5.50069 25.7229Z"
            fill="#1F1F1F"
            stroke="#1F1F1F"
            strokeWidth="1.656"
            strokeLinejoin="round"
          />
          <path
            d="M11.6786 0.825012C13.5172 1.9093 14.9893 3.46394 16.0489 5.4568L18.2882 6.09751C17.2275 4.10466 15.7564 2.55108 13.9168 1.4668L11.6786 0.825012Z"
            fill="#1F1F1F"
            stroke="#1F1F1F"
            strokeWidth="1.656"
            strokeLinejoin="round"
          />
          <path
            d="M9.14781 28.1464C7.79122 27.5798 6.55683 26.7565 5.51245 25.7218L7.75174 26.3625C8.80388 27.4018 10.0253 28.2193 11.3871 28.7872L9.14781 28.1454V28.1464Z"
            fill="#1F1F1F"
            stroke="#1F1F1F"
            strokeWidth="1.656"
            strokeLinejoin="round"
          />
          <path
            d="M10.4057 28.5932C9.97711 28.47 9.5539 28.3211 9.13818 28.1464L11.3775 28.7882C11.7932 28.9618 12.2164 29.1107 12.645 29.2339L10.4057 28.5932Z"
            fill="#1F1F1F"
            stroke="#1F1F1F"
            strokeWidth="1.656"
            strokeLinejoin="round"
          />
          <path
            d="M16.0447 5.45679C17.3239 7.85464 17.9089 10.0586 17.7889 12.0118L20.0282 12.6525C20.1482 10.6993 19.5632 8.49536 18.2829 6.0975L16.0436 5.45679H16.0447Z"
            fill="#1F1F1F"
            stroke="#1F1F1F"
            strokeWidth="1.656"
            strokeLinejoin="round"
          />
          <path
            d="M13.5921 29.0336C12.5067 29.0336 11.4449 28.8868 10.4207 28.5943L12.6492 29.2318C13.6778 29.5264 14.7417 29.6754 15.8314 29.6754L13.5921 29.0336Z"
            fill="#1F1F1F"
            stroke="#1F1F1F"
            strokeWidth="1.656"
            strokeLinejoin="round"
          />
          <path
            d="M17.7965 12.0107C17.7947 12.0399 17.7997 12.0691 17.8111 12.096C17.8224 12.123 17.8398 12.1469 17.8618 12.1661L20.1011 12.8079C20.0791 12.7885 20.0618 12.7643 20.0507 12.7372C20.0395 12.7101 20.0348 12.6807 20.0368 12.6515L17.7965 12.0107Z"
            fill="#1F1F1F"
            stroke="#1F1F1F"
            strokeWidth="1.656"
            strokeLinejoin="round"
          />
          <path
            d="M17.8585 12.1672C17.8797 12.1873 17.9054 12.202 17.9335 12.21L20.1717 12.8507C20.1437 12.8427 20.1179 12.828 20.0967 12.8079L17.8585 12.1672Z"
            fill="#1F1F1F"
            stroke="#1F1F1F"
            strokeWidth="1.656"
            strokeLinejoin="round"
          />
          <path
            d="M17.9358 12.21C17.9567 12.2157 17.9785 12.2175 18 12.2154L20.2393 12.8572C20.2173 12.859 20.1952 12.8569 20.174 12.8507L17.9358 12.21Z"
            fill="#1F1F1F"
            stroke="#1F1F1F"
            strokeWidth="1.656"
            strokeLinejoin="round"
          />
          <path
            d="M18.0021 12.2153C18.0528 12.2113 18.1002 12.1884 18.1349 12.1511L20.3742 12.7918C20.3395 12.8291 20.2921 12.852 20.2414 12.8561L18.0021 12.2153Z"
            fill="#1F1F1F"
            stroke="#1F1F1F"
            strokeWidth="1.656"
            strokeLinejoin="round"
          />
          <path
            d="M18.135 12.15C18.8207 11.3871 19.305 10.6114 19.5675 9.85175L21.8068 10.4935C21.5432 11.2521 21.0589 12.0278 20.3732 12.7907L18.1339 12.15H18.135Z"
            fill="#1F1F1F"
            stroke="#1F1F1F"
            strokeWidth="1.656"
            strokeLinejoin="round"
          />
          <path
            d="M19.5632 9.8528L19.9854 8.64209L22.2247 9.28388L21.8025 10.4946L19.5632 9.8528Z"
            fill="#1F1F1F"
            stroke="#1F1F1F"
            strokeWidth="1.656"
            strokeLinejoin="round"
          />
          <path
            d="M19.9865 8.64217C20.0011 8.60193 20.0254 8.56588 20.0572 8.53717L22.2965 9.17788C22.2645 9.20689 22.2402 9.24333 22.2257 9.28396L19.9865 8.64217Z"
            fill="#1F1F1F"
            stroke="#1F1F1F"
            strokeWidth="1.656"
            strokeLinejoin="round"
          />
          <path
            d="M20.0636 8.53607C20.0953 8.50729 20.1335 8.48669 20.175 8.47607L22.4143 9.11786C22.3724 9.12831 22.3338 9.14892 22.3018 9.17786L20.0636 8.53607Z"
            fill="#1F1F1F"
            stroke="#1F1F1F"
            strokeWidth="1.656"
            strokeLinejoin="round"
          />
          <path
            d="M20.1707 8.47505C20.2135 8.4654 20.2564 8.46433 20.2982 8.47505L22.5374 9.11683C22.4952 9.10622 22.4511 9.10622 22.4089 9.11683L20.1707 8.47505Z"
            fill="#1F1F1F"
            stroke="#1F1F1F"
            strokeWidth="1.656"
            strokeLinejoin="round"
          />
          <path
            d="M20.4075 8.535C20.3808 8.51103 20.3495 8.4928 20.3154 8.48143L20.295 8.47607C20.3019 8.4776 20.3087 8.47939 20.3154 8.48143L22.5343 9.11786C22.5772 9.12857 22.6147 9.14786 22.6468 9.17679L20.4075 8.535Z"
            fill="#1F1F1F"
          />
          <path
            d="M20.3154 8.48143C20.3495 8.4928 20.3808 8.51103 20.4075 8.535L22.6468 9.17679C22.6147 9.14786 22.5772 9.12857 22.5343 9.11786L20.3154 8.48143ZM20.3154 8.48143L20.295 8.47607C20.3019 8.4776 20.3087 8.47939 20.3154 8.48143Z"
            stroke="#1F1F1F"
            strokeWidth="1.656"
            strokeLinejoin="round"
          />
          <path
            d="M20.4106 8.53601L21.3567 9.4028L23.596 10.0435L22.6499 9.17672L20.4106 8.53601Z"
            fill="#1F1F1F"
            stroke="#1F1F1F"
            strokeWidth="1.656"
            strokeLinejoin="round"
          />
          <path
            d="M18.0311 28.1497C16.6217 28.737 15.1094 29.0378 13.5825 29.0347L15.8218 29.6764C17.3647 29.6764 18.8593 29.3775 20.2693 28.7904L18.03 28.1497H18.0311Z"
            fill="#1F1F1F"
            stroke="#1F1F1F"
            strokeWidth="1.656"
            strokeLinejoin="round"
          />
          <path
            d="M21.3557 9.40179C22.5014 10.4495 23.4184 11.7225 24.0493 13.1411L26.2885 13.7818C25.6574 12.3631 24.74 11.0901 23.5939 10.0425L21.3557 9.40179Z"
            fill="#1F1F1F"
            stroke="#1F1F1F"
            strokeWidth="1.656"
            strokeLinejoin="round"
          />
          <path
            d="M21.6622 25.725C20.6189 26.7617 19.3838 27.5852 18.0258 28.1497L20.265 28.7915C21.6231 28.227 22.8582 27.4034 23.9015 26.3668L21.6622 25.725Z"
            fill="#1F1F1F"
            stroke="#1F1F1F"
            strokeWidth="1.656"
            strokeLinejoin="round"
          />
          <path
            d="M24.0428 13.1411C24.6889 14.5918 25.0135 16.1304 25.0135 17.7129L27.2528 18.3547C27.2528 16.7711 26.9282 15.2325 26.281 13.7818L24.0417 13.1411H24.0428Z"
            fill="#1F1F1F"
            stroke="#1F1F1F"
            strokeWidth="1.656"
            strokeLinejoin="round"
          />
          <path
            d="M24.12 22.1261C23.5448 23.4747 22.7113 24.6977 21.6664 25.7261L23.9057 26.3668C24.9506 25.3384 25.7842 24.1154 26.3592 22.7668L24.12 22.1261Z"
            fill="#1F1F1F"
            stroke="#1F1F1F"
            strokeWidth="1.656"
            strokeLinejoin="round"
          />
          <path
            d="M25.0232 17.7128C25.0265 19.2301 24.7202 20.7322 24.1232 22.1271L26.3625 22.7678C26.9582 21.3728 27.2646 19.8718 27.2625 18.3535L25.0232 17.7128Z"
            fill="#1F1F1F"
            stroke="#1F1F1F"
            strokeWidth="1.656"
            strokeLinejoin="round"
          />
          <path
            d="M24.0516 13.14C23.4207 11.7215 22.5037 10.4485 21.358 9.40074L20.412 8.53502C20.3798 8.5066 20.3412 8.48646 20.2995 8.47635C20.2577 8.46625 20.2142 8.46649 20.1726 8.47705C20.131 8.48761 20.0926 8.50817 20.0607 8.53695C20.0289 8.56572 20.0045 8.60184 19.9898 8.64217L19.5677 9.85288C19.3041 10.6115 18.8198 11.3872 18.1341 12.15C18.0994 12.1873 18.052 12.2103 18.0013 12.2143C17.9759 12.2166 17.9504 12.2135 17.9264 12.2052C17.9024 12.1969 17.8804 12.1836 17.862 12.1661C17.8399 12.1469 17.8225 12.123 17.8112 12.096C17.7999 12.0691 17.7949 12.0399 17.7966 12.0107C17.9166 10.0565 17.3316 7.8536 16.0513 5.45467C14.9927 3.46181 13.5205 1.90824 11.6809 0.823953L10.3395 0.0353812C10.2991 0.0121255 10.2532 0.000144348 10.2065 0.000689173C10.1599 0.001234 10.1143 0.0142848 10.0745 0.0384785C10.0346 0.0626722 10.002 0.0971214 9.98001 0.138228C9.95802 0.179335 9.94748 0.225592 9.94947 0.272167L10.0202 1.83002C10.0695 2.89502 9.94519 3.83574 9.65376 4.61788C9.29458 5.57824 8.77825 6.47221 8.1259 7.26324C7.66947 7.81717 7.1509 8.31967 6.58304 8.75895C5.21304 9.81049 4.09879 11.1584 3.32376 12.7018C2.60054 14.1592 2.20137 15.7558 2.15365 17.3821C2.10594 19.0083 2.41081 20.6256 3.04733 22.1229C4.2184 24.8448 6.40185 27.0048 9.13626 28.1465C10.5473 28.7357 12.042 29.0357 13.5848 29.0357C15.1277 29.0357 16.6234 28.7357 18.0334 28.1486C19.3913 27.5844 20.6264 26.7612 21.6698 25.725C22.7328 24.6789 23.5768 23.4315 24.1526 22.0557C24.7283 20.6799 25.0244 19.2032 25.0234 17.7118C25.0234 16.1293 24.6988 14.5907 24.0516 13.14Z"
            fill={color == "red" ? "#FF2727" : "#FDBF1C"}
            stroke="#1F1F1F"
            strokeWidth="1.656"
          />
        </g>
      </g>
    </svg>
  );
}
