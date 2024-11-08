<template>
  <Transition name="fade">
    <div v-if="isVisible" class="loadingScreen">
      <svg
        height="100"
        stroke="#C87A62"
        stroke-width="2"
        class="text-line"
        width="100%"
      >
        <text x="50%" dominant-baseline="middle" text-anchor="middle" y="50%">
          W A V E S
        </text>
      </svg>
    </div>
  </Transition>
</template>

<script>
export default {
  name: "LoadingScreen",
  data() {
    return {
      isVisible: true,
    };
  },
  mounted() {
    console.log("LoadingScreen mounted");
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      console.log("Animation finished, starting fade out");
      this.isVisible = false;
    }, 4000);
  },
  beforeUnmount() {
    console.log("LoadingScreen unmounting");
    document.body.style.overflow = "";
  },
  watch: {
    isLoading(newValue) {
      console.log("isLoading changed to:", newValue);
    },
  },
};
</script>

<style lang="scss" scoped>
.loadingScreen {
  background: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
}

.text-line {
  stroke-dasharray: 500;
  stroke-dashoffset: 500;
  animation: dash 2s linear forwards, filling 2s ease-in forwards;
  font-size: 100px;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes filling {
  0%,
  90% {
    fill: #c87a62;
    fill-opacity: 0;
  }
  100% {
    fill: #c87a62;
    fill-opacity: 1;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>