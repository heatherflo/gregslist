import { Car } from './models/Car.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { House } from './models/Houses.js'
import { generateId } from './utils/GenerateId.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  // NOTE before we converted the Car constructor over to use data
  // cars = [
  //   new Car('Bat', 'Mobile', 1983, 'black', 'https://robbreport.com/wp-content/uploads/2022/11/AS_1989-batmobile-w-b-2.jpg?w=1000', 2000000000, true),
  //   new Car('Ford', 'Model T', 1922, 'red', 'https://cdn.dealeraccelerate.com/vcc/1/607/26914/1920x1440/1922-ford-model-t', 50, false)
  // ]

  cars = [
    new Car({
      make: 'Bat',
      model: 'Mobile',
      year: 1983,
      color: 'black',
      imgUrl: 'https://robbreport.com/wp-content/uploads/2022/11/AS_1989-batmobile-w-b-2.jpg?w=1000',
      price: 2000000000,
      isElectric: true
    }),
    new Car({
      make: 'Ford',
      model: 'Model T',
      year: 1922,
      color: 'red',
      imgUrl: 'https://cdn.dealeraccelerate.com/vcc/1/607/26914/1920x1440/1922-ford-model-t',
      price: 50,
      isElectric: false
    })
  ]



  houses = [
    new House({
      id: generateId(),
      year: 1984,
      name: 'Lawyer St',
      bedrooms: 4,
      bathrooms: 3,
      sqft: 4000,
      price: 400000,
      description: 'house by the sea',
      imgUrl: 'https://coolstays.imgix.net/76766.jpg?&w=959&h=700&fit=crop&crop=focalpoint&q=70',
      needsConstruction: false
    }),
    new House({
      id: generateId(),
      year: 1902,
      name: 'Confirmation Rd',
      bedrooms: 2,
      bathrooms: 1.5,
      sqft: 1200,
      price: 60000,
      description: 'lots of farm land',
      imgUrl: 'https://www.landthink.com/wp-content/uploads/tips-for-buying-an-old-farmhouse.jpg',
      needsConstruction: true,
    }),
    new House({
      id: generateId(),
      year: 1972,
      name: '1st St',
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1400,
      price: 120000,
      description: 'modern house in the city',
      imgUrl: 'https://cdn.designrulz.com/wp-content/uploads/2015/06/designrulz-city-beach-house-4d-designs-4.jpg',
      needsConstruction: false
    }),
    new House({
      id: generateId(),
      year: 1955,
      name: 'Lincoln Ave',
      bedrooms: 3,
      bathrooms: 1,
      sqft: 4000,
      price: 140000,
      description: 'bungalow in the suburbs',
      imgUrl: 'https://www.shutterstock.com/shutterstock/photos/701678482/display_1500/stock-photo-suburban-bungalow-home-blue-sky-usa-701678482.jpg',
      needsConstruction: true
    })
  ]

}

export const AppState = createObservableProxy(new ObservableAppState())