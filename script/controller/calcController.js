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
        this.display();
        this.operations();
        this.calculo();
        this.clear();
        this._varSupport = ''
        this._displayCalc = [];
    }
    initialize(){
        this.setDisplayTimeDate()
        setInterval(() => {
            this.setDisplayTimeDate()
        }, 1000)
    }
    display(){
        //this._showDisplay.innerHTML = 'hello'
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
        btn0.addEventListener('click', ()=>{
            //this._displayCalc.push('0')
            this._varSupport += '0'
            console.log(this._varSupport)
            this._showDisplay.innerHTML = this._varSupport
        })
        btn1.addEventListener('click', ()=>{
            this._varSupport += '1'
            console.log(this._varSupport)
            this._showDisplay.innerHTML = this._varSupport
        })
        btn2.addEventListener('click', ()=>{
            this._varSupport += '2'
            console.log(this._varSupport)
            this._showDisplay.innerHTML = this._varSupport
        })
        btn3.addEventListener('click', ()=>{
            this._varSupport += '3'
            console.log(this._varSupport)
            this._showDisplay.innerHTML = this._varSupport
        })
        btn4.addEventListener('click', ()=>{
            this._varSupport += '4'
            console.log(this._varSupport)
            this._showDisplay.innerHTML = this._varSupport
        })
        btn5.addEventListener('click', ()=>{
            this._varSupport += '5'
            console.log(this._varSupport)
            this._showDisplay.innerHTML = this._varSupport
        })
        btn6.addEventListener('click', ()=>{
            this._varSupport += '6'
            console.log(this._varSupport)
            this._showDisplay.innerHTML = this._varSupport
        })
        btn7.addEventListener('click', ()=>{
            this._varSupport += '7'
            console.log(this._varSupport)
            this._showDisplay.innerHTML = this._varSupport
        })
        btn8.addEventListener('click', ()=>{
            this._varSupport += '8'
            console.log(this._varSupport)
            this._showDisplay.innerHTML = this._varSupport
        })
        btn9.addEventListener('click', ()=>{
            this._varSupport += '9'
            console.log(this._varSupport)
            this._showDisplay.innerHTML = this._varSupport
        })

    }
    
    operations(){
        let soma = document.querySelector('.btn-soma')
        soma.addEventListener('click', () =>{
            this._displayCalc.push(this._varSupport)
            this._varSupport = ''
            this._displayCalc.push('+')
            console.log(this._displayCalc)
            
        })
        let subt = document.querySelector('.btn-subtracao')
        subt.addEventListener('click', () =>{
            this._displayCalc.push(this._varSupport)
            this._varSupport = ''
            this._displayCalc.push('-')
            console.log(this._displayCalc)
            
        })
        let divs = document.querySelector('.btn-divisao')
        divs.addEventListener('click', () =>{
            this._displayCalc.push(this._varSupport)
            this._varSupport = ''
            this._displayCalc.push('/')
            console.log(this._displayCalc)
            
        })
        let multp = document.querySelector('.btn-multiplicacao')
        multp.addEventListener('click', () =>{
            this._displayCalc.push(this._varSupport)
            this._varSupport = ''
            this._displayCalc.push('*')
            console.log(this._displayCalc)
            
            
        })
    }
    calculo(){
        
        let igual = document.querySelector('.btn-igual') 
        igual.addEventListener('click', ()=>{
            let lastItem = this._displayCalc[this._displayCalc.length - 1 ]
            if (this._displayCalc.length >= 4){
                if (lastItem === '+' ||  lastItem === '-' || lastItem === '*' || lastItem === '/'){
                    this._displayCalc.pop()
                }
                this._displayCalc.push(this._varSupport)
                let string = this._displayCalc.join(' ')
                let stringToCalc = eval(string)
                console.log(stringToCalc)
                this._showDisplay.innerHTML = stringToCalc
                this._displayCalc = []
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