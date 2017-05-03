<template lang="jade">
    mu-row(gutter)
        mu-col(desktop="20")
            mu-paper(height="100")
                mu-list
                    mu-list-item(title="首页")
                        mu-icon(slot="left",value="home",to="/course/home")
                    mu-divider
                    mu-sub-header 软件开发
                    mu-list-item(title='前端', to="/course/client")
                        mu-icon(slot="left",value="code")
                    mu-list-item(title='服务器端', to="/course/server")
                        mu-icon(slot="left",value="code")
                    mu-list-item(title='数据库', to="/course/database")
                        mu-icon(slot="left",value="code")
                    mu-list-item(title='移动端', to="/course/mobile")
                        mu-icon(slot="left",value="code")
                    mu-list-item(title='图形开发', to="/course/graphics")
                        mu-icon(slot="left",value="code")
                    mu-list-item(title='IDE', to="/course/ide")
                        mu-icon(slot="left",value="code")
                    mu-list-item(title='操作系统', to="/course/os")
                        mu-icon(slot="left",value="code")
                    mu-list-item(title='基础理论', to="/course/soft_basic")
                        mu-icon(slot="left",value="code")
                    mu-divider
                    mu-sub-header 硬件开发
                    mu-list-item(title='Arduino', to="/course/arduino")
                        mu-icon(slot="left",value="code")
                    mu-list-item(title='STM32', to="/course/STM32")
                        mu-icon(slot="left",value="code")
                    mu-list-item(title='基础理论', to="/course/hard_basic")
                        mu-icon(slot="left",value="code")
        mu-col(desktop="80")
            router-view
</template>

<script>
export default {
    name: 'school',
    data() {
        return {

        }
    },
    mounted: function () {

    },
    methods: {

    }
}
</script>

<style scoped>

</style>