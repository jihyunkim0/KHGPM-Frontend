<template>
    <v-container>
      <h2>게시물 작성</h2>
      <jpa-board-register-form @submit="onSubmit"/>
    </v-container>
  </template>
  
  <script>
  import JpaBoardRegisterForm from '@/components/lecture/board/JpaBoardRegisterForm.vue'
  import { mapActions } from 'vuex'
  export default {
      components: { JpaBoardRegisterForm },
      name: "JpaBoardRegisterPage",
      methods: {
          ...mapActions ([
              'requestCreateBoardToSpring'
          ]),
          async onSubmit (payload) {
              await this.requestCreateBoardToSpring(payload)
              await this.$router.push({
                  name: 'JpaBoardListPage' //글 작성이 완료되면, JapBoasrdListPage로 이동하라
              })
          }
      }
  }
  </script>
  
  <style>
  </style>