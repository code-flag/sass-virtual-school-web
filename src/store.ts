import { create } from "zustand";

type CounterStore = {
    count: number;
    increment: () => void;
    decrement: () => void;
    menu: boolean;
    setMenu: () => void;
}

type OffsetStore = {
  offset: number;
  setOffset: (offset: number) => void;
};

type AuthStore = {
    success: boolean;
    setSuccess: (open: boolean) => void;
    successModal: boolean;
    setSuccessModal: (open: boolean) => void;
    token: string;
    setToken: (token: string) => void;
    userId: string;
    setUserId: (userId: string) => void;
};


const token =
  typeof window !== "undefined"
    ? localStorage.getItem("token")
    : null;

const userId =
  typeof window !== "undefined"
    ? localStorage.getItem("userId")
    : null;

// Counter Store
export const useCounterStore = create<CounterStore>((set) => ({
    count: 0,
    increment: () => {
        set((state) => ({ count: state.count + 1 }));
    },
    decrement: () => {
        set((state) => ({ count: state.count - 1 }));
    },
    menu: false,
    setMenu: () => {
        set((state) => ({ menu: !state.menu }));
    }
}));



// Offset Store
export const useOffsetStore = create<OffsetStore>((set) => ({
  offset: 0, 
  setOffset: (offset) => set({ offset }),
}));


// Auth Store
export const useAuthStore = create<AuthStore>((set) => ({
    success: false,
    setSuccess: (open) => {
      set({ success: open });
    },
    successModal: false,
    setSuccessModal: (open) => {
      set({ successModal: open });
    },
    token: token!, 
    setToken: (token) => {
      localStorage.setItem('token', token); // Save token to localStorage on login
      set({ token });
    },
    userId: userId!,
    setUserId: (userId) => {
      localStorage.setItem('userId', userId); // Save userId to localStorage on login
      set({ userId });
    },
}));

