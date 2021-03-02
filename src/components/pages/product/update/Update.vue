<template>
    <div class="page-update">
        <product-form  :api-action="apiRoutes.edit"
                       :product-id="$route.params.id"
                       :request-method="method"></product-form >
    </div>
</template>
<script src="./assets/script.js"></script>
<style src="./assets/style.css"></style>