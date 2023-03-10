import { DEBUG } from "./../config.js";
import { Controller } from "./controller.js";
import model from "./../model.js";
import detectOsView from "./../view/detectOsView.js";
import styleBtnView from "./../view/styleBtnView.js";
import navView from "./../view/navView.js";

class IndexController extends Controller {

  constructor() {
    super();
    navView.addHandlerRender(this.#controlIndex.bind(this));
  }

  async #controlIndex() {
    try {
      this._setPage();
      const data = await model.getPage(this._page ?? 'index/index');
      DEBUG && console.log(data);
      const detectOsEl = detectOsView.createContent();
      const styleBtnEl = styleBtnView.createContent();
      navView.createContent(data, detectOsEl, styleBtnEl);
    } catch (err) { }
  }
}

new IndexController();
