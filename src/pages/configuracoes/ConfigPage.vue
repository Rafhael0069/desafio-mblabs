<template>
  <v-container>
    <v-card>
      <v-row justify="center">
        <v-col cols="12">
          <v-card-text>
            <v-card-title> Exibir cursos apandes de... </v-card-title>
            <v-checkbox
              v-model="alura"
              label="Alura"
            ></v-checkbox>
            <v-checkbox
              v-model="coursera"
              label="Coursera"
            ></v-checkbox>
            <v-checkbox
              v-model="udemy"
              label="Udemy"
            ></v-checkbox>
          </v-card-text>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" class="d-flex justify-center align-center">
          <v-card-actions>
            <v-btn class="primary">salvar</v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "ConfigPage",

  data() {
    return {
        alura: true,
        coursera: true,
        udemy: true,
    };
  },
};
</script>
