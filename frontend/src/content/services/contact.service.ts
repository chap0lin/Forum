import axios from "axios";

const API_URL = "http://localhost:3000/api"; // depois ajusta se tiver api global

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export const contactService = {
  async sendMessage(data: ContactPayload) {
    const response = await axios.post(
      `${API_URL}/contact`,
      data
    );

    return response.data;
  },
};
