<template>
	<view>
		<view class="top">
			<input type="text" maxlength="20" v-model="article.title" value="" placeholder="标题" />
			<view class="txt">
				<text>标题最多20字</text>
			</view>
		</view>
		<view class="cent">
			<textarea value="" v-model="article.content" placeholder="请输入帖子正文" />
		</view>
		<view class="end">
			<button type="primary" @click="confirm">发布</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				article:{
					user_type:0,
					user_id:1,
					title:'',
					content:''					
				}
			}
		},
		methods: {
			confirm(){
				let data = this.article;
				var url = this.$url;
				uni.request({
					url:url+'Index/send_article',
					method:'POST',
					data:{
						data:data
					},
					success: (res) => {
						if(res.data.error == 200){
							uni.showModal({
								title:'提示',
								content:res.data.info,
								showCancel:false,
								success() {
									uni.navigateBack();
								}
							})
						}else{
							uni.showToast({
								title:res.data.info,
								icon:'none'
							})
						}
					}
				})
			}
		}
	}
</script>

<style>
.top{
	height: 10vh;
	padding: 30rpx;
	border-bottom: 4px solid #C0C0C0;
}
.top input{
	font-size: 16px;
	font-weight: bold;
}
.top .txt{
	color: #C0C0C0;
	text-align: right;
}
.cent{
	height: 50vh;
	padding: 30rpx;
}
.end{
	height: 10vh;
	padding: 30rpx;
}
</style>
