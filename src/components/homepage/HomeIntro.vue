<template>
    <div id="home-intro" class="row intro-header">
        <!-- <div id="header-nav" class="col-lg-12 header-nav"></div> -->
        <div id="top-trigger"></div>
        <div id="header-splash" class="col-lg-12 header-splash">
            <div id="flatlay-container" class="flatlay-container">
                <div id="flatlay-items" class="flatlay-items">
                    <img src="../../assets/home/intro-head/laptop-lg.jpg" alt="Laptop" id="laptop" class="flatlay laptop--large" >
                    <img src="../../assets/home/intro-head/laptop-md.jpg" alt="Laptop" id="laptop" class="flatlay laptop--medium" >
                    <img src="../../assets/home/intro-head/laptop-mobile.jpg" alt="Laptop" id="laptop" class="flatlay laptop--small" >

                    <img src="../../assets/home/intro-head/camera-lg.jpg" alt="Camera" id="camera" class="flatlay camera--large">
                    <img src="../../assets/home/intro-head/camera-md.jpg" alt="Camera" id="camera" class="flatlay camera--medium">
                    <img src="../../assets/home/intro-head/camera-mobile.jpg" alt="Camera" id="camera" class="flatlay camera--small">

                    <img src="../../assets/home/intro-head/coffee-lg.jpg" alt="Coffee" id="coffee" class="flatlay coffee--large">
                    <img src="../../assets/home/intro-head/coffee-md.jpg" alt="Coffee" id="coffee" class="flatlay coffee--medium">
                    <img src="../../assets/home/intro-head/coffee-mobile.jpg" alt="Coffee" id="coffee" class="flatlay coffee--small">

                    <img src="../../assets/home/intro-head/plant-lg.png" alt="Plant" id="plant" class="flatlay plant--large">
                    <img src="../../assets/home/intro-head/plant-md.png" alt="Plant" id="plant" class="flatlay plant--medium">
                    <img src="../../assets/home/intro-head/plant-mobile.png" alt="Plant" id="plant" class="flatlay plant--small">
                </div>
            </div>
                    <div id="flatlay-bio" class="row flatlay-bio flatlay">
                        <div class=col-2></div>
                        <div class="col" style="padding: 2px; margin-top: 6px;"><div id="draw-line-bio-l" class="draw-line left"></div></div>
                        <div class="col-auto" style="height: 50px;">
                            <h1 id="bio-title" class="bio-title rising-bio-title">{{ homepage_intro.bio_title }}</h1>
                        </div>
                        <div class="col" style="padding: 2px; margin-top: 6px;"><div id="draw-line-bio-r" class="draw-line right"></div></div>
                        <div class=col-2></div>
                        <div class="col-sm-12 bio-text">
                            <p class="rising-bio-text-p1">{{ homepage_intro.bio_paragraph1 }}</p>
                            <p class="rising-bio-text-p2">{{ homepage_intro.bio_paragraph2 }}</p>
                        </div>
                        <div class="col-sm-12 bio-social">
                            <a v-bind:href="homepage_intro.contact_instagram" target="_blank"><span class="socicon-instagram"></span></a>
                            <a v-bind:href="homepage_intro.contact_facebook" target="_blank"><span class="socicon-facebook"></span></a>
                            <a v-bind:href="'mailto:' + homepage_intro.contact_email" target="_blank"><span class="socicon-mail"></span></a>
                            <a v-bind:href="homepage_intro.contact_linkedin" target="_blank"><span class="socicon-linkedin"></span></a>
                        </div>
                    </div>
        </div>
    </div>
</template>

<script>
import api from '../../common/api-instance.js'

export default {
    name: 'HomeIntro',
    data: function () {
        return {
            homepage_intro: {}
        }
    },
    mounted() {
        // Fetch homepage intro data
        api
        .get('/homepage/')
        .then(response => (this.homepage_intro = response.data[0]))
        .catch(error => {
            console.log("There was an error: " + error);
        })
    }
}
</script>


