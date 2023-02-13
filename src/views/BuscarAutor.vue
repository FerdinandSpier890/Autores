<template>
    <div>
      <div>
      <navigation/>
      <h1>Busqueda de Autores por GUID</h1>
    </div>
        <v-col cols="12" md="4">
            <v-text-field
            v-model="autorLibroGuid"
            label="Escribe el Guid del Autor"
            outlined
            required></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
            <v-btn block outlined depressed @click="Buscar" color="success"> Buscar </v-btn>
        </v-col>
      <v-data-table
        v-if="record"
        :headers="headers"
        :items="record"
        :items-per-page="5"
      ></v-data-table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        autorLibroGuid: "",
        record: null,
        headers: [
          { text: "ID", align: "left", value: "autorLibroId" },
          { text: "Nombre", value: "nombre" },
          { text: "Apellido", value: "apellido" },
          { text: "Fecha de Nacimiento", value: "fechaNacimiento" },
          { text: "GUID", value: "autorLibroGuid" },
        ]
      };
    },
    methods: {
      async Buscar() {
        const response = await fetch(`https://localhost:44320/api/Autor/${this.autorLibroGuid}`);
        if (!response.ok) {
          this.record = null;
          alert('GUID Incorrecta')
          return;
        }
        const data = await response.json();
        this.record = [data];
      }
    }
  };
  </script>