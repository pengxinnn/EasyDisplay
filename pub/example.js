function example1() {
    const c = new CarouselGenerator({fadeIn: false, 
        infinite: true, 
        width: "45%", 
        height: "95%", 
        pagination: "dots"
    })
    c.addPic('examplePictures/mc.JPEG')
    c.addPic('examplePictures/pepsi.JPEG')
    c.addPic('examplePictures/shoppers.JPEG')
    c.addPic('examplePictures/tim.JPEG')
    c.addPic('examplePictures/starbucks.PNG')
    c.enableIntervention()
    c.moveAllSlides(4)
}

function example2() {
    const c2 = new CarouselGenerator({
        fadeIn: false, 
        infinite: true, 
        width: "45%", 
        height: "95%", 
        pagination: "dots"
    })
    c2.addPic('examplePictures/spyfall.JPEG')
    const t2_1 = new Txt('STEP: 1', {
        font: 'Piedra, cursive',
        fontSize: '70px',
        fontColor: '#0c5988',
        backgroundColor: 'white',
        marginLeft: "27%",
        marginRight: "0%"
    })
    c2.addText(t2_1)
    const t2_2 = new Txt('Players receive a secret card informing them of the location.', {
        font: 'Mansalva, cursive',
        fontSize: '30px',
        fontColor: 'white',
        backgroundColor: '#0c5988',
        marginLeft: "2%",
        marginRight: "0%"
    })
    c2.addText(t2_2)
    const t2_3 = new Txt('Except that one player receives the SPY card instead of the location.', {
        font: 'Mansalva, cursive',
        fontSize: '30px',
        fontColor: 'white',
        backgroundColor: '#0c5988',
        marginLeft: "2%",
        marginRight: "0%"
    })
    c2.addText(t2_3)

    const t2_4 = new Txt('STEP: 2', {
        font: 'Piedra, cursive',
        fontSize: '70px',
        fontColor: '#0c5988',
        backgroundColor: 'white',
        marginLeft: "27%",
        marginRight: "0%"
    })
    c2.addText(t2_4)

    const t2_5 = new Txt('Players then start asking each other questions during the intense 8-minute rounds.', {
        font: 'Mansalva, cursive',
        fontSize: '30px',
        fontColor: 'white',
        backgroundColor: '#0c5988',
        marginLeft: "0%",
        marginRight: "0%"
    })
    c2.addText(t2_5)

    const t2_6 = new Txt('STEP: 3', {
        font: 'Piedra, cursive',
        fontSize: '70px',
        fontColor: '#0c5988',
        backgroundColor: 'white',
        marginLeft: "27%",
        marginRight: "0%"
    })
    c2.addText(t2_6)

    const t2_7 = new Txt('Once per round, each player may accuse another player of being the Spy.', {
        font: 'Mansalva, cursive',
        fontSize: '30px',
        fontColor: 'white',
        backgroundColor: '#0c5988',
        marginLeft: "2%",
        marginRight: "0%"
    })
    c2.addText(t2_7)

    const t2_8 = new Txt('If all players agree, the game ends and that player’s secret card is flipped up.', {
        font: 'Mansalva, cursive',
        fontSize: '30px',
        fontColor: 'white',
        backgroundColor: '#0c5988',
        marginLeft: "0%",
        marginRight: "0%"
    })
    c2.addText(t2_8)
    c2.enableIntervention()

    c2.moveAllSlides(2)
}

