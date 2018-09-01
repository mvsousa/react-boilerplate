import axios from "axios";

const ROOT_URL = `${process.env.API_ROOT_URL || "http://localhost:3300"}`;

export class BaseRepository {

	async get(endpoint) {
		return await axios.get(`${ROOT_URL}${endpoint}`);
	}

	async post(endpoint, body) {
		return await axios.post(`${ROOT_URL}${endpoint}`, body);
	}
}
