import { create } from 'zustand';

type Store = {
  selectedItems: string[],
  toggleItem: (id: string) => void;
  clearItems: () => void;
}

export const useCardStore = create<Store>((set, get) => ({
  selectedItems: [],
  toggleItem: (id) => {
    const current = get().selectedItems;
    const exists = current.includes(id);
    const newItems = exists ? current.filter((item) => item !== id) : [...current, id];
    set({ selectedItems: newItems })
  },
  clearItems: () => set({ selectedItems: []})
}))
