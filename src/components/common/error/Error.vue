<template>
    <div class="error mt-2" :id="id">
        <span v-for="(error, index) in list"
              :key="index"
              class="alert alert-danger">{{error}}</span>

    </div>
</template>

<script src="./assets/script.js"></script>
<style src="./assets/style.css"></style>