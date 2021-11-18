const kernel = gpu.createKernel(function () {
  const i = 1;
  const j = 0.89;
  return i + j;
}).setOutput([100])
