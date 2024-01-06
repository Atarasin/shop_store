# 项目中可能遇到的一些坑

## 1.swipter的坑

1. 组件名称为`swiper.vue`或`Swiper.vue`，在传递数据时有可能图片无法正常显示；
2. 改变图片大小要用rpx，upx可能有问题；
3. swiper元素本身有150px的默认高度，app中需要显式设置高度；