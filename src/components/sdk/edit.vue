<template lang="jade">
    div
        mu-paper
            mu-row
                mu-col(desktop="100")
                    mu-text-field(label="type_id",hintText="属于哪种类型，请输入数字",fullWidth)
                    br
                    mu-text-field(label="name",hintText="输入名字",fullWidth)
                    br
                    mu-text-field(label="brief",hintText="简介",multiLine,:rows="3",:rowsMax="60",fullWidth)
                    br
                    mu-text-field(label="details",hintText="details",multiLine,:rows="3",:rowsMax="100",fullWidth)
                    br
                    mu-text-field(label="tag",hintText="标签",fullWidth)
                    br
                    mu-text-field(label="official_website",hintText="官网地址",fullWidth)
</template>

<script>
export default {
    name: 'course',
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