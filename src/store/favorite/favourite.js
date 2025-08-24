import { action, persist } from "easy-peasy";

const favouriteModel = persist({
  items: [],
  Addfav: action((state, playlistId) => {
    state.items.push(playlistId);
  }),
  removeFav: action((state, playlistId) => {
    state.items = state.items.filter((pId) => pId.playlistId !== playlistId);
  }),
});
export default favouriteModel;
