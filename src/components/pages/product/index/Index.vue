<template>
    <div class="page-index">
        <div class="w-100">
            <router-link :to="{ name: 'product-create' }" class="btn btn-success pull-right mb-2 mt-2">
                <i class="fa fa-plus"></i>{{$t('product.create')}}
            </router-link>
        </div>
        <table>
            <thead>
            <tr>
                <th class="text-left">{{ $t('product.id') }}</th>
                <th class="text-center">{{ $t('product.name') }}</th>
                <th class="text-center">{{ $t('product.quantity') }}</th>
                <th class="text-right">{{ $t('actions') }}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="product in productList"
                :key="product.id">
                <td class="text-left">{{ product.id }}</td>
                <td class="text-center">{{ product.name }}</td>
                <td class="text-center">{{ product.quantity }}</td>
                <td class="text-right">
                    <router-link :to="{ name: 'product-update', params: { id: product.id } }" class="action text-warning">
                        <i class="fa fa-edit"></i>
                    </router-link>
                    <span class="action text-danger ml-2" @click="deleteHandler(product.id)">
                        <i class="fa fa-trash"></i>
                    </span>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script src="./assets/script.js"></script>
<style src="./assets/style.css"></style>