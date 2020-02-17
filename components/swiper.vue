<template>
	<view>
		
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
						<swiper-item v-for="(v,i) in lunbo" :key="i">
							<image :src="v.src"></image>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				arr: [
					{src:'../../img/lunbo.png'},
					{src:'../../img/lunbo.png'},
					{src:'../../img/lunbo.png'},
				],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			};
		},
		props:{
			lunbo:{
				type:String,
				default:[]
			},
			inv:{//父级传递
				type:Number,
				default:1000
			}
		}
	}
</script>

<style>
	image{
		width: 100%;
		height: 100%;
	}
</style>
