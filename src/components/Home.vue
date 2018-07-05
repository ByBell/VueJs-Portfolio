<template>
  <div class="hello">
    <img src="@/assets/main-background.jpg" alt="">
    <div class="main-content">
      <h3>Développeur FullStack</h3>
      <h1>Gaétan Dubosclard</h1>
      <p>En 3ème année à Hetic, je recherche un stage de 3 mois à partir de Juillet 2018.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
  width: 90%;
  max-width: 700px;
  border-radius: 15px;
}
.main-content {
  position: relative;
  top: -2rem;
  max-width: 800px;
  margin: auto;
  background: white;
  padding: 1rem .25rem;
  border-radius: 15px;
  box-shadow: 0 2px 15px rgba(0,0,0,.1);
}
</style>