function example3() {
    const c3 = new CarouselGenerator({fadeIn: true, infinite: true, width: "45%", height: "95%", pagination: "dots"})
    c3.addPic('examplePictures/new1.JPEG')
    const t3_1 = new Txt('UK imposes 14-day quarantine on holidaymakers returning from Spain', {
        font: 'Hind Madurai, sans-serif',
        fontSize: '30px',
        fontColor: 'white',
        backgroundColor: 'black',
        marginLeft: "3%",
        marginRight: "0%"
    })
    c3.addText(t3_1)

    c3.addPic('examplePictures/new2.JPEG')
    const t3_2 = new Txt('Somali lawmakers oust prime minister in no-confidence vote', {
        font: 'Hind Madurai, sans-serif',
        fontSize: '30px',
        fontColor: 'white',
        backgroundColor: '#121254',
        marginLeft: "2%",
        marginRight: "-20%"
    })
    c3.addText(t3_2)

    c3.addPic('examplePictures/new3.JPEG')
    const t3_3 = new Txt('Coronavirus infections rise in France as Spain cracks down on nightlife', {
        font: 'Hind Madurai, sans-serif',
        fontSize: '30px',
        fontColor: 'white',
        backgroundColor: '#4d0000',
        marginLeft: "2%",
        marginRight: "-20%"
    })
    c3.addText(t3_3)

    c3.enableIntervention()
    c3.moveAllSlides(2)
}

function example13() {
    const c = new CarouselGenerator({
        fadeIn: true, 
        infinite: true, 
        width: "45%", 
        height: "95%", 
        pagination: "progress"
    })
    c.addPic('examplePictures/thai1.jpeg')
    c.addPic('examplePictures/thai2.jpeg')
    c.addPic('examplePictures/thai3.jpeg')
    c.addPic('examplePictures/thai4.jpeg')
    c.addPic('examplePictures/flow3.jpeg')
    c.enableIntervention()
    c.moveAllSlides(4)
}

function example4() {
    const c4 = new CarouselGenerator({
        fadeIn: false, 
        infinite: true, 
        pagination: "dots"
    })
    const pic1 = 'examplePictures/model1.PNG'
    const pic2 = 'examplePictures/model2.PNG'
    const pic3 = 'examplePictures/model3.PNG'

    c4.displayThreePics(pic1, pic2, pic3, {structure: 1, centerMode: true})
    c4.enableIntervention()
    c4.moveAllSlides(2)
}

function example5() {
    const c5 = new CarouselGenerator({
        fadeIn: false, 
        infinite: true, 
        pagination: "dots"
    })
    const pic1 = 'examplePictures/temple1.jpeg'
    const pic2 = 'examplePictures/temple2.jpeg'
    const pic3 = 'examplePictures/temple3.jpeg'
    const pic4 = 'examplePictures/temple4.jpeg'
    const pic5 = 'examplePictures/temple5.jpeg'
    const pic6 = 'examplePictures/temple6.jpeg'
    c5.displayThreePics(pic1, pic2, pic3, {structure: 2})
    c5.displayThreePics(pic4, pic5, pic6, {structure: 2})
    c5.enableIntervention()
    c5.moveAllSlides(2)
}

function example6() {
    const c6 = new CarouselGenerator({
        fadeIn: true, 
        infinite: true, 
        pagination: "dots"
    })
    const pic1 = 'examplePictures/scenery1.jpg'
    const pic2 = 'examplePictures/scenery2.jpg'
    const pic3 = 'examplePictures/scenery3.jpeg'
    const pic4 = 'examplePictures/scenery4.jpeg'
    const pic5 = 'examplePictures/scenery5.jpeg'
    const pic6 = 'examplePictures/scenery6.jpeg'
    const pic7 = 'examplePictures/scenery7.jpeg'
    const pic8 = 'examplePictures/scenery8.jpeg'
    c6.displayFourPics(pic1, pic2, pic3, pic4, {structure: 1})
    c6.displayFourPics(pic5, pic6, pic7, pic8, {structure: 1})
    c6.enableIntervention()
    c6.moveAllSlides(2)
}

