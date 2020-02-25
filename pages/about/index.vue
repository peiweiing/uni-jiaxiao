<template>
	<view>
		
		<view class="divcs">
			{{aboutus}}
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				aboutus:''
			}
		},
		onLoad() {
			this.get_aboutus();
		},
		methods: {
			get_aboutus(){
				var url = this.$url;
				uni.request({
					url:url+'Index/get_about',
					success: (e) => {
						if(e.data.error == 400){
							this.aboutus = e.data.info;
						}else{
							this.aboutus = e.data.data;
						}
					}
				})
			}
		}
	}
</script>

<style>

.div{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20rpx;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
}
.div image{
  width: 30%;
  height: 200rpx;
}
.div>view{
  height: 200rpx;
  padding: 0 10rpx;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.div .t1{
  overflow:hidden;/*溢出隐藏*/
  text-overflow: ellipsis;/*超出部分显示省略号*/
  display:-webkit-box;/*弹性盒*/
  -webkit-box-orient:vertical;/*设置对象内元素的排列方式为垂直*/
  -webkit-line-clamp:2;/*限制块元素文本行数*/
}
.div .t2{
  text-align: right;
}
</style>
