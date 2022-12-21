import React from "react";
import Typography from "../../common/Typography";
import { MicrosoftProfile } from "../../interfaces/MicrosoftProfile";

interface HeaderProps {
  profile?: MicrosoftProfile;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div>
      {props.profile && (
        <div className="w-200 h-25">
          <Typography type="h1">{props.profile?.displayName}</Typography>
          <p className="text-[#9499ff] font-bold">
            {props.profile?.officeLocation}
          </p>
        </div>
      )}
      {!props.profile && (
        <div className="grid grid-cols-4 grid-rows-2 w-200 h-25 loader gap-y-2">
          <div className="col-start-1 col-end-4 row-auto rounded-lg"></div>
          <div className="col-start-1 col-end-3 rounded-lg h-3 w-50"></div>
        </div>
      )}
    </div>
  );
};

export default Header;
