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
  name: "DesignPage",
  data() {
    return {
      items: [
        {
          image:
            "https://www.prepara.com.br/pub/media/catalog/product/cache/458b35c418a9cd381962ecc5b6284104/c/u/curso-designer-grafico-presencial-vertical.png",
          titulo: "curso de design 1",
          plataforma: "Alura",
          resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
          expand: false,
          descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
        },
        {
          image: "https://m.media-amazon.com/images/I/81UWPQ7QTvL.jpg",
          titulo: "curso de design 2",
          plataforma: "Udemy",
          resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
          expand: false,
          descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
        },
        {
          image: "https://img.youtube.com/vi/7CXLw6PA4U4/sddefault.jpg",
          titulo: "curso de design 3",
          plataforma: "Alura",
          resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
          expand: false,
          descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
        },
        {
          image:
            "https://portaleducacao.vteximg.com.br/arquivos/ids/158735-1000-1000/Design-Grafico.jpg?v=636592317800930000",
          titulo: "curso de design 4",
          plataforma: "Coursera",
          resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
          expand: false,
          descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
        },
        {
          image:
            "https://viacarreira.com/wp-content/uploads/2021/01/cursos-gratuitos-de-design-grafico-1.jpg",
          titulo: "curso de design 6",
          plataforma: "Coursera",
          resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
          expand: false,
          descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
        },
        {
          image:
            "https://www.unicesumar.edu.br/blog/wp-content/uploads/2018/10/design-de-produto-800x533.jpg",
          titulo: "curso de design 7",
          plataforma: "Udemy",
          resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
          expand: false,
          descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
        },
        {
          image:
            "http://www.polocursos.com.br/wp-content/uploads/2012/08/Design-Grafico-em-Jundia%C3%AD-2-600px.png",
          titulo: "curso de design 8",
          plataforma: "Alura",
          resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
          expand: false,
          descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
        },
        {
          image:
            "https://www.escoladominio.com.br/wp-content/uploads/2016/12/design-grafico-dominio.jpg",
          titulo: "curso de design 9",
          plataforma: "Udemy",
          resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
          expand: false,
          descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
        },
        {
          image:
            "https://imagens-revista-pro.vivadecora.com.br/uploads/2018/04/curso-tecnico-de-design-de-interiores.jpg",
          titulo: "curso de design 10",
          plataforma: "Udemy",
          resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
          expand: false,
          descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
        },
        {
          image:
            "https://www.institutomix.com.br/wp-content/uploads/2020/03/Designer-grafico.jpg",
          titulo: "curso de design 11",
          plataforma: "Udemy",
          resumo: "Lorem ipsum dolor sit amet adipiscing elit.",
          expand: false,
          descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu sem eu enim molestie suscipit in vitae dui. Vivamus hendrerit elit ac elementum suscipit. In dolor lacus, auctor sed nisl vel, pharetra feugiat nibh. Nullam condimentum auctor odio, quis dictum velit placerat maximus. Fusce at nisl molestie, faucibus nisl a, fermentum elit.",
        },
        {
          image:
            "https://famesp.com.br/wp-content/uploads/2017/05/curso-tecnico-design-interiores.jpg",
          titulo: "curso de design 12",
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
