<template>
    <footer class="im-footer" id="contacts">
        <div class="im-container-1100">
            <div class="im-footer-container">
                <div class="im-common-title centered">Get in touch</div>
                <div class="flex-row flex-justify-center margin-b-20">
                    <div class="contact-row">
                        <a href="mailto:belous.oksana@gmail.com" class="abs-block-link"></a>
                        <div class="contact-svg-wrap">
                            <svg class="svgcontact">
                                <use xlink:href="#email"></use>
                            </svg>
                        </div>
                        <div class="contact-text">E-mail</div>
                    </div>
                    <div class="contact-row">
                        <a href="tel:+380504438488" class="abs-block-link"></a>
                        <div class="contact-svg-wrap">
                            <svg class="svgcontact">
                                <use xlink:href="#tel"></use>
                            </svg>
                        </div>
                        <div class="contact-text">Phone</div>
                    </div>
                    <div class="contact-row">
                        <a href="https://t.me/bilousoksana" class="abs-block-link"></a>
                        <div class="contact-svg-wrap">
                            <svg class="svgcontact">
                                <use xlink:href="#telegram"></use>
                            </svg>
                        </div>
                        <div class="contact-text">Telegram</div>
                    </div>
                    <div class="contact-row">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/oksana-bilous/" class="abs-block-link"></a>
                        <div class="contact-svg-wrap">
                            <svg class="svgcontact">
                                <use xlink:href="#linkedin"></use>
                            </svg>
                        </div>
                        <div class="contact-text">LinkedIn</div>
                    </div>
                    <div class="contact-row">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Oksana-1" class="abs-block-link"></a>
                        <div class="contact-svg-wrap">
                            <svg class="svgcontact">
                                <use xlink:href="#github"></use>
                            </svg>
                        </div>
                        <div class="contact-text">Github</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="im-copyright">
            <div class="im-container-1100">
                <div class="text centered">
                    <p>&copy; {{ currentYear }} 'I make web' - All rights reserved.<br/>
                        Many thanks <a href="https://www.svgbackgrounds.com/" target="_blank" rel="noopener noreferrer">SVGBackgrounds.com</a> for the cool customisable backgrounds.</p>
                </div>
            </div>
        </div>
        <SvgSprite/>
    </footer>
</template>

<script setup>
import SvgSprite from './SvgSprite.vue';

const currentYear = new Date().getFullYear();
</script>
