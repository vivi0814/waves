<template>
  <div class="about-page">
    <div class="background-image"></div>
    <div class="content">
      <h1 class="title">Welcome to Waves</h1>
      <p class="description">
        Located on the beautiful Green Island, our cozy guesthouse offers a
        unique experience for those who wish to escape the hustle and bustle of
        daily life. Immerse yourself in nature, enjoy stunning landscapes, and
        experience the tranquil atmosphere of this idyllic island.
      </p>
      <div class="additional-content">
        <h2>Why Choose Us?</h2>
        <p>
          At Waves Guesthouse, we pride ourselves on offering personalized
          services and comfortable accommodations. Whether you're here for a
          romantic getaway or a family vacation, we ensure an unforgettable stay
          with stunning ocean views and easy access to local attractions.
        </p>
      </div>

      <!-- 圖文區塊 1 -->
      <div class="image-text-section">
        <div class="text-content">
          <h3>Discover the Island</h3>
          <p>
            Green Island is known for its lush nature and breathtaking views.
            Explore the island's unique flora and fauna, and enjoy a variety of
            outdoor activities, including snorkeling, hiking, and cycling.
          </p>
        </div>
        <div class="image-content">
          <img
            src="@/assets/img/green-island-view.jpg"
            alt="Green Island View"
          />
        </div>
      </div>

      <!-- 圖文區塊 2 -->
      <div class="image-text-section reverse">
        <div class="text-content">
          <h3>Unwind by the Ocean</h3>
          <p>
            Relax by the crystal-clear waters of Green Island's beaches. Enjoy
            the peaceful sounds of the ocean, or take a refreshing swim to feel
            rejuvenated.
          </p>
        </div>
        <div class="image-content">
          <img
            src="@/assets/img/green-island-beach.jpg"
            alt="Green Island Beach"
          />
        </div>
      </div>
    </div>

    <!-- 浮動圖片區域 -->
    <!-- <div class="floating-images">
      <img
        class="floating-image"
        src="@/assets/img/green-island.jpg"
        alt="Green Island Room"
      />
      <p class="image-text">Cozy rooms with a beautiful view</p>
    </div> -->
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
@use "../assets/scss/color.scss" as *;
.about-page {
  position: relative;
  min-height: 120vh; /* 調整為 min-height，避免內容被限制 */
  // overflow: visible; /* 讓超出父容器的內容可見 */
  overflow: hidden;
  color: #fff;
  text-align: center;
}

.background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  background-image: url("@/assets/img/green-island-bcg.jpg"); /* 背景圖片 */
  background-size: cover;
  background-position: center;
  animation: slide 10s infinite alternate; /* 背景動畫 */
  z-index: -1;
}

@keyframes slide {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-3%);
  }
}

.content {
  position: relative;
  z-index: 2;
  padding: 20px;
  animation: fadeIn 1s ease-in-out; /* 內容淡入動畫 */
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.title {
  font-size: 3rem;
  margin: 20px 0;
  transition: transform 0.3s ease; /* 懸浮效果 */
  color: $color_fff;
}

.title:hover {
  transform: scale(1.1); /* 懸浮放大效果 */
}

.description {
  font-size: 1.5rem;
  margin: 20px 0;
  color: $color_fff;
}

.additional-content {
  margin-top: 40px;
  font-size: 1.2rem;
  line-height: 1.6;
  color: $color_fff;
}

.floating-images img {
  position: absolute;
  bottom: 5%;
  right: 10%;
  width: 20em;
  height: auto;
  animation: float 5s infinite alternate;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}

.floating-image {
  width: 300px;
  height: auto;
  transition: transform 0.3s ease; /* 懸浮效果 */
}

.floating-image:hover {
  transform: translateY(-10px) scale(1.05); /* 懸浮效果 */
}

.image-text {
  margin-top: 10px;
  font-size: 1rem;
  color: #fff;
  font-weight: bold;
}

.image-text-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 20px;
  animation: fadeIn 2s ease-in-out;
}

.reverse {
  flex-direction: row-reverse;
}

.text-content {
  flex: 1;
  padding: 20px;
  font-size: 1.2rem;
  line-height: 1.6;
}

.image-content {
  flex: 1;
  padding: 20px;
}

.image-content img {
  width: 15rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.image-content img:hover {
  transform: scale(1.05); /* 懸浮放大效果 */
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>