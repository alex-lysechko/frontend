import Form from '../../components/form/Form';

export default {
    components: {
        'product-form': Form,
    },

    data: function() {
        return {
            method: 'POST',
            apiRoutes: {
                create: 'product/store',
            }
        };
    }
}