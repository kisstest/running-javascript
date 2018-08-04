<template>
  <div>
    <home-button></home-button>
    <h1>Promise2</h1>
    <div class="container">
      <h2>Menu: <small>{{ menu }}</small></h2>
    </div>
    <div class="btn-group">
      <button
        type="button"
        class="btn btn-primary dropdown-toggle"
        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Menu List
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#" @click="setMenu('아메리카노')">아메리카노</a>
        <a class="dropdown-item" href="#" @click="setMenu('아이스 아메리카노')">아이스 아메리카노</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#" @click="setMenu('쌍화탕')">쌍화탕</a>
      </div>
    </div>
    <button
      type="button"
      class="btn btn-secondary"
      @click="reset"
    >Reset</button>
  </div>
</template>

<script>
import HomeButton from '@/components/common/HomeButton';

export default {
  name: 'Operator',
  data() {
    return {
      menu: '주문이 없습니다.',
    };
  },
  components: { HomeButton },
  methods: {
    setMenu(menu) {
      this.coffee = menu;
      this.order(this.coffee)
        .then((result) => {
          this.menu = `${result}가 나왔습니다.`;
        })
        .catch((err) => {
          this.menu = err.message;
        });
    },
    reset() {
      this.menu = '주문이 없습니다';
    },
    /**
     * 메뉴에 해당하는 생두를 반환한다.
     * @param {string} menu
     */
    getGreenBeans(menu) {
      return new Promise((resolve, reject) => {
        if (menu === '아메리카노') resolve('생두');
        else if (menu === '아이스 아메리카노') resolve('생두');
        else reject(new Error('서비스불가 메뉴입니다.'));
      });
    },
    /**
     * 생두를 로스팅하여 원두를 반환한다.
     * @param {string} greenBeans
     */
    doRoasting(greenBeans) {
      return new Promise((resolve, reject) => {
        if (greenBeans === '생두') resolve('원두');
        else reject(new Error('생두가 없습니다.'));
      });
    },

    /**
     * 원두를 사용하여 메뉴에 해당하는 커피를 만든다.
     * @param {string} menu
     * @param {string} blackBeans
     */
    createCoffee(menu, blackBeans) {
      return new Promise((resolve, reject) => {
        if (menu === '아메리카노' && blackBeans === '원두') resolve('아메리카노');
        else if (menu === '아이스 아메리카노' && blackBeans === '원두') resolve('아이스 아메리카노');
        else reject(new Error('서비스불가 메뉴입니다'));
      });
    },
    /**
     * 커피를 주문한다.
     * @param {string} menu
     * @returns {Promise}
     */
    order(menu) {
      return this.getGreenBeans(menu)
        .then(greenBeans => this.doRoasting(greenBeans))
        .then(blackBeans => this.createCoffee(menu, blackBeans));
    },
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>

</style>
