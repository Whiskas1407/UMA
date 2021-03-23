<template>
  <div class="navigation">
    <nav>
      <ul class="navigation__ul">
        <li v-for="item of nav" class="navigation__li">
          <nuxt-link :to="item.href" class="navigation__link">{{ item.title }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nav: [
        {
          title: "Одежда",
          href: '#'
        },
        {
          title: "Подборки",
          href: '#'
        },
        {
          title: "Детям",
          href: '#'
        },
        {
          title: "Книги",
          href: '#'
        },
        {
          title: "Форма",
          href: '/form'
        }
      ]
    }
  }
}
</script>
<style lang="scss">

.navigation {
  &__ul {
    padding-left: 0;
    display: flex;
    justify-content: space-between;
    width: 26.5vw;
  }
  &__link {
    font-family: Arsenal, system-ui;
    font-style: normal;
    font-weight: normal;
    text-decoration: none;
    padding: 0.2vw 0.8vw;
    border: 1px solid #EBEBEB;
    border-radius: 2px;
    font-size: 0.9vw;
    color: #50555C;
    &:hover {
      color: #000;
      border: 1px solid #000;
    }
  }
}
</style>
