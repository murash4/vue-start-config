<template>
  <div class="container stats">
    <div class="container__content">
      <levels />
    </div>
    <div class="container__side">
      <user-level-info />
    </div>
  </div>
</template>

<script>
import Levels from '@/components/levels'
import UserLevelInfo from '@/components/user-level-info'

export default {
  name: 'stats',
  components: {
    Levels,
    UserLevelInfo
  }
}
</script>
