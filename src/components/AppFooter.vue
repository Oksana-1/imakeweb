<template>
    <footer class="im-footer">
        <div class="im-container-1100">
            <div class="im-footer-container centered">
                <div class="im-common-title">Contacts</div>
                <div class="contact-row">
                    <a href="mailto:belous.oksana@gmail.com" class="abs-block-link"></a>
                    <div class="contact-svg-wrap">
                        <svg class="svgcontact">
                            <use xlink:href="#email"></use>
                        </svg>
                    </div>
                    <div class="contact-text">belous.oksana@gmail.com</div>
                </div>
                <div class="contact-row">
                    <a href="tel:+380504438488" class="abs-block-link"></a>
                    <div class="contact-svg-wrap">
                        <svg class="svgcontact">
                            <use xlink:href="#tel"></use>
                        </svg>
                    </div>
                    <div class="contact-text">tel: +380 504438488</div>
                </div>
                <div class="contact-row">
                    <a target="_blank" href="https://www.linkedin.com/in/oksana-bilous/" class="abs-block-link"></a>
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
            <div class="im-container-1100">
                <div class="text centered">
                    <p>&copy; Copyright 'I make web'.</p>
                </div>
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