<template>
    <v-container>
        <h2>게시물 작성</h2>
        <jap-product-register-form @submit="onSubmit"/>
    </v-container>
</template>

<script>
import JpaProductRegisterForm from '@/components/lecture/product/JpaProductRegisterForm.vue';
export default {
    components: {JpaProductRegisterForm},
    name: "JpaProductRegisterPage",
    methods: {
     
    }
    
}
</script>

<style>

</style>