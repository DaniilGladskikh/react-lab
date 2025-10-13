// 1_5_2 Компонент Avatar теперь запрашивает размер изображения на основе пропса size. Если size меньше 90, передается 's' (small), иначе 'b' (big).

import { getImageUrl } from "./util";

export type Person = {
  name: string;
  imageId: string;
};

function Avatar({ person, size }: { person: Person; size: number }) {
    return (
      <img
        className="avatar"
        src={getImageUrl(person, size < 90 ? "s" : "b")}
        alt={person.name}
        width={size}
        height={size}
      />
    );
  }

export default function Profile() {
  return (
    <Avatar
      size={40}
      person={{
        name: "Gregorio Y. Zara",
        imageId: "GregorioYZara",
      }}
    />
  );
}
