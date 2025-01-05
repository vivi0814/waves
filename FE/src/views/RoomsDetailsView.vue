<template>
  <div class="wrap">
    <div class="rooms-view">
      <div class="room-intro">
        <h3 class="fontSize32">ROOMS DETAILS</h3>
        <div class="room-card" v-if="room">
          <swiper
            :slides-per-view="1"
            :pagination="{ clickable: true }"
            :navigation="{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }"
            :modules="modules"
            :loop="true"
          >
            <button class="swiper-button-prev"></button>
            <button class="swiper-button-next"></button>
            <swiper-slide v-for="(img, index) in room.image" :key="index">
              <div class="room-img">
                <img :src="img" alt="Room Image" />
              </div>
            </swiper-slide>
          </swiper>
          <h4 class="room-name fontSize28">{{ room.name }}</h4>
          <p class="room-description">{{ room.description }}</p>
          <h4 class="facilities-title fontSize24">FACILITIES</h4>
          <div class="container">
            <div class="row">
              <div
                class="icons"
                v-if="room.facilities && room.facilities.length > 0"
              >
                <span
                  v-for="facility in room.facilities"
                  :key="facility.icon"
                  class="facility-icon col-12 col-md-6"
                >
                  <span class="material-symbols-outlined">{{
                    facility.icon
                  }}</span>
                  <span class="icon-name fontSize16-22em">{{
                    facility.name
                  }}</span>
                </span>
              </div>
              <p v-else>No Facilities...</p>
            </div>
          </div>
        </div>
        <p v-else>Downloading Rooms Details...</p>
      </div>
      <div class="search-form">
        <h3 class="fontSize28">Check Availability</h3>
        <form @submit.prevent="searchRooms">
          <label for="check-in">CHECK IN:</label>
          <input
            type="date"
            id="check-in"
            v-model="checkInDate"
            class="date-input"
            @change="updateCheckoutDate"
            required
          />

          <label for="check-out">CHECK OUT:</label>
          <input
            type="date"
            id="check-out"
            v-model="checkOutDate"
            class="date-input"
            :min="checkInDate"
            required
          />

          <label for="rooms">Rooms:</label>
          <select
            id="rooms"
            v-model="numberOfRooms"
            class="rooms-input"
            required
          >
            <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
          </select>

          <label for="guests">GUESTS:</label>
          <select
            id="guests"
            v-model="numberOfGuests"
            class="guests-input"
            required
          >
            <option v-for="n in 20" :key="n" :value="n">{{ n }}</option>
          </select>

          <button type="submit" class="custom-btn btn-bg-color submit-btn">
            CHECK AVAILABILITY
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"; // 引入 axios
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    return {
      modules: [Pagination, Navigation],
      checkInDate: today.toISOString().split("T")[0], // 將今天的日期格式化為 YYYY-MM-DD
      checkOutDate: tomorrow.toISOString().split("T")[0], // 將明天的日期格式化為 YYYY-MM-DD
      numberOfRooms: 1,
      numberOfGuests: 1, // 新增大人數
      room: null, // 儲存單一房間資料
    };
  },
  methods: {
    updateCheckoutDate() {
      if (this.checkoutDate && this.checkoutDate <= this.checkinDate) {
        this.checkoutDate = "";
      }
    },
  },
  mounted() {
    const roomId = this.$route.params.id; // 獲取房間 ID
    axios
      .get(
        // `https://my-json-server.typicode.com/vivi0814/waves-json-server/rooms/${roomId}`
        // `http://localhost:3000/rooms/${roomId}`
        "/data/db.json"
      ) // 根據房間 ID 獲取資料
      .then((res) => {
        // 使用 find() 方法找到對應的房間資料
        this.room = res.data.rooms.find((room) => room.id === parseInt(roomId));
        if (!this.room) {
          console.error(`Room with ID ${roomId} not found.`);
        }
      })
      .catch((error) => {
        console.error(error); // 錯誤處理
      });
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/color.scss" as *;
@use "../assets/scss/btn.scss" as *;
.wrap {
  margin: auto;
}
.rooms-view {
  display: flex;
  flex-direction: column;
}
h3 {
  text-align: center;
  margin-bottom: 20px;
}
.search-form {
  display: flex;
  flex-direction: column;
  width: 300px;
}

label {
  font-weight: bold;
  margin: 5px 0;
}

.date-input,
.rooms-input,
.guests-input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 10px;
  transition: border-color 0.3s;
  width: 300px;
  color: $color_888;
}

.date-input:focus {
  border-color: $front_color_main; /* Highlight color */
  outline: none;
}

.submit-btn {
  margin: 30px 0;
  width: 300px;
}

.room-card {
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #a3a3a3;
  .swiper {
    width: 100%; // 確保 Swiper 寬度為 100%
    height: auto; // 高度自動
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

  .room-img {
    // width: 278px;
    width: 100%;

    img {
      width: 100%;
      transition: 0.5s;
    }
  }
  .room-name,
  .facilities-title {
    color: $color_555;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .room-description {
    color: $color_999;
  }
  .icons {
    display: flex;
    flex-wrap: wrap;

    .facility-icon {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .material-symbols-outlined {
        color: $front_color_main;
        font-weight: 100;
        font-size: 30px;
        margin-right: 30px;
      }
      .icon-name {
        color: $color_999;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .rooms-view {
    align-items: center;
  }
  .room-intro {
    margin-bottom: 20px;
    .room-card {
      max-width: 300px;
    }
  }
}

@media (min-width: 768px) {
  .wrap {
    max-width: 1200px;
  }
  .rooms-view {
    flex-direction: row;
    justify-content: space-around;
  }
  .search-form {
    background-color: $front_color_bcg;
    padding: 30px;
    height: 550px;
    position: sticky;
    top: 150px;
    width: 300px; /* 調整搜尋表格的寬度 */
    margin: 0 20px;
    z-index: 10; /* 確保在其他元素之上 */
    order: 1;
  }
  .date-input,
  .rooms-input,
  .guests-input {
    width: 240px;
  }
  .submit-btn {
    width: 240px;
  }
  .room-intro {
    margin: 0 30px;
    align-items: center;
    .room-card {
      padding: 20px;
      max-width: 100%;
      max-width: 380px; /* 限制過寬 */
    }
    .room-img {
      width: 100%;
      max-width: 100%;
      margin: 0 auto; /* 水平置中 */

      img {
        width: 100%;
        max-height: 80vh; /* 限制圖片高度為螢幕高度的80% */
        object-fit: contain; /* 圖片縮放以適應框大小，保持完整顯示 */
        transition: transform 0.7s ease; /* 動態效果 */
      }
      img:hover {
        transform: scale(1.03); /* 懸停時略微放大 */
      }
    }
  }
}
@media (min-width: 834px) {
  .room-intro {
    .room-card {
      max-width: 500px; /* 限制過寬 */
    }
  }
}
@media (min-width: 1024px) {
  .room-intro {
    .room-card {
      max-width: 600px; /* 限制過寬 */
    }
  }
}
@media (min-width: 1200px) {
  .room-intro {
    .room-card {
      max-width: 700px; /* 限制過寬 */
    }
  }
}
@media (min-width: 1400px) {
  .room-intro {
    .room-card {
      max-width: 900px; /* 限制過寬 */
    }
  }
}
</style>