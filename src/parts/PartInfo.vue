<template>
  <div>
    <h1>{{part.title}}</h1>
    <div>
      {{part.description}}
    </div>
  </div>
</template>
<script>
import getPartsMixin from './get-parts-mixin.js';

export default {
  name: 'PartInfo',
  mixins: [getPartsMixin],
  props: ['partType', 'id'],
  props: {
    partType: {
      type: String,
    },
    id: {
      type: [
        Number,
        String,
      ],
      validator(val){
        return Number.isInteger(Number(val));
      }
    }
  },
  computed: {
    // Something HUGE to notice here is even though we are using a mixin with a computed method already defined
    // in it we are still able to attach computed methods to our instance (Component), i'm thinking that these are
    // essentially spread in {...}
    part(){
      const {
        partType,
        id
      } = this;
      // We can destructure off of 'this' instead of 'this.$route.params because
      // we added a props property to the route and registered the props above
      return this.parts[partType].find(part => part.id === +id)
    }
  },
};
</script>

