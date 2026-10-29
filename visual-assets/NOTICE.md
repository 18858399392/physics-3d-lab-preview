# 高清视觉资产来源

本目录的摄影材质和HDR环境来自Poly Haven，采用CC0 1.0；运行时从本站本地文件加载。逐文件来源、原下载地址、大小、MD5和SHA-256见sources.json。

| 资源 | 用途 | 原页面 |
| --- | --- | --- |
| Studio Small 03，4K HDR | 摄影棚环境反射与照明 | https://polyhaven.com/a/studio_small_03 |
| Fine Grained Wood，2K颜色/法线/粗糙度 | 实验木板与器材木材 | https://polyhaven.com/a/fine_grained_wood |
| Lacquered Cherry Wood，2K颜色/法线/粗糙度 | 漆木底座与精细木结构 | https://polyhaven.com/a/lacquered_cherry_wood |

资源许可说明：https://polyhaven.com/license

procedural/为本项目原创程序微表面，包括拉丝金属、喷漆、橡胶、泡沫、冰和周期性水面波纹的2048×2048线性法线/粗糙度PNG，生成源码为tools/generate-surface-textures.mjs。它们使用RGBA通道，粗糙度绿色通道包含有效数据；颜色空间由材质加载器分别设置。水体使用独立无波纹体积材质，波纹法线只用于实际液面与弯月面，各容器的偏移互不影响。

仪表盘、温度计、刻度尺和铭牌由参数化Canvas纹理绘制，文字与刻度随器材测量范围生成。
