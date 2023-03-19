<template>
    <v-container>
        <h2>게시물 작성</h2>
        <jpa-product-register-form @submit="onSubmit"/>
    </v-container>
</template>

<script>
import JpaProductRegisterForm from '@/components/lecture/product/JpaProductRegisterForm.vue';
export default {
    components: {JpaProductRegisterForm},
    name: "JpaProductRegisterPage",
    methods: {
        onSubmit (payload) {
            console.log(payload)
        }
    }
    
}
</script>

<style>

</style>