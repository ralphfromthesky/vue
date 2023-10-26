<template>
    <div class="mainHeader">
        <h1>VUE JS - Ralph <span><i class='bx bxs-cat'></i></span></h1>
    </div>
</template>

<script>
    export default {
        name: 'main-header',
    }
</script>

<style scoped>
.mainHeader {
height: 10vh;
border-bottom: 2px solid rgb(190, 185, 185);
display: flex;
align-items: center;
}
.mainHeader span .bx {
    color: rgb(252, 102, 3);
    font-size: 40px;
}
</style>