class calcController{
    constructor(){
        this._timeEl = document.querySelector('#time');
        this._dateEl = document.querySelector('#date');
        this.CurrentDate;
        this._showDisplay = document.querySelector('#display');
        this._myLocal = 'pt-br';
        this.setDisplayTimeDate();
        this.buttonEvents();
        this.initialize();
        this.operations();
        this.calculo();
        this.clear();
        this._varSupport = ''
        this._varSupport2 = ''
        this._displayCalc = [];
    }
    initialize(){
        this.setDisplayTimeDate()
        setInterval(() => {
            this.setDisplayTimeDate()
        }, 1000)
    }
    
    buttonEvents(){
        let btn0 = document.querySelector('.btn-0')
        let btn1 = document.querySelector('.btn-1')
        let btn2 = document.querySelector('.btn-2')
        let btn3 = document.querySelector('.btn-3')
        let btn4 = document.querySelector('.btn-4')
        let btn5 = document.querySelector('.btn-5')
        let btn6 = document.querySelector('.btn-6')
        let btn7 = document.querySelector('.btn-7')
        let btn8 = document.querySelector('.btn-8')
        let btn9 = document.querySelector('.btn-9')
        let dot = document.querySelector('.btn-dot')
        btn0.addEventListener('click', ()=>{
            this._varSupport += '0'
            this._varSupport2 = this._varSupport
            this._showDisplay.innerHTML = this._varSupport
        })
        btn1.addEventListener('click', ()=>{
            this._varSupport += '1'
            this._varSupport2 = this._varSupport
            this._showDisplay.innerHTML = this._varSupport
        })
        btn2.addEventListener('click', ()=>{
            this._varSupport += '2'
            this._varSupport2 = this._varSupport
            this._showDisplay.innerHTML = this._varSupport
        })
        btn3.addEventListener('click', ()=>{
            this._varSupport += '3'
            this._varSupport2 = this._varSupport
            this._showDisplay.innerHTML = this._varSupport
        })
        btn4.addEventListener('click', ()=>{
            this._varSupport += '4'
            this._varSupport2 = this._varSupport
            this._showDisplay.innerHTML = this._varSupport
        })
        btn5.addEventListener('click', ()=>{
            this._varSupport += '5'
            this._varSupport2 = this._varSupport
            this._showDisplay.innerHTML = this._varSupport
        })
        btn6.addEventListener('click', ()=>{
            this._varSupport += '6'
            this._varSupport2 = this._varSupport
            this._showDisplay.innerHTML = this._varSupport
        })
        btn7.addEventListener('click', ()=>{
            this._varSupport += '7'
            this._varSupport2 = this._varSupport
            this._showDisplay.innerHTML = this._varSupport
        })
        btn8.addEventListener('click', ()=>{
            this._varSupport += '8'
            this._varSupport2 = this._varSupport
            this._showDisplay.innerHTML = this._varSupport
        })
        btn9.addEventListener('click', ()=>{
            this._varSupport += '9'
            this._varSupport2 = this._varSupport
            this._showDisplay.innerHTML = this._varSupport
        })
        dot.addEventListener('click', ()=>{
            this._varSupport += '.'
            this._varSupport2 = this._varSupport
            this._showDisplay.innerHTML = this._varSupport
        })
    }
    
    operations(){
        let soma = document.querySelector('.btn-soma')
        soma.addEventListener('click', () =>{
            this._varSupport += '+'
            this._showDisplay.innerHTML = this._varSupport
        })
        let subt = document.querySelector('.btn-subtracao')
        subt.addEventListener('click', () =>{
            this._varSupport += '-'
            this._showDisplay.innerHTML = this._varSupport
        })
        let divs = document.querySelector('.btn-divisao')
        divs.addEventListener('click', () =>{
            this._varSupport += '/'
            this._showDisplay.innerHTML = this._varSupport
        })
        let multp = document.querySelector('.btn-multiplicacao')
        multp.addEventListener('click', () =>{
            this._varSupport += '*'
            this._showDisplay.innerHTML = this._varSupport
        })
        
        let root = document.querySelector('.btn-root')
        root.addEventListener('click', () =>{
            this._varSupport = this._varSupport2 + '** (1 / 2)'
            this._showDisplay.innerHTML = '√ ' + this._varSupport2
        })
        let sqr = document.querySelector('.btn-inverse')
        sqr.addEventListener('click', () =>{
            this._varSupport = '1 / ' + this._varSupport2
            this._showDisplay.innerHTML = this._varSupport2
        })
        let inverse = document.querySelector('.btn-square')
        inverse.addEventListener('click', () =>{
            this._varSupport = this._varSupport2 + '** 2'
            this._showDisplay.innerHTML = this._varSupport2 + '²'
        })
    }
    calculo(){
        
        let igual = document.querySelector('.btn-igual') 
        igual.addEventListener('click', ()=>{
            
           let resultado = eval(this._varSupport)
           let result = resultado.toString()
           if(result.length > 13){
                this._showDisplay.innerHTML = result.substr(0,6) + '...'
           }
           else{
            this._showDisplay.innerHTML = resultado
           }
                
            
        })  
    }
    clear(){
        let ce = document.querySelector('.btn-ce')
        ce.addEventListener('click', ()=>{
            this._varSupport = ''
            this._showDisplay.innerHTML = '0'
        })
    }
    
    get displayTime(){
        return this._timeEl.innerHTML
    }
    set displayTime(value){
        this._timeEl.innerHTML = value
    }
    get displayDate(){
        return this._dateEl.innerHTML
    }
    set displayDate(value){
        this._dateEl.innerHTML = value
    }
    get CurrentDate(){
        return new Date()
    }
    set CurrentDate(value){
        this.CurrentDate = value
    }
    setDisplayTimeDate(){
        this.displayDate = this.CurrentDate.toLocaleDateString(this._myLocal, {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })
        this.displayTime = this.CurrentDate.toLocaleTimeString(this._myLocal)
    }
}