<template>
    <div id="work-tiles" class="row work-tiles">
        <div id="web-tile" class="col-md-6 tile web-tile" @click="webdevPage">
            <div id="tile-title-web" class="row tile-title web-dev">
                <div class="col-1"></div>
                <div class="col" style="padding: 0px; margin-top: 20px;"><div id="draw-line-tile-wl" class="draw-line left"></div></div>
                <div class="col-auto tile-title-text"><h2>{{ web_tile.title }}</h2></div>
                <div class="col" style="padding: 0px; margin-top: 20px;"><div id="draw-line-tile-wr" class="draw-line"></div></div>
                <div class="col-1"></div>
            </div>
            <div id="mobile-lc" class="mobile-lc">
                <img src="../../assets/home/web-mobile-lc3d.png" alt="Lauren Castle Mobile Website" class="demo-img--large">
                <img src="../../assets/home/web-mobile-lc3d-md.png" alt="Lauren Castle Mobile Website" class="demo-img--medium">
                <img src="../../assets/home/web-mobile-lc3d-sm.png" alt="Lauren Castle Mobile Website" class="demo-img--small">
            </div>
            <div id="mobile-ss" class="mobile-ss">
                <img src="../../assets/home/web-mobile-ss3d.png" alt="Saad Mobile Website" class="demo-img--large">
                <img src="../../assets/home/web-mobile-ss3d-md.png" alt="Saad Mobile Website" class="demo-img--medium">
                <img src="../../assets/home/web-mobile-ss3d-sm.png" alt="Saad Mobile Website" class="demo-img--small">
            </div>
            <div class="explore-btn">
                <h2>Explore</h2>
                <img src="../../assets/icons/arrow.svg" alt="Arrow">
            </div>
        </div>
        <div id="photography-tile" class="col-md-6 tile photography-tile" @click="photographyPage">
            <div id="tile-title-photography" class="row tile-title photography">
                <div class="col-1"></div>
                <div class="col" style="padding: 0px; margin-top: 20px;"><div id="draw-line-tile-pl" class="draw-line left"></div></div>
                <div class="col-auto tile-title-text"><h2>{{ photography_tile.title }}</h2></div>
                <div class="col" style="padding: 0px; margin-top: 20px;"><div id="draw-line-tile-pr" class="draw-line"></div></div>
                <div class="col-1"></div>
            </div>
            <div id="photography-display" class="photography-display">
                <img src="../../assets/home/1M5A4102-tile-peach.jpg" alt="Photography Tile Image" class="demo-img--large">
                <img src="../../assets/home/1M5A4102-tile-peach-md.jpg" alt="Photography Tile Image" class="demo-img--medium">
                <img src="../../assets/home/1M5A4102-tile-peach-sm.jpg" alt="Photography Tile Image" class="demo-img--small">
            </div>
            <div class="explore-btn">
                <h2>Explore</h2>
                <img src="../../assets/icons/arrow.svg" alt="Arrow">
            </div>
        </div>
        <div id="tile-hover-title-photography" class="hover-title hover-title--photography">
            <span class="neut-pink">Pho</span><span class="viol-blue">tography</span>
        </div>
        <div id="tile-hover-title-web" class="hover-title hover-title--webdev">
            <span class="neut-pink">Web Devel</span><span class="viol-blue">opment</span>
        </div>
    </div>
</template>


<script>
import { initTileHoverTitles } from '../../static/js/homepage-tiles.js'

export default {
    name: 'WorkTiles',
    data: function () {
        return {
			web_tile: {
				title: 'Web Development',
				photo_left: '',
				photo_right: ''
			},
			photography_tile: {
				title: 'Photogrpahy',
				photo: ''
			}
        }
    },
    mounted() {
        initTileHoverTitles();
    },
    methods: {
    /* Navigate to photography page */
    photographyPage() {
        return this.$router.push('photography');
    },
    /* Navigate to web dev page */
    webdevPage() {
        return this.$router.push('web');
    }
    }
}
</script>