function example7() {
    const c7 = new CarouselGenerator({
        fadeIn: false, 
        infinite: true, 
        pagination: "dots"})
    const pic1 = 'examplePictures/food1.PNG'
    const pic2 = 'examplePictures/food2.PNG'
    const pic3 = 'examplePictures/food3.PNG'
    const pic4 = 'examplePictures/food4.PNG'
    const pic5 = 'examplePictures/food5.PNG'
    const pic6 = 'examplePictures/food6.PNG'
    const pic7 = 'examplePictures/food7.PNG'
    const pic8 = 'examplePictures/food8.PNG'
    c7.displayFourPics(pic1, pic2, pic3, pic4, {structure: 2})
    c7.displayFourPics(pic5, pic6, pic7, pic8, {structure: 2})
    c7.enableIntervention()
    c7.moveAllSlides(3)
}

function example11() {
    const c11 = new CarouselGenerator({
        fadeIn: true, 
        infinite: true, 
        pagination: "dots"
    })
    const pic1 = 'examplePictures/scenery1.jpg'
    const pic2 = 'examplePictures/scenery2.jpg'
    const pic3 = 'examplePictures/scenery3.jpeg'
    const pic4 = 'examplePictures/scenery4.jpeg'
    c11.previewMode(pic1, pic2, pic3)
    c11.enableIntervention()
    c11.moveAllSlides(2)
}

function exmaple12() {
    const videoCarousel = new videoCarouselGenerator('examplePictures/video1.mp4', 
    "examplePictures/picture1.PNG")
    videoCarousel.addVideo('examplePictures/video2.mp4', "examplePictures/picture2.PNG")
    videoCarousel.addVideo('examplePictures/video3.mp4', "examplePictures/picture3.PNG")
}

function example8() {
    const cube = new CubeCarouselGenerator('examplePictures/cat1.PNG', 
    'examplePictures/cat2.PNG', 
    'examplePictures/cats.PNG', 
    'examplePictures/dog2.PNG')
}

function example9() {
    const circle = new SlideshowCarouselGenerator(6)
    circle.addPic('examplePictures/EasyDisplay.png')
    circle.addPic('examplePictures/EasyDisplay7.png')
    circle.addPic('examplePictures/EasyDisplay6.png')
    circle.addPic('examplePictures/EasyDisplay5.png')
    circle.addPic('examplePictures/EasyDisplay4.png')
    circle.addPic('examplePictures/EasyDisplay3.png')
    circle.addPic('examplePictures/EasyDisplay2.png')
}

function example10() {
    const threeD = new CoverflowCarouselGenerator()
    threeD.addPic('examplePictures/flower1.jpeg')
    threeD.addPic('examplePictures/flower2.jpeg')
    threeD.addPic('examplePictures/flower3.jpeg')
    threeD.addPic('examplePictures/flower4.jpeg')
    threeD.addPic('examplePictures/flower5.jpeg')
    threeD.addPic('examplePictures/flower6.jpeg')
    threeD.move()
}

const e1 = document.createElement('h2');
e1.innerHTML = "Autoplay</br>Infinite loop</br>Arrow key navigation</br>Dots pagination"
const body = document.querySelector('body')
body.append(e1)
example1();
const code1 = document.createElement('div');
code1.className = "code"
const codeImage1 = document.createElement('img');
codeImage1.src = 'examplePictures/example1.PNG'
codeImage1.style.width = "100%"
code1.append(codeImage1)
body.append(code1)

const e2 = document.createElement('h2');
e2.innerHTML = "Text and picture together"
body.append(e2)
example2();
const code2 = document.createElement('div');
code2.className = "code"
const codeImage2 = document.createElement('img');
codeImage2.src = 'examplePictures/example2.PNG'
codeImage2.style.width = "100%"
code2.append(codeImage2)
body.append(code2)

const e3 = document.createElement('h2');
e3.innerHTML = "Fade"
body.append(e3)
example3();
const code3 = document.createElement('div');
code3.className = "code"
const codeImage3 = document.createElement('img');
codeImage3.src = 'examplePictures/example3.PNG'
codeImage3.style.width = "100%"
code3.append(codeImage3)
body.append(code3)

