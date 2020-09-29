<template>
    <div class="page">
        <div class="content">
            <div class="title">
                <h1>About</h1>
            </div>
            <div class="bio-content row">
                <div class="bio-photo-container col-12">
                    <img class="logo-head" src="../assets/saad-logo.png" alt="SAAD">
                    <img class="bio-photo" src="../assets/about/placeholder-img.jpg">
                </div>
                <div class="bio-description col-12">
                    <p>I’ve always had a passion for creating. The two things I was really drawn to as a child was… Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Lorem ipsum dolor sit amet, consectetur.</p>
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
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "About",
    mounted() {
    }
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
        padding: 10%;
    }

    .title {
        width: 100%;
        text-align: center;
    }

    .bio-content {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 100px;

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
            }
        }

        .bio-description {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            p {
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

        }
    }
</style>