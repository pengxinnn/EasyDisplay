# Easy Display
## Link to the landing page
https://easy-display.herokuapp.com/
## Link to the example page
https://easy-display.herokuapp.com/example
## Link to the documentation page
https://easy-display.herokuapp.com/api

## Getting started
1. Move easy_display.js and easy_display.css into your project
2. Add easy_display.js and easy_display.css in your html head </br>
No external modules needed </br>
`<link rel="stylesheet" type="text/css" href="easy_display.css">`</br>
`<script defer type="text/javascript" src='easy_display.js'></script>`
3. Configure your carousel in your script file or an inline script tag  </br>
- Configure a normal 2D carousel with texts or images </br>
`const c = new CarouselGenerator()`</br>
`c.addPic('somePic.JPEG')` </br>
...

- configure a carousel with videos
</br>
`const videoCarousel = new videoCarouselGenerator('video.mp4', 'coverImage.png')`
`videoCarousel.addVideo('video2.mp4', 'coverImage2.png')` </br>
...

- configure a 3D cube carousel </br>
`const cube = new CubeCarouselGenerator('pic1.png', 'pic2.png', 'pic3.png', 'pic4.png')`

- configure a 3D slideshow carousel </br>
`const slideshow = new SlideshowCarouselGenerator(6)`</br>
`slideshow.addPic('pic1.png')`</br>
...

- configure a 3D coverflow carousel </br>
`const coverflow = new CoverflowCarouselGenerator()`</br>
`coverflow.addPic('pic1.png')`</br>
...</br>
`coverflow.move()`