import { useMutation } from "@tanstack/react-query";

// Mock hook to satisfy the interactive requirement on the static frontend
export function useSubscribeNewsletter() {
  return useMutation({
    mutationFn: async (email: string) => {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      if (!email || !email.includes("@")) {
        throw new Error("Please enter a valid email address.");
      }
      
      return { success: true, message: "Successfully subscribed to the newsletter!" };
    },
  });
}
