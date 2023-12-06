import { AppState } from "../AppState.js"


export class HousesController {
  constructor() {
    console.log("let's sell some houses")
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
    // event.preventDefault()
    console.log('create a house', '🏠')
  }


}