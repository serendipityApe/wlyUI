# Button 按钮
----
### 基础用法
使用```type```、```plain```和```thick```属性来定义 Button 的样式。

<div class="demo-block">
  <div>
    <wly-button>默认按钮</wly-button>
    <wly-button type="primary">主要按钮</wly-button>
    <wly-button type="success">成功按钮</wly-button>
    <wly-button type="warning">警告按钮</wly-button>
    <wly-button type="danger">危险按钮</wly-button>
  </div>
  <div class="m-10">
    <wly-button plain="solid">按钮</wly-button>
    <wly-button type="primary" plain="solid">主要按钮</wly-button>
    <wly-button type="success" plain="double">成功按钮</wly-button>
    <wly-button type="warning" plain="dashed">警告按钮</wly-button>
    <wly-button type="danger" plain="dotted">危险按钮</wly-button>
  </div>
  <div class="m-10">
    <wly-button plain="solid" thick>朴素按钮</wly-button>
    <wly-button type="primary" plain="solid" thick>主要按钮</wly-button>
    <wly-button type="success" plain="double" thick>成功按钮</wly-button>
    <wly-button type="warning" plain="dashed" thick>警告按钮</wly-button>
    <wly-button type="danger" plain="dotted" thick>危险按钮</wly-button>
  </div>
</div>

::: demo
```html

<div>
    <wly-button>默认按钮</wly-button>
    <wly-button type="primary">主要按钮</wly-button>
    <wly-button type="success">成功按钮</wly-button>
    <wly-button type="warning">警告按钮</wly-button>
    <wly-button type="danger">危险按钮</wly-button>
  </div>
  <div class="m-10">
    <wly-button plain="solid">按钮</wly-button>
    <wly-button type="primary" plain="solid">主要按钮</wly-button>
    <wly-button type="success" plain="double">成功按钮</wly-button>
    <wly-button type="warning" plain="dashed">警告按钮</wly-button>
    <wly-button type="danger" plain="dotted">危险按钮</wly-button>
  </div>
  <div class="m-10">
    <wly-button plain="solid" thick>朴素按钮</wly-button>
    <wly-button type="primary" plain="solid" thick>主要按钮</wly-button>
    <wly-button type="success" plain="double" thick>成功按钮</wly-button>
    <wly-button type="warning" plain="dashed" thick>警告按钮</wly-button>
    <wly-button type="danger" plain="dotted" thick>危险按钮</wly-button>
  </div>

```
:::

### 禁用状态

按钮不可用状态。

<div class="demo-block">
  <div>
    <wly-button disabled>默认按钮</wly-button>
    <wly-button type="primary" disabled>主要按钮</wly-button>
    <wly-button type="success" disabled>成功按钮</wly-button>
    <wly-button type="info" disabled>信息按钮</wly-button>
    <wly-button type="warning" disabled>警告按钮</wly-button>
    <wly-button type="danger" disabled>危险按钮</wly-button>
  </div>
  <div class="m-10">
    <wly-button plain disabled>朴素按钮</wly-button>
    <wly-button type="primary" plain disabled>主要按钮</wly-button>
    <wly-button type="success" plain disabled>成功按钮</wly-button>
    <wly-button type="info" plain disabled>信息按钮</wly-button>
    <wly-button type="warning" plain disabled>警告按钮</wly-button>
    <wly-button type="danger" plain disabled>危险按钮</wly-button>
  </div>
</div>

::: demo
```html

<div>
  <wly-button disabled>默认按钮</wly-button>
  <wly-button type="primary" disabled>主要按钮</wly-button>
  <wly-button type="success" disabled>成功按钮</wly-button>
  <wly-button type="info" disabled>信息按钮</wly-button>
  <wly-button type="warning" disabled>警告按钮</wly-button>
  <wly-button type="danger" disabled>危险按钮</wly-button>
</div>
<div class="m-10">
  <wly-button plain disabled>朴素按钮</wly-button>
  <wly-button type="primary" plain disabled>主要按钮</wly-button>
  <wly-button type="success" plain disabled>成功按钮</wly-button>
  <wly-button type="info" plain disabled>信息按钮</wly-button>
  <wly-button type="warning" plain disabled>警告按钮</wly-button>
  <wly-button type="danger" plain disabled>危险按钮</wly-button>
</div>
  
```
:::

### 图标按钮
带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。
设置```icon```属性即可，icon 的列表可以参考 VV-UI 的 icon 组件，也可以设置在文字右边的 icon ，只要使用```i```标签即可，可以使用自定义图标。
<div class="demo-block">
  <wly-button type="primary"><wly-icon icon="search" ></wly-icon>搜索</wly-button>
  <wly-button icon="search" type="primary">搜索</wly-button>
  <wly-button icon="search" type="primary"></wly-button>
  <wly-button icon="delete" type="primary"></wly-button>
  <wly-button icon="duihao" type="primary">good</wly-button>
</div>

::: demo
```html

  <wly-button type="primary"><wly-icon icon="search" ></wly-icon>搜索</wly-button>
  <wly-button icon="search" type="primary">搜索</wly-button>
  <wly-button icon="search" type="primary"></wly-button>
  <wly-button icon="delete" type="primary"></wly-button>
  <wly-button icon="duihao" type="primary">good</wly-button>

```
:::


### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。
额外的尺寸：```mini```、```large```，通过设置```size```属性来配置它们。
<div class="demo-block">
  <wly-button size="mini">小型按钮</wly-button>
  <wly-button>默认尺寸</wly-button>
  <wly-button size="large">大型按钮</wly-button>
</div>

::: demo
```html

<wly-button size="mini">小型按钮</wly-button>
<wly-button>默认尺寸</wly-button>
<wly-button size="large">大型按钮</wly-button>

```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   mini,large            |    —     |
| type     | 类型   | string    |   primary,success,warning,danger |     —    |
| plain     | 是否朴素按钮   | string    | solid,double,dotted,dashed |  —  |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |
