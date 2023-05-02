import { FC } from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

type Props = {
  color?: string;
  size?: number;
};

export type IconComponent = FC<Props>;

export const HomeIcon: IconComponent = ({ color = "#525252", size = 24 }) => {
  return (
    <Svg height={size} viewBox="0 96 960 960" width={size}>
      <Path
        fill={color}
        d="M220 876h150V626h220v250h150V486L480 291 220 486v390zm-60 60V456l320-240 320 240v480H530V686H430v250H160zm320-353z"
      />
    </Svg>
  );
};

export const ExploreIcon: IconComponent = ({
  color = "#525252",
  size = 24,
}) => {
  return (
    <Svg height={size} viewBox="0 96 960 960" width={size}>
      <Path
        fill={color}
        d="M263 793l290-143 143-290-290 143-143 290zm217-177q-17 0-28.5-11.5T440 576q0-17 11.5-28.5T480 536q17 0 28.5 11.5T520 576q0 17-11.5 28.5T480 616zm0 360q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976zm0-60q142 0 241-99.5T820 576q0-142-99-241t-241-99q-141 0-240.5 99T140 576q0 141 99.5 240.5T480 916zm0-340z"
      />
    </Svg>
  );
};

export const PersonIcon: IconComponent = ({ color = "#525252", size = 24 }) => {
  return (
    <Svg height={size} viewBox="0 96 960 960" width={size}>
      <Path
        fill={color}
        d="M480 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42zM160 896v-94q0-38 19-65t49-41q67-30 128.5-45T480 636q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800 764 800 802v94H160zm60-60h520v-34q0-16-9.5-30.5T707 750q-64-31-117-42.5T480 696q-57 0-111 11.5T252 750q-14 7-23 21.5t-9 30.5v34zm260-321q39 0 64.5-25.5T570 425q0-39-25.5-64.5T480 335q-39 0-64.5 25.5T390 425q0 39 25.5 64.5T480 515zm0-90zm0 411z"
      />
    </Svg>
  );
};

export const CalendarIcon: IconComponent = ({
  color = "#525252",
  size = 24,
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20">
      <Path
        d="M12.434 15.417A1.943 1.943 0 0111 14.829a1.962 1.962 0 01-.583-1.437c0-.567.195-1.045.587-1.434.391-.389.87-.583 1.437-.583.567 0 1.045.196 1.434.587.389.392.583.87.583 1.438 0 .566-.195 1.044-.587 1.433-.391.39-.87.584-1.437.584zM3.75 18.333a1.2 1.2 0 01-.875-.375 1.2 1.2 0 01-.375-.875V4.167a1.2 1.2 0 01.375-.875 1.2 1.2 0 01.875-.375h1.354v-1.25h1.354v1.25h7.084v-1.25h1.354v1.25h1.354a1.2 1.2 0 01.875.375c.25.25.375.541.375.875v12.916a1.2 1.2 0 01-.375.875 1.2 1.2 0 01-.875.375H3.75zm0-1.25h12.5V8.125H3.75v8.958zm0-10.208h12.5V4.167H3.75v2.708z"
        fill={color}
      />
    </Svg>
  );
};

export const ClockIcon: IconComponent = ({ color = "#525252", size = 24 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20">
      <Path
        d="M13.063 14.02l.937-.937-3.312-3.333V5.562h-1.25v4.688l3.625 3.77zM10 18.334a8.063 8.063 0 01-3.23-.656 8.453 8.453 0 01-2.655-1.792 8.453 8.453 0 01-1.792-2.656A8.063 8.063 0 011.667 10c0-1.139.218-2.215.656-3.23a8.453 8.453 0 011.792-2.655A8.453 8.453 0 016.77 2.323 8.063 8.063 0 0110 1.667c1.138 0 2.214.218 3.228.656a8.452 8.452 0 012.657 1.792 8.453 8.453 0 011.791 2.656A8.063 8.063 0 0118.333 10a8.063 8.063 0 01-.656 3.23 8.454 8.454 0 01-1.791 2.655 8.453 8.453 0 01-2.657 1.792 8.063 8.063 0 01-3.229.656zm0-1.25c1.944 0 3.611-.694 5-2.083 1.389-1.389 2.083-3.056 2.083-5S16.39 6.389 15 5c-1.389-1.389-3.056-2.083-5-2.083S6.39 3.61 5 5c-1.389 1.389-2.083 3.056-2.083 5S3.61 13.611 5 15c1.389 1.389 3.056 2.083 5 2.083z"
        fill={color}
      />
    </Svg>
  );
};

