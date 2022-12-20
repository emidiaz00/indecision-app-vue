<template>
  <h1>Counter</h1>
  <p>  {{counter}} <sup>2</sup>  = {{ counter * counter}} </p>
  <p>  {{counter}} <sup>2</sup>  = {{ getFinalValue() }} </p>
  <p>  {{counter}} <sup>2</sup>  = {{ getSquareCounter }} </p>
</template>


<script>
export default {

    data() {
        return {
           counter: 5 
        }
    },
    methods: {
        getFinalValue() {
            return this.counter * this.counter
        } 
    },
    computed: {
        getSquareCounter() {
            console.log('computed square counter');
            return this.counter + this.counter
        }
    }

}
</script>

<style>
p {
    color: black;
    font-weight: bold;
    font-size: 40px;
}

</style>