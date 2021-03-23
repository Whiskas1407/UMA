<template>
  <div class="items">
    <div class="items__info">
      <h3 class="items__info-title">Подборка платьев</h3>
      <div class="items__info-block">
        <img src="/background.png" alt="background">
      </div>
    </div>
    <div class="items__products">
      <div class="items__products-slider">
        <h3 class="items__info-title">Где купить похожее?</h3>
      </div>
      <div class="items__products-block">
        <div class="items__item" v-for="item of product.list">
          <div class="items__item-block">
            <h3 class="items__item-title">{{ item.uproduct.classes.brand }}</h3>
            <img src="/item1.png" alt="item">
            <p class="items__item-price">{{ item.uproduct.price }}₽</p>
          </div>
          <button class="items__item-buy" @click="buyItem(item)">В магазин</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.$store.dispatch('GET_PRODUCTS')
    console.log(this.product)
  },
  methods: {
    buyItem(item) {
      alert('Вы перейшли в магазин ' + item.uproduct.classes.brand)
    }
  },
  computed: {
    product() {
      return this.$store.state.products
    }
  }
}
</script>
<style lang="scss">
.items {
  display: flex;
  justify-content: space-between;
  padding-top: 1.4vw;
  padding-bottom: 3vw;
  border-bottom: 1px solid #666666;
  &__item {
    text-align: center;
    width: 7.3vw;
    &-block {
      border: 1px solid #EBEBEB;
      backdrop-filter: blur(10px);
      border-radius: 2px;
      height: 10.7vw;
      margin-bottom: 0.4vw;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
    &-title {
      font-family: Montserrat, sans-serif;
      font-weight: bold;
      font-size: 0.7vw;
    }
    &-price {
      font-family: Montserrat, system-ui;
      font-weight: normal;
      font-size: 0.8vw;
    }
    &-buy {
      width: 6.1vw;
      height: 2vw;
      border-style: none;
      background: #F0F0F0;
      font-size: 0.9vw;
      cursor: pointer;
      outline: none;
      &:hover {
        background: #000;
        color: #F0F0F0;
      }
    }
    img {
      width: 6.6vw;
    }
  }
  &__info {
    &-block {
      width: 31.5vw;
      border: 1px solid #EBEBEB;
      border-radius: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 1vw;
      img {
        width: 26vw;
      }
    }
    &-title {
      font-size: 1vw;
      text-align: left;
    }
  }
  &__products {
    &-block {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 1vw;
      padding-top: 1vw;
    }
  }
}
@media screen and (max-width: 500px) {
  .items {
    flex-direction: column;
    &__products {
      &-block {
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
    &__info {
      &-title {
        display: none;
      }
      &-block {
        width: 90.5vw;
        img {
          width: 90vw;
        }
      }
    }
    &__item {
      width: 28.3vw;
      &-title {
        font-size: 2.7vw;
      }
      img {
        width: 26.6vw;
      }
      &-price {
        font-size: 2.8vw;
      }
      &-buy {
        width: 28.1vw;
        height: 7vw;
        font-size: 2.5vw;
      }
      &-block {
        height: 40.7vw;
      }
    }
  }
}
</style>
