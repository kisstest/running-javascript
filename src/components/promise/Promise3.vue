<template>
  <div>
    <home-button></home-button>
    <h1>Promise3</h1>
  </div>
</template>

<script>
import HomeButton from '@/components/common/HomeButton';

export default {
  name: 'Promise3',
  data() {
    return {
      /**
       * 생두 저장소 객체
       * @namespace
       */
      beansStorage: {
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
      },
      /**
       * 로스터기 객체
       * @namespace
       */
      roaster: {
        /**
         * 커피를 주문한다.
         * @param {string} menu
         * @returns {Promise}
         */
        excuted() {},
      },
      /**
       * 커피 하우스 객체
       */
      coffeehouse: {
        /**
         * 커피를 주문한다.
         * @param {string} menu
         * @returns {Promise}
         */
        order() {},
      },
    };
  },
  components: { HomeButton },
  methods: {},
  computed: {},
  mouted() {
  },
};
</script>

<style scoped>

</style>
