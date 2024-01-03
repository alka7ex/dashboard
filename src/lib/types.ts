// Profile type representing the structure of each item in the 'data' array
export interface Profile {
    id: string;
    email: string;
    phone: string | null;
    created_at: Date; // Assuming 'created_at' is a string for simplicity; adjust as needed
    full_name: string | null;
    user_id: string;
    city: string | null;
  }
  
  // Meta type representing the overall structure of the JSON response
  export interface Meta {
    error: null;
    data: Profile[]; // Array of Profile objects
    count: null;
    status: number;
    statusText: string;
  }
  