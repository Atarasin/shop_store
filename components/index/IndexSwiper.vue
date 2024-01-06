<template>
	<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
		<swiper-item>
			<view class="swiper-item">
				<image class="swiper-img" src="../../static/img/Phoenix.png" mode=""></image>
			</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item">
				<image class="swiper-img" src="../../static/img/DragonSoars.png" mode=""></image>
			</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item">
				<image class="swiper-img" src="../../static/img/JianlongPianfeng.png" mode=""></image>
			</view>
		</swiper-item>
	</swiper>
</template>

<script>
</script>

<style scoped>
	swiper {
		width: 100%;
		height: 400rpx;
	}
	.swiper-img {
		width: 100%;
		height: 400rpx;
	}
</style>