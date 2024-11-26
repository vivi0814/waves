<template>
  <div class="order-container">
    <h3 class="fontSize32">View Orders</h3>
    <div v-if="isAuthenticated" class="orders-section">
      <p class="fontSize20">
        Welcome, <span>{{ user.username }}</span
        >! Here are your order details:
      </p>
      <!-- Display orders -->
      <div class="order-card" v-for="order in orders" :key="order.id">
        <h3 class="fontSize20">Order ID: {{ order.id }}</h3>
        <p class="fontSize16-22em">Status: {{ order.status }}</p>
        <p class="fontSize16-22em">Amount: ${{ order.amount }}</p>
      </div>
    </div>
    <div v-else class="login-prompt">
      <p>Please log in to view your orders.</p>
      <router-link to="/login" class="login-link">Go to Login</router-link>
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["isAuthenticated", "user"]),
  },
  data() {
    return {
      orders: [
        { id: 1, status: "Shipped", amount: 100 },
        { id: 2, status: "Awaiting", amount: 200 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/color.scss" as *;
@use "../assets/scss/btn.scss" as *;
/* Main container styling */
.order-container {
  max-width: 1200px;
  margin: 0 auto;
  h3 {
    text-align: center;
    margin: 30px 0;
  }
}

.orders-section {
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  span {
    color: $front_color_main;
  }
}

.order-card {
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.order-card h3 {
  color: $color_555;
}

.order-card p {
  margin: 5px 0;
  font-size: 16px;
  color: $color_888;
}

/* Login Prompt Section */
.login-prompt {
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.login-link {
  display: inline-block;
  margin-top: 10px;
  text-decoration: none;
  color: $front_color_main;
  font-weight: bold;
}

.login-link:hover {
  text-decoration: underline;
}
</style>
