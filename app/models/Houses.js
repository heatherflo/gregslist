import { generateId } from "../utils/GenerateId.js"



export class House {
  constructor(data) {
    this.id = data.id || generateId()
    this.year = data.year
    this.name = data.name
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
    this.needsConstruction = data.needsConstruction
  }



  get houseCard() {
    return `<div class="col-6 col-md-4">
    <div class="card">
      <img class="img-fluid listing-img rounded-top"
        src="${this.imgUrl}"
        alt="">
      <div class="p-2">
        <p>${this.name} | ${this.description} | Bathrooms ${this.bedrooms} | Bathrooms ${this.bathrooms} </p>
        <p>$${this.price}</p>
      
      </div>
    </div>
  </div>`
  }

}