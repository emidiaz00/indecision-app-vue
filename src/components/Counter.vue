<template>
    
    <div>
        <h1>Counter</h1>
        
        <p>  {{counter}} <sup>2</sup>  = {{ getSquareCounter }} </p>
        <button v-on:click="addCounter">+</button>
        <button v-on:click="subtractCounter">-</button>
        <button class="btn btn-danger" v-on:click="resetCounter">RESET</button>
        
    </div>
    
    
    
    
</template>


<script>
export default {
    data() {
        return {
            counter: 1
        }
    },
    methods: {
        addCounter() {
            this.counter++
        },
        subtractCounter() {
            this.counter--
        },
        resetCounter() {
            this.counter = 1
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
    margin: 0 auto;
}
button {
    background-color: #497174;
    border: none;
    border-radius: 2px;
    padding: 4px 38px;
    margin: 10px;
    color: #EFF5F5;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    margin: 6px;
}



</style>