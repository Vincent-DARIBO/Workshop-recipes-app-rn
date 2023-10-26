import { useReducer } from 'react';
import { Category } from '../components/CardCorrection';
import { Alert } from 'react-native';
import { filter } from '../../jest.config';

type Recipe = {
  id: number;
  title: string;
  category: Category;
  isFavorite: boolean;
  description: string;
};

// reducers.js
type recipeAction = 'ADD_RECIPE' | 'EDIT_RECIPE' | 'DELETE_RECIPE' | "REMOVE_RECIPE";

export const recipesReducer = (
  recipes: Recipe[],
  action: { type: recipeAction } & Partial<Recipe>
) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return [
        ...recipes,
        {
          title: action.title,
          category: action.category,
          isFavorite: false,
          id: recipes.length + 1,
        },
      ];
    case 'EDIT_RECIPE':
      return recipes.map((recipe) => {
        if (recipe.id === action.id) {
          return { ...recipe, ...action };
        } else {
          return recipe;
        }
      });
    case 'DELETE_RECIPE':
      return recipes.filter((item) => item.id !== action.id);
  }
};

export const useRecipe = (initialState: Recipe[]) => {
  const [recipes, dispatch] = useReducer(
    recipesReducer,
    initialState,
    () => initialState
  );

  const addRecipe = (recipe: Recipe) => {
    if (!recipe.category) Alert.alert('Enter a category', '');
    if (!recipe.title) Alert.alert('Enter a title', '');
    if (!recipe.description) Alert.alert('Enter a description', '');

    dispatch({
      type: 'ADD_RECIPE',
      title: recipe.title,
      category: recipe.category,
      description: recipe.description,
    });
  };

  const removeRecipe = (id: Recipe['id']) => {
    if (!recipes.find((item: Recipe) => item.id === id)) {
      Alert.alert("cette recette n'existe pas");
      return;
    }
    dispatch({
      type: 'REMOVE_RECIPE',
      id: id,
    });
  };

  const editRecipe = (recipe: Partial<Recipe>) => {
    dispatch({
      type: 'EDIT_RECIPE',
      ...recipe,
    });
  };

  return {
    addRecipe,
    removeRecipe,
    editRecipe,
    recipes,
  };
};
