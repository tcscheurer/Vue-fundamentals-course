export default {
  created(){
    this.$store.dispatch('robots/getParts');
  },
  computed: {
    parts(){
      // The or condition basically saves is from that component level v-if based on default state value
      return this.$store.state.robots.parts || {
        heads: [],
        arms: [],
        torsos: [],
        bases: [],
      };
    }
  }
}
