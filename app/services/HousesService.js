import { AppState } from "../AppState.js";
import { House } from "../models/Houses.js";

class HouseService {
  createHouse(formData) {
    let createdHouse = new House(formData)
    console.log('created a house', createdHouse)
    // AppState.houses.push(this.createdHouse))
  }
}

