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
  name: "JavaPage",
  data() {
    return {
      items: [
        {
          image:
            "https://arquivo.devmedia.com.br/cursos/imagem/curso_o-que-e-java_2028.png",
          titulo: "curso de Java 1",
          plataforma: "Alura",
          resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
          expand: false,
          descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
        },
        {
          image:
            "https://www.cursosabeline.com.br/webroot/cur_cache/curso-com-certificado-de-java-na-pratica-1567625985-870-6b2b825e.jpg",
          titulo: "curso de Java 2",
          plataforma: "Udemy",
          resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
          expand: false,
          descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
        },
        {
          image: "https://i.ytimg.com/vi/sTX0UEplF54/maxresdefault.jpg",
          titulo: "curso de Java 3",
          plataforma: "Alura",
          resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
          expand: false,
          descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
        },
        {
          image:
            "https://www.educamundo.com.br/uploads/courses/20170921162923java.jpg",
          titulo: "curso de Java 4",
          plataforma: "Coursera",
          resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
          expand: false,
          descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
        },
        {
          image:
            "https://www.devmedia.com.br/arquivos/Salas/Linguagem/Java/19/2319/thumb.jpg",
          titulo: "curso de Java 6",
          plataforma: "Coursera",
          resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
          expand: false,
          descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
        },
        {
          image:
            "https://cptstatic.s3.amazonaws.com/imagens/produtos/500px/45663/programacao-java-01.jpg",
          titulo: "curso de Java 7",
          plataforma: "Udemy",
          resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
          expand: false,
          descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
        },
        {
          image:
            "https://1.bp.blogspot.com/-iGcngsQpp_U/X-kDS0OTcPI/AAAAAAAAccg/UTu5XcZJ_YIWaxd1LLMEs6PWINKaIQtpQCLcBGAsYHQ/s700/POST_MAT.jpg",
          titulo: "curso de Java 8",
          plataforma: "Alura",
          resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
          expand: false,
          descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
        },
        {
          image:
            "https://images.tcdn.com.br/img/img_prod/104003/curso_online_de_programacao_em_java_com_certificado_3133_1_20200319152642.jpg",
          titulo: "curso de Java 9",
          plataforma: "Udemy",
          resumo: "Lorem ipsum dolor sit amet adipiscing irfberi ergiuberuig elit.",
          expand: false,
          descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
        },
        {
          image: "https://img.ibxk.com.br/2022/10/03/03194437073399.jpg",
          titulo: "curso de Java 10",
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
