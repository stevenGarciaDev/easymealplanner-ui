import fetch from "node-fetch";
import { RecipeType } from "../shared/types/Recipe";

const BASE_URL = "http://localhost:8080";

export async function createRecipeAsync(recipeInfo: RecipeType) {
    console.log("recipeinfo", recipeInfo);
}