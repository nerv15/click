class Scroll{
    constructor({ element, top, unit }) {
        if(typeof element == 'string') {
            this.el = document.querySelector(element)
        }else if(element instanceof HTMLElement) {
            this.el = element
        }
        this.el.style.position = 'fixed'
        this.range  = top
        this.unit = unit
        this.el.style.top = this.checkUnit() + 'px'
        
        window.addEventListener('scroll', () => this.move())
    }
    
    move() {
        // scrollY - берет нам расстояние проскроленое сверху 
        
        this.pxOrPercentage = this.checkUnit() 
        
       if(this.pxOrPercentage - scrollY > 0) {
            this.el.style.top = this.pxOrPercentage - scrollY + 'px'
       }else {
            this.el.style.top = 0
       }
    }
    
    checkUnit() {
        if(this.unit == 'px') {
            return this.range >= 0 ? this.range : 0
        }else if(this.unit == '%' || this.unit == undefined) {
            return window.innerHeight / 100 * this.range - this.el.clientHeight
        }
    }
    
    
    
}


let myScroll = new Scroll({
    element: '.header__nav',
    top: 100,
})

console.log(myScroll);







class Hover{
    constructor(el) {
        this.element = el
        this.element = document.querySelector(el)
        this.element.addEventListener('mouseover', () => this.move())
    }
    move() {
        this.element.style.position = 'absolute'
        this.element.style.left = random(0, window.innerWidth - this.element.clientWidth) + 'px'
        this.element.style.top = random(0, window.innerHeight - this.element.clientHeight - 53) + 'px'
    }
}

let block = new Hover('.header__content')

function random(min, max) {
    return Math.floor(Math.random() * (max + 1 - min ) + min)
}