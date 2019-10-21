<template>
     <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsdata" :key="item.id">
					<router-link :to="'/home/newsinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.short_cut">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                                <span>{{item.news_class}}</span>
                                <span>{{item.createtime}}</span>
                            </p>
						</div>
					</router-link>
				</li>
     </ul>
</template>

<script>
    import {Toast} from 'mint-ui';
    
    export default {
        name:'newslist',
        data() {
            return {
                newsdata:[
                    {
                        "id": "17669",
                        "class_id": "1",
                        "title_type": "0",
                        "title": "阜新市总收听收看庆祝中华人民共和国成立70周年大会、阅兵式和群众游行活动直播",
                        "short_cut": "http://app.lnszgh.org/szgh_cms/src/upload/20180917150105-225.jpg",
                        "createtime": "10-09",
                        "status": "0",
                        "editor_id": "0",
                        "zan_count": "0",
                        "is_top": "0",
                        "set_top_time": "1970-01-01 00:00:00",
                        "src_id": "17669",
                        "has_sync": "0",
                        "news_class": "新闻资讯",
                        "redirect_url": "http://app.lnszgh.org/szgh_cms/h5/news_content.html?id=17669"
                    },
                    {
                        "id": "17668",
                        "class_id": "1",
                        "title_type": "0",
                        "title": "鞍山市总举办庆祝新中国成立70周年诗歌朗诵会",
                        "short_cut": "http://app.lnszgh.org/szgh_cms/src/upload/20180917085452-652.jpg",
                        "createtime": "10-09",
                        "status": "0",
                        "editor_id": "0",
                        "zan_count": "0",
                        "is_top": "0",
                        "set_top_time": "1970-01-01 00:00:00",
                        "src_id": "17668",
                        "has_sync": "0",
                        "news_class": "新闻资讯",
                        "redirect_url": "http://app.lnszgh.org/szgh_cms/h5/news_content.html?id=17668"
                    },
                    {
                        "id": "17667",
                        "class_id": "1",
                        "title_type": "0",
                        "title": "大连市总举办“我和我的祖国”主题朗诵比赛",
                        "short_cut": "http://app.lnszgh.org/szgh_cms/src/upload/20180917091630-512.jpg",
                        "createtime": "10-09",
                        "status": "0",
                        "editor_id": "0",
                        "zan_count": "0",
                        "is_top": "0",
                        "set_top_time": "1970-01-01 00:00:00",
                        "src_id": "17667",
                        "has_sync": "0",
                        "news_class": "新闻资讯",
                        "redirect_url": "http://app.lnszgh.org/szgh_cms/h5/news_content.html?id=17667"
                    },
                    {
                        "id": "17666",
                        "class_id": "0",
                        "title_type": "0",
                        "title": "2019辽宁省职工技能大赛暨无损检测大赛现场见闻",
                        "short_cut": "http://app.lnszgh.org/szgh_cms/src/upload/20180910102910-775.jpg",
                        "createtime": "10-09",
                        "status": "0",
                        "editor_id": "18",
                        "zan_count": "0",
                        "is_top": "0",
                        "set_top_time": "1970-01-01 00:00:00",
                        "src_id": "17666",
                        "has_sync": "0",
                        "news_class": "新闻资讯",
                        "redirect_url": "http://app.lnszgh.org/szgh_cms/h5/news_content.html?id=17666"
                    },
                    {
                        "id": "17664",
                        "class_id": "0",
                        "title_type": "0",
                        "title": "2019辽宁省职工技能大赛暨港口行业技能大赛现场见闻",
                        "short_cut": "http://app.lnszgh.org/szgh_cms/src/upload/20180913161941-501.jpg",
                        "createtime": "10-09",
                        "status": "0",
                        "editor_id": "18",
                        "zan_count": "0",
                        "is_top": "0",
                        "set_top_time": "1970-01-01 00:00:00",
                        "src_id": "17664",
                        "has_sync": "0",
                        "news_class": "新闻资讯",
                        "redirect_url": "http://app.lnszgh.org/szgh_cms/h5/news_content.html?id=17664"
                    }
                ]
            }
        },
        created(){
            //this.queryList() 
        },
        methods:{
            queryList(){
                    this.axios.get("/api/szgh_cms/service/news_list_paged.php").then((response) => {
                        console.log(response)
                        if(response.status===200){
                            Toast('获取新闻列表成功')
                            this.newsdata=response.data.data

                        }else{
                            Toast('获取新闻列表失败')
                        }
                    })
                    
            }
        }
    }
</script>

<style lang="less">
    .mui-table-view{
        li{
            h1{
                font-size: 14px;
                text-align: left;
            }
            .mui-ellipsis{
                font-size: 12px;
                color: #226aff;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>