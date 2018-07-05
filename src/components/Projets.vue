<template>
  <div class="post">
    <div class="loading" v-if="loading">
      Chargement...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="portfolios" v-for="portfolio in portfolios" :key="portfolio.id" class="content">
      <h2><a v-bind:href="portfolio.image">{{ portfolio.title }}</a></h2>
      <p>{{ portfolio.description }}</p>
      <ul>
        <li v-for="skill in portfolio.skills" :key="skill">
          {{ skill }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projets',
  data () {
    return {
      loading: false,
      portfolios: null,
      error: null
    }
  },
  created () {
    // quand la vue est créé on lance une requête fetch
    this.fetchData()
  },
  watch: {
    $route: 'fetchData'
  },
  methods: {
    fetchData () {
      this.error = this.portfolios = null
      this.loading = true
      fetch('http://vps546170.ovh.net:3000/api/Portfolios')
        .then(response => {
          return response.json()
        })
        .then(data => {
          this.loading = false
          this.portfolios = data
        })
        .catch(error => {
          this.error = error
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  font-size: .75rem;
}
li {
  display: inline-block;
  margin: 0 10px;
  background: rgba(165, 165, 165, 0.1);
  border-radius: 5px;
  padding: .5rem 1rem;
}
a {
  color: #42b983;
}

.content {
  margin: 2rem 0;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(165, 165, 165, 0.1);
}
.content:last-of-type{
  border-bottom: none;
}
</style>
