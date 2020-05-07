<template>
    <div id="work-tiles" class="row work-tiles">
        <div id="web-tile" class="col-md-6 tile web-tile" @click="webdevPage">
            <div id="tile-title-web" class="row tile-title web-dev">
                <div class="col-1"></div>
                <div class="col tile-title-line-web left"></div>
                <div class="col-auto tile-title-text"><h2>{{ web_tile.title }}</h2></div>
                <div class="col tile-title-line-web right"></div>
                <div class="col-1"></div>
            </div>
            <div id="mobile-lc" class="web-img mobile-lc">
                <img src="../../assets/home/web-mobile-lc.png" alt="Lauren Castle Mobile Website">
            </div>
            <div id="mobile-ss" class="web-img mobile-ss">
                <img src="../../assets/home/web-mobile-ss2.png" alt="Saad Mobile Website">
            </div>
            <div class="explore-btn">
                <h2>Explore</h2>
                <img src="../../assets/icons/arrow.svg" alt="Arrow">
            </div>
        </div>
        <div id="photography-tile" class="col-md-6 tile photography-tile" @click="photographyPage">
            <div id="tile-title-photography" class="row tile-title photography">
                <div class="col-1"></div>
                <div class="col tile-title-line-photography left"></div>
                <div class="col-auto tile-title-text"><h2>{{ photography_tile.title }}</h2></div>
                <div class="col tile-title-line-photography right"></div>
                <div class="col-1"></div>
            </div>
            <div id="photography-display" class="photography-display">
                <img src="../../assets/home/1M5A4102-tile.jpg" alt="Photography Tile Image">
            </div>
            <div class="explore-btn">
                <h2>Explore</h2>
                <img src="../../assets/icons/arrow.svg" alt="Arrow">
            </div>
        </div>
        <div id="tile-hover-title-web" class="tile-hover-title-web">
            <img src="../../assets/home/tiles/web-title.png" alt="Web Development">
        </div>
        <div id="tile-hover-title-photography" class="tile-hover-title-photography">
            <img src="../../assets/home/tiles/photography-title.png" alt="Photography">
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
    $neutral-pink: #ECD2D1;

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

        .tile-title-line-photography, .tile-title-line-web  {
        left: 0;
        height: 1px;
        width: 100%;
        background-color: black;
        top: 21px;
        opacity: 0;

        &.left {
            transform-origin: 100% 100%;
        }

        &.right {
            transform-origin: 0% 0%;
        }
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

    > .web-img {
        position: absolute;
        transition:all 2s ease;
        opacity: 0%;
    }

    > .mobile-lc {
        top: 12%;
        transition:all 4s ease;

        img {
            width: 38%;
            margin-left: 12%;
        }

        &.fade-in {
            opacity: 100%;
            transform: translateY(15px)
        }

        &.shift {
            transform: translateY(100px);
        }

    }

    > .mobile-ss {
        top: 17%;
        transition:all 4s ease;

        img {
            width: 38%;
            float: right;
            margin-right: 10%;
        }

        &.fade-in {
            opacity: 100%;
            transform: translateY(25px)
        }

        &.shift {
            transform: translateY(-30px);
        }

    }

    > .photography-display {
        position: absolute;
        top: 0;
        left: 0;
        transition:all 4s ease;
        opacity: 0%;

        img {
            width: 100%;
        }

        &.fade-in {
            opacity: 100%;
        }

        &.shift {
            top: -30px;
        }

    }

    }

    .work-tiles {
        position: relative;
    }

    .tile-hover-title-web {
    position: absolute;
    top: 78%;
    left: 8%;
    opacity: 0;
    transition: all 1s ease;

    img {
        width: 70%;
    }

    &.show {
        opacity: 100;
    }

    /* 1024px and down */
    @media only screen and (max-width: 1024px) {
        display: none;
    }

    }

    .tile-hover-title-photography {
    position: absolute;
    top: 78%;
    left: 35.5%;
    opacity: 0;
    transition: all 1s ease;

    img {
        width: 81%;
    }

    &.show {
        opacity: 100;
    }

    /* 1024px and down */
    @media only screen and (max-width: 1024px) {
        display: none;
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