<script>

export default {
    data: function() {
        return {
            version: 1,
            host: '',
        }
    },

    computed: {
        hostName: function() {
          return `${this.host}/api/v${this.version}/`;
        },
    },

    methods: {
        prepareAction: function(action) {
            return action.replace(/^\/|\/$/g, '');
        },

        getAction: function(action) {
            return this.hostName + this.prepareAction(action);
        },

        makePostRequest: function(action, data = {}) {
            return this.$http.post(this.getAction(action), data);
        },

        makeDeleteRequest: function(action, data = {}) {
            return this.$http.post(this.getAction(action), {
                ...{_method: 'delete'},
                ...data
            });
        },

        makePutRequest: function(action, data = {}) {
            return this.$http.put(this.getAction(action), data);
        },

        makeGetRequest: function(action, data = {}) {
            return this.$http.get(`${this.getAction(action)}?${new URLSearchParams(data)}`);
        },
    }
}

</script>