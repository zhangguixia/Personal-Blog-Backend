const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'aip接口......';
  }
}

module.exports = HomeController;

// egg-mysql  数据库