export const LocationIcon: IconComponent = ({
  color = "#525252",
  size = 24,
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20">
      <Path
        d="M10.002 9.792a1.4 1.4 0 001.03-.43 1.41 1.41 0 00.426-1.03 1.4 1.4 0 00-.429-1.03A1.409 1.409 0 0010 6.875a1.4 1.4 0 00-1.03.429 1.41 1.41 0 00-.427 1.031c0 .402.143.745.429 1.03.285.284.63.427 1.03.427zM10 16.688c1.847-1.681 3.212-3.205 4.094-4.573.882-1.369 1.323-2.573 1.323-3.615 0-1.636-.523-2.976-1.569-4.019C12.802 3.438 11.52 2.917 10 2.917s-2.802.521-3.848 1.564C5.106 5.524 4.583 6.864 4.583 8.5c0 1.042.452 2.246 1.354 3.614.903 1.369 2.257 2.893 4.063 4.573zm0 1.645c-2.236-1.902-3.906-3.67-5.01-5.302C3.884 11.4 3.332 9.89 3.332 8.5c0-2.083.67-3.743 2.01-4.98C6.685 2.286 8.237 1.668 10 1.668c1.764 0 3.316.618 4.656 1.854 1.34 1.236 2.01 2.896 2.01 4.979 0 1.389-.552 2.9-1.656 4.531-1.104 1.632-2.774 3.4-5.01 5.302z"
        fill={color}
      />
    </Svg>
  );
};

