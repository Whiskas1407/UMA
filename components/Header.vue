<template>
  <header>
    <div class="user__info">
      <img src="/avatar.png" alt="logo" class="user__avatar" @click="goToProfile">
      <h2 class="user__name">@aevsai</h2>
    </div>
    <div class="user__navigation">
      <h3 class="user__navigation-title">Ссылки автора</h3>
      <nav>
        <ul>
          <li><nuxt-link to="/">Мой сайт</nuxt-link><img src="/arrow.svg" alt="arrow"></li>
          <li><a href="#">WhatsApp</a><img src="/arrow.svg" alt="arrow"></li>
          <li><a href="#">Telegram</a><img src="/arrow.svg" alt="arrow"></li>
          <li><a href="#">Сотрудничество</a><img src="/arrow.svg" alt="arrow"></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  methods: {
    goToProfile() {
      window.open('https://www.instagram.com/aevsai/', '_blank')
    }
  }
}
</script>
<style lang="scss" scoped>
header {
  width: 8vw;
  display: flex;
  flex-direction: column;
}
ul {
  padding-left: 0;
}
a {
  text-decoration: none;
}
.user {
  &__avatar {
    width: 8vw;
  }
  &__navigation {
    margin-top: 0.8vw;
    &-title {
      font-size: 0.85vw;
      text-align: left;
      border-bottom: 1px solid;
    }
    li {
      display: flex;
      align-items: center;
    }
    img {
      opacity: 0;
      margin-left: 1vw;
    }
    a {
      font-size: 0.75vw;
      color: #666666;
      &:hover + img {
        opacity: 1;
      }
      &:hover {
        color: #000;
      }
    }
  }
  &__info {
    height: 10.3vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__name {
    font-size: 1.1vw;
  }
}
</style>
