// 1_2_1 Компонент Profile был вынесен в отдельный файл Profile.tsx, а App.tsx теперь отображает и Profile, и Gallery.

import Gallery from './Gallery.tsx';
import Profile from './Profile.tsx';

export default function App() {
  return (
    <div>
      <Profile />
      <Gallery />
    </div>
  );
}
