
export default (state, action) => {
  switch(action.type) {
    case 'GET_RECIPES':
      return {
        ...state, 
        recipes: action.payload,
        loading: false,
      }
    case 'GET_RECIPE':
      return {
        ...state,
        currentRecipe: action.payload,
      }
    case 'UPDATE_RECIPE':
      return {
        ...state,
        recipes: state.recipes.map(recipe => recipe._id === action.payload._id ? {...action.payload} : recipe )
      }
    case 'ADD_RECIPE':
      return {
        ...state,
        recipes: [action.payload, ...state.recipes]
      }
    case 'ADD_RECIPE_VERSION':
      return {
        ...state,
        versions: [action.payload, ...state.versions]
      }
    case 'GET_VERSIONS_BY_RECIPE_ID':
      return {
        ...state,
        versions: action.payload,
        loading: false,
      }
    case 'GET_VERSION_BY_ID':
      return {
        ...state,
        currentVersion: action.payload,
        loading: false,
      }
    case 'RECIPES_ERROR':
      return {
        ...state,
        error: action.payload
      }
    default: 
      return state

  }
}