export const PeopleIcon: IconComponent = ({ color = "#525252", size = 24 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20">
      <G clipPath="url(#clip0_128_12662)">
        <Path
          d="M0 15v-1.104c0-.536.288-.972.865-1.308.576-.336 1.332-.505 2.268-.505.169 0 .331.004.487.01.156.008.31.023.463.046a3.527 3.527 0 00-.333 1.507V15H0zm5 0v-1.354c0-.445.122-.85.365-1.219.243-.368.586-.69 1.03-.969.445-.277.977-.486 1.595-.625a9.163 9.163 0 012.01-.208c.736 0 1.413.07 2.031.208.618.14 1.15.348 1.594.625.444.278.785.601 1.02.97.237.367.355.773.355 1.218V15H5zm11.25 0v-1.354c0-.276-.024-.536-.073-.78a3.223 3.223 0 00-.24-.726 4.19 4.19 0 01.462-.046c.156-.007.314-.01.476-.01.938 0 1.693.164 2.266.495.573.33.859.769.859 1.317V15h-3.75zm-10-1.25h7.5v-.125c0-.514-.35-.934-1.052-1.26-.702-.327-1.6-.49-2.698-.49-1.097 0-1.997.163-2.698.49-.701.326-1.052.753-1.052 1.28v.105zm-3.134-2.292c-.397 0-.738-.143-1.022-.428A1.407 1.407 0 011.667 10c0-.403.142-.747.428-1.031a1.406 1.406 0 011.03-.427c.403 0 .747.142 1.031.427.285.284.427.631.427 1.04 0 .397-.142.737-.427 1.022a1.415 1.415 0 01-1.04.427zm13.75 0c-.397 0-.738-.143-1.022-.428a1.406 1.406 0 01-.427-1.03c0-.403.143-.747.428-1.031a1.407 1.407 0 011.03-.427c.403 0 .747.142 1.031.427.285.284.427.631.427 1.04 0 .397-.142.737-.427 1.022a1.415 1.415 0 01-1.04.427zM10 10a2.41 2.41 0 01-1.77-.73A2.41 2.41 0 017.5 7.5c0-.708.243-1.302.73-1.781A2.429 2.429 0 0110 5c.708 0 1.302.24 1.781.719.48.479.719 1.073.719 1.781 0 .694-.24 1.285-.719 1.77-.479.487-1.073.73-1.781.73zm.007-1.25c.357 0 .653-.12.889-.361a1.23 1.23 0 00.354-.896 1.2 1.2 0 00-.357-.889 1.208 1.208 0 00-.886-.354c-.352 0-.65.12-.892.357a1.19 1.19 0 00-.365.886c0 .352.12.65.361.892.241.243.54.365.896.365z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_128_12662">
          <Path fill="#fff" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export const LinkToLocationIcon: IconComponent = ({
  color = "#525252",
  size = 24,
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20">
      <Path
        d="M3.75 17.5a1.2 1.2 0 01-.875-.375 1.2 1.2 0 01-.375-.875V3.75a1.2 1.2 0 01.375-.875A1.2 1.2 0 013.75 2.5h5.813v1.25H3.75v12.5h12.5v-5.813h1.25v5.813a1.2 1.2 0 01-.375.875 1.2 1.2 0 01-.875.375H3.75zm4.208-4.563l-.875-.895 8.292-8.292h-4.563V2.5H17.5v6.688h-1.25V4.646l-8.292 8.291z"
        fill={color}
      />
    </Svg>
  );
};

export const SearchIcon: IconComponent = ({ color = "#525252", size = 24 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16">
      <G clipPath="url(#clip0_133_12563)">
        <Path
          d="M13.067 14l-4.2-4.2a4.062 4.062 0 01-2.533.867c-1.212 0-2.237-.42-3.075-1.258C2.419 8.569 2 7.544 2 6.333c0-1.21.42-2.236 1.259-3.075C4.097 2.419 5.122 2 6.333 2c1.211 0 2.237.42 3.076 1.258.838.84 1.258 1.864 1.258 3.075A4.062 4.062 0 019.8 8.867l4.2 4.2-.933.933zM6.333 9.333c.834 0 1.542-.291 2.126-.874a2.895 2.895 0 00.874-2.126c0-.833-.291-1.541-.874-2.125a2.895 2.895 0 00-2.126-.875c-.833 0-1.541.292-2.125.875a2.895 2.895 0 00-.875 2.125c0 .834.292 1.542.875 2.126a2.895 2.895 0 002.125.874z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_133_12563">
          <Path fill="#fff" d="M0 0H16V16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export const FilterIcon: IconComponent = ({ color = "#525252", size = 24 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M8.333 15v-1.25h3.334V15H8.333zM5 10.625v-1.25h10v1.25H5zM2.5 6.25V5h15v1.25h-15z"
        fill={color}
      />
    </Svg>
  );
};

export const AddIcon: IconComponent = ({ color = "#525252", size = 24 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M9.375 14.167h1.25v-3.542h3.542v-1.25h-3.542V5.833h-1.25v3.542H5.833v1.25h3.542v3.542zM3.75 17.5a1.2 1.2 0 01-.875-.375 1.2 1.2 0 01-.375-.875V3.75a1.2 1.2 0 01.375-.875A1.2 1.2 0 013.75 2.5h12.5a1.2 1.2 0 01.875.375c.25.25.375.542.375.875v12.5a1.2 1.2 0 01-.375.875 1.2 1.2 0 01-.875.375H3.75zm0-1.25h12.5V3.75H3.75v12.5z"
        fill={color}
      />
    </Svg>
  );
};

export const EditPencilIcon: IconComponent = ({
  color = "#525252",
  size = 24,
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M4.5 19.5h1.1L16.675 8.425l-1.1-1.1L4.5 18.4v1.1zM19.85 7.35l-3.2-3.2L17.7 3.1a1.426 1.426 0 011.05-.425c.417 0 .767.142 1.05.425l1.1 1.1c.283.283.425.633.425 1.05 0 .417-.142.767-.425 1.05l-1.05 1.05zM18.8 8.4L6.2 21H3v-3.2L15.6 5.2l3.2 3.2zm-2.675-.525l-.55-.55 1.1 1.1-.55-.55z"
        fill={color}
      />
    </Svg>
  );
};

export const DirectionIcon: IconComponent = ({
  color = "#525252",
  size = 24,
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 15" fill="none">
      <Path
        d="M7.685 12.75L6.023 8.477 1.75 6.815v-.628l10.5-3.937-3.938 10.5h-.627zm.263-1.662l2.8-7.336-7.32 2.8 3.266 1.254 1.254 3.282z"
        fill={color}
      />
    </Svg>
  );
};

export const LogoutIcon: IconComponent = ({ color = "#525252", size = 24 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 21 21" fill="none">
      <Path
        d="M3.938 18.375a1.26 1.26 0 01-.92-.394 1.259 1.259 0 01-.393-.919V3.938c0-.35.131-.656.394-.918a1.26 1.26 0 01.918-.394h6.366v1.313H3.937v13.124h6.366v1.313H3.937zm10.63-4.047l-.94-.94 2.231-2.232H8.203V9.844h7.613l-2.232-2.231.941-.941 3.85 3.85-3.806 3.806z"
        fill={color}
      />
    </Svg>
  );
};

export const KeyIcon: IconComponent = ({ color = "#525252", size = 24 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 19 19" fill="none">
      <G clipPath="url(#clip0_213_12672)">
        <Path
          d="M5.542 10.846c-.37 0-.687-.132-.95-.396a1.296 1.296 0 01-.396-.95c0-.37.132-.686.396-.95.263-.264.58-.396.95-.396.369 0 .686.132.95.396.263.264.395.58.395.95s-.132.686-.395.95c-.264.264-.581.396-.95.396zm0 3.404c-1.32 0-2.441-.462-3.365-1.385C1.253 11.94.792 10.819.792 9.5c0-1.32.461-2.441 1.385-3.365C3.1 5.212 4.222 4.75 5.542 4.75c.95 0 1.78.224 2.493.673.713.449 1.274 1.128 1.683 2.038h7.045L19 9.698l-3.305 3.028-1.742-1.267-1.742 1.267-1.484-1.188h-1.01a4.487 4.487 0 01-1.553 1.95c-.706.508-1.58.762-2.622.762zm0-1.188c.765 0 1.47-.253 2.117-.761a3.396 3.396 0 001.247-1.95h2.256l1.07.89 1.74-1.246 1.624 1.227 1.682-1.564-1.01-1.009H8.907c-.158-.739-.554-1.376-1.187-1.91a3.28 3.28 0 00-2.178-.801c-.99 0-1.83.346-2.523 1.039C2.325 7.669 1.98 8.51 1.98 9.5c0 .99.346 1.83 1.04 2.523.692.693 1.533 1.04 2.522 1.04z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_213_12672">
          <Path fill="#fff" d="M0 0H19V19H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export const CommentIcon: IconComponent = ({
  color = "#525252",
  size = 24,
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M6 14H18V12.5H6V14ZM6 10.75H18V9.25H6V10.75ZM6 7.5H18V6H6V7.5ZM22 22L18 18H3.5C3.11667 18 2.77083 17.8458 2.4625 17.5375C2.15417 17.2292 2 16.8833 2 16.5V3.5C2 3.11667 2.15417 2.77083 2.4625 2.4625C2.77083 2.15417 3.11667 2 3.5 2H20.5C20.9 2 21.25 2.15417 21.55 2.4625C21.85 2.77083 22 3.11667 22 3.5V22ZM3.5 3.5V16.5H18.625L20.5 18.375V3.5H3.5Z"
        fill={color}
      />
    </Svg>
  );
};

export const SendIcon: IconComponent = ({ color = "#525252", size = 24 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M3 20V4L22 12L3 20ZM4.5 17.675L18.1 12L4.5 6.25V10.45L10.55 12L4.5 13.5V17.675Z"
        fill={color}
      />
    </Svg>
  );
};

