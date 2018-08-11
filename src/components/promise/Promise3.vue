<template>
  <div>
    <home-button></home-button>
    <h1>Promise3</h1>
    <h2>Order result: {{ result }}</h2>
  </div>
</template>

<script>
import HomeButton from '@/components/common/HomeButton';

export default {
  name: 'Promise3',
  data() {
    return {
      result: '주문이 아직 없습니다.',
    };
  },
  components: { HomeButton },
  methods: {

  },
  computed: {},
  mounted() {
    console.log('nextTick1');
    /**
     * 생두 저장소 객체
     * @namespace
     */
    const beansStorage = {
      /**
       * 메뉴에 해당하는 생두를 반환한다.
       * @param {string} menu
       * @returns {Promise}
       */
      get(type) {
        return new Promise((resolve, reject) => {
          if (type === '케냐') resolve('생두');
          else reject(new Error('알 수 없는 타입입니다.'));
        });
      },
    };
    /**
     * 로스터기 객체
     * @namespace
     */
    const roaster = {
      /**
       * 생두를 로스팅하여 원두를 반환한다.
       * @param {string} greenBeans
       * @returns {Promise}
       */
      excute(beanType) {
        return beansStorage
          .get(beanType)
          .then((greenBeans) => {
            const promise = new Promise((resolve, reject) => {
              if (greenBeans === '생두') resolve('원두');
              else reject(new Error('생두가 아닙니다.'));
            });
            return promise;
          });
      },
    };
    /**
     * 커피 하우스 객체
     */
    const coffeehouse = {
      /**
       * 커피를 주문한다.
       * @param {string} menu
       * @returns {Promise}
       */
      order(menu) {
        return roaster
          .excute('케냐')
          .then((blackBeans) => {
            const promise = new Promise((resolve, reject) => {
              if (menu === '아메리카노' && blackBeans === '원두') resolve('맛있는 아메리카노');
              else reject(new Error('알 수 없는 타입입니다.'));
            });
            return promise;
          });
      },
    };

    this.$nextTick(() => {
      console.log('nextTick2');
      coffeehouse
        .order('아메리카노')
        .then((coffee) => {
          this.result = `${coffee}가 나왔습니다.`;
        })
        .catch((err) => {
          this.render = err.message;
        });
    });
  },
};
</script>

<style scoped>

</style>