const e13 = document.createElement('h2');
e13.innerHTML = "Progress Pagination"
body.append(e13)
example13();
const code13 = document.createElement('div');
code13.className = "code"
const codeImage13 = document.createElement('img');
codeImage13.src = 'examplePictures/example13.PNG'
codeImage13.style.width = "100%"
code13.append(codeImage13)
body.append(code13)

const e4 = document.createElement('h2');
e4.innerHTML = "Multiple items per view</br>Center mode"
body.append(e4)
example4();
const code4 = document.createElement('div');
code4.className = "code"
const codeImage4 = document.createElement('img');
codeImage4.src = 'examplePictures/example4.PNG'
codeImage4.style.width = "100%"
code4.append(codeImage4)
body.append(code4)

const e5 = document.createElement('h2');
e5.innerHTML = "Customize layouts<h4>Layout for 3 items per view</h4>"
body.append(e5)
example5();
const code5 = document.createElement('div');
code5.className = "code"
const codeImage5 = document.createElement('img');
codeImage5.src = 'examplePictures/example5.PNG'
codeImage5.style.width = "100%"
code5.append(codeImage5)
body.append(code5)

const e6 = document.createElement('h2');
e6.innerHTML = "<h4>Layout for 4 items per view</h4>"
body.append(e6)
example6();
const code6 = document.createElement('div');
code6.className = "code"
const codeImage6 = document.createElement('img');
codeImage6.src = 'examplePictures/example6.PNG'
codeImage6.style.width = "100%"
code6.append(codeImage6)
body.append(code6)

const e7 = document.createElement('h2');
e7.innerHTML = "<h4>Layout for 4 items per view</h4>"
body.append(e7)
example7();
const code7 = document.createElement('div');
code7.className = "code"
const codeImage7 = document.createElement('img');
codeImage7.src = 'examplePictures/example7.PNG'
codeImage7.style.width = "100%"
code7.append(codeImage7)
body.append(code7)

const e11 = document.createElement('h2');
e11.innerHTML = "Preview Mode"
body.append(e11)
example11()
const code11 = document.createElement('div');
code11.className = "code"
const codeImage11 = document.createElement('img');
codeImage11.src = 'examplePictures/example11.PNG'
codeImage11.style.width = "100%"
code11.append(codeImage11)
body.append(code11)

const e12 = document.createElement('h2');
e12.innerHTML = "Carousel with Video"
body.append(e12)
exmaple12()
const code12 = document.createElement('div');
code12.className = "code"
const codeImage12 = document.createElement('img');
codeImage12.src = 'examplePictures/example12.PNG'
codeImage12.style.width = "100%"
code12.append(codeImage12)
body.append(code12)

const e8 = document.createElement('h2');
e8.innerHTML = "3D carousels<h4>Cube carousel</h4>"
body.append(e8)
example8();
const code8 = document.createElement('div');
code8.className = "code"
const codeImage8 = document.createElement('img');
codeImage8.src = 'examplePictures/example8.PNG'
codeImage8.style.width = "100%"
code8.append(codeImage8)
body.append(code8)

const e9 = document.createElement('h2');
e9.innerHTML = "<h4>3D slideshow carousel</h4>"
body.append(e9)
example9();
const code9 = document.createElement('div');
code9.className = "code"
const codeImage9 = document.createElement('img');
codeImage9.src = 'examplePictures/example9.PNG'
codeImage9.style.width = "100%"
code9.append(codeImage9)
body.append(code9)

const e10 = document.createElement('h2');
e10.innerHTML = "<h4>3D Coverflow carousel</h4>"
body.append(e10)
example10();
const code10 = document.createElement('div');
code10.className = "code"
const codeImage10 = document.createElement('img');
codeImage10.src = 'examplePictures/example10.PNG'
codeImage10.style.width = "100%"
code10.append(codeImage10)
body.append(code10)