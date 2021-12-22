// Navbar
const app = Vue.createApp({})
app.component('app-nav', {
  template: `
           <a class="navbar-brand" href="https://lukakrstik.com">
                <img src="images/logo.svg"
                style="width: 4.267rem; height: auto"
                alt="Luka Krstik">
           </a>
           <ul class="navbar-nav float-right mr-1" style="text-align: right;" id="navigation-app">
                        <li class="nav-item">
                           <a href="https://lukakrstik.com" class="header-info hyperlink my-0">Home</a>
                        </li>
                        <li class="nav-item">
                           <a href="https://lukakrstik.com/gallery" class="header-info hyperlink my-0">Gallery</a>
                        </li>
                        <li class="nav-item">
                           <a href="https://lukakrstik.com/albums" class="header-info hyperlink my-0">Albums</a>
                        </li>
                        <li class="nav-item">
                           <a href="https://lukakrstik.com/contact" class="header-info hyperlink my-0">Contact</a>
                        </li>
           </ul>
            `
})
app.mount('#navigation-app')
// Load Masonry Layout
var grid = document.getElementById("app-card");
var msnry;
    imagesLoaded( grid, function() {
  // init Isotope after all images have loaded
  msnry = new Masonry( grid, {
    itemSelector: '.card',
  });
});

// Navbar za SK
const appNAV = Vue.createApp({})
appNAV.component('app-nav2', {
    template: `
           <a class="navbar-brand" href="https://lukakrstik.com">
                <img src="images/logoW.svg" class="logoSK"
                style="width: 4.267rem; height: auto;"
                alt="Luka Krstik">
           </a>
           <ul class="navbar-nav float-right mr-1" style="text-align: right;" id="navigation-app2">
                        <li class="nav-item">
                           <a href="https://lukakrstik.com" class="header-info hyperlink my-0" style="color: white">Home</a>
                        </li>
                        <li class="nav-item">
                           <a href="https://lukakrstik.com/gallery" class="header-info hyperlink my-0" style="color: white">Gallery</a>
                        </li>
                        <li class="nav-item">
                           <a href="https://lukakrstik.com/albums" class="header-info hyperlink my-0" style="color: white">Albums</a>
                        </li>
                        <li class="nav-item">
                           <a href="https://lukakrstik.com/contact" class="header-info hyperlink my-0" style="color: white">Contact</a>
                        </li>
           </ul>
            `
})
appNAV.mount('#navigation-app2')


      
