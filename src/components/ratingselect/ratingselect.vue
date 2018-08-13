<template>
	<div class="ratingselect">
		<div class="rating-type border-1px">
			<span :class="{'active':selectTypeV===2}" class="block positive" @click="select(2,$event)" >{{desc.all}}<span class="count">{{ratings.length}}</span></span>
			<span :class="{'active':selectTypeV===0}" class="block positive" @click="select(0,$event)" >{{desc.positive}}<span class="count">{{positives.length}}</span></span>
			<span :class="{'active':selectTypeV===1}" class="block negative" @click="select(1,$event)" >{{desc.negative}}<span class="count">{{negatives.length}}</span></span>
		</div>
		<div :class="{'on':onlyContentv}"  class="switche" @click="toggleContent">
			<span class="icon-check_circle"></span>
			<span class="text">只看有内容的评价</span>
		</div>
	</div>
</template>

<script>
	const POSITIVE = 0;
	const NEGATIVE = 1;
	const ALL = 2;

	export default{
		props: {
			ratings: {
				type: Array,
				default() {
					return [];
				}
			},
			selectType: {
				type: Number,
				default: ALL
			},
			onlyContent: {
				type: Boolean,
				default: true
			},
			desc: {
				type: Object,
				default() {
					return {
						all: '全部',
						positive: '满意',
						negative: '不满意'
					}
				}
			}
		},
		data() {
    		return {
    			selectTypeV: this.selectType,
    			//onlyContentv: this.onlyContent,
    			  //在Vue2中组件的props的数据流动改为了只能单向流动，即只能由组件外（调用组件方）通过组件的DOM属性attribute传递props给组件内，组件内只能被动接收组件外传递过来的数据，并且在组件内，不能修改由外层传来的props数据
    		}
    	},
		computed: {
			positives() {
				return this.ratings.filter((rating) => {
					return rating.rateType === POSITIVE;
				})
			},
			negatives() {
				return this.ratings.filter((rating) => {
					return rating.rateType === NEGATIVE;
				})
			},
			//一个计算属性，如果没有设置 setter,也就是传入的是一个函数，或者传入的对象里没有 set 属性，当你尝试直接该改变这个这个计算属性的值，都会报错误。
			onlyContentv: {
				 // getter
                get: function () {
                    return this.onlyContent;
                },
                // setter
                set: function () {
                    this.onlyContent;
                }
			}
		},
		methods: {
			select(type, event) {
				this.selectTypeV = type;
				this.$emit('select-rating',type);
			},
			toggleContent(event) {
				this.onlyContentv = !this.onlyContent;
				this.$emit('toggle-content',!this.onlyContent);
			}
		}
	};
</script>

<style lang="less">
	@import '../../common/less/mixin.less';

	.ratingselect{
		.rating-type{
			padding: 18px 0;
			margin: 0 18px;
			.border-1px(rgba(7,17,27,.1));
			font-size: 0;
			.block{
				display: inline-block;
				padding: 8px 12px;
				margin-right: 8px;
				border-radius: 1px;
				font-size: 12px;
				color: rgb(77,85,93);
				&.active{
					color: #fff
				}
				.count{
					margin-left: 2px;
					font-size: 8px;
				}
				&.positive{
					background: rgba(0,160,220,.2);
					&.active{
						background: rgb(0,160,220);
					}
				}
				&.negative{
					background: rgba(77,85,93,.2);
					&.active{
						background: rgb(77,85,93);
					}
				}
			}
		}
		.switche{
			padding: 12px 18px;
			line-height: 24px;
			border-bottom: 1px solid rgba(7,17,27,.1);
			color: rgb(147,153,159);
			font-size: 0;
			&.on{
				.icon-check_circle{
					color: #00c850;
				}
			}
			.icon-check_circle{
				display: inline-block;
				vertical-align: top;
				font-size: 24px;
				margin-right: 4px;
			}
			.text{
				display: inline-block;
				vertical-align: top;
				font-size: 12px;
			}
		}
	}
</style>