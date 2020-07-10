<template>
    <div class="page">
        <div id="photography-page-title"  class="photography-page-title-container">
            <div class="row photography-page-title">
                <div class="col" style="padding: 0px; margin-top: 6px;"><div id="draw-line-page-pl" class="draw-line left"></div></div>
                <div class="col-auto"><h1>Photography</h1></div>
                <div class="col" style="padding: 0px; margin-top: 6px;"><div id="draw-line-page-pr" class="draw-line"></div></div>
            </div>
        </div>

        
        <div class="homepage-link">
            <router-link :to="{ name: 'homepage'}">SAAD</router-link>
        </div>

        <div class="photos-container" id="photos-container" >

            <!-- <div class="block title-mobile">
                <div id="photoset-title-mobile" class="photoset-title mobile">Union Market DC</div>
            </div> -->
            <!-- 
            <img id="start" class="photo hero" src="https://66.media.tumblr.com/0a82fa7ce59404e7a713ded2fd5aa81d/tumblr_pkf8ro270V1v57djwo1_1280.jpg" />

            <div class="block title-desktop">
                <div id="photoset-title" class="photoset-title desktop">Union Market DC</div>
            </div> -->
            
            <!-- <img class="photo" src="https://66.media.tumblr.com/1d87611e8ffffe6701377dc2b58b1638/tumblr_pf48obYBwN1v57djwo1_1280.jpg" />
            <img class="photo" src="https://66.media.tumblr.com/ac9b62f320dee8a607f09078629a2c82/tumblr_pf48pwtn2v1v57djwo1_1280.jpg" />
            <img class="photo" src="https://66.media.tumblr.com/e16bdff3d9aedd32991e7efcf2f10468/tumblr_pehq47jW131v57djwo1_1280.jpg" />
            <img class="photo" src="https://66.media.tumblr.com/3b4baff7e0146ef48f6e8e408dd4d108/tumblr_pcnqksLOZq1v57djwo1_1280.jpg" /> -->
            
            <span id="start"></span>

            <div class="block title-mobile">
                <div id="photoset-title-mobile" class="photoset-title mobile">{{ photoset.title }}</div>
            </div>

            <template v-for="(photo, index) in photo_album.photos">
                <template v-if="index == 0">
                    <img id="hero" class="photo--web hero" :src="photo.value.image_url" :key="photo.id" />
                    <img id="hero" class="photo--mobile hero" :src="photo.value.image_url_mobile" :key="photo.id" />
                    <div id="album-title" class="block title-desktop" :key="photo.id">
                        <div id="photoset-title" class="photoset-title desktop">{{ photo_album.title }}</div>
                    </div>
                </template>
                <template v-else>
                    <img class="photo--web" :src="photo.value.image_url" :key="photo.id" />
                    <img class="photo--mobile" :src="photo.value.image_url_mobile" :key="photo.id" />
                </template>
            </template>


            <div class="block end" id="end">
                <div id="slide-space" class="slide-space">
                </div>
            </div>

            <div id="album-menu" class="album-menu">
                <div id="album-menu-contents" class="album-menu-contents">
                    <div class="menu-list">
                        <h1>Photo Albums</h1>
                        <ul v-for="album in photoalbums" :key="album.title">
                            <template v-if="album.url"> 
                                <li class="list-item" :data-img="album.hero_image_url"><router-link :to="{ name: 'photography', params: { albumSlug: album.url }}"><a>{{ album.title }}</a></router-link></li>
                            </template>
                        </ul>
                        <a href="#start" @click="backToStart">Back to start</a>
                    </div>
                    <div class="menu-hero-photos">
                        <img id="menu-preview-img" src="https://66.media.tumblr.com/f4cdb87d7940d0033ffd0aeeb7545e80/tumblr_o8ktllkayC1v57djwo1_500.jpg" />
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>


<script>
import $ from 'jquery'
import { animateText } from '../static/js/anime-animations.js'
import { initHorizontalScroll, getHorizontalScroll, calculateAllTriggers, createPhotosetScrollEvent, removePhotosetScrollEvent, destroyHorizontalScroll } from '../static/js/photography.js'
import api from '../common/api-instance.js'


