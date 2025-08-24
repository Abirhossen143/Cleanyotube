import { action, persist } from "easy-peasy";

const recentModel = persist({
  items: [],
  AddRecent: action((state, playlistId) => {
    state.items.push(playlistId);
  }),
  removeRecent: action((state, playlistId) => {
    state.items = state.items.filter((pId) => pId.playlistId !== playlistId);
  }),
});
export default recentModel;
