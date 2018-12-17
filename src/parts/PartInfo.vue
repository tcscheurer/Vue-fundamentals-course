<template>
  <div>
    <h1>{{part.title}}</h1>
    <div>
      {{part.description}}
    </div>
  </div>
</template>
<script>
import parts from '../data/parts';

export default {
  name: 'PartInfo',
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
    part(){
      const {
        partType,
        id
      } = this;
      // We can destructure off of 'this' instead of 'this.$route.params because
      // we added a props property to the route and registered the props above
      return parts[partType].find(part => part.id === +id)
    }
  },
};
</script>

