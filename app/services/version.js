const Service = require('egg').Service;

class VersionService extends Service {
  async getVersion() {
    const data = await this.app.mysql.query('select count(*) from city;');
    return data;
  }
}

module.exports = VersionService;
