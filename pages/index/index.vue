<template>
	<view class="content">
		<!-- #ifdef MP-WEIXIN -->
		<view class="wx-nav">
			<view class="iconfont">&#xe62d;</view>
			<text class="百年奥莱">百年奥莱</text>
			<view class="iconfont">&#xe665;</view>
		</view>
		<!-- #endif -->
<!-- 		<IndexSwiper></IndexSwiper>
		<Recommend></Recommend>
		<Card card-title="猜你喜欢"></Card>
		<CommodityList></CommodityList> -->
		
		<Banner></Banner>
		<Icons></Icons>
		<Card card-title="热销爆品"></Card>
		<Hot></Hot>
		
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
				title: 'Hello'
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
</style>
