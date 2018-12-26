<template>
    <v-select v-model="selected" :options="options" :value="selected"></v-select>
</template>
<script>
    export default {
        props: ['value', 'endPoint',],
        data() {
            return {
                selected: null,
                options: [],
            }
        },
        watch: {
            selected: function (newVal) {
                this.$emit('output', newVal)
            }
        },
        created() {
            global.axios.get(this.endPoint).then(({data}) => {
                this.options = data
                if (this.value) {
                    this.selected = this.options.find(x => x.id === this.value)
                }
                console.log(data)
            })

        }
    }
</script>
