import axios from "axios";

// Usa a variável de ambiente ou cai para localhost se não houver variável
const baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export const apiSpring = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

export default apiSpring;
