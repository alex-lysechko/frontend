import ApiRequest from "@/components/mixins/ApiRequest";

export default {
    mixins: [ApiRequest],

    data: function() {
        return {
            productList: [],
            apiRoutes: {
                getProductsList: 'product',
                deleteProduct: 'product/delete',
            },
        };
    },

    mounted: function() {
        this.getProductsList();
    },

    methods: {
        getProductsList: function() {
            this.makeGetRequest(this.apiRoutes.getProductsList).then(response => {
                this.productList = response.data.list;
            }).catch(error => console.log(error));
        },

        deleteHandler: function(id) {
            if(!confirm(this.$t('confirm.delete'))) {
                return;
            }

            this.makeDeleteRequest(this.apiRoutes.deleteProduct, {id: id}).then(() => {
                this.productList = this.productList
                    .filter(product => parseInt(product.id) !== parseInt(id));
            }).catch(error => console.log(error));
        },
    }
}