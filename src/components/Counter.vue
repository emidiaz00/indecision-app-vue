<template>
    <div>
        <h1>{{ customTitle }}</h1>
        
        <p>  {{counter}} <sup>2</sup>  = {{ getSquareCounter }} </p>
        <button v-on:click="addCounter">+</button>
        <button v-on:click="subtractCounter">-</button>
        <button class="btn btn-danger" v-on:click="resetCounter">RESET</button>
        
    </div>
</template>


<script>
export default {
    props: {
        title: String,
        start: {
            type: Number,
            default: 100,
            // required true
            validator (value) {
            return value > 103
        }
        },
        
    },
    data() {
        return {
            counter: this.start
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
            return this.counter + this.counter
        },
        customTitle() {
            if (!this.title) {
                return this.counter
            }
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