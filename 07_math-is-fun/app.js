const app = Vue.createApp({
    data(){
        return {
            num1 : Math.floor(Math.random() * 20),
            num2 : Math.floor(Math.random() * 11),
            ans: '',
            result: '',
            showNext: false
        }
    },
    methods : {
        checkAnswer(event){
            event.preventDefault();
            if(Number(this.ans) === this.num1 + this.num2){
                console.log('Well done!');
                this.result = 'correct';
                this.showNext = true;
            }   
            else{
                console.log('Oops, wrong answer. Try again!');
                this.result = 'incorrect';
            } 
        },
        reset(){
            this.result = '';
        }
    }
});
    
    app.mount('#question');
    