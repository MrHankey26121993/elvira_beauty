<template>
  <div class="flex h-screen">
    <div class="m-auto">
      <p class="text-xl font-bold text-center mb-4">Авторизация</p>
      <form class="border border-gray rounded-xl p-4 cursor-default flex flex-col gap-4" @submit.prevent="userLogin">
        <div class="grid grid-cols-5">
          <label class="col-span-2">Логин</label>
          <input class="col-span-3 appearance-none border border-gray rounded px-2" type="text" v-model="login.username"/>
        </div>
        <div class="grid grid-cols-5">
          <label class="col-span-2">Пароль</label>
          <input class="col-span-3 appearance-none border border-gray rounded px-2" type="text" v-model="login.password"/>
        </div>
        <div class="flex justify-center">
          <button class="bg-blue-300 px-3 py-1 rounded" type="submit">Войти</button>
        </div>
      </form>
    </div>
  </div>

</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      login: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async userLogin() {
      try {
        await this.$auth.loginWith('cookie', {data: this.login}).then(resp => {
          this.$router.push('/cp');
        })
      } catch (err) {
      }
    }
  }
}
</script>

<style scoped>

</style>
