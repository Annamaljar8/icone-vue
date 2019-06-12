<template>
    <div>
        <router-view name="header-top"></router-view>
        <h1>IconWorkshop</h1>
        <button @click="navigateToHome" class="btn navigation">Go to Home</button>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        methods: {
            navigateToHome(){
                this.$router.push({ name: 'home' });
            }
        }
    }
</script>

<style>
.btn:hover {
    background-color: var(--rust);
    color: var(--brightYellow);
    border-color: var(--frenchPuce);
}
</style>
