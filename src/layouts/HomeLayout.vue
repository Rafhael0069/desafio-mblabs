<!-- eslint-disable vue/no-unused-components -->
<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <span>Menu</span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <template>
            <v-list-group :value="false" no-action>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Cursos</v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item :to="{ name: 'design' }">
                <v-list-item-content>
                  <v-list-item-title>Design</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item :to="{ name: 'java' }">
                <v-list-item-content>
                  <v-list-item-title>Java</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item :to="{ name: 'marketing' }">
                <v-list-item-content>
                  <v-list-item-title>Marketing</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>

            <v-list-group :value="false" no-action>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Parceiros</v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item :to="{ name: 'alura' }">
                <v-list-item-content>
                  <v-list-item-title>Alura</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item :to="{ name: 'coursera' }">
                <v-list-item-content>
                  <v-list-item-title>Coursera</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item :to="{ name: 'udemy' }">
                <v-list-item-content>
                  <v-list-item-title>Udemy</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>

            <v-list-item :to="{ name: 'pesquisa' }">
              <v-list-item-content>
                <v-list-item-title>Configurações</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

          </template>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar dense app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>MyCourses</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>logout</v-icon>
    </v-app-bar>

    <v-main>
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
<style></style>
