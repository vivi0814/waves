<template>
  <div class="login-page">
    <h1>Login</h1>
    <form @submit.prevent="login" class="login-form">
      <input
        type="text"
        v-model="username"
        placeholder="Username"
        required
        class="input"
      />
      <input
        type="password"
        v-model="password"
        placeholder="Password"
        required
        class="input"
      />
      <button type="submit" class="btn custom-btn btn-bg-color">Login</button>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      username: "",
      password: "",
      error: null,
    };
  },
  methods: {
    ...mapActions(["fakeLogin"]),
    async login() {
      this.error = null;
      try {
        await this.fakeLogin({
          username: this.username,
          password: this.password,
        });
        this.$router.push("/orders"); // 登入成功後導航到訂單頁面
      } catch (err) {
        this.error = err;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/color.scss" as *;
@use "../assets/scss/btn.scss" as *;
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  animation: fadeIn 1s ease-in-out;
}
.login-form {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
}
.input {
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #ccc;
  border-radius: 2px;
  width: 300px;
  max-width: 100%;
  background-color: transparent;
}
.btn {
  margin-top: 20px;
}
.error {
  color: red;
  margin-top: 10px;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
