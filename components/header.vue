<template>
	<view>
		<view class="header">
		  <text class="arrow" @click="goback"></text>
		  <text class="txt">{{text}}</text>
		  <text></text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			goback() {
                this.$router.go(-1);
			},
		},
		props:{
			text:String
		}
		
	}
</script>

<style>
	.header{
	  width: 100%;
	  height: 8vh;
	  /* padding: 30rpx 50rpx 40rpx; */
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	}

	.arrow{
	  width: 25rpx;
	  height:25rpx;
	  margin-left: 30rpx;
	  border-left: 4rpx solid #000;
	  border-top: 4rpx solid #000;
	  transform: rotate(-45deg);
	}

	.txt{
	  margin-left: -30rpx;
	}
</style>
