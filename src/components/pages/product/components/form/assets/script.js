import ApiRequest from "@/components/mixins/ApiRequest";
import Error from "@/components/common/error/Error";

export default {
    mixins: [ApiRequest],

    components: {
        'error': Error,
    },

    data: function() {
        return {
            action: this.apiAction,
            method: this.requestMethod,
            name: '',
            quantity: '',
            id: this.productId || null,
            responseErrors: [],
        };
    },

    watch: {
        responseErrors: function(value) {
            let extended = window.Vue.extend(Error);
            (new extended({
                propsData: {
                    errorsList: value,
                    id: 'page-form-errors',
                },
            })).$mount('#page-form-errors');
        }
    },

    methods: {
        saveButtonOnClick: function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();

            let executor = this.method === 'PUT'
                ? this.makePutRequest
                : this.makePostRequest;

            executor(this.action, {
                id: this.id,
                name:this.name,
                quantity: this.quantity
            }).then(() => {
                this.$router.push({name: 'products'});
            }).catch(result => {
                this.responseErrors = result.response.data.errors
            });
        },
    },

    props: {
        apiAction: String,
        requestMethod: String,
        productId: Number,
    }
}