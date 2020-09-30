"use strict";
// fadeIn, marginLeft, marginRight
(function(global) { 
    function CarouselGenerator(para) {
        this.id = document.querySelectorAll('ul').length - 1
        this.slides = []
        this.pagination = para.pagination

        if (!para.width) {
            this.width = "100%";
        } else {
            this.width = para.width
        }

        if (!para.height) {
            this.height = "100%";
        } else {
            this.height = para.height
        }

        if (!para.fadeIn) {
            this.fadeIn = false
        } else {
            this.fadeIn = para.fadeIn
        }

        if (!para.infinite) {
            this.infinite = false
        } else {
            this.infinite = para.infinite
        }

        this.marginLeft = "28%"
        this.marginRight = "200px"

        // there is only one container for the whole carousel
        // make the container to hold the carousel
        const carousel = document.createElement('div');
        carousel.className = 'carousel'
        carousel.style = 'position: relative; height: 400px; width: 100%; margin-left: ' + this.marginLeft + '; margin-right: ' + this.marginRight + '; margin-top: 50px;'
        const body = document.querySelector('body')
        body.append(carousel)

        const carouselHolder = document.createElement('div');
        carouselHolder.style = 'height: 100%; position: relative; overflow: hidden;'
        carousel.append(carouselHolder)

        // make the ul of the carousel
        const ul = document.createElement('ul');
        ul.style = 'padding: 0; margin: 0; list-style: none; position: relative; height: 100%'
        carouselHolder.appendChild(ul)
    }

    CarouselGenerator.prototype = {
        // add a picture in the carousel, parameter image is the path to the picture
        addPic: function(src) {
            const uls = document.querySelectorAll('ul');
            const ul = uls[this.id + 1]
            const li = document.createElement('li');
            li.className = 'images';
            if (this.slides.length === 0) {
                li.classList.add('current-slide')
                if (this.fadeIn) {
                    li.classList.add('fade-in')
                }
            }
            li.style = 'position: absolute; top: 0; bottom: 0; width: 100%'
            ul.append(li)
            const pic = document.createElement('img');
            pic.src = src;
            pic.style = 'object-fit: cover;'
            pic.style.width = this.width;
            pic.style.height = this.height;
            li.append(pic)
            this.slides.push(li)
        },

        // add a slide with text in the carousel, parameter text is the text content
        addText: function(text) {
            const uls = document.querySelectorAll('ul');
            const ul = uls[this.id + 1]
            const li = document.createElement('li');
            li.className = 'text';
            if (this.slides.length === 0) {
                li.className = 'current-slide'
            }
            li.style = 'position: absolute; top: 0; bottom: 0; width: 100%'
            ul.append(li)
            
            const div = document.createElement('div');
            const textHolder = document.createElement('div');
            textHolder.appendChild( document.createTextNode(text.text))
            textHolder.style = 'position: relative;'
            textHolder.style.fontFamily = text.fontFamily;
            textHolder.style.fontSize = text.fontSize;
            textHolder.style.color = text.fontColor;
            textHolder.style.left = text.marginLeft;
            textHolder.style.right = text.marginRight;
            textHolder.style.top = '40%';

            div.appendChild(textHolder)
            div.style = 'object-fit: cover; background-color:' + text.backgroundColor + ';'
            div.style.width = this.width;
            div.style.height = this.height;
            li.append(div)
            this.slides.push(li)
        },

        // displaying 4 images at one time
        displayFourPics: function(picture1, picture2, picture3, picture4, para) {
            if (para.structure === 1) {
                const uls = document.querySelectorAll('ul');
                const ul = uls[this.id + 1]
                const li = document.createElement('li');
                li.className = 'images';
                if (this.slides.length === 0) {
                    li.className = 'current-slide'
                }
                li.style = 'position: absolute; top: 0; bottom: 0; width: 100%'
                ul.append(li)
                
                const div1 = document.createElement('div');
                div1.style.width = "45%";
                div1.style.height = "50%";
                div1.style.marginRight = "2%";
                li.append(div1)
    
                const pic1 = document.createElement('img');
                pic1.src = picture1;
                pic1.style = 'object-fit: cover;'
                pic1.style.width = "48%";
                pic1.style.height = "98%";
                div1.append(pic1)
    
                const pic2 = document.createElement('img');
                pic2.src = picture2;
                pic2.style = 'object-fit: cover;'
                pic2.style.marginLeft = "4%";
                pic2.style.width = "48%";
                pic2.style.height = "98%";
                div1.append(pic2)
    
                const div2 = document.createElement('div');
                div2.style.width = "45%";
                div2.style.height = "50%";
                li.append(div2)
    
                const pic3 = document.createElement('img');
                pic3.src = picture3;
                pic3.style = 'object-fit: cover;'
                pic3.style.marginTop = "4%";
                pic3.style.width = "48%";
                pic3.style.height ="98%";
                div2.append(pic3)
    
                const pic4 = document.createElement('img');
                pic4.src = picture4;
                pic4.style = 'object-fit: cover;'
                pic4.style.marginTop = "4%";
                pic4.style.marginLeft = "4%";
                pic4.style.width = "48%";
                pic4.style.height = "98%";
                div2.append(pic4)
    
                this.slides.push(li)
            } else if (para.structure === 2) {
                const uls = document.querySelectorAll('ul');
                const ul = uls[this.id + 1]
                const li = document.createElement('li');
                li.className = 'images';
                if (this.slides.length === 0) {
                    li.className = 'current-slide'
                }
                li.style = 'position: absolute; top: 0; bottom: 0; width: 100%'
                ul.append(li)
                
                const div1 = document.createElement('div');
                div1.style.width = "45%";
                div1.style.height = "70%";
                li.append(div1)
        
                const pic1 = document.createElement('img');
                pic1.src = picture1;
                pic1.style = 'object-fit: cover;'
                pic1.style.width = "100%";
                pic1.style.height = "99%";
                div1.append(pic1)
        
                const div2 = document.createElement('div');
                div2.style.width = "45%";
                div2.style.height = "30%";
                li.append(div2)
        
                const pic2 = document.createElement('img');
                pic2.src = picture2;
                pic2.style = 'object-fit: cover;'
                pic2.style.marginTop = "2%";
                pic2.style.width = "32%";
                pic2.style.height = "99%";
                div2.append(pic2)
        
                const pic3 = document.createElement('img');
                pic3.src = picture3;
                pic3.style = 'object-fit: cover;'
                pic3.style.marginTop = "2%";
                pic3.style.marginLeft = "2%";
                pic3.style.width = "32%";
                pic3.style.height ="99%";
                div2.append(pic3)
        
                const pic4 = document.createElement('img');
                pic4.src = picture4;
                pic4.style = 'object-fit: cover;'
                pic4.style.marginTop = "2%";
                pic4.style.marginLeft = "2%";
                pic4.style.width = "32%";
                pic4.style.height = "99%";
                div2.append(pic4)
        
                this.slides.push(li)                
            }
        },

        // displaying 3 items at a time, and center is center mode
        displayThreePics: function(picture1, picture2, picture3, para) {
            const structure = para.structure
            if (structure === 2) {
                const uls = document.querySelectorAll('ul');
                const ul = uls[this.id + 1]
                const li = document.createElement('li');
                li.className = 'images';
                if (this.slides.length === 0) {
                    li.className = 'current-slide'
                }
                li.style = 'position: absolute; top: 0; bottom: 0; width: 100%'
                ul.append(li)
                
                const pic1 = document.createElement('img');
                pic1.src = picture1;
                pic1.style = 'object-fit: cover;'
                pic1.style.width = "28%";
                pic1.style.height = "70%";
                li.append(pic1)
    
                const div2 = document.createElement('div');
                div2.style.width = "15%";
                div2.style.height = "70%";
                div2.style.marginRight = "2%";
                div2.style.float = "left";
                li.append(div2)
    
                const pic2 = document.createElement('img');
                pic2.src = picture2;
                pic2.style = 'object-fit: cover;'
                pic2.style.width = "100%";
                pic2.style.height = "47%";
                div2.append(pic2)
    
                const pic3 = document.createElement('img');
                pic3.src = picture3;
                pic3.style = 'object-fit: cover;'
                pic3.style.marginTop = "6%";
                pic3.style.width = "100%";
                pic3.style.height = "47%";
                div2.append(pic3)
    
                this.slides.push(li)
            }
            else if (structure === 1) {
                const uls = document.querySelectorAll('ul');
                const ul = uls[this.id + 1]
                const li = document.createElement('li');
                li.className = 'images';
                if (this.slides.length === 0) {
                    li.className = 'current-slide'
                }
                li.style = 'position: absolute; top: 0; bottom: 0; width: 100%'
                ul.append(li)
                
                const pic1 = document.createElement('img');
                pic1.src = picture1;
                pic1.style = 'object-fit: cover;'
                if (!para.centerMode) {
                    pic1.style.width = "14%";
                    pic1.style.height = "60%";          
                } else {
                    pic1.style.marginTop = "10%"
                    pic1.style.marginBottom = "4%"
                    pic1.style.width = "12%";
                    pic1.style.height = "40%";
                    pic1.style.opacity = "0.3";
                }
                li.append(pic1)

                const pic2 = document.createElement('img');
                pic2.src = picture2;
                pic2.style = 'object-fit: cover;'
                pic2.style.marginLeft = "2%"
                if (!para.centerMode) {
                    pic2.style.width = "14%";
                    pic2.style.height = "60%";          
                } else {
                    pic2.style.width = "16%";
                    pic2.style.height = "70%";
                }
                li.append(pic2)

                const pic3 = document.createElement('img');
                pic3.src = picture3;
                pic3.style = 'object-fit: cover;'
                pic3.style.marginLeft = "2%"
                if (!para.centerMode) {
                    pic3.style.width = "14%";
                    pic3.style.height = "60%";          
                } else {
                    pic3.style.marginTop = "10%"
                    pic3.style.marginBottom = "4%"
                    pic3.style.width = "12%";
                    pic3.style.height = "40%";
                    pic3.style.opacity = "0.3";
                }

                li.append(pic3)
                this.slides.push(li)

                const li2 = document.createElement('li');
                li2.className = 'images';
                if (this.slides.length === 0) {
                    li2.className = 'current-slide'
                }
                li2.style = 'position: absolute; top: 0; bottom: 0; width: 100%'
                ul.append(li2)
                
                const pic2_1 = document.createElement('img');
                pic2_1.src = picture2;
                pic2_1.style = 'object-fit: cover;'
                if (!para.centerMode) {
                    pic2_1.style.width = "14%";
                    pic2_1.style.height = "60%";          
                } else {
                    pic2_1.style.marginTop = "10%"
                    pic2_1.style.marginBottom = "4%"
                    pic2_1.style.width = "12%";
                    pic2_1.style.height = "40%";
                    pic2_1.style.opacity = "0.3";
                }
                li2.append(pic2_1)

                const pic2_2 = document.createElement('img');
                pic2_2.src = picture3;
                pic2_2.style = 'object-fit: cover;'
                pic2_2.style.marginLeft = "2%"
                if (!para.centerMode) {
                    pic2_2.style.width = "14%";
                    pic2_2.style.height = "60%";          
                } else {
                    pic2_2.style.width = "16%";
                    pic2_2.style.height = "70%";
                }
                li2.append(pic2_2)

                const pic2_3 = document.createElement('img');
                pic2_3.src = picture1;
                pic2_3.style = 'object-fit: cover;'
                pic2_3.style.marginLeft = "2%"
                if (!para.centerMode) {
                    pic2_3.style.width = "14%";
                    pic2_3.style.height = "60%";          
                } else {
                    pic2_3.style.marginTop = "10%"
                    pic2_3.style.marginBottom = "4%"
                    pic2_3.style.width = "12%";
                    pic2_3.style.height = "40%";
                    pic2_3.style.opacity = "0.3";
                }

                li2.append(pic2_3)
                this.slides.push(li2)


                const li3 = document.createElement('li');
                li3.className = 'images';
                if (this.slides.length === 0) {
                    li3.className = 'current-slide'
                }
                li3.style = 'position: absolute; top: 0; bottom: 0; width: 100%'
                ul.append(li3)
                
                const pic3_1 = document.createElement('img');
                pic3_1.src = picture3;
                pic3_1.style = 'object-fit: cover;'
                if (!para.centerMode) {
                    pic3_1.style.width = "14%";
                    pic3_1.style.height = "60%";          
                } else {
                    pic3_1.style.marginTop = "10%"
                    pic3_1.style.marginBottom = "4%"
                    pic3_1.style.width = "12%";
                    pic3_1.style.height = "40%";
                    pic3_1.style.opacity = "0.3";
                }
                li3.append(pic3_1)

                const pic3_2 = document.createElement('img');
                pic3_2.src = picture1;
                pic3_2.style = 'object-fit: cover;'
                pic3_2.style.marginLeft = "2%"
                if (!para.centerMode) {
                    pic3_2.style.width = "14%";
                    pic3_2.style.height = "60%";          
                } else {
                    pic3_2.style.width = "16%";
                    pic3_2.style.height = "70%";
                }
                li3.append(pic3_2)

                const pic3_3 = document.createElement('img');
                pic3_3.src = picture2;
                pic3_3.style = 'object-fit: cover;'
                pic3_3.style.marginLeft = "2%"
                if (!para.centerMode) {
                    pic3_3.style.width = "14%";
                    pic3_3.style.height = "60%";          
                } else {
                    pic3_3.style.marginTop = "10%"
                    pic3_3.style.marginBottom = "4%"
                    pic3_3.style.width = "12%";
                    pic3_3.style.height = "40%";
                    pic3_3.style.opacity = "0.3";
                }

                li3.append(pic3_3)
                this.slides.push(li3)
            }
        },

    // structure 2 of displaying 4 images at one time
    previewMode: function(picture1, picture2, picture3) {
        const uls = document.querySelectorAll('ul');
        const ul = uls[this.id + 1]
        const li = document.createElement('li');
        li.className = 'images';
        if (this.slides.length === 0) {
            li.className = 'current-slide'
        }
        li.style = 'position: absolute; top: 0; bottom: 0; width: 100%'
        ul.append(li)
        
        const div1 = document.createElement('div');
        div1.style.width = "45%";
        div1.style.height = "70%";
        li.append(div1)

        const pic1 = document.createElement('img');
        pic1.src = picture1;
        pic1.style = 'object-fit: cover;'
        pic1.style.width = "100%";
        pic1.style.height = "99%";
        div1.append(pic1)

        const div2 = document.createElement('div');
        div2.style.width = "45%";
        div2.style.height = "30%";
        li.append(div2)

        const pic2 = document.createElement('img');
        pic2.src = picture1;
        pic2.style = 'object-fit: cover;'
        pic2.style.marginTop = "2%";
        pic2.style.width = "32%";
        pic2.style.height = "99%";
        div2.append(pic2)

        const pic3 = document.createElement('img');
        pic3.src = picture2;
        pic3.style = 'object-fit: cover;'
        pic3.style.marginTop = "2%";
        pic3.style.marginLeft = "2%";
        pic3.style.width = "32%";
        pic3.style.height ="99%";
        pic3.style.filter = "brightness(30%)";
        div2.append(pic3)

        const pic4 = document.createElement('img');
        pic4.src = picture3;
        pic4.style = 'object-fit: cover;'
        pic4.style.marginTop = "2%";
        pic4.style.marginLeft = "2%";
        pic4.style.width = "32%";
        pic4.style.height = "99%";
        pic4.style.filter = "brightness(30%)";
        div2.append(pic4)

        this.slides.push(li)


        const li2 = document.createElement('li');
        li2.className = 'images';
        if (this.slides.length === 0) {
            li2.className = 'current-slide'
        }
        li2.style = 'position: absolute; top: 0; bottom: 0; width: 100%'
        ul.append(li2)
        
        const div2_1 = document.createElement('div');
        div2_1.style.width = "45%";
        div2_1.style.height = "70%";
        li2.append(div2_1)

        const pic2_1 = document.createElement('img');
        pic2_1.src = picture2;
        pic2_1.style = 'object-fit: cover;'
        pic2_1.style.width = "100%";
        pic2_1.style.height = "99%";
        div2_1.append(pic2_1)

        const div2_2 = document.createElement('div');
        div2_2.style.width = "45%";
        div2_2.style.height = "30%";
        li2.append(div2_2)

        const pic2_2 = document.createElement('img');
        pic2_2.src = picture2;
        pic2_2.style = 'object-fit: cover;'
        pic2_2.style.marginTop = "2%";
        pic2_2.style.width = "32%";
        pic2_2.style.height = "99%";
        div2_2.append(pic2_2)

        const pic2_3 = document.createElement('img');
        pic2_3.src = picture3;
        pic2_3.style = 'object-fit: cover;'
        pic2_3.style.marginTop = "2%";
        pic2_3.style.marginLeft = "2%";
        pic2_3.style.width = "32%";
        pic2_3.style.height ="99%";
        pic2_3.style.filter = "brightness(30%)";
        div2_2.append(pic2_3)

        const pic2_4 = document.createElement('img');
        pic2_4.src = picture1;
        pic2_4.style = 'object-fit: cover;'
        pic2_4.style.marginTop = "2%";
        pic2_4.style.marginLeft = "2%";
        pic2_4.style.width = "32%";
        pic2_4.style.height = "99%";
        pic2_4.style.filter = "brightness(30%)";
        div2_2.append(pic2_4)

        this.slides.push(li2)


        const li3 = document.createElement('li');
        li3.className = 'images';
        if (this.slides.length === 0) {
            li3.className = 'current-slide'
        }
        li3.style = 'position: absolute; top: 0; bottom: 0; width: 100%'
        ul.append(li3)
        
        const div3_1 = document.createElement('div');
        div3_1.style.width = "45%";
        div3_1.style.height = "70%";
        li3.append(div3_1)

        const pic3_1 = document.createElement('img');
        pic3_1.src = picture3;
        pic3_1.style = 'object-fit: cover;'
        pic3_1.style.width = "100%";
        pic3_1.style.height = "99%";
        div3_1.append(pic3_1)

        const div3_2 = document.createElement('div');
        div3_2.style.width = "45%";
        div3_2.style.height = "30%";
        li3.append(div3_2)

        const pic3_2 = document.createElement('img');
        pic3_2.src = picture3;
        pic3_2.style = 'object-fit: cover;'
        pic3_2.style.marginTop = "2%";
        pic3_2.style.width = "32%";
        pic3_2.style.height = "99%";
        div3_2.append(pic3_2)

        const pic3_3 = document.createElement('img');
        pic3_3.src = picture1;
        pic3_3.style = 'object-fit: cover;'
        pic3_3.style.marginTop = "2%";
        pic3_3.style.marginLeft = "2%";
        pic3_3.style.width = "32%";
        pic3_3.style.height ="99%";
        pic3_3.style.filter = "brightness(30%)";
        div3_2.append(pic3_3)

        const pic3_4 = document.createElement('img');
        pic3_4.src = picture2;
        pic3_4.style = 'object-fit: cover;'
        pic3_4.style.marginTop = "2%";
        pic3_4.style.marginLeft = "2%";
        pic3_4.style.width = "32%";
        pic3_4.style.height = "99%";
        pic3_4.style.filter = "brightness(30%)";
        div3_2.append(pic3_4)

        this.slides.push(li3)
    },

        // make the carousel to auto display slides, parameter seconds is the speed of displaying one slide
        moveAllSlides: function(seconds) {
            const fadeIn = this.fadeIn
            const infinite = this.infinite
            const pagination = this.pagination
            const slides = this.slides
            const slideWidth = slides[0].getBoundingClientRect().width
            const setSlidePosition = (slide, index) => {
                slide.style.left = slideWidth * index + 'px'
            }
            slides.forEach(setSlidePosition)
            const uls = document.querySelectorAll('ul');
            const ul = uls[this.id + 1]
            const navs = document.querySelectorAll('.carouselNav');
            const nav = navs[this.id]

            if (infinite === false) {
                for (let num = 1; num < this.slides.length; num++) {
                    setTimeout(function(){ 
                        const currentSlide = ul.querySelector('.current-slide')
                        const currentDot = nav.querySelector('.current-slide')
                        let nextSlide = currentSlide.nextElementSibling
                        let nextDot = currentDot.nextElementSibling
                        if (nextSlide == null) {
                            nextSlide = ul.firstElementChild
                            nextDot = nav.firstElementChild
                        }
                        const amountToMove = nextSlide.style.left
                        ul.style.transform = 'translateX(-' + amountToMove + ')';
                        currentSlide.classList.remove('current-slide')
                        nextSlide.classList.add('current-slide')
                        currentDot.classList.remove('current-slide')
                        if (fadeIn) {
                            currentSlide.classList.remove('fade-in') 
                            nextSlide.classList.add('fade-in') 
                        }
                        if (pagination === "dots") {
                            currentDot.style = "border: 0; border-radius: 50%; width: 15px; height: 15px; background: rgba(0,0,0,.3); margin: 0 15px"
                        } else {
                            currentDot.style = "border: 0; width: " + (45/(this.numSlides)).toString() + "%; height: 6px; background: rgba(0,0,0,.1);"
                        }
                        nextDot.classList.add('current-slide') 
                        if (pagination === "dots") {  
                            nextDot.style = "border: 0; border-radius: 50%; width: 15px; height: 15px; background: rgba(0,0,0,.75); margin: 0 15px" 
                        } else {
                            nextDot.style = "border: 0; width: " + (45/(this.numSlides)).toString() + "%; height: 6px; background: #098bdc"
                        }           
                    }, 1000*seconds*num);
                } 
            }
            else {
                setInterval(function(){ 
                    const currentSlide = ul.querySelector('.current-slide')
                    const currentDot = nav.querySelector('.current-slide')
                    let nextSlide = currentSlide.nextElementSibling
                    let nextDot = currentDot.nextElementSibling
                    if (nextSlide == null) {
                        nextSlide = ul.firstElementChild
                        nextDot = nav.firstElementChild
                    }
                    const amountToMove = nextSlide.style.left
                    ul.style.transform = 'translateX(-' + amountToMove + ')';
                    currentSlide.classList.remove('current-slide')
                    nextSlide.classList.add('current-slide')
                    if (fadeIn) {
                        currentSlide.classList.remove('fade-in') 
                        nextSlide.classList.add('fade-in') 
                    } 
                    currentDot.classList.remove('current-slide')
                    if (pagination === "dots") {
                        currentDot.style = "border: 0; border-radius: 50%; width: 15px; height: 15px; background: rgba(0,0,0,.3); margin: 0 15px"
                    } else {
                        currentDot.style = "border: 0; width: " + (45/(ul.childElementCount)).toString() + "%; height: 6px; background: rgba(0,0,0,.1);"
                    }
                    nextDot.classList.add('current-slide') 
                    if (pagination === "dots") {  
                        nextDot.style = "border: 0; border-radius: 50%; width: 15px; height: 15px; background: rgba(0,0,0,.75); margin: 0 15px"  
                    } else {
                        nextDot.style = "border: 0; width: " + (45/(ul.childElementCount)).toString() + "%; height: 6px; background: #098bdc"            
                    }   
                    }, 1000*seconds);
            }
        },
        
        // allow user intervention
        enableIntervention: function() {
            // allow user to click 'left' and 'right' button to move carousel
            const pagination = this.pagination
            const carousels = document.querySelectorAll('.carousel');
            const carousel = carousels[this.id]
            const leftButton = document.createElement('button');
            const halfHeight = 0.5*parseInt(document.querySelector('img').style.height)
            leftButton.style = 'position: absolute; top: ' + halfHeight.toString() + '%;' + 'transform: translateY(-50%); background: transparent; border: 0; cursor: pointer; left: -80px;'
            const leftPic = document.createElement('img');
            leftPic.src = 'left.png';
            leftPic.style = 'width: 80%; opacity: 0.4;'
            leftButton.append(leftPic)
            carousel.append(leftButton)

            const nav = document.createElement('div');
            nav.className = "carouselNav"
            nav.style = "display: flex; justify-content: center; padding: 4px 0; margin-top: 0px; width: " + parseInt(document.querySelector('img').style.width).toString() + "%"
            carousel.append(nav)

            const rightButton = document.createElement('button');
            const neededWidth = 93 - parseInt(document.querySelector('img').style.width)
            rightButton.style = 'position: absolute; top: ' + halfHeight.toString() + '%;' + 'transform: translateY(-50%); background: transparent; border: 0; cursor: pointer; right: ' + neededWidth.toString() + '%;'
            const rightPic = document.createElement('img');
            rightPic.src = 'right.png'
            rightPic.style = 'width: 80%; opacity: 0.4;'
            rightButton.append(rightPic)
            carousel.append(rightButton)

            leftButton.addEventListener('click', e => {
                const uls = document.querySelectorAll('ul');
                const ul = uls[this.id + 1]
                const currentSlide = ul.querySelector('.current-slide')
                const currentDot = nav.querySelector('.current-slide')
                let nextSlide = currentSlide.previousElementSibling
                let nextDot = currentDot.previousElementSibling
                if (nextSlide == null) {
                    nextSlide = ul.lastElementChild
                    nextDot = nav.lastElementChild
                }
                const amountToMove = nextSlide.style.left
                ul.style.transform = 'translateX(-' + amountToMove + ')';
                currentSlide.classList.remove('current-slide')
                nextSlide.classList.add('current-slide')
                currentDot.classList.remove('current-slide')
                if (pagination === "dots") {  
                    currentDot.style = "border: 0; border-radius: 50%; width: 15px; height: 15px; background: rgba(0,0,0,.3); margin: 0 15px"
                } else {
                    currentDot.style = "border: 0; width: " + (45/(ul.childElementCount)).toString() + "%; height: 6px; background: rgba(0,0,0,.1);"
                }
                nextDot.classList.add('current-slide') 
                if (pagination === "dots") {    
                    nextDot.style = "border: 0; border-radius: 50%; width: 15px; height: 15px; background: rgba(0,0,0,.75); margin: 0 15px" 
                } else {
                nextDot.style = "border: 0; width: " + (45/(ul.childElementCount)).toString() + "%; height: 6px; background: #098bdc"     
                }              
            })
            rightButton.addEventListener('click', e => {
                const uls = document.querySelectorAll('ul');
                const ul = uls[this.id + 1]
                const currentSlide = ul.querySelector('.current-slide')
                const currentDot = nav.querySelector('.current-slide')
                let nextSlide = currentSlide.nextElementSibling
                let nextDot = currentDot.nextElementSibling
                if (nextSlide == null) {
                    nextSlide = ul.firstElementChild
                    nextDot = nav.firstElementChild
                }
                const amountToMove = nextSlide.style.left
                ul.style.transform = 'translateX(-' + amountToMove + ')';
                currentSlide.classList.remove('current-slide')
                nextSlide.classList.add('current-slide')
                currentDot.classList.remove('current-slide')
                if (pagination === "dots") {  
                    currentDot.style = "border: 0; border-radius: 50%; width: 15px; height: 15px; background: rgba(0,0,0,.3); margin: 0 15px"
                } else {
                    currentDot.style = "border: 0; width: " + (45/(ul.childElementCount)).toString() + "%; height: 6px; background: rgba(0,0,0,.1);"
                }
                nextDot.classList.add('current-slide') 
                if (pagination === "dots") {   
                    nextDot.style = "border: 0; border-radius: 50%; width: 15px; height: 15px; background: rgba(0,0,0,.75); margin: 0 15px"  
                } else {
                    nextDot.style = "border: 0; width: " + (45/(ul.childElementCount)).toString() + "%; height: 6px; background: #098bdc"                                            
                }
            })

            const alluls = document.querySelectorAll('ul');
            const thisUl = alluls[this.id + 1]
            const numPic = thisUl.childElementCount
            let i;
            for (i = 0; i < numPic; i++) {
                const dot = document.createElement('button');
                if (i === 0) {
                    dot.className = "current-slide"
                    if (pagination === "dots") { 
                        dot.style = "border: 0; border-radius: 50%; width: 15px; height: 15px; background: rgba(0,0,0,.75); margin: 0 15px"
                    } else {
                        dot.style = "border: 0; width: " + (45/(thisUl.childElementCount)).toString() + "%; height: 6px; background: #098bdc"
                    }
                } else {
                    if (pagination === "dots") { 
                        dot.style = "border: 0; border-radius: 50%; width: 15px; height: 15px; background: rgba(0,0,0,.3); margin: 0 15px"
                    } else {
                        dot.style = "border: 0; width: " + (45/(thisUl.childElementCount)).toString() + "%; height: 6px; background: rgba(0,0,0,.1);"
                    }
                }
                nav.append(dot)
            }

            nav.addEventListener('click', e => {
                const dots = Array.from(nav.children)
                const slides = thisUl.querySelectorAll('li')
                const targetDot = e.target.closest('button')
                if (!targetDot) return;
                const currentSlide = thisUl.querySelector('.current-slide')
                const currentDot = nav.querySelector('.current-slide')
                const targetIndex = dots.findIndex(dot => dot === targetDot)
                const targetSlide = slides[targetIndex]

                const amountToMove = targetSlide.style.left
                thisUl.style.transform = 'translateX(-' + amountToMove + ')';
                currentSlide.classList.remove('current-slide')
                targetSlide.classList.add('current-slide')
                
                currentDot.classList.remove('current-slide')
                if (pagination === "dots") { 
                    currentDot.style = "border: 0; border-radius: 50%; width: 15px; height: 15px; background: rgba(0,0,0,.3); margin: 0 15px"
                } else {
                    currentDot.style = "border: 0; width: " + (45/(thisUl.childElementCount)).toString() + "%; height: 6px; background: rgba(0,0,0,.1);"
                }
                targetDot.classList.add('current-slide')
                if (pagination === "dots") { 
                    targetDot.style = "border: 0; border-radius: 50%; width: 15px; height: 15px; background: rgba(0,0,0,.75); margin: 0 15px"
                } else {
                    targetDot.style = "border: 0; width: " + (45/(thisUl.childElementCount)).toString() + "%; height: 6px; background: #098bdc;"
                }
            })
        }
    }

    // A slide with text
    function Txt(text, para) {
        this.text = text

        if (!para.font) {
            this.fontFamily = 'Arials'
        } else {
            this.fontFamily = para.font
        }

        if (!para.fontSize) {
            this.fontSize = '50px'
        } else {
            this.fontSize = para.fontSize
        }

        if (!para.fontColor) {
            this.fontColor = 'black'
        } else {
            this.fontColor = para.fontColor
        }

        if (!para.backgroundColor) {
            this.backgroundColor = 'white'
        } else {
            this.backgroundColor = para.backgroundColor
        }

        if (!para.marginLeft) {
            this.marginLeft = '0px'
        } else {
            this.marginLeft = para.marginLeft
        }

        if (!para.marginRight) {
            this.marginRight = '0px'
        } else {
            this.marginRight = para.marginRight
        }
        
        this.id = document.querySelectorAll('.text').length
    }

    function videoCarouselGenerator(url, image) {
        this.id = ""
        const section = document.createElement('section')
        section.style = "position: relative; width: 100%; height: 100vh"
        const body = document.querySelector('body')
        body.append(section)

        const slide = document.createElement('video')
        slide.className = "videoSlide"
        slide.style = "position: absolute; top: 20%; left: 30%; width: 40%; height: 60%; object-fit: cover;"
        slide.autoplay = true
        slide.muted = true
        slide.loop = true
        section.append(slide)

        const video = document.createElement('source')
        video.src = url
        video.type = 'video/mp4'
        slide.append(video)

        const ul = document.createElement('ul')
        ul.className = "ulforVideo"
        ul.style = "position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%); z-index: 100; display: flex; justify-content: center; align-items: center;"
        section.append(ul)

        const li = document.createElement('li')
        li.onclick = function(){slide.src = url};
        li.style = "list-style: none; cursor: pointer; margin: 0 10px; border-radius: 4px; background: #fff; padding: 3px 3px 0; opacity: 0.7; transition: 0.5s;"
        ul.append(li)

        const img = document.createElement('img')
        img.src = image
        img.style = "width: 100px; transition: 0.5s;"
        li.append(img)
    }

    videoCarouselGenerator.prototype = {
        addVideo: function(url, image) {
            const ul = document.querySelector(".ulforVideo")
            const slide = document.querySelector(".videoSlide")

            const li = document.createElement('li')
            li.onclick = function(){slide.src = url};
            li.style = "list-style: none; cursor: pointer; margin: 0 10px; border-radius: 4px; background: #fff; padding: 3px 3px 0; opacity: 0.7; transition: 0.5s;"
            ul.append(li)
    
            const img = document.createElement('img')
            img.src = image
            img.style = "width: 100px; transition: 0.5s;"
            li.append(img)        
        }
    }

    function CubeCarouselGenerator(pic1, pic2, pic3, pic4) {
        this.id = ""
        // there is only one container for the whole cube carousel
        // make the container to hold the cube carousel
        const carouselContainer = document.createElement('div');
        carouselContainer.className = "carouselContainer"
        carouselContainer.style = "width: 320px; height: 320px; position: relative; margin-left: 38%; margin-right: 200px; margin-top: 100px;"
        const body = document.querySelector('body')
        body.append(carouselContainer)

        let i;
        for (i = 0; i < 4; i++) {
            const carousel = document.createElement('div');
            carousel.className = "cubeCarousel"
            carousel.style = "width: 100%; height: 100%; position: absolute; transform-origin: center center; transform-style: preserve-3d; animation: rotate 20s linear infinite;"
            carouselContainer.append(carousel)
            let j;
            for (j = 0; j < 4; j++) {
                const div = document.createElement('div');
                carousel.append(div)
                const image = document.createElement('div');
                image.className = "cubeImage"
                if (j === 0) {
                    image.style.backgroundImage = "url(" + pic1 + ")"
                }
                else if (j === 1) {
                    image.style.backgroundImage = "url(" + pic2 + ")"
                }
                else if (j === 2) {
                    image.style.backgroundImage = "url(" + pic3 + ")"
                }
                else if (j === 3) {
                    image.style.backgroundImage = "url(" + pic4 + ")"
                }
                div.append(image)
            }
        }
    }

    // numSlides; number of slides in the circle carousel
    function SlideshowCarouselGenerator(numSlides) {
        this.num = 0
        this.numSlides = numSlides
        // there is only one container for the whole circle carousel
        // make the container to hold the circle carousel
        const carouselContainer = document.createElement('section');
        carouselContainer.style = "margin: 0 auto; padding-top: 50px; height: 720px; box-sizing: border-box;"
        const body = document.querySelector('body')
        body.append(carouselContainer)

        const div = document.createElement('div');
        div.style = "margin: auto; width: 190px; perspective: 1000px; position: relative; padding-top: 80px;"
        carouselContainer.append(div)

        const carousel = document.createElement('div');
        carousel.className = "circleCarousel"
        carousel.style = "width: 100%; position: absolute; float: right; animation: rotar 100s infinite linear; transform-style: preserve-3d;"
        div.append(carousel)
    }

    SlideshowCarouselGenerator.prototype = {
        addPic: function(src) {
            const carousel = document.querySelector('.circleCarousel')
            
            const shadow = document.createElement('figure');
            const neededSize = this.num * (360 / this.numSlides)
            shadow.style = "transform: rotateY(" + neededSize.toString() + "deg) translateZ(300px); width: 100%; height: 220px; overflow: hidden; position: absolute; box-shadow: 0px 0px 20px 0px #000; border-radius: 2px;"
            carousel.append(shadow)

            const image = document.createElement('img');
            image.src = src
            image.style = "image-rendering: auto; transition: all 300ms; width: 100%; height: 100%;"
            shadow.append(image)

            this.num = this.num + 1
        }
    }

    function CoverflowCarouselGenerator() {
        this.id = 0
        const carouselContainer = document.createElement('div');
        carouselContainer.className = "threeDCarousel"
        carouselContainer.style = "position: relative; display: block; width: 100%; box-sizing: border-box;"
        const body = document.querySelector('body')
        body.append(carouselContainer)

        const carousel = document.createElement('div');
        carousel.style = "width: 100%; padding: 20px 0 50px 0; overflow: hidden;"
        carouselContainer.append(carousel)

        const carouselPrev = document.createElement('div');
        carouselPrev.className = "carouselPrev"
        carouselPrev.style = "left: 40%; position: absolute; bottom: -15%; transition: transform 0.25s ease;"
        carousel.append(carouselPrev)

        const carouselNext = document.createElement('div');
        carouselNext.className = "carouselNext"
        carouselNext.style = "right: 40%; position: absolute; bottom: -15%; transition: transform 0.25s ease;"
        carousel.append(carouselNext)
        
        const slider = document.createElement('div');
        slider.className = "slider"
        slider.style = "position: relative; transition: transform 1s ease-in-out;"
        carousel.append(slider)
    }

    CoverflowCarouselGenerator.prototype = {
        addPic: function(src) {
            const slider = document.getElementsByClassName('slider')[0]
            
            const sliderItem = document.createElement('div');
            sliderItem.className = "sliderItem"
            sliderItem.style = "position: relative; display: block; float: left; box-sizing: border-box; margin-left: 20px; margin-right: 20px;"
            slider.append(sliderItem)
        
            const threeDFrame = document.createElement('div');
            threeDFrame.className = "threeDFrame"
            threeDFrame.style = "position: relative; width: 100%; height: 100%; transition: transform 1s ease-in-out; -webkit-transform-style: preserve-3d; transform-style: preserve-3d;"
            sliderItem.append(threeDFrame)
        
            const image = document.createElement('img');
            image.src = src
            image.style = "width: 100%; height: 55%;"
            threeDFrame.append(image)
        },

        // move function credit to http://www.iamrohit.in/make-css-3d-carousel-slider-using-pure-javascript/
        move: function() {   
            const carousel = document.getElementsByClassName('threeDCarousel')[0],
                slider = carousel.getElementsByClassName('slider')[0],
                items = carousel.getElementsByClassName('sliderItem'),
                prevBtn = carousel.getElementsByClassName('carouselPrev')[0],
                nextBtn = carousel.getElementsByClassName('carouselNext')[0];
            
            var width, height, totalWidth, margin = 20,
                currIndex = 0,
                interval, intervalTime = 4000;
            
            function init() {
                resize();
                move(Math.floor(items.length / 2));
                bindEvents();
            
                timer();
            }
            
            function resize() {
                width = Math.max(window.innerWidth * .25, 275),
                height = window.innerHeight * .5,
                totalWidth = width * items.length;
            
                slider.style.width = totalWidth + "px";
            
                for(var i = 0; i < items.length; i++) {
                    let item = items[i];
                    item.style.width = (width - (margin * 2)) + "px";
                    item.style.height = height + "px";
                }
            }
            
            function move(index) {
            
                if(index < 1) index = items.length;
                if(index > items.length) index = 1;
                currIndex = index;
            
                for(var i = 0; i < items.length; i++) {
                    let item = items[i],
                        box = item.getElementsByClassName('threeDFrame')[0];
                    if(i == (index - 1)) {
                        item.classList.add('sliderItem--active');
                        box.style.transform = "perspective(1200px)"; 
                    } else {
                        item.classList.remove('sliderItem--active');
                        box.style.transform = "perspective(1200px) rotateY(" + (i < (index - 1) ? 40 : -40) + "deg)";
                    }
                }
            
                slider.style.transform = "translate3d(" + ((index * -width) + (width / 2) + window.innerWidth / 2) + "px, 0, 0)";
            }
            
            function timer() {
                clearInterval(interval);    
                interval = setInterval(() => {
                    move(++currIndex);
                }, intervalTime);    
            }
            
            function prev() {
                move(--currIndex);
                timer();
            }
            
            function next() {
                move(++currIndex);    
                timer();
            }
            
            
            function bindEvents() {
                window.onresize = resize;
                prevBtn.addEventListener('click', () => { prev(); });
                nextBtn.addEventListener('click', () => { next(); });    
            }
            
            
            init();
        }
    }

    global.CarouselGenerator = global.CarouselGenerator || CarouselGenerator
    global.videoCarouselGenerator = global.videoCarouselGenerator || videoCarouselGenerator
    global.CubeCarouselGenerator = global.CubeCarouselGenerator || CubeCarouselGenerator
    global.SlideshowCarouselGenerator = global.SlideshowCarouselGenerator || SlideshowCarouselGenerator
    global.CoverflowCarouselGenerator = global.CoverflowCarouselGenerator || CoverflowCarouselGenerator
    global.Txt = global.Txt || Txt
})(window); 