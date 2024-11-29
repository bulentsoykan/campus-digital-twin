import { create } from 'zustand';

interface Store {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const useStore = create<Store>((set) => ({
  activeTab: 'overview',
  setActiveTab: (tab) => set({ activeTab: tab }),
}));