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
		
		<swiper @change="onChangeTab" :current="topBarIndex">
			<swiper-item
				v-for="(item,index) in topBar"
				:key="index"
			>
				<view>{{item.name}}</view>
			</swiper-item>
		</swiper>
		
<!-- 		<IndexSwiper></IndexSwiper>
		<Recommend></Recommend>
		<Card card-title="猜你喜欢"></Card>
		<CommodityList></CommodityList> -->
		
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
				// 顶栏数据
				topBar: [
					{name: '推荐'},
					{name: '运动户外'},
					{name: '服饰内衣'},
					{name: '鞋靴箱包'},
					{name: '美妆个护'},
					{name: '家具数码'},
					{name: '食品母婴'},
				]
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

		},
		methods: {
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
