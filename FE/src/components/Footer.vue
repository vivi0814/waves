<template>
  <footer>
    <div class="footer">
      <div class="footer-item">
        <h4>About</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore,
          ati nesciunt nulla sed eius is!
        </p>
      </div>
      <div class="footer-item">
        <h4>Contact</h4>
        <p>A: Via Venti Se, Green Island</p>
        <p>P: 0971-234-567</p>
        <p>E: info@allogio.com</p>
      </div>
      <div class="footer-item">
        <h4>Get Social</h4>
        <p>Follow us on social media and keep in touch with WAVES</p>
        <a v-for="icon in socialIcons" :key="icon.name" :href="icon.link">
          <i :class="icon.class"></i>
        </a>
      </div>
      <div class="footer-item">
        <h4>Get On Map</h4>
        <div class="map">
          <iframe
            :src="mapUrl"
            width="600"
            height="400"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>&copy; Copyright WAVES BY VIVI</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      socialIcons: [
        { name: "instagram", class: "fa-brands fa-instagram", link: "#" },
        { name: "facebook", class: "fa-brands fa-facebook", link: "#" },
        { name: "threads", class: "fa-brands fa-threads", link: "#" },
        { name: "twitter", class: "fa-brands fa-x-twitter", link: "#" },
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.2446989472905!2d121.4996451049504!3d22.64466344249276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346f8d005877eec9%3A0x3e3be0a1c7b09380!2z5rqr5rOJ5ryB5riv!5e0!3m2!1szh-TW!2stw!4v1729144621716!5m2!1szh-TW!2stw",
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.footer-item {
  padding: 10px;
  margin: 10px 20px;
  color: #4e4e4e;
}

.footer-item h4 {
  color: #151515;
}

.footer-item p {
  margin-bottom: 0;
}

.footer-item a {
  text-decoration: none;
  color: #4e4e4e;
  display: inline-block;
  height: 30px;
  width: 30px;
  margin-top: 20px;
  transition: 0.5s;
}

.footer-item a:hover {
  color: #c87a62;
}

.fa-brands {
  font-size: 25px;
}

.map {
  aspect-ratio: 16/7;
}

.map iframe {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}

.copyright {
  width: 100%;
  height: 50px;
  color: #4e4e4e;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}

.copyright p {
  margin-bottom: 0;
}

@media screen and (max-width: 767px) {
  .footer {
    flex-direction: column;
  }
}

@media screen and (min-width: 768px) {
  .footer-item {
    width: 22%;
    margin: 10px 10px;
  }
}
</style>