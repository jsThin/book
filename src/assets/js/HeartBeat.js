export const heartBeat = {
    timeout: 50000, 
    timeoutObj: null,
    serverTimeoutObj: null,
    reset: function (ws) {
      console.log('reset')
      clearTimeout(this.timeoutObj)
      clearTimeout(this.serverTimeoutObj)
      this.start(ws)
    },
    start: function (ws) {
      console.log('start')
      var self = this
      this.timeoutObj && clearTimeout(this.timeoutObj)
      this.serverTimeoutObj && clearTimeout(this.serverTimeoutObj)
      this.timeoutObj = setTimeout(function () {
        // 这里发送一个心跳，后端收到后，返回一个心跳消息，
        // onmessage拿到返回的心跳就说明连接正常
        var message = {
          'data': {
            'type': '95001', // 事件类型编码
            'info': '{}', // 消息主体内容,业务组件自定义,可为空字符串或JSON字符串
            'time': new Date().getTime(), // 时间
            'deviceId': '', // 设备编码
            'traceId': '', // 染色ID
            'spanId': '0', // 日志ID
            'terminalID': '' // 前端页面的终端编码（唯一），可为空串
          }
        }
        ws.send(JSON.stringify(message))//数据格式这里默认是字符串，是字符串还是JSON格式看你们的后台开发而定
        self.serverTimeoutObj = setTimeout(function () {
          ws.onclose()
        }, self.timeout)
      }, this.timeout)
    }
}