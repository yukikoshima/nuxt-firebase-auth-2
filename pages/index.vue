<template>
  <div>
    <h1>login great!!</h1>
    <!-- <p>You are now logged in {{ $nuxt.$fire.auth.currentUser.email }}</p> -->
    <v-btn @click="logout">Logout</v-btn>
    <nuxt-link to="/test">testページ</nuxt-link>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  methods: {
    logout() {
      this.$store.dispatch("firebase/logout");
    }
  }
};
</script>
