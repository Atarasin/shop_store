<template>
	<view class="commodity-list">
		<Commodity :dataList="commodityList"></Commodity>
	</view>
</template>

<script>
	import Commodity from "./Commodity.vue"
	export default {
		data() {
			return {
				commodityList: [
					{
						id: 1,
						imgUrl: "../../static/img/commodity1.jpg",
						name: "绒毛大衣2024年爆款 绒毛大衣2024年爆款 绒毛大衣2024年爆款",
						nowPrice: 299,
						oldPrice: 599,
						discount: 5.2
					},
					{
						id: 2,
						imgUrl: "../../static/img/commodity2.jpg",
						name: "绒毛大衣2024年爆款 绒毛大衣2024年爆款 绒毛大衣2024年爆款",
						nowPrice: 299,
						oldPrice: 599,
						discount: 5.2
					},
					{
						id: 3,
						imgUrl: "../../static/img/commodity3.jpg",
						name: "绒毛大衣2024年爆款 绒毛大衣2024年爆款 绒毛大衣2024年爆款",
						nowPrice: 299,
						oldPrice: 599,
						discount: 5.2
					},
					{
						id: 4,
						imgUrl: "../../static/img/commodity4.jpg",
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