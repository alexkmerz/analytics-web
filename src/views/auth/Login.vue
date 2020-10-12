<template>
    <form>
        <input type="text" v-model="email">
        <input type="password" v-model="password">
        <button type="button" @click="login">Login</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
            this.$store.dispatch('login', { ...this.$data })
        }
    }
}
</script>

<style scoped lang="scss">

</style>