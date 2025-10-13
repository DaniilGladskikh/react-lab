// 1_6_3 В компоненте Drink заменены тернарные операторы на один условный оператор if для определения значений plantPart, caffeineContent и age в зависимости от значения name. 

function Drink({ name }: { name: string }) {
  let plantPart;
  let caffeineContent;
  let age;

  if (name === 'tea') {
    plantPart = 'leaf';
    caffeineContent = '15–70 mg/cup';
    age = '4,000+ years';
  } else {
    plantPart = 'bean';
    caffeineContent = '80–185 mg/cup';
    age = '1,000+ years';
  }

  return (
      <section>
          <h1>{name}</h1>
          <dl>
              <dt>Part of plant</dt>
              <dd>{plantPart}</dd>
              <dt>Caffeine content</dt>
              <dd>{caffeineContent}</dd>
              <dt>Age</dt>
              <dd>{age}</dd>
          </dl>
      </section>
  );
}

export default function DrinkList() {
  return (
      <div>
          <Drink name="tea" />
          <Drink name="coffee" />
      </div>
  );
}
