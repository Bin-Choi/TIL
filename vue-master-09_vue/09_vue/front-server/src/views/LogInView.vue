<template>
  <div>
    <h1>LogIn Page</h1>
    <form>
      <label for="username">username : </label>
      <input type="text" id="username"><br>

      <label for="password"> password : </label>
      <input type="password" id="password"><br>

      <input type="submit" value="logIn">
    </form>
  </div>
</template>

<script>
export default {
  name: 'LogInView',
  data() {
  },
  methods: {
  }
}
</script>
