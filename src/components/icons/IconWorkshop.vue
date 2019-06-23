<template>
    <div>
        <router-view name="header-top"></router-view>
        <h1>IconWorkshop</h1>
        <div class="row justify-content-around pb-5">
            <button @click="navigateToMarried" class="btn navigation">Венчальные иконы</button>
            <button @click="navigateToName" class="btn navigation">Именные иконы</button>
            <button @click="navigateToMeasure" class="btn navigation">Мерные иконы</button>
            <button @click="navigateToChurch" class="btn navigation">Храмовые иконы</button>
            <button @click="navigateToChurchPainting" class="btn navigation">Храмовые росписи иконы</button>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        methods: {
            navigateToMarried(){
                this.$router.push({ name: 'married' });
            },
            navigateToName(){
                this.$router.push({ name: 'name' });
            },
            navigateToMeasure(){
                this.$router.push({ name: 'measure' });
            },
            navigateToChurch(){
                this.$router.push({ name: 'church' });
            },
            navigateToChurchPainting(){
                this.$router.push({ name: 'churchpainting' });
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
