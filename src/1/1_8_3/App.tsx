// 1_8_3 Ошибка была в том, что компонент StoryTray мутировал входной массив stories, добавляя элемент "Create Story" с помощью метода push. Это приводило к добавлению элемента при каждом рендере. Исправление заключалось в создании нового массива с помощью метода concat, который объединяет оригинальный массив историй с дополнительным элементом, не мутируя оригинальный массив.

export interface Story {
  id: string;
  label: string;
} 

const stories: Story[] = [];
export default function Wrapper(){
  return <StoryTray stories={stories}/>;
}

 function StoryTray({ stories }: { stories: Story[] }) {
   const storiesWithCreate = stories.concat({
       id: 'create',
       label: 'Create Story',
   });

   return (
       <ul>
           {storiesWithCreate.map((story) => (
               <li key={story.id}>{story.label}</li>
           ))}
       </ul>
   );
}