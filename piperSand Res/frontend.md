###这里里面的所有API都是login require的
#### 绿色表示已经找到图标

#### <font color=green>广告投放</font>


#### <font color=green>长期贷款</font> /game/long_loan POST content_type="application/json"
json keys
- value: (int) 贷款额（正整数）
- year: (int) 年限（[1..6]）

return
- {'code': 200, 'msg': '成功'}
- {'code': 400, 'msg': '贷款额度不足'}


#### <font color=green>短期贷款</font> /game/short_loan POST content_type="application/json"
json keys
- value: (int) 贷款额（正整数）

return
- {'code': 200, 'msg': '成功'}
- {'code': 400, 'msg': '贷款额度不足'}


#### <font color=green>下原料订单</font> /game/order_raw_material POST content_type="application/json"
json keys
- r1: (int) r1原材料数量
- r2: (int) r2原材料数量
- r3: (int) r3原材料数量
- r4: (int) r4原材料数量

return
- {'code': 200, 'msg': '成功'}


#### <font color=green>购买租用厂房(侧边栏)</font> /game/but_rent_workshop POST content_type="application/json"
json keys
- cmd: (string) 买还是租，你搞个单选框('buy' or 'rent')
- workshop_type: (string) 厂房类型，单选框('small', 'medium', 'big')

return
- {'code': 200, 'msg': '成功'}
- {'code': 400, 'msg': '现金不足'}


#### <font color=green>新建生产线(侧边栏)</font> /game/new_line POST content_type="application/json"
json keys
- workshop_id: (int)
- line_id: (int)
- line_type: (string) 生产线类型，单选框('hand', 'aoto', 'flex')
- product_type: (string) 产品类型，单选框('p1','p2','p3','p4')

return
- {'code': 200, 'msg': '成功'}
- {'code': 400, 'msg': '现金不足'}


#### <font color=green>在建生产线(侧边栏)</font> /game/construct_line POST content_type="application/json"
json keys
- workshop_id: (int)
- line_id: (int)

return
- {'code': 200, 'msg': '成功'}
- {'code': 400, 'msg': '现金不足'}


#### <font color=green>生产线转产(侧边栏)</font> /game/switch_product POST content_type="application/json"
json keys
- workshop_id: (int)
- line_id: (int)
- product_type: (string) 转成什么产品类型，单选框('p1','p2','p3','p4')

return
- {'code': 200, 'msg': '成功'}
- {'code': 400, 'msg': '现金不足'}


#### <font color=green>变卖生产线(侧边栏)</font> /game/sell_line POST content_type="application/json"
json keys
- workshop_id: (int)
- line_id: (int)

return
- {'code': 200, 'msg': '成功'}


#### <font color=green>紧急采购</font> /game/emergency_buy POST content_type="application/json"
json keys
- r1: (int) r1原材料数量，用户输入
- r2: 同上
- r3
- r4
- p1: (int) p1产品数量，用户输入
- p2: 同上
- p3
- p4

return
- {'code': 200, 'msg': '成功'}
- {'code': 402, 'msg': '没钱了，吃屎'}


#### <font color=green>开始下一批生产(侧边栏)</font> /game/produce POST content_type="application/json"
json keys
- workshop_id
- line_id

return
- {'code': 200, 'msg': '成功'}
- {'code': 402, 'msg': '没钱了，吃屎'}


#### <font color=green>交货(侧边栏)</font> /game/delivery POST content_type="application/json"
json keys
- order_id: 

return
- {'code': 200, 'msg': '成功'}
- {'code': 401, 'msg': '产品不够，不能交货'}


#### <font color=green>产品研发</font> /game/product_dev POST content_type="application/json"
json keys
- product_types: 要研发的产品，复选框['p1', 'p2', 'p3', 'p4']

return
- {'code': 200, 'msg': '成功'}
<!-- 已经研发好了不能点 -->


#### <font color=green>新市场开拓</font> /game/market_dev POST content_type="application/json"
json keys
- markets: 要开拓的市场，复选框['本地','区域','国内','亚洲','国际']

return
- {'code': 200, 'msg': '成功'}


#### <font color=green>出售库存</font> /game/sell_stock POST content_type="application/json"
json keys
- r1: r1原材料数量，用户输入
- r2
- r3
- r4
- p1
- p2
- p3
- p4

return
- {'code': 200, 'msg': '成功'}


#### <font color=green>贴现(侧边栏)</font> /game/discount_receiable POST content_type="application/json"
json keys
- recei1: 一账期应收款贴现额，用户输入
- recei2:
- recei3:
- recei4:

return
- {'code': 200, 'msg': '成功'}
- {'code': 401, 'msg': '应收款不存在'}


#### <font color=green>ISO资格认证(侧边栏)</font> /game/iso_dev POST content_type="application/json"
json keys
- ISOs: 要认证的资格，复选框['iso9','iso14']