<style scoped lang="scss">

    /* Colors */
    // TODO: Figure out how to make these global
    $base-cream: #FFFCF4;
    $violet-blue: #F4F6FD;
    $neutral-pink: #fddecc;

    @mixin aspect-ratio($width, $height) {
    position: relative;
    &:before {
        display: block;
        content: "";
        width: 100%;
        padding-top: ($height / $width) * 100%;
    }
    > .tile-title {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 122%;
        z-index: 2;
        text-align: center;
        text-transform: uppercase;
        transition: all 1s ease;
        opacity: 0;

        &.web-dev {
            transform: rotate(-90deg);
            left: 0;
        }

        &.photography {
            transform: rotate(90deg);
        }	

        .tile-title-text {
            margin-top: 14px;
        }


    }

    > .explore-btn {
        position: absolute;
        right: 14%;
        bottom: 10%;
        width: 210px;
        height: 35px;
        background-color: #FFFCF4;
        padding: 10px 10px 10px 20px;
        display: none;


        h2{
            letter-spacing: 5px;
        }

        img {
            position: absolute;
            top: -34px;
            right: 0px;
        }

        /* 1024px and down */
        @media only screen and (max-width: 1024px) {
            display: block;
        }

    }

    > .mobile-lc {
        position: absolute;
        top: 25%;
        transition:all 4s ease;
        opacity: 0%;

        .demo-img {
            width: 48%;
            margin-left: 12%;

            &--large {
                @extend .demo-img;
                display: none;

                /* 2200px and up */
                @media only screen and (min-width: 2200px) {
                    display: block;
                }
            }

            &--medium {
                @extend .demo-img;
                display: none;

                /* 2199px to 1051px */
                @media only screen and (max-width: 2199px) and (min-width: 1051px) {
                    display: block;
                }
            }

            &--small {
                @extend .demo-img;
                display: none;

                /* 1050px and down */
                @media only screen and (max-width: 1050px) {
                    display: block;
                }
            }
        }

        &.fade-in {
            opacity: 100%;
            transform: translateY(15px)
        }

        &.shift {
            transform: translateY(40px) rotate(5deg);
        }

    }

    > .mobile-ss {
        position: absolute;
        top: 10%;
        transition:all 4s ease;
        opacity: 0%;

        .demo-img {
            width: 56%;
            float: right;
            margin-right: 9%;

            &--large {
                @extend .demo-img;
                display: none;

                /* 2200px and up */
                @media only screen and (min-width: 2200px) {
                    display: block;
                }
            }

            &--medium {
                @extend .demo-img;
                display: none;

                /* 2199px to 1051px */
                @media only screen and (max-width: 2199px) and (min-width: 1051px) {
                    display: block;
                }
            }

            &--small {
                @extend .demo-img;
                display: none;

                /* 1050px and down */
                @media only screen and (max-width: 1050px) {
                    display: block;
                }
            }
        }

        &.fade-in {
            opacity: 100%;
            transform: translateY(25px)
        }

        &.shift {
            transform: rotate(-5deg);
        }

    }

    > .photography-display {
        position: absolute;
        top: 0;
        left: 0;
        transition:all 4s ease;
        opacity: 0%;

        .demo-img {
            width: 100%;

            &--large {
                @extend .demo-img;
                display: none;

                /* 2200px and up */
                @media only screen and (min-width: 2200px) {
                    display: block;
                }
            }

            &--medium {
                @extend .demo-img;
                display: none;

                /* 2199px to 1051px */
                @media only screen and (max-width: 2199px) and (min-width: 1051px) {
                    display: block;
                }
            }

            &--small {
                @extend .demo-img;
                display: none;

                /* 1050px and down */
                @media only screen and (max-width: 1050px) {
                    display: block;
                }
            }

        }

        &.fade-in {
            opacity: 100%;
        }

        &.shift {
            transform: translateY(-30px)
        }

    }

    }

    .work-tiles {
        position: relative;
        overflow: hidden;

        > .hover-title {
            font-family: 'made-bon-voyage-regular', serif;
            font-size: 7.5vw;
            text-transform: uppercase;
            opacity: 0;
            transition: all 1s ease;
            top: 80%;


            &--photography {
                position: absolute;
                left: 32.5%;
                letter-spacing: 10px;
            }

            &--webdev {
                position: absolute;
                left: 4.8%;
                letter-spacing: 5px;
            }

            > .viol-blue {
                color: $violet-blue;
            }

            > .neut-pink {
                color: $neutral-pink;
            }

            &.reveal {
                transform: translateY(-28%);
                opacity: 100;
            }

            /* 1024px and down */
            @media only screen and (max-width: 1024px) {
                display: none;
            }

        }
    }

    .web-tile {
        background-color: $violet-blue; 
        @include aspect-ratio(16, 19);
        overflow: hidden;
        background: linear-gradient(to right, $base-cream 50%, $violet-blue 50%);
        background-size: 200% 100%;
        background-position: left bottom;
        transition:all 1s ease;

        &.swipe-in {
            background-position: right bottom;
        }
    }

    #web-tile {
    cursor: url("../../assets/home/tiles/left-arrow.png") 0 0, auto;

    /* 1024px and down */
    @media only screen and (max-width: 1024px) {
        cursor: pointer;
    }

    }

    #photography-tile {
    cursor: url("../../assets/home/tiles/right-arrow.png") 0 0, auto;

    /* 1024px and down */
    @media only screen and (max-width: 1024px) {
        cursor: pointer;
    }
    }

    .photography-tile {
        background-color: $neutral-pink;
        background: linear-gradient(to left, $base-cream 50%, $neutral-pink 50%);
        background-size: 200% 100%;
        background-position: right bottom;
        @include aspect-ratio(16, 19);
        overflow:hidden;
        transition:all 1.5s ease;

        &.swipe-in {
            background-position: left bottom;
        }



    }
</style>