export default {
  name: 'Photography',
    data: function () {
        return {
            photoset: {
                title: "Union Market DC",
                title_size: 12.5,
            },
            photoalbums: [
                {
                    title: "Campspace Studios",
                    hero_image_url: "https://66.media.tumblr.com/1d87611e8ffffe6701377dc2b58b1638/tumblr_pf48obYBwN1v57djwo1_500.jpg",
                    url: "campspace-studios"
                },
                {
                    title: "Havana Richmond",
                    hero_image_url: "https://66.media.tumblr.com/36cb4739ab17ba6e6b7d6b7f04cf155f/tumblr_pty0p6wK6b1v57djwo1_500.jpg",
                    url: "havana-richmond"
                },
                {
                    title: "U-Street DC",
                    hero_image_url: "https://66.media.tumblr.com/728144270027a1ebaee50adddbe1aa1f/tumblr_o8ksctWTL51v57djwo1_500.jpg",
                    url: "u-street-dc"
                },
                {
                    title: "Cherry Blossom Shoot",
                    hero_image_url: "https://66.media.tumblr.com/9278c4fa179cd64869f71808e443b3a4/tumblr_o8ks03623v1v57djwo1_500.jpg",
                    url: "cherry-blossom"
                },
                {
                    title: "Courtney RVA",
                    hero_image_url: "https://66.media.tumblr.com/6571c9e32092b669ca7b4fed6889e768/tumblr_pdxq43aYEj1v57djwo1_500.jpg",
                    url: "courtney-rva"
                },

            ],
            // Current photo album being viewed
            photo_album : {},
            title_font_size: 12.5,
            default_album : ''
        }
    },
    watch: {
        /* Watch for route changes */
        '$route' (to, from) {
            console.log(to);
            console.log(from);

            /* pull new data */
            this.pullPhotoAlbumData();

            /* recalculate photo menu trigger and reset event */
            setTimeout(function(){
                removePhotosetScrollEvent();
                calculateAllTriggers();
                createPhotosetScrollEvent();
            }, 500);

            /* programmatically scroll to #start anchor */
            location.href = "#start";

            $("#album-menu").removeClass("show");
            $("#album-menu-contents").removeClass("swipe-in");
            $("#hero").removeClass("hide");
        },
        /* Watch for when default album is set in order to fetch default album data */
        default_album: function(val) {
            this.getPhotoAlbumData(val);
        },
        /* Watch for when title font size changes */
        title_font_size: function(val) {
            // TODO: Create function to set font size for desktop title
            console.log("Title font size changed to " + val);
        }
    },
  beforeMount() {
      /* animate opening swipe-in transition */
      $("#transition-screen-photography-in").addClass("swipe");
      $("#transition-photography-title").addClass("show");
      animateText('rise', '.transition-photography-title-text');
  },
  mounted() {
    // Register an event listener when the Vue component is ready
    window.addEventListener('resize', this.onResize)
    this.openingTransition();

    // TODO: NEED TO ENSURE THAT PHOTO ALBUM DATA IS PULLED FIRST 
    // BEFORE ENABLING HORIZONTAL SCROLL AND ADDING SCROLL EVENT

    /* Pull photo album data */
    this.pullPhotoAlbumData();
    
    /* Setup horizontal scrolling view if desktop */
    if (window.innerWidth > 1050){
        initHorizontalScroll();
        setTimeout(function(){
            calculateAllTriggers();
            createPhotosetScrollEvent();
        }, 1000);
    }

    /* Enable menu hover functions */
    this.albumMenuHover();
     
  },
  beforeDestroy(){
    // Unregister the event listener before destroying this Vue instance
    window.removeEventListener('resize', this.onResize)
    removePhotosetScrollEvent();
  },
  destroyed() {
        this.closingTransition();
        // Cleanup
        destroyHorizontalScroll();
  },
  methods: {
    /* Opening Transition */
    openingTransition() {
        /* show opening swipe-out transition */
        setTimeout(function(){ 
            $("#transition-screen-photography-out").addClass("show");
        }, 900);
        /* hide opening swipe-in transition */
        setTimeout(function(){ 
            $("#transition-photography-title").removeClass("show");
            $("#transition-screen-photography-in").addClass("hide");
        }, 1200);
        /* animate opening swipe-out transition */
        setTimeout(function(){ 
            $("#transition-screen-photography-out").addClass("swipe");
            $("#draw-line-page-pl").addClass("draw");
            $("#draw-line-page-pr").addClass("draw");
        }, 1500);
    },
    /* Opening Transition */
    closingTransition() {
        $("#transition-screen-photography-out").removeClass("swipe");
        setTimeout(function(){ 
            $("#transition-screen-photography-in").removeClass("hide");
        }, 900);
        setTimeout(function(){ 
            $("#transition-screen-photography-out").removeClass("show");
        }, 1200);
        setTimeout(function(){ 
            $("#transition-screen-photography-in").removeClass("swipe");
        }, 1500);
    },
    backToStart() {
        $("#hero").removeClass("hide");
        $("#album-menu").removeClass("show");
        $("#album-menu-contents").removeClass("swipe-in");
    },
    /* Window resize event */
    onResize() {
        if (window.innerWidth > 1050){
            /* initialize horizontal scroll if not already */
            if (getHorizontalScroll() == null){
                initHorizontalScroll();
            }
            /* recalculate photo menu trigger and reset event */
            setTimeout(function(){
                removePhotosetScrollEvent();
                calculateAllTriggers();
                createPhotosetScrollEvent();
            }, 500);
        } else {
            /* destroy horizontal scrolling if not already */
            if (getHorizontalScroll() != null) {
                removePhotosetScrollEvent();
                destroyHorizontalScroll();
            }
        }
    },
    /* Get and set photo album data from API endpoint */
    getPhotoAlbumData(slug) {
        api.get('/photographyalbums/?album=' + slug, 
        {
            headers: {
                //'Authorization': 'Bearer ' + 'add jwt token here'
            }
        })
        .then( (response) => {
                // Set photo album data
                this.photo_album = response.data[0]
                // Set title font size data
                this.title_font_size = response.data[0].title_font_size
            }
        )
        .catch(error => {
            // TODO: use vue js logging
            console.log("There was an error: " + error);
        })
    },
    /* Get and set the default photo album from API endpoint */
    getDefaultPhotoAlbum() {
        api.get('/photography/',
        {
            headers: {
                //'Authorization': 'Bearer ' + 'add jwt token here'
            }
        })
        .then(response => (this.default_album = response.data[0].default_album.slug))
        .catch(error => {
            // TODO: use vue js logging
            console.log("There was an error: " + error);
        })
    },
    /* Pull photo album data based on route URL */
    pullPhotoAlbumData() {
        if (this.$route.params.albumSlug) {
            // Use album slug in URL to get/set the photo album data
            var album_slug = this.$route.params.albumSlug
            this.getPhotoAlbumData(album_slug);
        } else {
            // If no album slug in URL then get/set the default album
            this.getDefaultPhotoAlbum();
        }
    },
    /* Photo albums menu hover image preview */
    albumMenuHover() {
        $("li.list-item").hover(function(){
            var image = $(this)[0].dataset.img;
            $("#menu-preview-img").fadeOut('fast', function() { 
                $("#menu-preview-img").attr("src", image).fadeIn('slow'); 
            });
        }, function(){
            
        });
    }
  }
}
</script>


