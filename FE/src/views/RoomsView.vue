<template>
  <div class="wrap">
    <div class="rooms-view">
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

      <!-- FE/src/views/RoomsView.vue -->
      <div class="room-list">
        <h3 class="fontSize28">ROOMS</h3>
        <div class="room-cards">
          <div
            class="room-card"
            v-for="room in rooms"
            :key="room.id"
            @click="goToRoomDetails(room.id)"
          >
            <div class="room-img">
              <img :src="room.image" alt="" />
            </div>
            <h4 class="room-name fontSize24">{{ room.name }}</h4>
            <p class="room-intro fontSize20">{{ room.intro }}</p>
            <p class="fontSize20 price-tag">$ {{ room.price }}</p>
            <div class="book-btn">
              <button
                class="reserve-btn custom-btn btn-border-color"
                @click="reserveRoom(room.id)"
              >
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    return {
      checkInDate: today.toISOString().split("T")[0], // 將今天的日期格式化為 YYYY-MM-DD
      checkOutDate: tomorrow.toISOString().split("T")[0], // 將明天的日期格式化為 YYYY-MM-DD
      numberOfRooms: 1,
      numberOfGuests: 1, // 新增大人數
      rooms: [],
    };
  },
  methods: {
    // 確保退房日期不能早於入住日期
    updateCheckoutDate() {
      if (this.checkoutDate && this.checkoutDate <= this.checkinDate) {
        this.checkoutDate = "";
      }
    },
    searchRooms() {
      // 搜尋房間的邏輯
    },
    goToRoomDetails(roomId) {
      // 導向房間詳細頁面的邏輯
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/rooms")
      .then((res) => {
        // console.log(res.data); // 取得房間資料
        this.rooms = res.data;
      })
      .catch((error) => {
        console.error(error);
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
  margin-bottom: 20px;
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

.room-list {
  display: flex;
  flex-direction: column;
}

.room-cards {
  display: flex;
  flex-direction: column;
}
.room-card {
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 20px;

  .room-img {
    width: 300px;

    img {
      width: 100%;
      transition: 0.5s;
    }
  }
  .price-tag {
    position: absolute;
    border: 1px solid $front_color_main;
    padding: 5px 25px;
    left: -15px;
    top: 20px;
    z-index: 10;
    color: $color_444;
    transition: background-color 0.5s ease-in, border 0.5s ease-in; /* 添加過渡效果 */
  }
  .room-intro {
    color: $color_888;
  }
  &:hover > .price-tag {
    color: #fff;
    border: 1px solid $text-color-dark;
    background-color: $text-color-dark;
    transition: background-color 0.5s ease-in, border 0.5s ease-in;
  }
  &:hover > .room-img img {
    transform: translateX(10px);
  }
  .book-btn {
    display: flex;
    justify-content: flex-end;
  }
  .reserve-btn {
    width: 200px;
  }
}
@media screen and (max-width: 767px) {
  .rooms-view {
    align-items: center;
  }
  .room-card {
    max-width: 300px;
  }
}

@media (min-width: 768px) {
  .wrap {
    max-width: 1200px;
    margin: auto;
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

  .room-list {
    margin: 0 30px;
    align-items: center;

    .room-img {
      width: 100%;

      img {
        width: 100%;
      }
    }
  }
}
</style>