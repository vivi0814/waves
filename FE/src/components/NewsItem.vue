<template>
  <div class="news-item">
    <img :src="news.image" :alt="news.title" class="news-image" />
    <div class="news-content">
      <h3 class="news-title fontSize24">{{ news.title }}</h3>
      <p class="news-txt">{{ news.content }}</p>
      <span class="news-date">{{ formattedDate }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedDate() {
      return new Date(this.news.date).toLocaleDateString();
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/color.scss" as *;
@use "../assets/scss/btn.scss" as *;

.news-item {
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.news-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.news-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.news-content {
  padding: 16px;
}
.news-title {
  color: $color_555;
}
.news-txt {
  color: $color_888;
}

.news-date {
  display: block;
  margin-top: 8px;
  color: $color_999;
  font-size: 14px;
}
</style>
