import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
  dates?: string; // format: YYYY-MM-DD,YYYY-MM-DD
}
interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
  setDates: (dates: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
  setDates: (dates) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, dates } })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store", useGameQueryStore);
}
export default useGameQueryStore;
