<template>
  <div>
    <div>
      <navigation />
      <h1>Registro de Autores</h1>
    </div>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="nombre"
              outlined
              label="Nombre"
              required
            ></v-text-field>
          </v-col>
          <br />
          <v-col cols="12" md="4">
            <v-text-field
              v-model="apellido"
              label="Apellido"
              outlined
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="fechaNacimiento"
              label="Fecha de Nacimiento"
              outlined
              required
            ></v-text-field>
          </v-col>
          <br />
          <v-col cols="12" md="4">
            <v-btn depressed block outlined @click="Guardar" color="success">
              Registrar Autor
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>
<script>
export default {
  data: () => ({
    valid: false,
    nombre: "",
    apellido: "",
    fechaNacimiento: new Date().toISOString(),
  }),
  methods: {
    Guardar() {
      fetch("https://localhost:44320/api/Autor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: this.nombre,
          apellido: this.apellido,
          fechaNacimiento: this.fechaNacimiento,
        }),
      })
        .then((res) => res.text())
        .then((data) => {
          this.$router.push("/lista");
          alert("Autor Registrado");
        });
    },
  },
};
</script>
