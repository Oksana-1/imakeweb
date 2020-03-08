<template>
    <footer class="im-footer">
        <div class="c-box-110 c-container im-footer-container">
            <div class="im-common-subtitle">Contacts</div>
            <div class="contact-row-wrap">
                <div class="contact-row">
                    <a href="mailto:belous.oksana@gmail.com" class="block-link"></a>
                    <div class="contact-svg-wrap">
                        <svg class="svgcontact">
                            <use xlink:href="#email"></use>
                        </svg>
                    </div>
                    <div class="contact-text">belous.oksana@gmail.com</div>
                </div>
            </div>
            <div class="contact-row-wrap">
                <div class="contact-row">
                    <a href="tel:+380504438488" class="block-link"></a>
                    <div class="contact-svg-wrap">
                        <svg class="svgcontact">
                            <use xlink:href="#tel"></use>
                        </svg>
                    </div>
                    <div class="contact-text">tel: +380 504438488</div>
                </div>
            </div>
            <div class="contact-row-wrap">
                <div class="contact-row">
                    <a target="_blank" href="https://www.linkedin.com/in/oksana-bilous/" class="block-link"></a>
                    <div class="contact-svg-wrap">
                        <svg class="svgcontact">
                            <use xlink:href="#linkedin"></use>
                        </svg>
                    </div>
                    <div class="contact-text">LinkedIn</div>
                </div>
            </div>
        </div>
        <div class="im-copyright">
            <div class="c-box-110">
                <p>&copy; Copyright 'I make web'.</p>
            </div>
        </div>
        <SvgSprite/>
    </footer>
</template>

<script>
    import SvgSprite from './SvgSprite.vue';
    export default {
        name: "AppFooter.vue",
        components: {
            SvgSprite
        }
    }
</script>

<style scoped>

</style>