import { AppState } from "../AppState.js"
import { houseService } from "../services/HousesService.js"
import { getFormData } from "../utils/FormHandler.js"

export class HousesController {
  constructor() {
    console.log("let's sell some houses")
    houseService.loadHouses()
    this.drawHouseCard()
    AppState.on('houses', this.drawHouseCard)
  }

  drawHouseCard() {
    console.log('drawing houses')
    const houses = AppState.houses
    let content = ''
    houses.forEach(house => content += house.houseCard)
    document.getElementById('houses-list').innerHTML = content
  }
  createHouse() {
    event.preventDefault()
    console.log('create a house', '🏠')
    const form = event.target
    const formData = getFormData(form)
    formData.price = parseInt(formData.price)
    formData.year = parseInt(formData.year)
    houseService.createHouse(formData)
    // @ts-ignore
    form.reset()
  }


}