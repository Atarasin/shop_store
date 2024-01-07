<template>
	<view class="content">
		<!-- #ifdef MP-WEIXIN -->
		<view class="wx-nav">
			<view class="iconfont">&#xe62d;</view>
			<text class="百年奥莱">百年奥莱</text>
			<view class="iconfont">&#xe665;</view>
		</view>
		<!-- #endif -->
		<scroll-view scroll-x="true" class="scroll-content" :scroll-into-view="scrollIndex">
			<view
				:id="'top'+index"
				class="scroll-item"
				v-for="(item,index) in topBar"
				:key="index"
				@tap="changeTab(index)"
			>
				<text :class="topBarIndex===index?'f-active-color':'f-color'">{{ item.name }}</text>
			</view>
		</scroll-view>
		
		<swiper @change="onChangeTab" :current="topBarIndex" :style="'height:'+contentHeight+'px;'">
			<swiper-item
				v-for="(item,index) in newTopBar"
				:key="index"
			>
				<!-- view用于获取以下内容高度之和 -->
				<view class="home-data">
					<block v-for="(k, i) in item.data" :key="i">
						<IndexSwiper v-if="k.type==='swiperList'" :dataList="k.data"></IndexSwiper>
						<template v-if="k.type==='recommendList'">
							<Recommend :dataList="k.data"></Recommend>
							<Card card-title="猜你喜欢"></Card>
						</template>
						<CommodityList v-if="k.type==='commodityList'" :dataList="k.data"></CommodityList>
					</block>
				</view>
			</swiper-item>
		</swiper>
		
<!-- 		<Banner></Banner>
		<Icons></Icons>
		<Card card-title="热销爆品"></Card>
		<Hot></Hot> -->
		
	</view>
</template>

<script>
	// @表示根目录
	import IndexSwiper from "@/components/index/IndexSwiper.vue"
	import Recommend from "@/components/index/Recommend.vue"
	import Card from "@/components/common/Card.vue"
	import CommodityList from "@/components/common/CommodityList.vue"
	import Banner from "@/components/index/Banner.vue"
	import Icons from "@/components/index/Icons.vue"
	import Hot from "@/components/index/Hot.vue"
	
	export default {
		data() {
			return {
				title: 'Hello',
				// 顶栏当前选中的索引
				topBarIndex: 0,
				// 顶栏跟随的索引id值
				scrollIndex: 'top0',
				// 内容块的高度值
				contentHeight: 0,
				// 顶栏标签
				topBar: [],
				// 顶栏对应的数据
				newTopBar: []
			}
		},
		components: {
			IndexSwiper,
			Recommend,
			Card,
			CommodityList,
			Banner,
			Icons,
			Hot
		},
		onLoad() {
			this.__init();
		},
		onReady() {
			let view = uni.createSelectorQuery().select(".home-data");
			view.boundingClientRect(data => {
				this.contentHeight = 2000;
				/* this.contentHeight = data.height; */
			}).exec();
		},
		methods: {
			__init() {
				uni.request({
					url: "http://127.0.0.1:4523/m1/3871430-0-default/api/index_list/data",
					success: (res) => {
						let data = res.data.data;
						this.topBar = data.topBar;
						this.newTopBar = this.initData(data);
					}
				})
			},
			initData(res) {
				let arr = [];
				for (let i = 0; i < this.topBar.length; i++) {
					let obj = {
						data: []
					};
					// 获取首页数据
					if (i == 0) {
						obj.data = res.data;
					}
					arr.push(obj);
				}
				return arr;
			},
			changeTab(index) {
				if (this.topBarIndex === index) return;
				this.topBarIndex = index;
				this.scrollIndex = 'top' + index;
			},
			onChangeTab(e) {
				this.changeTab(e.detail.current)
			}
		}
	}
</script>

<style scoped>
	.wx-nav {
		text-align: center;
		height: 200rpx;
		width: 100%;
		line-height: 200rpx;
		justify-content: space-between;
		align-items: center;
		display: flex;
	}
	.scroll-content {
		width: 100%;
		height: 80rpx;
		white-space: nowrap;
	}
	.scroll-item {
		display: inline-block;
		padding: 10rpx 30rpx;
		font-size: 30rpx;
	}
	.f-active-color {
		padding: 10rpx 0;
		border-bottom: 5rpx solid #84bff3;
	}
</style>
