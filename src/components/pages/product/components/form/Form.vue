<template>
    <div class="page-form">
        <div>
            <h2>{{$t('product.form.title')}}</h2>
            <input type="text"
                   name="name"
                   v-model="name"
                   class="mt-2"
                   :placeholder="$t('product.name')">
        </div>
        <div>
            <input type="text"
                   name="quantity"
                   v-model="quantity"
                   class="mt-2"
                   :placeholder="$t('product.quantity')">
        </div>
        <button @click="$router.go(-1)" class="btn btn-dark mt-2 mr-2">{{$t('back')}}</button>
        <button @click="saveButtonOnClick" class="btn btn-success mt-2">{{$t('save')}}</button>
        <div id="page-form-errors"></div>
    </div>
</template>
<script src="./assets/script.js"></script>
<style src="./assets/style.css"></style>