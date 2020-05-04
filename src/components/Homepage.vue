<template>
    <div>
        <HomeIntro/>
        <WorkTiles/>
    </div>
</template>

<script>
import HomeIntro from './homepage/HomeIntro.vue'
import WorkTiles from './homepage/WorkTiles.vue'

export default {
  name: 'Homepage',
  components: {
    HomeIntro,
    WorkTiles
  }
}
</script>


<style scoped lang="scss">

</style>