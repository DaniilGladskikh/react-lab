// 1_7_3 Был извлечен компонент Recipe, который принимает пропсы id, name и ingredients. Внешний key размещен в компоненте RecipeList при вызове map, потому что React требует уникальный ключ для каждого элемента в списке. Key должен находиться на верхнем уровне элемента списка, а не внутри компонента Recipe, чтобы React мог правильно отслеживать изменения в списке.

import { recipes } from './data';

type RecipeProps = {
    id: string;
    name: string;
    ingredients: string[];
}

function Recipe({ id, name, ingredients }: RecipeProps) {
    return (
        <div key={id}>
            <h2>{name}</h2>
            <ul>
                {ingredients.map((ingredient) => (
                    <li key={ingredient}>
                        {ingredient}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function RecipeList() {
    return (
        <div>
            <h1>Recipes</h1>
            {recipes.map((recipe) => (
                <Recipe
                    key={recipe.id}
                    id={recipe.id}
                    name={recipe.name}
                    ingredients={recipe.ingredients}
                />
            ))}
        </div>
    );
}