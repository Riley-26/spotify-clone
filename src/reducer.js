export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    // REMOVE AFTER FINISHED
    //token: "BQAxMXFj_MrWSnU_68dy_CB0L9knAY9r7m_W2XpFazd9lKGgyWE8c8lZsGnO9Q9sarzoWWX4uEA_7OlYi2BjbDNtWtJlhdBzUfGPFcNyS3pSYAwFk2WKdI_rLuj5keBTftRszHcrsysJQ0-N1UZWy4Y6lnZ2oLYHw_iI8_LAs0NXqa00JIYJUF4zrx8NomSd",
};

const reducer = (state, action) => {
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
  
      case "SET_PLAYING":
        return {
          ...state,
          playing: action.playing,
        };
  
      case "SET_ITEM":
        return {
          ...state,
          item: action.item,
        };
  
      case "SET_DISCOVER_WEEKLY":
        return {
          ...state,
          discover_weekly: action.discover_weekly,
        };
  
      case "SET_TOP_ARTISTS":
        return {
          ...state,
          top_artists: action.top_artists,
        };
  
      case "SET_TOKEN":
        return {
          ...state,
          token: action.token,
        };
  
      case "SET_SPOTIFY":
        return {
          ...state,
          spotify: action.spotify,
        };
  
      case "SET_PLAYLISTS":
        return {
          ...state,
          playlists: action.playlists,
        };
      default:
        return state;
    }
};
  
export default reducer