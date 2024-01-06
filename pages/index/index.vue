<template>
	<view class="content">
		<!-- #ifdef MP-WEIXIN -->
		<view class="wx-nav">
			<view class="iconfont">&#xe62d;</view>
			<text class="百年奥莱">百年奥莱</text>
			<view class="iconfont">&#xe665;</view>
		</view>
		<!-- #endif -->
		<IndexSwiper></IndexSwiper>
		<Recommend></Recommend>
		<Card card-title="猜你喜欢"></Card>
	</view>
</template>

<script>
	// @表示根目录
	import IndexSwiper from "@/components/index/IndexSwiper.vue"
	import Recommend from "@/components/index/Recommend.vue"
	import Card from "@/components/index/Card.vue"
	
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		components: {
			IndexSwiper,
			Recommend,
			Card
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
