import MusicChetVue from './music-chet-vue/index.vue'

const myPlugin = {
  // 安装插件
  install(app, options) {
    // 配置此应用
    app.component("MusicChetVue", MusicChetVue);
    // console.log('查看配置',options)
  }
}


export default myPlugin
