const {
	SyncHook,
	SyncBailHook,
	SyncWaterfallHook,
	SyncLoopHook,
	AsyncParallelHook,
	AsyncParallelBailHook,
	AsyncSeriesHook,
	AsyncSeriesBailHook,
	AsyncSeriesWaterfallHook
 } = require('tapable')

class OneDay {
	constructor() {
		this.hooks = {
      morning: new SyncHook(["newSpeed"]),
      arternoon: new SyncHook(["hello"])
		};
	}
}