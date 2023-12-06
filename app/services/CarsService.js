import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js"
import { loadState, saveState } from "../utils/Store.js";




class CarsService{
  createCar( formData){
    let createdCar = new Car(formData)
    console.log('created a car', createdCar);
    AppState.cars.push(createdCar)
    this.saveCars()
  }

  removeCar(carId){
    const indexToRemove = AppState.cars.findIndex(car => car.id == carId)
    if(indexToRemove > -1){
      AppState.cars.splice(indexToRemove,1)
      this.saveCars()
    }
  }

  saveCars(){
    saveState('cars', AppState.cars)
  }

  loadCars(){
    let loadedCars = loadState('cars', [Car]) // the [] tell loadState we ar pulling out an array, with 'Car's inside
    AppState.cars = loadedCars
  }

}

export const carsService = new CarsService()