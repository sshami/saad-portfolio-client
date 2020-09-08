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
                        <h1>{{ page_content.title }}</h1>
                        <p class="url" v-if="page_content.project_listing.url">{{ page_content.project_listing.url | removeHttp }}</p>
                    </div>
                <template v-if="page_content.project_listing.type == 'WebProject'">
                    <div class="display-images">
                        <img :src="page_content.project_listing.images.demo_laptop_display" class="laptop--large">
                        <img :src="page_content.project_listing.images.demo_mobile_display" class="mobile--large">
                        <img :src="page_content.project_listing.images.demo_laptop_display_small" class="laptop--small">
                        <img :src="page_content.project_listing.images.demo_mobile_display_small" class="mobile--small">
                    </div>
                </template>
            </div>
            <div class="project-description row">
                <div class="description-content">
                    <template v-for="(section, index) in page_content.body">
                        <template v-if="section.type == 'paragraph'">
                            <div class="section" :key="index">
                                <div class="text" :key="index">
                                    <span class="html" v-html="section.content"></span>
                                </div>
                            </div>
                        </template>
                        <template v-if="section.type == 'single_image'">
                            <div class="section" :key="index">
                                <div class="content-image row">
                                    <div class="image-single col-md-12" :key="index">
                                        <img :src="section.image" class="image--large">
                                        <img :src="section.image_small" class="image--small">
                                    </div>
                                    <div class="caption col-md-12" :key="index">
                                        <p>{{ section.caption }}</p>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <template v-if="section.type == 'double_image'">
                            <div class="section" :key="index">
                                <div class="content-image row">
                                    <div class="image-left col-md-6">
                                        <img :src="section.image_left" class="image--large">
                                        <img :src="section.image_left_small" class="image--small">
                                    </div>
                                    <div class="image-right col-md-6">
                                        <img :src="section.image_right" class="image--large">
                                        <img :src="section.image_right_small" class="image--small">
                                    </div>
                                    <div class="caption col-md-12">
                                        <p>{{ section.caption }}</p>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '../common/api-instance.js'

export default {
    name: "WebDetail",
    data: function () {
      return {
          page_content : {}
      }
    },
    beforeMount(){
        this.pullPageContent();
    },
    mounted() {
        
    },
    methods: {
        getPageContentData(project) {
            api.get('/webdev/projects?project=' + project,
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
            var projectSlug = this.$route.params.projectSlug;
            console.log(projectSlug);
            this.getPageContentData(projectSlug);
        }
    },
    filters: {
        removeHttp : function (value) {
            if (!value) return '';
            value = value.toString();
            value = value.replace(/(^\w+:|^)\/\//, '');
            return value.replace("/","");
        }
    }
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

                &--large {
                    @extend .laptop;
                    display: none;
                    /* 2200px and up */
                    @media only screen and (min-width: 1050px) {
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

            .mobile {
                position: absolute;
                width: 15%;
                top: 50%;
                right: 15%;

                &--large {
                    @extend .mobile;
                    display: none;
                    /* 2200px and up */
                    @media only screen and (min-width: 1050px) {
                        display: block;
                    }
                }

                &--small {
                    @extend .mobile;
                    display: none;
                    /* 1050px and down */
                    @media only screen and (max-width: 1050px) {
                        display: block;
                    }
                }

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
                margin-bottom: 40px;
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

                    .image-single {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-bottom: 50px;

                        .image {
                            &--large {
                                @extend .image;
                                display: none;
                                /* 2200px and up */
                                @media only screen and (min-width: 1050px) {
                                    display: block;
                                }
                            }

                            &--small {
                                @extend .image;
                                display: none;
                                /* 1050px and down */
                                @media only screen and (max-width: 1050px) {
                                    display: block;
                                }
                            }
                        }
                    }

                    .image-left, .image-right {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-bottom: 50px;

                        .image {
                            &--large {
                                @extend .image;
                                display: none;
                                /* 2200px and up */
                                @media only screen and (min-width: 1050px) {
                                    display: block;
                                }
                            }

                            &--small {
                                @extend .image;
                                display: none;
                                /* 1050px and down */
                                @media only screen and (max-width: 1050px) {
                                    display: block;
                                }
                            }
                        }
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