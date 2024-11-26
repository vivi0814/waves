<template>
  <div>
    <input type="checkbox" id="checkbtn" />
    <header>
      <div class="logo"><router-link to="/">WAVES</router-link></div>
      <label for="checkbtn" class="menubtn">
        <span class="navbar1"></span>
        <span class="navbar2"></span>
        <span class="navbar3"></span>
      </label>
      <nav>
        <router-link v-for="item in menuItems" :key="item.path" :to="item.path">
          {{ item.name }}
        </router-link>
        <router-link v-if="isAuthenticated" to="/orders">Orders</router-link>
        <router-link v-if="!isAuthenticated" to="/login">LogIn</router-link>
        <!-- <button v-if="isAuthenticated" @click="logout">LogOut</button> -->
        <router-link v-if="isAuthenticated" @click.prevent="logout" to="/"
          >LogOut</router-link
        >
      </nav>
    </header>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapState(["isAuthenticated"]),
  },
  data() {
    return {
      // isLoggedIn: false,
      menuItems: [
        { name: "About", path: "/about" },
        { name: "Rooms", path: "/rooms" },
        { name: "News", path: "/news" },
        { name: "Blogs", path: "/blogs" },
        { name: "Contact", path: "/contact" },
        // { name: "LogIn", path: "/login" },
        // { name: "Orders", path: "/orders" },
      ],
    };
  },
  methods: {
    ...mapActions(["logout"]),
    // async logout() {
    //   await this.logout(); // 觸發 Vuex 的登出行動
    //   this.$router.push("/"); // 登出後導航到首頁
    // },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/color.scss";

#checkbtn {
  opacity: 0;
  position: absolute;
  z-index: -2;
}

header {
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.logo {
  font-size: 32px;
}

.logo a {
  background: linear-gradient(
    #e8d8d3 0%,
    #d6aa9c 25%,
    #d49582 50%,
    #ce826b 75%,
    #c87a62 100%
  );
  background-clip: text;
  color: transparent;
  text-decoration: none;
}

nav {
  display: flex;
}

nav a {
  display: block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  color: $front_color_main;
}

nav a:hover {
  color: $color_888;
}

@media screen and (max-width: 767px) {
  #checkbtn:checked ~ header nav {
    left: 0;
  }

  .menubtn {
    width: 40px;
    height: 40px;
    display: block;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 15px;
    right: 10px;
  }

  .navbar1,
  .navbar2,
  .navbar3 {
    content: "";
    border: 1px solid $front_color_main;
    margin: 3px 0px;
    transition: 0.5s, transform 0.5s 1s;
  }

  #checkbtn:checked ~ header label .navbar1 {
    margin: 9px 0 0 0;
    transform: rotate(45deg);
  }

  #checkbtn:checked ~ header label .navbar2 {
    margin: 0;
  }

  #checkbtn:checked ~ header label .navbar3 {
    margin: 0 0 9px 0;
    transform: rotate(-45deg);
  }

  nav {
    width: 100%;
    height: calc(100vh - 67px);
    position: absolute;
    left: -100%;
    top: 67px;
    flex-direction: column;
    justify-content: space-around;
    transition: 2s;
    background-color: #fff;
    z-index: 9999;
  }
}

@media screen and (min-width: 768px) {
  .menubtn {
    display: none;
  }

  nav {
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  }

  nav a {
    margin: 0 10px;
    font-size: 20px;
  }
}
</style>