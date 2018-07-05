<template>
  <div class="contact">
    <h1>{{ msg }}</h1>
    <p>Par <a v-bind:href="this.$parent.mail">mail</a>, <a v-bind:href="this.$parent.linkedin">LinkedIn</a> ou par ce formulaire.</p>
    <form action="">
      <input class="input-half" type="text" name="nom" placeholder="Nom">
      <input class="input-half" type="text" name="prenom" placeholder="Prénom">
      <input class="input-full" type="email" name="email" placeholder="Email">
      <textarea class="input-full" name="text" id="" cols="30" rows="10" placeholder="Message"></textarea>

      <input type="submit" value="Envoyer">
    </form>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      msg: "N'hésitez pas à me contacter"
    }
  },
  methods: {
    checkForm: function (e) {
      if (this.name && this.age) {
        return true
      }
      this.errors = []
      if (!this.name) {
        this.errors.push('Nom requis')
      }
      if (!this.age) {
        this.errors.push('Age requis')
      }
      e.preventDefault()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
p {
  margin-bottom: 3rem;
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
form {
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
}

input, textarea {
  padding: 1rem;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 2px 10px rgba(0,0,0,.1);
  margin-bottom: 1rem;
  font-family: inherit;
}
.input-half {
  width: 40%;
}
.input-full {
  width: 100%;
}

input[type="submit"]{
  margin: auto;
  margin-top: 1rem;
  cursor: pointer;
  width: 30%;
}
input[type="submit"]:hover {
  background: rgba(0,0,0,.025);
}

@media only screen and (max-width: 768px) {
    .input-half {
      width: 100%;
    }
    input[type="submit"] {
      width: auto;
    }
}
</style>
