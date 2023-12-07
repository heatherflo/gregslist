import { AppState } from "../AppState.js";
import { House } from "../models/Houses.js";
import { saveState, loadState } from "../utils/Store.js";

class HouseService {
  createHouse(formData) {
    let createdHouse = new House(formData)
    console.log('created a house', createdHouse)
    AppState.houses.push(createdHouse)
    this.saveHouses()
  }


  saveHouses() {
    saveState('houses', AppState.houses)
  }
  loadHouses() {
    let loadedHouses = loadState('houses', [House]) // the [] tell loadState we ar pulling out an array, with 'Car's inside
    AppState.houses = loadedHouses
  }


}
export const houseService = new HouseService()
