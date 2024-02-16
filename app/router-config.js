import { ExamplesController } from "./controllers/ExamplesController.js";
import { HomeController } from "./controllers/HomeController.js";
import { QuestionController } from "./controllers/QuestionController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [QuestionController],
    view: ''
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])