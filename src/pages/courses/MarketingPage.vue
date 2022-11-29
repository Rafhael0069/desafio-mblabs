<template>
  <v-container>
    <v-row dense>
      <v-col
        v-for="(item, index) in items"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        xl="3"
      >
        <v-card>
          <v-row class="ma-0 pa-0" @click="expand(index)">
            <v-col cols="4" class="pa-3">
              <v-img :src="item.image" height="90" width="90"> </v-img>
            </v-col>
            <v-col cols="8">
              <h3>{{ item.titulo }} - {{ item.plataforma }}</h3>
              <p>{{ item.resumo }}</p>
            </v-col>

            <v-expand-transition>
              <div v-if="item.expand">
                <v-card-text>
                  <p>{{ item.descricao }}</p>
                </v-card-text>
              </div>
            </v-expand-transition>

          </v-row>
          <v-card-actions>
            <v-btn block class="primary"> ir para pagina do curso </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "MarketingPage",

  data() {
    return {
      items: [
        {
          image:
            "https://encceja2022.inf.br/wp-content/uploads/2022/08/des-7.jpg",
          titulo: "curso de Marketing 1",
          plataforma: "Alura",
          resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
          expand: false,
          descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
        },
        {
          image:
            "https://www.primecursos.com.br/arquivos/uploads/2018/08/marketing-digital.jpg",
          titulo: "curso de Marketing 2",
          plataforma: "Udemy",
          resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
          expand: false,
          descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
        },
        {
          image:
            "https://certificadocursosonline.com/wp-content/uploads/2019/07/Capa-do-curso-de-marketing-digital.jpg",
          titulo: "curso de Marketing 3",
          plataforma: "Alura",
          resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
          expand: false,
          descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
        },
        {
          image:
            "https://inteligenciaetecnologia.com.br/wp-content/uploads/2020/10/marketingdigital-online.jpg",
          titulo: "curso de Marketing 4",
          plataforma: "Coursera",
          resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
          expand: false,
          descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
        },
        {
          image:
            "https://images.educamaisbrasil.com.br/content/noticias/aprenda-marketing-digital-com-o-google_g.jpg",
          titulo: "curso de Marketing 6",
          plataforma: "Coursera",
          resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
          expand: false,
          descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
        },
        {
          image:
            "https://clubedevagas.com/wp-content/uploads/2022/08/Curso-de-Marketing-Digital.jpg",
          titulo: "curso de Marketing 7",
          plataforma: "Udemy",
          resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
          expand: false,
          descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
        },
        {
          image: "https://i.ytimg.com/vi/9o9DlyWs-eQ/maxresdefault.jpg",
          titulo: "curso de Marketing 8",
          plataforma: "Alura",
          resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
          expand: false,
          descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
        },
        {
          image:
            "https://witu.digital/wp-content/uploads/2020/04/curso-marketing-digital-witu.png",
          titulo: "curso de Marketing 9",
          plataforma: "Udemy",
          resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
          expand: false,
          descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
        },
        {
          image:
            "https://sites.pucgoias.edu.br/extensao/cursosdeextensao/wp-content/uploads/sites/5/2017/02/Curso-Marketing-Digital-para-PME.jpg",
          titulo: "curso de Marketing 10",
          plataforma: "Udemy",
          resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
          expand: false,
          descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
        },
      ],
    };
  },
  methods: {
    expand(index) {
      this.items[index].expand = !this.items[index].expand;
    },
  },
};
</script>