<style scoped lang="scss">

    $neutral-pink: #fddecc;
    $neutral-pink-dark: #FDD9CB;
    $gray: #717171;

    @font-face {
      font-family: 'aguero_serif_freeregular';
      src: url("../assets/fonts/aguero-serif-kit/aguero_serif-webfont.woff2") format('woff2'),
          url("../assets/fonts/aguero-serif-kit/aguero_serif-webfont.woff") format('woff');
      font-weight: normal;
      font-style: normal;
    }

    .page {
        height: 100%;
        /* fixed position so it doesn't jitter when loading new route/page */
        //position: fixed;
        width: 100%;
    }

    .photography-page-title-container {
        position: fixed;
        background-color: $neutral-pink;
        height: 100%;
        width: 40px;
        z-index: 10;

        /* 1050px and down */
        @media only screen and (max-width: 1050px) {
            background-color: transparent;
            position: relative;
            height: 40px;
            width: 400px;
            margin: 0px auto;
            margin-top: 50px;
            margin-bottom: 50px;

            /* 415px to 330px */
            @media only screen and (max-width: 415px) and (min-width: 331px) {
                width: 300px;
            }

            /* 330px and down */
            @media only screen and (max-width: 330px) {
                width: 250px;
            }

        }
    }

    .photography-page-title {
        position: fixed;
        top: 47%;
        left: -155px;
        width: 400px;
        text-transform: uppercase;
        transform: rotate(-90deg);
        z-index: 10;

        /* 1050px and down */
        @media only screen and (max-width: 1050px) {
            position: relative;
            top: auto;
            left: auto;
            width: auto;
            transform: inherit;
        }
    }

    .homepage-link {
        position: fixed;
        top: 0px;
        left: 55px;
        z-index: 10;

        a {
            color: $gray; 
        }

        a:hover {
            text-decoration: none;
            color: black;
        }
    }

    .photoset-title {
        font-size: calc(12.50vw + 12.50vh);
        line-height: 1.3;
        text-transform: uppercase;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-family: 'aguero_serif_freeregular', serif;
        color: $neutral-pink-dark;
        transition: all 1s ease;
        letter-spacing: 30px;
        transition: all 1s ease;
        
        &.desktop {
            font-size: calc(12.70vw + 12.70vh);
            margin-left: 40vw;
            width: 100vw;

            /* 1050px and down */
            @media only screen and (max-width: 1050px) {
                display: none;
            }

            &.reveal {
                color: white;
            }
        }

        &.mobile {
            display: none;
            margin-left: unset;
            font-size: calc(9.5vw + 9.5vh);
            color: $gray;


            /* 1050px and down */
            @media only screen and (max-width: 1050px) {
                display: block;

                /* 430px and down */
                @media only screen and (max-width: 430px) {
                    font-size: calc(7vw + 7vh);
                    letter-spacing: 15px;
                }
            }
        }

    }

    // ---------- Photo slide styles ---------- //


    .photo {
        height: 100%;
        margin-right: 100px;
        max-width: 100%;
        max-height: 3000px;
        align-self: center;
        flex: 0 0 auto;
        //object-fit: contain;

        &.hero {
            position: fixed;
            padding: 70px 0px 70px 0px;
            transition: all 0.7s ease;
            will-change: transform;

            /* 1050px and down */
            @media only screen and (max-width: 1050px) {
                position: relative;
            }

            &.hide {
                opacity: 0;
            }
        }

        &--web {
            @extend .photo;
            /* 1050px and down */
            @media only screen and (max-width: 1050px) {
                display: none;
            }
        }

        &--mobile {
            @extend .photo;
            display: none;
            /* 1050px and down */
            @media only screen and (max-width: 1050px) {
                display: block;
            }
        }

        /* 1050px and down */
        @media only screen and (max-width: 1050px) {
            width: 100%;
            margin-right: unset;
            margin-bottom: 150px;
        }

    }

    .photos-container {
        display: flex;
        font-family: sans-serif;
        height: 100vh;
        align-items: center;
        padding: 90px;
        transition: all 1s ease;

        &.change-bg-color {
            background-color: $neutral-pink;
        }
    }

    .photos-container {
        display: flex;
        flex: 1;
        height: 100vh;

        /* 1050px and down */
        @media only screen and (max-width: 1050px) {
            display: block;
            flex: unset;
            height: auto;
            width: auto;
            padding: 0 50px 0 50px;
            margin-left: unset;

            /* 430px and down */
            @media only screen and (max-width: 430px) {
                padding: 0 10px 0 10px;
            }
        }

    }

    .block {
        height: 100%;
        font-size: 32px;
        color: black;
        margin-left: 50px;
        max-height: 3000px;
        z-index: 5;

        /* 1050px and down */
        @media only screen and (max-width: 1050px) {
            padding: auto;
            margin-left: unset;
            max-height: unset;
            padding: 0px 0px 90px 0px;

            &.title-desktop {
                display: none;
            }

        }

        &.end {
            /* 1050px and down */
            @media only screen and (max-width: 1050px) {
                display: none;
            }   
        }
    }

    .block a {
        color: inherit;
    }

    .slide-space {
        width: 60vw;
    }
 

    .album-menu {
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0px 100px 0px 100px; 
        transition: all 1s ease;
        opacity: 0;
        color: $gray;
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        background-color: $neutral-pink;
        z-index: 6;

        &.show {
            opacity: 1;
        }

        /* 1050px and down */
        @media only screen and (max-width: 1050px) {
            position: relative;
            opacity: 1;
            float: inherit;
            text-align: center;
            padding: 0px;
            margin: 0 auto;
            height: 100%;
            width: 100%;
            background-color: transparent;
        }

        h1 {
            font-family: 'aguero_serif_freeregular', serif;
            font-weight: lighter;
            font-size: calc(4vw + 4vh);
            letter-spacing: 8px;
        }

        .album-menu-contents {

            transform: translateX(250px);
            transition: all 1.5s ease;
            will-change: transform;

            /* 1050px and down */
            @media only screen and (max-width: 1050px) {
                transform: unset;
            }

            &.swipe-in {
                transform: translateX(0px) rotate(0.05deg);
            }

            .menu-list {
                float: left;
                font-size: calc(0.8vw + 0.8vh);
                text-transform: uppercase;
                font-weight: bolder;
                width: 40vw;


                ul {
                    list-style-type: none;
                    margin: 0px 0px 0px 5px;
                    padding: 0;
                    line-height: 3;

                    a {
                       color: $gray; 
                    }

                    a:hover {
                        text-decoration: none;
                        color: black;
                    }

                    /* 1050px and down */
                    @media only screen and (max-width: 1050px) {
                        margin: 0px;
                    }

                }

                /* 1050px and down */
                @media only screen and (max-width: 1050px) {
                    font-size: calc(1.1vw + 1.1vh);
                    margin-bottom: 100px;
                    width: 80vw;
                }

            }

            .menu-hero-photos {
                float: left;
                width: 20vw;
                height: 100%;
                margin-top: 20px;
                transition: all 2s ease;

                img {
                    height: 100%;
                    width: 100%;
                }

                /* 1050px and down */
                @media only screen and (max-width: 1050px) {
                    display: none;
                }

            }

        }

    }


</style>