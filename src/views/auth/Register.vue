<template>
    <form>
        <input type="text" v-model="email">
        <input type="password" v-model="password">
        <input type="password" v-model="confirm">
        <button type="button" @click="register">Register</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            confirm: ''
        }
    },
    methods: {
        register() {
            this.$store.dispatch('register', { ...this.$data })
        }
    }
}
</script>

<style scoped lang="scss">

</style>