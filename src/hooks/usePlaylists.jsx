import React, { useEffect, useState } from "react";
import storage from "../utils/Storage";
import { useStoreActions, useStoreState } from "easy-peasy";

const usePlaylists = () => {
  const Playlistaction = useStoreActions((action) => action.playlist);
  const STORAGE_key = "cy____playlist___state";
  const playlistState = useStoreState((state) => state.playlist);
  const [state, setState] = useState(playlistState);

  useEffect(() => {
    const state = storage.get(STORAGE_key);
    if (state) {
      setState({ ...state });
    }
  }, []);

  useEffect(() => {
    if (state !== playlistState) {
      storage.save(STORAGE_key, state);
    }
  }, [state]);

  const getPlaylistById = async (playlistId) => {
    Playlistaction.getPlaylist(playlistId);
  };

  return {
    playlists: playlistState.data,

    getPlaylistById,
  };
};

export default usePlaylists;
