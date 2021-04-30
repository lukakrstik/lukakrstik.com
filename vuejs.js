
// Create a Vue application
const app = Vue.createApp({})

// Define a new global component called button-counter
app.component('app-nav', {
  template: `
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
             </li>`
})

app.mount('#navigation-app')

const UrlList = {
  data() {
    return {
        featured: [
                    { tag: 'null', isColor: true, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_7956T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_7956O.jpg?raw=true' },
                    { tag: 'null', isColor: true, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_8001T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_8001O.jpg?raw=true' },
                    { tag: 'null', isColor: true, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_7983T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_7983O.jpg?raw=true' },
        ],

        pictures: [
                    { tag: 'null', isColor: true , tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_8371T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_8371O.jpg?raw=true' },
                    { tag: 'null', isColor: false, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_8388T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_8388O.jpg?raw=true' },
                    { tag: 'null', isColor: true, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_7956T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_7956O.jpg?raw=true' },
                    { tag: 'null', isColor: true, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_7983T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_7983O.jpg?raw=true' },
                    { tag: 'null', isColor: true, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_8001T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_8001O.jpg?raw=true' },
                    { tag: 'null', isColor: true, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_8055T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_8055O.jpg?raw=true' },
                    { tag: 'null', isColor: true, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_7485T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_7485O.jpg?raw=true' },
                    { tag: 'null', isColor: true, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DJI_0404T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DJI_0404O.jpg?raw=true' },
                    { tag: 'null', isColor: true, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DJI_0413T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DJI_0413O.jpg?raw=true' },
                    { tag: 'null', isColor: false, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_7026T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_7026O.jpg?raw=true' },
                    { tag: 'null', isColor: true, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_7054T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_7054O.jpg?raw=true' },
                    { tag: 'null', isColor: true, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_7068T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_7068O.jpg?raw=true' },
                    { tag: 'null', isColor: true, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_7096T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_7096O.jpg?raw=true' },
                    { tag: 'null', isColor: true, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_7100T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_7100O.jpg?raw=true' },
                    { tag: 'null', isColor: true, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_7101T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_7101O.jpg?raw=true' },
                    { tag: 'null', isColor: true, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_7132T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_7132O.jpg?raw=true' },
                    { tag: 'null', isColor: true, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_7140T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_7140O.jpg?raw=true' },
                    { tag: 'null', isColor: false, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6566T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6566O.jpg?raw=true' },
                    { tag: 'null', isColor: true, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6748T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6748O.jpg?raw=true' },
                    { tag: 'null', isColor: false, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6823T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6823O.jpg?raw=true' },
                    { tag: 'null', isColor: false, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6824T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6824O.jpg?raw=true' },
                    { tag: 'null', isColor: true, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6987T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6987O.jpg?raw=true' },
                  { tag: 'null', isColor: true, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6381T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6381O.jpg?raw=true' },
                  { tag: 'null', isColor: false, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6382T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6382O.jpg?raw=true' },
                  { tag: 'null', isColor: false, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6387T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6387O.jpg?raw=true' },
                  { tag: 'null', isColor: true, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6390T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6390O.jpg?raw=true' },
                  { tag: 'null', isColor: false, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6396T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6396O.jpg?raw=true' },
                  { tag: 'null', isColor: false, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6401T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6401O.jpg?raw=true' },
                  { tag: 'null', isColor: true, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6404T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6404O.jpg?raw=true' },
                  { tag: 'null', isColor: false, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6410T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6410O.jpg?raw=true' },
                  { tag: 'null', isColor: false, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6414T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6414O.jpg?raw=true' },
                  { tag: 'null', isColor: false, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6416T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6416O.jpg?raw=true' },
                  { tag: 'null', isColor: false, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6421T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6421O.jpg?raw=true' },
                  { tag: 'null', isColor: false, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6426T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6426O.jpg?raw=true' },
                  { tag: 'null', isColor: false, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6427T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6427O.jpg?raw=true' },
                  { tag: 'null', isColor: false, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6430T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6430O.jpg?raw=true' },
                  { tag: 'null', isColor: false, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6432T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6432O.jpg?raw=true' },
                  { tag: 'null', isColor: false, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6434T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6434O.jpg?raw=true' },
                  { tag: 'null', isColor: false, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6440T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6440O.jpg?raw=true' },
                  { tag: 'null', isColor: true, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6443T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6443O.jpg?raw=true' },
                  { tag: 'null', isColor: true, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6454T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6454O.jpg?raw=true' },
                  { tag: 'landscape', isColor: true, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_3291T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_3291O.jpg?raw=true' },
                  { tag: 'null', isColor: true, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_4058T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_4058O.jpg?raw=true' },
                  { tag: 'null', isColor: true, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_4286T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_4286O.jpg?raw=true' },
                  { tag: 'null', isColor: true, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_4318T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_4318O.jpg?raw=true' },
                  { tag: 'null', isColor: false, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_5312T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_5312O.jpg?raw=true' },
                  { tag: 'null', isColor: true, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_5356T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_5356O.jpg?raw=true' },
                  { tag: 'null', isColor: false, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_5363T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_5363O.jpg?raw=true' },
                  { tag: 'null', isColor: false, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_5389T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_5389O.jpg?raw=true' },
                  { tag: 'null', isColor: true, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_5537T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_5537O.jpg?raw=true' },
                  { tag: 'null', isColor: false, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_5582T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_5582O.jpg?raw=true' },
                  { tag: 'null', isColor: false, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_5597T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_5597O.jpg?raw=true' },
                  { tag: 'null', isColor: false, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_5659T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_5659O.jpg?raw=true' },
                  { tag: 'null', isColor: false, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_5721T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_5721O.jpg?raw=true' },
                  { tag: 'null', isColor: true, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_5947T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_5947O.jpg?raw=true' },
                  { tag: 'null', isColor: true, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_5957T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_5957O.jpg?raw=true' },
                  { tag: 'null', isColor: true, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_5975T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_5975O.jpg?raw=true' },
                  { tag: 'null', isColor: true, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6100T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6100O.jpg?raw=true' },
                  { tag: 'null', isColor: true, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6112T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6112O.jpg?raw=true' },
                  { tag: 'null', isColor: true, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6124T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6124O.jpg?raw=true' },
                  { tag: 'null', isColor: false, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6141T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6141O.jpg?raw=true' },
                  { tag: 'null', isColor: false, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6146T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6146O.jpg?raw=true' },
                  { tag: 'null', isColor: true, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6165T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6165O.jpg?raw=true' },
                  { tag: 'null', isColor: false, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6344T.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/DSC_6344O.jpg?raw=true' },
                  { tag: 'null', isColor: true, tlink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/Solunska GlavaT.jpg?raw=true', olink: 'https://github.com/lukakrstik/website-photo-pool/blob/master/images/Solunska GlavaO.jpg?raw=true' }
        ],
    }
  }
}

const test = Vue.createApp(UrlList)
test.component('app-cards', {
  props: ['pic'],
  template: `<div class="card my-3 col-sm-6 col-lg-4" style="border: none;">
                <a :href=pic.olink data-fancybox="gallery">
                    <img class="card-img" :src=pic.tlink alt="Error Loading Photo">
                </a>
             </div>`
})

test.mount('#app-card')

// Function for loading the layout after the images have loaded.
var grid = document.getElementById("app-card");
var msnry;
    imagesLoaded( grid, function() {
  // init Isotope after all images have loaded
  msnry = new Masonry( grid, {
    itemSelector: '.card',
  });
});
