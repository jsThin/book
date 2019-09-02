<!-- readyState表示连接有四种状态：
CONNECTING (0)：表示还没建立连接；
OPEN (1)： 已经建立连接，可以进行通讯；
CLOSING (2)：通过关闭握手，正在关闭连接；
CLOSED (3)：连接已经关闭或无法打开； -->
<template>
  <div>
    <input type="text" v-model="text">
    <button @click="send()">发送消息</button>
    <br>
    <button @click="closeWebSocket()">关闭websocket连接</button>
    <br>
    <div>{{data}}</div>
  </div>
</template>
<script>
import { heartBeat } from '../assets/js/HeartBeat.js'
export default {
  name: "WebSocket",
  components: {
 
  },
  data() {
    return {
      text: '',
      data: '',
      websocket: null,
      timeout: 1000,
      timeoutObj: null,
      lockReconnect: false,
      tryagain:null,
      timer:null
    }
  },
  mounted() {
    this.initWebSocket()
  },
  beforeDestroy() {
    this.onbeforeunload()
  },
  methods: {
    initWebSocket() {
      if ('WebSocket' in window) {
        this.websocket = new WebSocket('ws://127.0.0.1:9000/add')
        //连接错误
        this.websocket.onerror = this.setErrorMessage
  
        // //连接成功
        this.websocket.onopen = this.setOnopenMessage
  
        //收到消息的回调
        this.websocket.onmessage = this.setOnmessageMessage
  
        //连接关闭的回调
        this.websocket.onclose = this.setOncloseMessage
  
        //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
        window.onbeforeunload = this.onbeforeunload
      } else {
        alert('当前浏览器 Not support websocket')
      }
    },
    setErrorMessage() {
      this.data = "WebSocket连接发生错误" + '   状态码：' + this.websocket.readyState
      clearTimeout(this.tryagain)
      this.tryagain = setTimeout(() => {
        this.reconnectWebSocket()
      }, this.timeout)
    },
    setOnopenMessage() {
      this.data = "WebSocket连接成功" + '   状态码：' + this.websocket.readyState
      console.log('connected')
      // 心跳检测重置
      heartBeat.start(this.websocket)
    },
    setOnmessageMessage(event) {
      this.data = '服务端返回：' + event.data
      console.log(event.data)
      if (parseInt(event.data.code, 10) === 200) {//后台返回的type=95001的信息，表示这是一个心跳信息
        heartBeat.reset(this.websocket)
      }
    },
    setOncloseMessage() {
      this.data = "WebSocket连接关闭" + '   状态码：' + this.websocket.readyState
      console.log('close')
      clearTimeout(this.tryagain)
      this.tryagain = setTimeout(() => {
        this.reconnectWebSocket()
      }, this.timeout)
    },
    onbeforeunload() {
      this.closeWebSocket()
    },
    //websocket发送消息
    send() {
      this.websocket.send(this.text)
      this.text = ''
    },
    closeWebSocket() {
      this.websocket.close()
    },
    //重连
    reconnectWebSocket () {
        console.log('connect again')
        if (this.lockReconnect) {
        return
        };
        this.lockReconnect = true
        // 没连接上会一直重连，设置延迟避免请求过多
        this.timer && clearTimeout(this.timer);
        this.timer=setTimeout(() => {
            this.initWebSocket()
            this.lockReconnect = false
        }, this.timeout)
    },

  }
}
 
</script>
