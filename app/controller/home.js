const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    // 获取当前上下文的引用
    const { ctx } = this;

    // 打印请求对象
    console.log(ctx.request);

    // 将上下文对象转换为JSON字符串，并赋值给响应体
    ctx.body = JSON.stringify(ctx.URL);
  }
  async version() {
    const { ctx } = this;
    // 打印请求对象
    // console.log(this);
    ctx.body = await this.app.mysql.query('select count(*) from city;');
  }
  async releaseVersion() {
    const { ctx } = this;
    ctx.body = {
      data: 'alpha',
      code: 200,
      message: 'success',
      Headers: ctx.headers,
    };
  }
}

module.exports = HomeController;
