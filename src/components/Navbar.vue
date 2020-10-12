<template>
    <div class="navbar">
        <div>
            <router-link to="/">
                <img src="../assets/logo.png">
            </router-link>
        </div>

        <div>
            <ul>
                <li>
                    <router-link to="/register">Register</router-link>
                </li>
                <li>
                    <router-link to="/login">Login</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="scss">
.navbar {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: min-content;

   ul {
       list-style: none;
   }
}
</style>