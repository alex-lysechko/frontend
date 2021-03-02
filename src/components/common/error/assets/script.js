export default {
    data: function() {
        return {
            list: [],
        };
    },

    mounted() {
        this.formatErrors();
    },

    props: {
        errorsList: {},
        id: '',
    },

    methods: {
        formatErrors: function() {
            for (let [property, errors] of Object.entries(this.errorsList)) {
                this.list.push(`${property}: ${errors.join(',')}`);
            }
        },
    },
}