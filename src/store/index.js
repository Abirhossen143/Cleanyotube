import { createStore } from "easy-peasy";

import favouriteModel from "./favorite/favourite";
import recentModel from "./recent/recentModel";
import playlistModel from "./Playlistmodel/playlistModel";

const store = createStore({
  playlist: playlistModel,
  favourite: favouriteModel,
  recent: recentModel,
});

export default store;
