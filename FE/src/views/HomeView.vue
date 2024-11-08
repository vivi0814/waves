<template>
  <div>
    <!-- Carousel Section -->
    <div class="carousel">
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <!-- Carousel indicators -->
        <div class="carousel-indicators">
          <button
            v-for="(slide, index) in slides"
            :key="index"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            :data-bs-slide-to="index"
            :class="{ active: index === 0 }"
            :aria-current="index === 0"
            :aria-label="'Slide ' + (index + 1)"
          ></button>
        </div>
        <!-- Carousel items -->
        <div class="carousel-inner">
          <div
            v-for="(slide, index) in slides"
            :key="index"
            class="carousel-item"
            :class="{ active: index === 0 }"
          >
            <img class="d-block w-100" :src="slide.image" :alt="slide.title" />
            <div class="carousel-caption d-block d-md-block">
              <h5>{{ slide.title }}</h5>
              <p>{{ slide.description }}</p>
            </div>
          </div>
        </div>
        <!-- Carousel controls -->
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <!-- About Section -->
    <div class="about">
      <h2 class="about-title">Our Best Rooms</h2>
      <p class="about-txt">{{ aboutText }}</p>
    </div>

    <!-- Intro Section -->
    <div class="intro">
      <swiper
        :slidesPerView="1"
        :breakpoints="{
          768: { slidesPerView: 2 },
          1400: { slidesPerView: 3 },
        }"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :loop="true"
        :pagination="{ clickable: true }"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :modules="modules"
        class="mySwiper"
      >
        <button class="swiper-button-prev"></button>
        <button class="swiper-button-next"></button>

        <swiper-slide
          v-for="(item, index) in introItems"
          :key="index"
          class="intro-item"
        >
          <a href="#">
            <div class="intro-item-pic">
              <img :src="item.image" :alt="item.title" />
            </div>
            <p class="intro-title">{{ item.title }}</p>
            <p class="intro-txt">{{ item.description }}</p>
          </a>
        </swiper-slide>
      </swiper>
    </div>
    <!-- Banner Section -->
    <div class="banner">
      <img :src="bannerImage" alt="Banner" />
    </div>

    <!-- About Us Section -->
    <div class="about">
      <h2 class="about-title">About Us</h2>
      <p class="about-txt">{{ aboutUsText }}</p>
      <div class="wrap">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          class="item"
        >
          <img
            class="about-img"
            :src="testimonial.image"
            :alt="testimonial.name"
          />
          <h3>"{{ testimonial.title }}"</h3>
          <div class="about-card">
            <p>{{ testimonial.text }}</p>
            <div class="about-name">{{ testimonial.name }}</div>
          </div>
        </div>
      </div>
      <!-- Blog Section -->
      <div class="wrap">
        <div v-for="blog in blogs" :key="blog.title" class="item">
          <div class="blog-img">
            <img :src="blog.image" :alt="blog.title" />
          </div>
          <h3>"{{ blog.title }}"</h3>
          <div class="about-card">
            <p>{{ blog.text }}</p>
            <div class="readMore"><a href="#">READ MORE...</a></div>
          </div>
        </div>
      </div>
      <div class="about-more">
        <div class="more">
          <a href="#" class="custom-btn btn-border-color">
            MORE <i class="fa-solid fa-arrow-right-long"></i
          ></a>
        </div>
      </div>
    </div>

    <!-- Video Section -->
    <div class="video">
      <video :src="videoSrc" autoplay muted loop></video>
    </div>

    <!-- House Rules Section -->
    <div class="house-rule about-more">
      <h2 class="about-title">Malmö's B'n'B Amenities</h2>
      <p class="about-txt">{{ amenitiesText }}</p>
      <div class="container">
        <div class="house-rules-icon row">
          <div
            v-for="amenity in amenities"
            :key="amenity.name"
            class="icon col-6 col-md-4"
          >
            <span class="material-symbols-outlined">{{ amenity.icon }}</span>
            <div class="icon-txt">{{ amenity.name }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Newsletter Section -->
    <div class="letter">
      <div class="container">
        <div class="letter-txt">
          <h2>Subscribe to our Newsletter</h2>
          <p>Enter your email address to receive updates:</p>
        </div>
        <div class="letter-form">
          <form
            id="subscribeForm"
            class="subscribe-form"
            @submit.prevent="submitForm"
          >
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="Enter your email"
              required
            />
            <button type="submit" class="custom-btn btn-border-color">
              SUBSCRIBE
            </button>
          </form>
          <p id="message" class="message" :style="{ color: messageColor }">
            {{ message }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import axios from "axios";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      slides: [
        {
          image: "https://picsum.photos/1920/500/?random=30",
          title: "The Best Resort",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, vero?",
        },
        {
          image: "https://picsum.photos/1920/500/?random=31",
          title: "Green Island Spot",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quas ex perferendis totam.",
        },
        {
          image: "https://picsum.photos/1920/500/?random=32",
          title: "Diving Heaven",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, unde a nemo eum deleniti consectetur!",
        },
        {
          image: "https://picsum.photos/1920/500/?random=33",
          title: "Beautiful & Cozy Places",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, unde a nemo eum deleniti constetur!",
        },
      ],
      aboutText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, est qui? Magnam, ex veniam ab sit dolor perspiciatis aut dignissimos id dicta mollitia sint error! Cumque doloremque sequi excepturi eligendi  sed iure fuga quaerat. Consectetur praesentium labore veritatis aperiam dignissimos.",
      images: [
        "https://picsum.photos/250/250/?random=41",
        "https://picsum.photos/250/250/?random=42",
        "https://picsum.photos/250/250/?random=43",
      ],
      modules: [Pagination, Navigation, Autoplay],
      introItems: [
        {
          image: "https://picsum.photos/250/250/?random=41",
          title: "Modern Room",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sint cumque soluta perspiciatis! Distinctio quae commodi eaque rem, natus dolor?",
        },
        {
          image: "https://picsum.photos/250/250/?random=42",
          title: "Cozy Place",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem incidunt laboriosam repellendus voluptas doloremque accusamus?",
        },
        {
          image: "https://picsum.photos/250/250/?random=43",
          title: "Diving Heaven",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit saepe aliquid, omnis vel perferendis in animi cumque!",
        },
        {
          image: "https://picsum.photos/250/250/?random=44",
          title: "Garden Room",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam velit autem dolores. Corporis!",
        },
        {
          image: "https://picsum.photos/250/250/?random=45",
          title: "Ocean View",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae corporis accusantium omnis natus, cupiditate dolorum totam.",
        },
        {
          image: "https://picsum.photos/250/250/?random=46",
          title: "Mountain View",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem dolorum earum quia ab adipisci ad distinctio. Id.",
        },
      ],
      bannerImage: "https://picsum.photos/1200/400/?random=11",
      aboutUsText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, est qui? Magnam, ex veniam ab sit dolor perspiciatis aut dignissimos id dicta mollitia sint error! Cumque doloremque sequi excepturi eligendi impedit quae totam quo, est fugiat aut quia atque, repellendus sed iure fuga quaerat. Consectetur praesentium labore veritatis aperiam dignissimos.",
      testimonials: [
        {
          image: "https://picsum.photos/100/100/?random=10",
          title: "Best time",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quia amet veniam odio commodi ad dolore quam, adipisci eaque dignissimos, eam odio voluptatem aut temporibus, sunt asto qulias.",
          name: "Andreas Mjøs",
        },
        {
          image: "https://picsum.photos/100/100/?random=11",
          title: "Nice position",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quia amet veniam odio commodi ad dolore ci eaque dignissimos,llque! Nostrum optio harumuptatem aut temporibus, sunt alias.",
          name: "Mia Skurdal",
        },
        {
          image: "https://picsum.photos/100/100/?random=12",
          title: "Amazing",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quia amet veniam odio commodi a dolore  incidunt facere porro placeat doloribus totam odio voluptatem aut temporibus, sunt alias.",
          name: "Mary Cruz",
        },
      ],
      blogs: [
        {
          image: "https://picsum.photos/280/350/?random=13",
          title: "A Night in Green Island",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quia amet veniam odio commodi ad dolore quam, adipisci eaque dignissimos, eam odio voluptatem aut temporibus, sunt asto qulias.",
        },
        {
          image: "https://picsum.photos/280/350/?random=14",
          title: "Coffee in Waves",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quia amet veniam odio commodi a dolore  incidunt facere porro placeat doloribus totam odio voluptatem aut temporibus, sunt alias.",
        },
        {
          image: "https://picsum.photos/280/350/?random=15",
          title: "Relax Spaces",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quia amet veniam odio commodi ad dolore ci eaque dignissimos,llque! Nostrum optio harumuptatem aut temporibus, sunt alias.",
        },
      ],
      videoSrc: "../src/assets/img/video/3015493-hd_1920_1080_24fps.mp4",
      amenitiesText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid culpa dolor enim esse quam, aperiam aliquam fugit quos inventore quae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt culpa voluptatum tenetur aperiam dolorum alias, tempore ducimus eveniet nam optio harum non perspiciatis doloremque iusto sint ipsum praesentium quae excepturi fugiat eaque. Quam dolores accusantium natus aut reiciendis vero veniam exercitationem earum distinctio. Porro sint enim quam impedit nemo corrupti.",
      amenities: [
        { icon: "wifi", name: "WiFi" },
        { icon: "shower", name: "Bath" },
        { icon: "local_cafe", name: "Coffee" },
        { icon: "lock", name: "Safe" },
        { icon: "alarm", name: "Alarm" },
        { icon: "skillet", name: "Service" },
      ],
      email: "",
      message: "",
      messageColor: "black",
    };
  },

  methods: {
    submitForm() {
      // 簡單的 Email 格式驗證
      if (!this.validateEmail(this.email)) {
        this.message = "Please enter a valid email address.";
        this.messageColor = "red";
        return;
      }
      // 發送訂閱請求到後端
      axios
        .post("/api/subscribe", {
          email: this.email,
        })
        .then((response) => {
          const data = response.data;

          if (data.success) {
            this.message = "Thank you for subscribing!";
            this.messageColor = "green";
          } else {
            this.message = "Failed to subscribe. Please try again.";
            this.messageColor = "red";
          }
        })
        .catch((error) => {
          console.error("Fetch error:", error);
          this.message = "Failed to subscribe. Please try again.";
          this.messageColor = "red";
        });
    },
    validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/color.scss";
@import "../assets/scss/base.scss";
@import "../assets/scss/btn.scss";
.banner {
  margin: auto;

  img {
    width: 100%;
    vertical-align: top;
  }
}

// Intro 樣式
.intro {
  position: relative;
  &-item {
    text-align: center;
    width: 100%;

    > a {
      text-decoration: none;

      &:hover > .intro-item-pic img {
        transform: translateX(10px);
      }
    }
  }

  &-title {
    color: $color_444;
    margin-bottom: 0;
  }

  &-txt {
    color: $color_888;
    max-width: 400px;
    margin: 5px auto;
    margin-bottom: 20px;
  }

  &-item-pic {
    padding: 5px;
    margin: 5px auto;
    max-width: 400px;
    width: 100%;

    > img {
      transition: 1s;
      width: 100%;
      vertical-align: top;
    }
  }
  > .swiper {
    z-index: 0;
  }
  .swiper .swiper-button-next,
  .swiper .swiper-button-prev {
    text-indent: 180%;
    white-space: nowrap;
    overflow: hidden;
    border: none;
  }
  .swiper .swiper-button-next {
    background: url("../img/icon/arrow-right.svg") no-repeat center;
    width: 55px;
    height: 55px;
  }
  .swiper .swiper-button-prev {
    background: url("../img/icon/arrow-left.svg") no-repeat center;
    width: 55px;
    height: 55px;
  }
  :deep(.swiper-pagination-bullet) {
    background: $front_color_main;
  }
}

// About 樣式
.about {
  margin: 30px 0 10px;
  padding: 0 20px;

  .wrap {
    width: 100%;
    margin: auto;
    padding: 20px 0;

    .item {
      padding: 10px;
      text-align: center;

      h3 {
        font-size: 20px;
        padding: 5px;
        color: $color_444;
        margin: 5px 0 0;
      }

      p {
        font-size: 16px;
        padding: 5px;
        color: $color_888;
        margin-bottom: 0;
      }
    }
  }

  &-img {
    border-radius: 50%;
  }

  &-title {
    text-align: center;
    margin: auto;
    color: $color_444;
  }

  &-txt {
    width: 100%;
    text-align: center;
    font-size: 16px;
    padding: 10px 0;
    margin: auto;
    color: $color_888;
  }

  &-name {
    color: $front_color_main;
    text-align: center;
    font-size: 14px;
    padding: 5px 0 10px;
    margin: auto;
  }

  &-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &-more {
    max-width: 960px;
    margin: auto;
  }
}
.more {
  text-align: right;
  margin: 10px 15px 30px;
  a {
    text-decoration: none;
  }
}

// Blog 樣式
.blog-img {
  overflow: hidden;

  img {
    width: 100%;
    transition: 0.5s;
    vertical-align: top;
  }

  &:hover img {
    transform: translateX(10px);
  }
}

.readMore {
  font-size: 16px;
  text-align: right;
  padding-top: 30px;
  padding-right: 30px;

  > a {
    text-decoration: none;
    color: $color_888;

    &:hover {
      color: $front_color_main;
    }
  }
}

// Video 樣式
.video {
  max-width: 960px;
  aspect-ratio: 1300/595;
  margin: auto;
  margin-bottom: 30px;

  video {
    width: 100%;
    height: 100%;
    vertical-align: top;
  }
}

// Icon 樣式
.icon {
  align-content: center;
  height: auto;
  text-align: center;
  margin: 20px 0;

  > span {
    transition: 1s;
  }
  > .material-symbols-outlined {
    color: $front_color_main;
    font-weight: 200;
    font-size: 50px;
  }

  &:hover > span {
    transform: translateY(-10px);
  }

  &-txt {
    font-size: 20px;
    color: $color_888;
  }
}

// Newsletter 樣式
.letter {
  text-align: center;
  width: 100%;
  padding: 50px 0;
  background-color: $front_color_bcg;

  &-txt {
    > h2 {
      color: $color_444;
    }

    > p {
      font-size: 16px;
      color: $color_888;
    }
  }
}

.subscribe-form {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;

  input {
    padding: 10px;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid #ccc;
    border-radius: 2px;
    width: 300px;
    max-width: 100%;
    background-color: transparent;
  }
}

.message {
  margin-top: 20px;
  font-size: 16px;
}

// 媒體查詢
@media screen and (max-width: 767px) {
  .subscribe-form {
    align-content: center;

    button {
      margin-top: 20px;
      width: 150px;
    }
  }
}

@media screen and (min-width: 768px) {
  .wrap {
    max-width: 960px;
  }

  .about {
    .wrap {
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(3, 1fr);

      .item {
        padding: 10px;
        text-align: center;

        h3 {
          padding: 10px 5px;
        }
      }
    }

    &-title {
      font-size: 42px;
      padding: 20px 0;
    }

    &-txt {
      width: 660px;
    }
  }

  .intro-item {
    width: 50%;

    &-pic {
      max-width: 300px;
    }
  }

  .subscribe-form button {
    margin-left: 30px;
  }
}
</style>