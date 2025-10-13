// 1_1_3 Имя компонента было изменено с 'profile' на 'Profile', так как React требует, чтобы имена компонентов начинались с заглавной буквы.
function Profile() {
    return (
      <img
        src="AlanHart.jpg"
        alt="Alan L. Hart"
      />
    );
  }
  
  export default function Gallery() {
    return (
      <section>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    );
  }
  