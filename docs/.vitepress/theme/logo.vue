<template>
  <canvas ref="canvas" width="800" height="600"></canvas>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const canvas = ref(null)

onMounted(() => {
  const ctx = canvas.value.getContext('2d')
  const width = canvas.value.width
  const height = canvas.value.height

  // 定义树枝的属性
  const maxDepth = 10 // 树枝的最大深度
  const branchLen = 100 // 初始树枝长度
  const angleDelta = Math.PI / 6 // 分支角度偏差
  const lenReduction = 0.7 // 每次分支长度缩减比例
  const growSpeed = 100 // 生长速度,值越小速度越快

  // 绘制树枝的函数
  function drawBranch(startX, startY, len, angle, depth) {
    if (depth > maxDepth) return

    const endX = startX + Math.cos(angle) * len
    const endY = startY + Math.sin(angle) * len

    ctx.beginPath()
    ctx.moveTo(startX, startY)
    ctx.lineTo(endX, endY)
    ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`
    ctx.lineWidth = depth * 1.5
    ctx.stroke()

    // 随机决定是否分叉
    if (Math.random() < 0.5) {
      setTimeout(() => {
        drawBranch(endX, endY, len * lenReduction, angle + angleDelta, depth + 1)
      }, growSpeed)
    }
    if (Math.random() < 0.5) {
      setTimeout(() => {
        drawBranch(endX, endY, len * lenReduction, angle - angleDelta, depth + 1)
      }, growSpeed)
    }
  }

  // 开始绘制树枝
  drawBranch(width / 2, height, branchLen, -Math.PI / 2, 0)
})
</script>
