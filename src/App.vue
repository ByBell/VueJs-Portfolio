<template>
  <div id="app">
    <div class="header-container">
      <header>
        <span><router-link :to="{ name: 'Home'}"><b>Gaétan</b>Dubosclard</router-link></span>
        <ul>
          <!-- <li><router-link :to="{ name: 'Home'}">Home</router-link></li> -->
          <li><router-link :to="{ name: 'Projets'}">Projets</router-link></li>
          <li><router-link :to="{ name: 'Contact'}">Contact</router-link></li>
        </ul>
      </header>
    </div>
    <router-view/>
    <footer>
      <ul>
        <li><a v-bind:href="github">GitHub</a></li>
        <li><a v-bind:href="linkedin">LinkedIn</a></li>
        <li><a v-bind:href="mail">Mail</a></li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      github: 'https://github.com/ByBell',
      linkedin: 'https://www.linkedin.com/in/gaetan-dubosclard/',
      mail: 'mailto:gaetan.dubosclard@icloud.com'
    }
  }
}
</script>

<style>
#app {
  font-size: 16px;
  font-family: 'Avenir', 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 8rem;
  padding: 0 8.5rem;
}

header span {
  font-size: 1.25rem;
}
.header-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
header {
  padding-bottom: 0;
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
  align-items: center;
  padding: 3rem;
}
header a, footer a {
  text-decoration: none;
  color: inherit;
  background: transparent;
}
header li a, footer li a {
  padding: .5rem;
  transition: all 500 ease;
}
header li a:hover, footer li a:hover {
  text-decoration: underline;
  padding-bottom: 1rem;
}
header ul, footer ul {
  padding: 0;
}
header li, footer li {
  list-style-type: none;
  margin-right: 1rem;
  display: inline-block;
}
footer ul {
  border-top: 1px solid rgba(165, 165, 165, 0.3);
  /* border-top: 1px solid #2c3e5036; */
  padding-top: 2rem;
  margin-top: 3rem;
}

@media only screen and (max-width: 768px) {
    #app {
        padding: 0;
    }
}

</style>