<style scoped lang="scss">
    @mixin aspect-ratio($width, $height) {
    position: relative;
    &:before {
        display: block;
        content: "";
        width: 100%;
        padding-top: ($height / $width) * 100%;
    }

    }

    .header-nav {
        width: 100%;
        height: 50px;
        position: fixed;
    }

    .header-splash {
        margin-left: auto;
        margin-right: auto;
        max-width: 2760px;
        height: 100vh;
        max-height: -webkit-fill-available;
        //height: 900px;
        margin-bottom: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        // To fix Firefox browser on mobile jitter
        transition: all 1s ease-out;

        .flatlay-container {
            //position: absolute;

            margin-top: 10%;
            top: 50%;
            left: 50%;
            width: 100%;

            //-webkit-transform: translate(-50%, -50%);  
            //transform: translate(-50%, -50%);

            // position:absolute;
            // top: 0; bottom: 0; left: 0; right: 0;
            // margin: auto;
            // height: 500px;
        }

        .flatlay-items {
            @include aspect-ratio(16, 9);
            pointer-events: none;

            .laptop {
                position: absolute;
                margin-left: auto;
                margin-right: auto;
                left: 0;
                right: 0;
                top: 0;
                width: 50%;
                will-change: transform;

                //transition: all 0.5s ease-out;

                /* antialiasing */
                //outline: 1px solid transparent;
                -webkit-backface-visibility: hidden;
                transform: translateZ(0);
                will-change: transform;
                -webkit-perspective: 1000;

                &.shift {
                    transform: translateY(-55%);
                }

                &--large {
                    @extend .laptop;
                    display: none;

                    /* 2200px and up */
                    @media only screen and (min-width: 2200px) {
                        display: block;
                    }

                }

                &--medium {
                    @extend .laptop;
                    display: none;

                    /* 2199px to 1051px */
                    @media only screen and (max-width: 2199px) and (min-width: 1051px) {
                        display: block;
                    }
                }

                &--small {
                    @extend .laptop;
                    display: none;

                    /* 1050px and down */
                    @media only screen and (max-width: 1050px) {
                        display: block;
                    }
                }
            }

            .camera {
                position: absolute;
                margin-left: auto;
                margin-right: auto;
                left: 0;
                right: 52%;
                top: 45%;
                width: 13%;
                will-change: transform;

                //transition: all 0.5s ease-out;

                &.shift {
                    transform: translateX(-70%) rotate(20deg);

                    /* 767px and down */
                    @media only screen and (max-width: 767px) {
                        transform: translateX(-300%);
                    }
                }

                &--large {
                    @extend .camera;
                    display: none;

                    /* 2200px and up */
                    @media only screen and (min-width: 2200px) {
                        display: block;
                    }

                }

                &--medium {
                    @extend .camera;
                    display: none;

                    /* 2199px to 1051px */
                    @media only screen and (max-width: 2199px) and (min-width: 1051px) {
                        display: block;
                    }
                }

                &--small {
                    @extend .camera;
                    display: none;

                    /* 1050px and down */
                    @media only screen and (max-width: 1050px) {
                        display: block;
                    }
                }
            }

            .coffee {
                position: absolute;
                margin-left: auto;
                margin-right: auto;
                left: 51%;
                right: 0;
                top: 55%;
                width: 12%;
                will-change: transform;

                //transition: all 0.5s ease-out;

                &.shift {
                    transform: translateX(70%) translateY(50%) rotate(10deg);

                    /* 767px and down */
                    @media only screen and (max-width: 767px) {
                        transform: translateX(300%);
                    }

                }

                &--large {
                    @extend .coffee;
                    display: none;

                    /* 2200px and up */
                    @media only screen and (min-width: 2200px) {
                        display: block;
                    }

                }

                &--medium {
                    @extend .coffee;
                    display: none;

                    /* 2199px to 1051px */
                    @media only screen and (max-width: 2199px) and (min-width: 1051px) {
                        display: block;
                    }
                }

                &--small {
                    @extend .coffee;
                    display: none;

                    /* 1050px and down */
                    @media only screen and (max-width: 1050px) {
                        display: block;
                    }
                }
            }

            .plant {
                position: absolute;
                margin-left: auto;
                margin-right: auto;
                left: 50%;
                right: 0;
                top: 36%;
                width: 11%;
                will-change: transform;

                //transition: all 0.5s ease-out;

                &.shift {
                    transform: translateX(70%) translateY(32%) rotate(140deg);

                    /* 767px and down */
                    @media only screen and (max-width: 767px) {
                        transform: translateX(300%);
                    }

                }

                &--large {
                    @extend .plant;
                    display: none;

                    /* 2200px and up */
                    @media only screen and (min-width: 2200px) {
                        display: block;
                    }

                }

                &--medium {
                    @extend .plant;
                    display: none;

                    /* 2199px to 1051px */
                    @media only screen and (max-width: 2199px) and (min-width: 1051px) {
                        display: block;
                    }
                }

                &--small {
                    @extend .plant;
                    display: none;

                    /* 1050px and down */
                    @media only screen and (max-width: 1050px) {
                        display: block;
                    }
                }
            }

        }

        .flatlay-bio {
            position: absolute;
            margin-left: auto;
            margin-right: auto;
            top: 100%;
            //top: 100%;
            left: 0;
            right: 0;
            text-align: center;
            width: 70%;
            max-width: 600px;
            opacity: 0;
            //transition: all 0.5s ease-out;

            /* 767px and down */
            @media only screen and (max-width: 767px) {
                width: 80%;
            }

            /* 321px and down */
            @media only screen and (max-width: 321px) {
                font-size: 12px;
            }

            .rising-bio-title .letter {
                display: inline-block;
                line-height: 1em;
            }

            .bio-text {
                padding-top: 10px;
            }

            .bio-social {
                font-size: 20px;
                padding-top: 20px;


                a {
                    color: black;
                    text-decoration: none;
                }

                span {
                    padding: 12px;
                }
            }

            &.shift {
                transform: translateY(-135%);
                bottom: auto;
                opacity: 1;
            }
        }



    }
</style>