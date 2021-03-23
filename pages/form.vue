<template>
  <div>
    <div class="form__block">
      <form class="form-tag">
        <p>Блогер</p>
        <select>
          <option selected>Пункт 1</option>
          <option>Пункт 2</option>
          <option>Пункт 3</option>
          <option>Пункт 4</option>
        </select>
      </form>
      <form class="form-tag">
        <p>Опубликовать</p>
        <label class="switch">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </form>
      <form class="form-tag">
        <p>Изображение подборки</p>
        <input type="file">
      </form>
    </div>
    <Items />
  </div>
</template>
<script>
import Items from "@/components/Items";
export default {
  components: {
    Items
  }
}
</script>
<style lang="scss">
.form__block {
  display: flex;
  justify-content: space-between;
}
.form-tag {
  display: flex;
  width: 7vw;
  margin-bottom: 1vw;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {display:none;}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: green;
}

input:focus + .slider {
  box-shadow: 0 0 1px green;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
