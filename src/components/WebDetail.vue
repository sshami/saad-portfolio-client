<template>
    <div class="page">
        <div id="web-page-title"  class="web-page-title-container">
            <div class="row web-page-title">
                <div class="col" style="padding: 0px; margin-top: 6px;"><div id="draw-line-page-wl" class="draw-line left draw"></div></div>
                <div class="col-auto"><h1>Web Development</h1></div>
                <div class="col" style="padding: 0px; margin-top: 6px;"><div id="draw-line-page-wr" class="draw-line draw"></div></div>
            </div>
        </div>
        <div class="content">
            <div class="intro-display row">
                    <div class="project-title">
                        <h1>Saad</h1>
                        <p class="url">saadcreative.com</p>
                    </div>
                <div class="display-images">
                    <img src="../assets/web/temp/saad-desktop-home.png" class="laptop">
                    <img src="../assets/web/temp/saad-mobile-home2.png" class="mobile">
                </div>
            </div>
            <div class="project-description row">
                <div class="description-content">
                    <div class="section">
                        <div class="text">
                            <h2>Purpose</h2>
                            <p>Froth robust robusta caramelization et trifecta siphon variety. Carajillo plunger pot, aroma a, beans coffee, spoon white latte roast coffee brewed. 
            Seasonal, doppio that redeye con panna eu decaffeinated ristretto doppio organic and java.</p>
                        </div>
                    </div>
                    <div class="section">
                            <div class="text">
                                <h2>UI + UX Design</h2>
                                <p>Plunger pot trifecta grinder, single shot, qui variety robusta grinder, aged breve cream est americano. 
                                    Spoon plunger pot aftertaste medium cappuccino ut barista iced, ristretto cream coffee latte crema. </p>
                            </div>
                            <div class="content-image row">
                                <div class="image-left col-md-6">
                                    <img src="../assets/web/temp/demo-image-left.png">
                                </div>
                                <div class="image-right col-md-6">
                                    <img src="../assets/web/temp/demo-image-right.png">
                                </div>
                                <div class="caption col-md-12">
                                    <p>To go and, coffee café au lait, iced americano in, organic turkish froth.</p>
                                </div>
                            </div>
                            <div class="text">
                                <p>Bar irish extraction trifecta foam dark carajillo as half and half cinnamon brewed caramelization aftertaste 
                                    half and half. Chicory medium, spoon, dark cappuccino trifecta sweet, milk mazagran macchiato barista dripper
                                    sit steamed cappuccino dark that aromatic french press.</p>
                            </div>
                            <div class="content-image row">
                                <div class="image-large col-md-12">
                                    <img src="../assets/web/temp/demo-image-large.png">
                                </div>
                                <div class="caption col-md-12">
                                    <p>To go and, coffee café au lait, iced americano in, organic turkish froth.</p>
                                </div>
                            </div>
                    </div>
                    <div class="section">
                        <div class="text">
                            <h2>Client Development</h2>
                            <p>Instant mug shop, organic, id, grounds robusta macchiato cinnamon robusta froth galão breve, 
                                that plunger pot saucer, id breve mug blue mountain eu arabica. </p>
                        </div>
                        <div class="content-image row">
                                <div class="image-left col-md-6">
                                    <img src="../assets/web/temp/demo-image-left2.png">
                                </div>
                                <div class="image-right col-md-6">
                                    <img src="../assets/web/temp/demo-image-right2.png">
                                </div>
                        </div>
                        <div class="text">
                            <p>Blue mountain decaffeinated sit, to go est percolator arabica cortado, single origin doppio, 
                                and crema beans as dark, con panna, arabica, decaffeinated turkish cream doppio mocha. 
                                To go wings siphon spoon aromatic so, americano rich, coffee wings robust breve extraction 
                                aromatic skinny affogato.  </p>
                        </div>
                    </div>
                    <div class="section">
                        <div class="text">
                            <h2>Backend Development</h2>
                            <p>Doppio iced caramelization cinnamon, milk, breve, lungo flavour, arabica in beans froth, 
                                caffeine cup, arabica sit milk aroma grinder fair trade rich qui carajillo shop.</p>
                        </div>
                        <div class="content-image row">
                                <div class="image-left col-md-6">
                                    <img src="../assets/web/temp/demo-image-left3.png">
                                </div>
                                <div class="image-right col-md-6">
                                    <img src="../assets/web/temp/demo-image-right3.png">
                                </div>
                        </div>
                        <div class="text">
                            <p>Jetto frappuccino sit, strong trifecta siphon, to go caffeine caramelization that turkish aromatic, 
                                cup french press mazagran, irish, ristretto at latte variety con panna brewed mug java. 
                                Sit breve, fair trade galão crema affogato french press doppio crema half and half single origin,
                                arabica espresso irish instant iced. Froth et and, bar café au lait wings cultivar macchiato grinder
                                black con panna whipped, beans filter, café au lait, cinnamon steamed ristretto that robust.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "WebDetail",
}
</script>

<style scoped lang="scss">

    $violet-blue: #F4F6FD;
    $gray: #717171;
    $light-gray: #A2A2A2;

    @mixin aspect-ratio($width, $height) {
        position: relative;
        &:before {
            display: block;
            content: "";
            width: 100%;
            padding-top: ($height / $width) * 100%;
        }
    }

    .content {
        padding: 10%;
    }


    .web-page-title-container {
        position: fixed;
        background-color: $violet-blue;
        height: 100%;
        width: 40px;
        left: 0;
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

    .web-page-title {
        position: absolute;
        top: 47%;
        left: -155px;
        width: 400px;
        text-transform: uppercase;
        transform: rotate(-90deg);

        /* 1050px and down */
        @media only screen and (max-width: 1050px) {
            position: relative;
            top: auto;
            left: auto;
            width: auto;
            transform: inherit;
            color: $gray;
            margin-top: 100px;
        }

    }



    .intro-display {

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 65vh;
        //background-color: blue;

        .project-title {
            width: 100%;
            text-align: center;

            h1 {
                margin-bottom: 0px;
            }

            .url {
                text-transform: uppercase;
                font-size: 12px;
                font-weight: bolder;
                color: $light-gray;
                margin-top: 8px;
            }

        }

        .display-images {
            //background-color: red;
            display: flex;
            align-items: center;
            justify-content: center;
            //max-width: 500px;;
            max-width: 1000px;
            position: relative;
            width: 100%;
            height: auto;

            .laptop {
                width: 90%;
            }

            .mobile {
                position: absolute;
                width: 15%;
                top: 50%;
                right: 15%;
            }

        }

    }

    .project-description {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 200px;

        h2 {
            margin-bottom: 40px;
        }

        .description-content {
            //max-width: 1000px;

            .section {
                margin-bottom: 60px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                .text {
                    max-width: 1000px;
                }

                .content-image {
                    margin: 60px 0px 60px 0px;
                    max-width: 1200px;

                    img {
                        width: 100%;
                        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.07), 0 6px 20px 0 rgba(0, 0, 0, 0.07);
                    }

                    .image-large {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-bottom: 50px;
                    }

                    .image-left, .image-right {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-bottom: 50px;
                    }

                    .caption {
                        font-size: 13px;
                        font-weight: bolder;
                        color: $light-gray;
                        text-align: center;
                    }
                }
            }
        }

    }


</style>