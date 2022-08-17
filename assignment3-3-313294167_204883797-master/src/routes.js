import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./pages/AboutPage"),
  },
  {
    path: "/recipe/:recipeId",
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
  },
  {
    path: "/favorites",
    name: "favorites",
    component: () => import("./pages/MyFavoritesPage"),
  },
  {
    path: "/newRecipe",
    name: "newRecipe",
    component: () => import("./pages/MakeRecipePage"),
  },
  {
    path: "/family",
    name: "family",
    component: () => import("./pages/MyFamilyPage"),
  },
  {
    path: "/private",
    name: "private",
    component: () => import("./pages/MyPrivatePage"),
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
];

export default routes;
