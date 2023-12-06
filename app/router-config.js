import { CarsController } from "./controllers/CarsController.js";
import { ExamplesController } from "./controllers/ExamplesController.js";
import { HomeController } from "./controllers/HomeController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [HomeController, ExamplesController],
    view: /*html*/`
<div class="row p-3">
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
    view: `You are on the houses 🏠 page`
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