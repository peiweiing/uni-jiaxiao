<template>
	<view>
		<view class="top">
			<input type="text" maxlength="20" value="" placeholder="标题" />
			<view class="txt">
				<text>标题最多20字</text>
			</view>
		</view>
		<view class="cent">
			<textarea value="" placeholder="请输入帖子正文" />
		</view>
		<view class="end">
			<button type="primary">发布</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
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
