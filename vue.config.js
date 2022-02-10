// const target = 'http://localhost:8080'; // proxy 요청을 보낼 서버 주소

module.exports = {
    chainWebpack: config => {
        config.plugins.delete('prefetch');
    }
    // devServer: {
    //     port: 8081,
    //     proxy: {
    //         // proxy 요청을 보낼 api 시작 부분
    //         '^/api': {
    //             target,
    //             changeOrigin: true
    //         }
    //     }
    // }
}