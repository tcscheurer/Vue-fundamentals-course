<template>
<!-- v-if below basically says only render this template if async aciton has fired, resolved and computed value is truthy -->
<div v-if="availableParts" class="content">
  <div class="preview">
    <CollapsibleSection>
      <div class="preview-content">
        <div class="top-row">
          <img :src="selectedRobot.head.src"/>
        </div>
        <div class="middle-row">
          <img :src="selectedRobot.leftArm.src" class="rotate-left"/>
          <img :src="selectedRobot.torso.src"/>
          <img :src="selectedRobot.rightArm.src" class="rotate-right"/>
        </div>
        <div class="bottom-row">
          <img :src="selectedRobot.base.src"/>
        </div>
        <h5 class="preview-dispaly-title">{{this.selectedRobot.head.title}}</h5>
      </div>
      </CollapsibleSection>
      <button class="add-to-cart" @click="addToCart">Add to cart</button>
    </div>
    <div class="top-row">
        <PartSelector
          :parts="availableParts.heads"
          position="top"
          @partSelected="part => selectedRobot.head = part"
        />
    </div>
    <div class="middle-row">
      <PartSelector
        :parts="availableParts.arms"
        position="left"
        @partSelected="part => selectedRobot.leftArm = part"
      />
      <PartSelector
        :parts="availableParts.torsos"
        position="center"
        @partSelected="part => selectedRobot.torso = part"
      />
      <PartSelector
        :parts="availableParts.arms"
        position="right"
        @partSelected="part => selectedRobot.rightArm = part"
      />
    </div>
    <div class="bottom-row">
      <PartSelector
        :parts="availableParts.bases"
        position="bottom"
        @partSelected="part => selectedRobot.base = part"
      />
    </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex';
import createdHookMixin from './created-hook-mixin';
import PartSelector from './PartSelector.vue';
import CollapsibleSection from '../shared/CollapsibleSection.vue';
export default {
  name: 'RobotBuilder',
  mixins: [createdHookMixin],
  components: {PartSelector, CollapsibleSection},
  beforeRouteLeave(to, from, next){
    // At Route Config level these are beforeEnter, beforeLeave. At component level they have 'Route' in them
    if (this.addedToCart) {
      next(true)
    } else {
      const response = confirm('You have not added your robot to cart, are you sure you want to leave?');
      next(response);
    }
  },
  created(){
    this.$store.dispatch('robots/getParts');
  },
  data(){
    return{
      addedToCart: false,
      cart : [],
      selectedRobot:{
        head: {},
        headTitle: {},
        headOnSale: {},
        leftArm: {},
        rightArm: {},
        torso: {},
        base: {},
      },
    };
  },
  computed: {
    availableParts(){
      return this.$store.state.robots.parts;
    },
  },
  methods: {
    // An example of how to do both of our direct actions from this component to the robots module using Vuex's mapActions helper
    // Notice it's in the methods section of component
    // now in our component we can go from this.$store.dispatch('robots/getParts');  ---> this.getParts();
   /*  ...mapActions('robots', ['getParts', 'addRobotToCart']), */
    addToCart(){
      const robot = this.selectedRobot;
      const cost = robot.head.cost +
        robot.leftArm.cost +
        robot.torso.cost +
        robot.rightArm.cost +
        robot.base.cost;
        // How to commit a mutation (Vuex)
       // this.$store.commit('addRobotToCart', Object.assign({}, robot, {cost}));
       // Instead of commit (mutation) we will use dispatch (action)
       // since we namespaced the Vuex store modules, notice the robots/
        this.$store.dispatch('robots/addRobotToCart', Object.assign({}, robot, {cost}))
        // able to attach .then because we are returning a promise from action
        .then(() => this.$router.push('/cart'));
        this.addedToCart = true;
    },
  },
};
</script>
<!--
  Vue accomplishes scoping of coponent styles by attaching a 'hashed' data attribute to elements in the template
  and applying these styles based on that data attribute
 -->
<style lang="scss" scoped>
.preview-dispaly-title{
  text-align: center;
}
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
}
.part img {
  width:165px;
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name{
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}
.sale{
  color: red;
}
content{
  position: relative;
}
.add-to-cart{
  position:absolute;
  width: 210px;
  padding: 3px;
  font-size: 16px;
}
.sale-border{
  border: 3px solid red;
}
.regular-border{
  border: 3px solid grey;
}
.preview {
  position: absolute;
  top: 80px;
  right: 5px;
  width: 210px;
  height: 210px;
  padding: 5px;
}
.preview-content {
  border: 1px solid #999;
}
.preview img {
  width: 50px;
  height: 50px;
}
.rotate-right {
  transform: rotate(90deg);
}
.rotate-left {
  transform: rotate(-90deg);
}
</style>
