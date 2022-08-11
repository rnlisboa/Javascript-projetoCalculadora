class calcController{
    constructor(){
        this._timeEl = document.querySelector('#time');
        this._dateEl = document.querySelector('#date');
        this.CurrentDate;
        this._showDisplay = document.querySelector('#display');
        this._myLocal = 'pt-br';
        this.setDisplayTimeDate();
        this.buttonEvents()
        this.initialize();
    }
    initialize(){
        this.setDisplayTimeDate()
        setInterval(() => {
            this.setDisplayTimeDate()
        }, 1000)
    }
    buttonEvents(){
        let btn = document.querySelector('#btn')
        btn.addEventListener('click', ()=>{
            alert('haha')
        })
    }
    
    get displayCalc(){
        return this._showDisplay.innerHTML;
    }
    set displayCalc(value){
        this._showDisplay.innerHTML = value 
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