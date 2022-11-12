<template>
  <div id="app">
    <h1>길이 {{ messageLength }}의 메시지 {{ message}}를 입력받음</h1>
    <h3>x2: {{doubleLength}}</h3>
    <input type="text"
    @keyup.enter="changeMessage"
    v-model="inputData">
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      inputData: null,
    }
  },
  components: {
  },
  computed: {
    message() {
      return this.$store.state.message
    },
    messageLength() {
      return this.$sotre.getters.messageLength
    },
    doubleLength() {
      return this.$store.getters.doubleLength
    },
  },
  methods: {
    changeMessage() {
      const newMessage = this.inputData
      this.$store.dispatch('changeMessage', newMessage)
      this.inputData = null
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
