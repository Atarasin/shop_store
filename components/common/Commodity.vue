<template>
	<view class="commodity">
		<!-- 单个商品组件 -->
		<view class="commodity-item"
			v-for="(item, index) in dataList"
			:key="index"
		>
			<image class="commodity-img" :src="item.imgUrl" mode=""></image>
			<view class="commodity-content">
				<text class="commodity-name">{{ item.name }}</text>
				<view class="commodity-price">
					<text class="now-price">${{item.nowPrice}}</text>
					<text class="old-price">${{item.oldPrice}}</text>
				</view>
				<text class="commodity-discount">{{item.discount}}折</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			dataList: Array
		}
	}
</script>

<style scoped>
	.commodity {
		display: flex;
		flex-wrap: wrap;
	}
	.commodity-item {
		width: 375rpx;
		padding-bottom: 20rpx;
	}
	.commodity-img {
		width: 100%;
		height: 375rpx;
	}
	.commodity-content {
		text-align: center;
	}
	.commodity-name {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		color: chocolate;
		word-break: break-all;
		padding: 6rpx 20rpx;
	}
	.commodity-price {
		font-size: 28rpx;
	}
	.old-price {
		text-decoration: line-through;
		color: #999999;
		padding-left: 10rpx;
	}
	.commodity-discount {
		border-radius: 4rpx;
		border: 1px solid #FF3333;
		padding: 2rpx 10rpx;
		font-size: 20rpx;
		color: #FF3333;
	}
</style>