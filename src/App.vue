<template lang="jade">
    div.app
        mu-appbar.top
            img(src='/static/img/logo.png',slot="left")
            mu-icon-button(icon="menu",slot="right",@click="menuToggle")
        mu-row.content(gutter)
            mu-col(:desktop="menuWidth",v-if="menuVisible")
                mu-paper(height="100")
                    mu-list
                        mu-list-item(title="首页")
                            mu-icon(slot="left",value="home",href="/#/home")
                        mu-list-item(title="学校",:toggleNested="true")
                            mu-icon(slot="left",value="dns")
                            mu-list-item(slot="nested",title="愿景")
                                mu-icon(slot="left",value="grade")
                            mu-list-item(slot="nested",title="目标")
                                mu-icon(slot="left",value="my_location")
                            mu-list-item(slot="nested",title="革新")
                                mu-icon(slot="left",value="extension")
                            mu-list-item(slot="nested",title="学习环境")
                                mu-icon(slot="left",value="event_seat")
                            mu-list-item(slot="nested",title="居住环境")
                                mu-icon(slot="left",value="nature_people")
                        mu-list-item(title="课程",:toggleNested="true")
                            mu-icon(slot="left",value="school")
                            mu-list-item(slot="nested",title="集训")
                                mu-icon(slot="left",value="looks_one")
                            mu-list-item(slot="nested",title="两年课程")
                                mu-icon(slot="left",value="looks_two")
                            mu-list-item(slot="nested",title="项目组")
                                mu-icon(slot="left",value="looks_3")
                            mu-list-item(slot="nested",title="就业")
                                mu-icon(slot="left",value="looks_4")
                        mu-list-item(title="项目",:toggleNested="true")
                            mu-icon(slot="left",value="assessment")
                            mu-list-item(slot="nested",title="课程项目")
                                mu-icon(slot="left",value="looks_4")
                            mu-list-item(slot="nested",title="商业项目")
                                mu-icon(slot="left",value="looks_4")
                        mu-list-item(title="报名",:toggleNested="true")
                            mu-icon(slot="left",value="inbox")
                            mu-list-item(slot="nested",title="入学考试")
                                mu-icon(slot="left",value="create")
                            mu-list-item(slot="nested",title="注册")
                                mu-icon(slot="left",value="account_box")
                        mu-list-item(title="联系我们")
                            mu-icon(slot="left",value="phone")
            mu-col(:desktop="100-menuWidth")
                router-view
        mu-row.bottom(gutter)
            mu-col(desktop="50")
                p 地址：长沙远大三路远大城J57
                p 电话：0731-84086832
                p 邮箱：p8@joinp8.com
            mu-col(desktop="50",style="text-align:right")
                mu-icon(value="chat")
                mu-icon(value="book")
                mu-icon(value="favorite")
            mu-divider
            mu-col(desktop="100")
                p ©长沙噼啪星球文化传媒有限公司 / 湘ICP备16002937号
</template>

<script>
import Browser from './common/browser'

export default {
    data() {
        return {
            menuVisible: true,
            menuWidth: 15
        };
    },
    methods: {
        menuToggle() {
            this.menuVisible = !this.menuVisible;
            this.menuWidth = this.menuVisible ? 15 : 0;
        }
    }
}
</script>

<style>
  .app {
    background-color: #f4f4f4;
}

.top {
    width: 100%;
}

.content {
    padding: 10px;
}

.bottom {
    background-color: #424242;
    color: #888;
    padding: 10px;
    font-size: 12px;
}
</style>