<template>
    <div>
      <navigation/>
      <h1>Autores Registrados</h1>
      <v-data-table
        :headers="headers"
        :items="autores"
        class="elevation-2"
      ></v-data-table>
    </div>
  </template>
  <script>
  export default {
    data () {
      return {
        headers: [
          { text: 'Id Autor', value: 'autorLibroId' },
          { text: 'Nombre', value: 'nombre' },
          { text: 'Apellido', value: 'apellido' },
          { text: 'Fecha de Nacimiento', value: 'fechaNacimiento' },
          { text: 'GUID', value: 'autorLibroGuid' },
        ],
        autores: [],
        search: '',
        pagination: {},
        selected: []
      }
    },
    created () {
      this.mostrarAutores()
    },
    methods: {
      mostrarAutores () {
        fetch('https://localhost:44320/api/Autor/')
          .then((response) => response.json())
          .then((data) => (this.autores = data))
      }
    }
  }
  </script>
  