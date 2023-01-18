<template>
  <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
    <div class="w-100">
      <h2 class="mb-5">Experience</h2>

      <div v-for="item in experience" :key="item.company"
        class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="resume-content">
          <h3 class="mb-0">{{ item.position }}</h3>
          <div class="subheading mb-3">{{ item.company }}</div>
          <h5>{{ item.projectName }}</h5>
          <p>{{ item.projectDesc }}</p>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">{{ item.time }}</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import experience from '@/data/experience.json'

export default {
  data () {
    return {
      experience
    }
  }
}

</script>
