import { create } from "zustand";

export const useHSrent = create((set) => ({
  rents: [],
  setRents: (rents) => set({ rents }),
  createRent: async (newRent) => {
  if (!newRent.HS_rent || !newRent.water || !newRent.electricity) {
    return { success: false, message: "Please fill in all fields." };
  }
  try {
    const res = await fetch("/api/rents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRent),
    });

    if (!res.ok) {
      const errorData = await res.json();
      return { success: false, message: errorData.message || "Error occurred" };
    }

    const data = await res.json();
    set((state) => ({ rents: [...state.rents, data.data] }));
    return { success: true, message: "Product created successfully" };
  } catch (err) {
    console.error("Error creating rent:", err);
    return { success: false, message: "Failed to create rent info" };
  }
},
  fetchRents: async () => {
    const res = await fetch("/api/rents");
    const data = await res.json();
    set({ rents: data.data });
  },
  deleteRent: async (pid) => {
    const res = await fetch(`/api/rents/${pid}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    // update the ui immediately, without needing a refresh
    set((state) => ({
      rents: state.rents.filter((rents) => rents._id !== pid),
    }));
    return { success: true, message: data.message };
  },
  updateRent: async (pid, updatedRent) => {
    const res = await fetch(`/api/rents/${pid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedRent),
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    // update the ui immediately, without needing a refresh
    set((state) => ({
      rents: state.rents.map((rent) =>
        rent._id === pid ? data.data : rent
      ),
    }));

    return { success: true, message: data.message };
  },
}));
