### 在执行npm install 的时候发生了什么？
> 首先安装的依赖都会存放在根目录的node_modules,默认采用扁平化的方式安装，并且排序规则.bin第一个然后@系列，再然后按照首字母排序abcd等，并且使用的算法是广度优先遍历，在遍历依赖树时，npm会首先处理项目根目录下的依赖，然后逐层处理每个依赖包的依赖，直到所有依赖都被处理完毕。在处理每个依赖时，npm会检查该依赖的版本号是否符合依赖树中其他依赖的版本要求，如果不符合，则会尝试安装适合的版本

##  理想状态下 的扁平化
![](https://cdn.nlark.com/yuque/0/2024/webp/43082094/1710899848955-189b2d3e-58d2-4727-9b77-f28056ee9ad5.webp#averageHue=%23f5f5f5&clientId=uc25ff174-e47d-4&from=paste&id=RiAnr&originHeight=456&originWidth=635&originalType=url&ratio=1.25&rotation=0&showTitle=false&status=done&style=stroke&taskId=u8c663e9c-ee05-44ea-bcaf-042f68de007&title=)
**安装某个二级模块时，若发现第一层级有相同名称，相同版本的模块，便直接复用那个模块**

 
## 非理想状态下


![](https://cdn.nlark.com/yuque/0/2024/jpeg/43082094/1710900374882-55d553f0-11e7-4655-a858-85cff7f30ae0.jpeg)

因为vue3和vue2所要求的依赖模块不同，（vue3下要求是v2.0的C，vue2下要求是v1.0的babel ）
所以vue3不能像vue2中那样复用A下的C v1.0模块 所以如果这种情况还是会出现模块冗余的情况，
他就会给B继续搞一层node_modules，就是非扁平化了。
### npm install 后续流程
 ![](https://cdn.nlark.com/yuque/0/2024/webp/43082094/1710900396043-6f0d1791-f592-4c3f-9511-c9ca3be14d0b.webp#averageHue=%23edeef2&clientId=ucd36994f-739c-4&from=paste&id=u03bccb12&originHeight=403&originWidth=1512&originalType=url&ratio=1.25&rotation=0&showTitle=false&status=done&style=stroke&taskId=ud8cd2663-d461-4aaf-989d-6c3e898e078&title=)
