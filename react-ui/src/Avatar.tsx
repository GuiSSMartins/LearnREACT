import { CSSProperties } from "react";
import { getImageUrl } from "./utils";

export interface AvatarProps {
  person: any;
  size: number;
  styles?: CSSProperties;
}

export default function Avatar({ person, size,  styles}: AvatarProps) {
  return (
    <img 
      style={{width : size, height : size, borderRadius : "50%", ...styles}}
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
    />
  );
}
