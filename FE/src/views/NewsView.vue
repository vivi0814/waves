<template>
  <div class="news-page">
    <h3 class="fontSize32">LATEST NEWS</h3>
    <div class="filters">
      <input
        type="text"
        v-model="searchKeyword"
        placeholder="SEARCH NEWS..."
        class="search-input"
      />
      <span
        @click="toggleSortOrder"
        class="material-symbols-outlined sort-icon"
      >
        sort
      </span>
    </div>
    <div class="news-list">
      <NewsItem v-for="item in visibleNews" :key="item.id" :news="item" />
    </div>
    <button
      v-if="hasMoreNews"
      @click="showMoreNews"
      class="read-more custom-btn btn-border-color"
    >
      READ MORE
    </button>
  </div>
</template>

<script>
import axios from "axios";
import NewsItem from "../components/NewsItem.vue";

export default {
  components: { NewsItem },
  data() {
    return {
      news: [],
      searchKeyword: "",
      sortOrder: "desc",
      visibleCount: 8,
    };
  },
  computed: {
    filteredAndSortedNews() {
      let filtered = this.news;

      if (this.searchKeyword) {
        filtered = filtered.filter(
          (item) =>
            item.title
              .toLowerCase()
              .includes(this.searchKeyword.toLowerCase()) ||
            item.content
              .toLowerCase()
              .includes(this.searchKeyword.toLowerCase())
        );
      }

      filtered.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return this.sortOrder === "asc" ? dateA - dateB : dateB - dateA;
      });

      return filtered;
    },
    visibleNews() {
      // 根據 visibleCount 限制顯示的數量
      return this.filteredAndSortedNews.slice(0, this.visibleCount);
    },
    hasMoreNews() {
      // 判斷是否還有更多消息
      return this.visibleCount < this.filteredAndSortedNews.length;
    },
  },
  methods: {
    toggleSortOrder() {
      this.sortOrder = this.sortOrder === "desc" ? "asc" : "desc"; // 切換排序
    },
    showMoreNews() {
      // 每次點擊增加 6 條（2 排，每排 3 條）
      this.visibleCount += 8;
    },
  },
  mounted() {
    axios
      .get(
        // "https://my-json-server.typicode.com/vivi0814/waves-json-server/news"
        // "http://localhost:3000/news"
        "/data/db.json"
      )
      .then((res) => {
        this.news = res.data.news;
      });
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/scss/color.scss" as *;
.news-page {
  padding: 16px;
  max-width: 1200px;
  margin: 0 auto;
  h3 {
    text-align: center;
    margin: 30px 0;
  }
}
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;
  justify-content: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.search-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.sort-icon {
  font-size: 30px;
  cursor: pointer;
  color: $front_color_main;
  transition: transform 0.3s;
}

.sort-icon:hover {
  transform: scale(1.1);
}

.news-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  gap: 24px;
  justify-content: center;
}
.read-more {
  display: block;
  margin: 24px auto;
  padding: 10px 20px;
  cursor: pointer;
}

@media screen and (max-width: 767px) {
}

@media (min-width: 1024px) {
  .news-list {
    grid-template-columns: repeat(auto-fit, 250px);
  }
}
</style>
