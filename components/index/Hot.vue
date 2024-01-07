<template>
	<view class="">
		<Commodity :dataList="hotList" itemWidth="250rpx" imgBigHeight="250rpx"></Commodity>
	</view>
</template>

<script>
	import Commodity from "@/components/common/Commodity.vue"
	export default {
		data() {
			return {
				hotList: [
					{
						id: 1,
						imgUrl: "../../static/img/hot1.jpg",
						name: "绒毛大衣2024年爆款 绒毛大衣2024年爆款 绒毛大衣2024年爆款",
						nowPrice: 299,
						oldPrice: 599,
						discount: 5.2
					},
					{
						id: 2,
						imgUrl: "../../static/img/hot2.jpg",
						name: "绒毛大衣2024年爆款 绒毛大衣2024年爆款 绒毛大衣2024年爆款",
						nowPrice: 299,
						oldPrice: 599,
						discount: 5.2
					},
					{
						id: 3,
						imgUrl: "../../static/img/hot3.jpg",
						name: "绒毛大衣2024年爆款 绒毛大衣2024年爆款 绒毛大衣2024年爆款",
						nowPrice: 299,
						oldPrice: 599,
						discount: 5.2
					}
				]
			} 
		},
		components: {
			Commodity
		}
	}
</script>

<style>
</style>