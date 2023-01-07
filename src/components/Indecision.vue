<template>
  <img v-if="img" :src="img" alt="bg">
  <div class="bg-dark"></div>

  <div class="indecision-container">
    <input 
    v-model="question"
    type="text" 
    placeholder="Hazme una pregunta" 
    name="" id="">
    <p>Recuerda terminar con signo de interrogación (?)</p>
    <div class="bg-gray">
        <div>
            <h2>{{ question }}</h2>
            <h1>{{ answer }}</h1>
            <button v-show="showButtonClear" @click="resetAnswer" class="btn-clear">Clear</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            question: null,
            answer: null,
            img: null,
            showButtonClear: false
        }
    },
    methods: {
        async getAnswer() {
            this.answer = "Pensando..."
            const { answer, image } = await fetch('https://yesno.wtf/api').then(response => response.json())
            this.answer = answer
            this.img = image
            this.showButtonClear = true
        },
        resetAnswer() {
            this.question = '',
            this.answer = '',
            this.img = null
            this.showButtonClear = false
        }
    },
    watch: {
        question(value) {
            if(!value.includes('?'))
            return 
            this.getAnswer()
        }
    },
}
</script>

<style scoped>
    img, .bg-dark {
        height: 100vh;
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0px;
        width: 100vw;
    }
    .bg-gray {
        background-color: #439A97;
        width: 20%;
        opacity: 90%;
        margin: 0 auto;
        border-radius: 4px;
    }
    .bg-dark {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .indecision-container {
        position: relative;
        z-index: 99;
    }
    
    input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 18px;
        margin-top: 12px;
    }

    h1 {
        color: white;
        font-size: 22px;
        text-transform: uppercase;
       
    }
    
    h2 {
        color: white;
        margin-top: 140px;
        font-size: 26px;
        padding-top: 12px;
    }
    .btn-clear {
        background: transparent;
        border: 2px solid #BFEAF5;
        border-radius: 4px;
        padding-bottom: 4px;
    }


</style>