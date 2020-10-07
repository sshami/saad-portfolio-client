<template>
    <div class="page">
        <div class="content">
            <div class="bio-content row">
                <div class="bio-photo-container col-12">
                    <img class="logo-head" src="../assets/saad-logo.png" alt="SAAD">
                    <img class="bio-photo" :src="page_content.bio_image" />
                </div>
                <div class="title">
                    <h1>{{ page_content.title }}</h1>
                </div>
                <div class="bio-description col-12">
                    <span class="html" v-html="page_content.body"></span>
                </div>
            </div>
            <div class="work">
                <div v-tilt class="work-brain" alt="Brain Vector">
                    <router-link :to="{ name: 'web'}">
                        <div class="button-left">
                            <img src="../assets/icons/arrow.svg" alt="Arrow">
                            <span class="label">Web Development</span>
                        </div>
                    </router-link>
                    <router-link :to="{ name: 'photography'}">
                        <div class="button-right">
                            <span class="label">Photography</span>
                            <img src="../assets/icons/arrow.svg" alt="Arrow">
                        </div>
                    </router-link>
                </div>
                <div class="work-brain--mobile" alt="Brain Vector">
                    <router-link :to="{ name: 'web'}">
                        <div class="left-brain"></div>
                    </router-link>
                    <router-link :to="{ name: 'photography'}">
                        <div class="right-brain"></div>
                    </router-link>
                </div>
            </div>
            <div class="col-sm-12 bio-social">
                <a v-bind:href="page_content.contact_instagram" target="_blank"><span class="socicon-instagram"></span></a>
                <a v-bind:href="page_content.contact_facebook" target="_blank"><span class="socicon-facebook"></span></a>
                <a v-bind:href="'mailto:' + page_content.contact_email" target="_blank"><span class="socicon-mail"></span></a>
                <a v-bind:href="page_content.contact_linkedin" target="_blank"><span class="socicon-linkedin"></span></a>
            </div>
        </div>
    </div>
</template>

<script>
import api from '../common/api-instance.js'

export default {
    name: "About",
    data: function () {
      return {
          page_content : {}
      }
    },
    mounted() {
        this.pullPageContent();
    },
    methods: {
        getPageContentData() {
            api.get('/about/',
            {
                headers: {
                    //'Authorization': 'Bearer ' + 'add jwt token here'
                }
            })
            .then(response => (this.page_content = response.data[0]))
            .catch(error => {
                // TODO: use vue js logging
                console.log("There was an error: " + error);
            })
        },
        pullPageContent() {
            this.getPageContentData();
        }
    },
}
</script>


<style scoped lang="scss">

    $base-cream: #FFFCF4;
    $violet-blue: #F4F6FD;
    $neutral-pink: #fddecc;
    $neutral-pink-dark: #fbc6a7;

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
        padding: 100px 10% 10% 10%;
    }

    .title {
        width: 100%;
        text-align: center;
    }

    .bio-content {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 70px;

        /* 765px and down */
        @media only screen and (max-width: 765px) {
            margin-bottom: 0px;
        }

        .bio-photo-container {
            max-width: 500px;
            margin-bottom: 80px;

            .bio-photo {
                width: 100%;
            }

            .logo-head {
                width: 40%;
                position: relative;
                top: 20px;
                margin-left: 30%;

                /* 765px and down */
                @media only screen and (max-width: 765px) {
                    display: none;
                }
            }
        }

        .bio-description {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            .html {
                max-width: 850px;
            }

        }
        
    }

    .work {
        display:flex;
        align-items: center;
        justify-content: center;
        max-width: 500px;
        margin: auto;

        .work-brain {
            @include aspect-ratio(10, 9);
            width: 100%;
            // height: 500px;
            transform-style: preserve-3d;
            transform: perspective(1000px);
            background-image: url("../assets/about/brain-large.png");
            background-size: cover;

            /* 765px and down */
            @media only screen and (max-width: 765px) {
                display: none;
            }

            &--mobile {
                @extend .work-brain;
                @include aspect-ratio(12, 12);
                background-image: url("../assets/about/brain-mobile.png");
                display: none;
                /* 765px and down */
                @media only screen and (max-width: 765px) {
                    display: block;
                }
            }

            a {
                color: #212529;
                text-decoration: none;
            }

            .button-left {
                width: 300px;
                height: 45px;
                position: relative;
                top: -185px;
                left: -90px;
                transform: translateZ(20px);
                background-color: $violet-blue;
                border: 4px solid $base-cream;

                img {
                    position: relative;
                    top: -32px;
                    transform: rotate(-180deg);
                }

                .label {
                    position: relative;
                    top: -32px;
                    font-size: 13px;
                    font-weight: bold;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                }

            }

            .button-right {
                width: 300px;
                height: 45px;
                position: relative;
                top: -230px;
                left: 290px;
                transform: translateZ(20px);
                background-color: $neutral-pink;
                border: 4px solid $base-cream;

                img {
                    position: relative;
                    top: -32px;
                }

                .label {
                    position: relative;
                    top: -30px;
                    font-size: 13px;
                    font-weight: bold;
                    text-transform: uppercase;
                    letter-spacing: 5px;
                    margin-left: 20px;
                }
            }

            .left-brain {
                height: 100%;
                width: 50%;
                position: absolute;
                top: 0;
                left: 0;
                /* 765px and down */
                @media only screen and (max-width: 765px) {
                    display: block;
                }
            }

            .right-brain {
                height: 100%;
                width: 50%;
                position: absolute;
                top: 0;
                right: 0;
                /* 765px and down */
                @media only screen and (max-width: 765px) {
                    display: block;
                }
            }

        }
    }

    .bio-social {
        display:flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        padding-top: 20px;


        a {
            color: #212529;
            text-decoration: none;
        }

        span {
            padding: 12px;
        }
    }
</style>