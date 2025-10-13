// 1_7_2 Создан список рецептов с использованием вложенных вызовов map. Для каждого рецепта выводится его название в виде <h2> и список ингредиентов в виде <ul>. Внешний map обрабатывает массив рецептов, а внутренний map обрабатывает массив ингредиентов для каждого рецепта.

import { recipes } from './data';

export default function RecipeList() {
    return (
        <div>
            <h1>Recipes</h1>
            {recipes.map((recipe) => (
                <article key={recipe.id}>
                    <h2>{recipe.name}</h2>
                    <ul>
                        {recipe.ingredients.map((ingredient) => (
                            <li key={ingredient}>
                                {ingredient}
                            </li>
                        ))}
                    </ul>
                </article>
            ))}
        </div>
    );
}
