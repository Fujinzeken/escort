import { create } from "zustand";
interface ProfileState {
  userProfile: {};
  setUserProfile: (description: string) => void;
}
const useProfile = create<ProfileState>((set) => ({
  userProfile: {},
  setUserProfile: (value) => set({ userProfile: value }),
}));

export default useProfile;
