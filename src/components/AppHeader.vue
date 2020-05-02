<template>
    <header class="im-header">
        <div class="im-menu-wrap"
             :class="{menuIsOpened}">
            <div class="im-sandwich-container"
                @click="menuIsOpened = !menuIsOpened">
                <div class="im-sandwich"></div>
            </div>
        </div>
        <transition name="fade" :duration="{ enter: 1500, leave: 500 }">
            <div v-if="menuIsOpened"
                 class="im-menu-container">
                <ul>
                    <li><a href="" class="im-common-title white centered">Skills</a></li>
                    <li><a href="" class="im-common-title white centered">Projects</a></li>
                    <li><a href="" class="im-common-title white centered">About</a></li>
                    <li><a href="" class="im-common-title white centered">Contacts</a></li>
                </ul>
            </div>
        </transition>
    </header>
</template>

<script>
    export default {
        name: "AppHeader.vue",
        data() {
            return {
                menuIsOpened: false
            }
        }
    }
</script>