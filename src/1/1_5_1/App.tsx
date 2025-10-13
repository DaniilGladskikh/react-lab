// 1_5_1 Компонент Profile был извлечен из Gallery для уменьшения дублирования кода. Props были определены для передачи данных в Profile.

import Profile from "./Profile";

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        imageId="Maria"
        profession="physicist and chemist"
        awards="4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
        discovered="polonium (chemical element)"
      />
      <Profile
        name="Katsuko Saruhashi"
        imageId="KatsukoSaruhashi"
        profession="geochemist"
        awards="2 (Miyake Prize for geochemistry, Tanaka Prize)"
        discovered="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}
