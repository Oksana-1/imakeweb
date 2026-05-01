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
                    <li><a href="#" @click.prevent="goToBlock('#skills')" class="im-common-title white centered">Skills</a></li>
                    <li><a href="#"  @click.prevent="goToBlock('#projects')" class="im-common-title white centered">Projects</a></li>
                    <li><a href="#"  @click.prevent="goToBlock('#about')" class="im-common-title white centered">About</a></li>
                    <li><a href="#"  @click.prevent="goToBlock('#contacts')"  class="im-common-title white centered">Contacts</a></li>
                </ul>
            </div>
        </transition>
    </header>
</template>

<script setup>
import { ref } from 'vue';
import { exist, scrollTo } from "@/utils/helpers";

const menuIsOpened = ref(false);

const goToBlock = (blockSelector) => {
    menuIsOpened.value = false;
    const block = document.querySelector(blockSelector);
    if (exist(block)) {
        scrollTo(block);
    }
};
</script>