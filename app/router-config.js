import { CarsController } from "./controllers/CarsController.js";
import { ExamplesController } from "./controllers/ExamplesController.js";
import { HomeController } from "./controllers/HomeController.js";
import { HousesController } from "./controllers/HousesController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [HomeController, ExamplesController],
    view: /*html*/`
<div class="row p-3 bg-info">
  <div class="col-12 text-center">
    <h1>
      Welcome to Gregslist
    </h1>
  </div>
  <div class="col-12 text-center">
    <a href="#/cars">cars 🚗</a>
    <a href="#/houses">houses 🏠</a>
    <a href="#/jobs">jobs 🧑‍🍳</a>
  </div>
</div>
`
  },
  {
    path: '#/cars',
    controllers: [CarsController],
    // view: `
    // <section>Cars Page</section>
    // <section id="cars-list" class="row">
    // </section>
    // `
    view: 'app/views/CarsView.html'
  },
  {
    path: '#/houses',
    controllers: [HousesController],
    view: `app/views/HousesView.html`
  },
  {
    path: '#/jobs',
    view: `You are on the jobs 🧑‍🍳 page`
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])