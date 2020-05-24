<template>
    <div>
        <HomeIntro/>
        <WorkTiles/>
    </div>
</template>

<script>
import HomeIntro from './homepage/HomeIntro.vue'
import WorkTiles from './homepage/WorkTiles.vue'
import { initScrollMagicController, createIntroTimeline, buildScrollMagicScenes, destroyScrollMagic } from '../static/js/homepage-scrollmagic.js'


export default {
  name: 'Homepage',
  components: {
    HomeIntro,
    WorkTiles
  },
  mounted() {
      /* Build ScrollMagic Scenes */
      initScrollMagicController();
      createIntroTimeline();
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