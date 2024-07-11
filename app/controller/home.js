const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async list() {
    const { ctx } = this;
    ctx.body = '<h1>ashublog.ink</h1>';
  }
}

module.exports = HomeController;


// RESTful 一种接口设计风格（APP、前后端,简单和约束性。）
// 请求方式：get获取资源，post新建资源 put更新资源 delete删除资源


