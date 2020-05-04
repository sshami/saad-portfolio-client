<template>
    <div>
        <HomeIntro/>
        <WorkTiles/>
    </div>
</template>

<script>
import HomeIntro from './homepage/HomeIntro.vue'
import WorkTiles from './homepage/WorkTiles.vue'
import { initScrollMagicController, buildScrollMagicScenes, destroyScrollMagic } from '../static/js/homepage-scrollmagic.js'


export default {
  name: 'Homepage',
  components: {
    HomeIntro,
    WorkTiles
  },
  mounted() {
      /* Build ScrollMagic Scenes */
      initScrollMagicController();
      buildScrollMagicScenes();
  },
  destroyed() {
      /* Destroy ScrollMagic Scenes */
      destroyScrollMagic();
  }
}
</script>


<style scoped lang="scss">

</style>