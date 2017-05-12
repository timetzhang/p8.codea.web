<template lang="jade">
    div
        mu-appbar(title="SDK", v-if='isMobile')
            mu-icon-button(slot='right',icon='search',@click='toggleSearch')
        mu-paper(style='padding:10px 30px; margin-bottom: 15px', v-if='showSearch')
            mu-text-field(label="搜索SDK",style='width:100%')
        mu-paper.sdk-page
            router-view 
</template>

<script>
import Browser from '@/common/browser'

export default {
    name: 'sdk',
    data() {
        return {
            isMobile: Browser.mobile,
            showSearch: true
        }
    },
    mounted: function () {
        if (this.isMobile) {
            this.showSearch = false;
        }
    },
    methods: {
        toggleSearch() {
            this.showSearch = !this.showSearch;
        }
    }
}
</script>

<style scoped>
.sdk-page {
    padding: 20px !important;
}
</style>