import type { LocaleContent } from './types';

const zh: LocaleContent = {
  features: {
    'auto-responder': {
      title: 'WhatsApp 自动回复',
      shortTitle: '自动回复',
      headline: '不再让客户久等',
      description:
        '为每条 WhatsApp 消息提供即时 AI 回复。基于规则的匹配可在毫秒内处理常见问题，其他情况由智能 LLM 兜底处理。',
      metaDescription: '以 AI 精准自动回复每条 WhatsApp 消息。基于规则的匹配，加上智能 LLM 兜底。',
      benefits: [
        { title: '亚秒级响应', description: '模糊匹配在客户还没打完下一条消息前就找到正确答案。' },
        { title: '智能兜底', description: '当没有规则匹配时，AI 会给出贴合上下文、有用的回复——而不是干巴巴的"我不理解"。' },
        { title: '全天候在线', description: 'AI 客服从不休息、不请假，也不会闹情绪。' },
      ],
      howItWorks: [
        { title: '设置问答', description: '添加常见问题与答案——从 CSV 导入或手动输入。' },
        { title: '配置 AI', description: '选择 AI 提供方，自定义系统提示词以契合品牌语气。' },
        { title: '上线运行', description: '每条进站的 WhatsApp 消息都会自动获得即时、准确的回复。' },
      ],
      useCases: [
        { title: '常见问题自动化', description: '轻松处理"营业时间是几点""你们在哪里"等问题。' },
        { title: '产品咨询', description: '即时自动回复价格、库存和规格问题。' },
        { title: '非工作时间支持', description: '团队离线时依然为客户服务。' },
      ],
    },
    'knowledge-base': {
      title: '知识库',
      shortTitle: '知识库',
      headline: '您的业务专长，随时可用',
      description:
        '构建一个全面的问答知识库供 AI 调用。通过 CSV 导入数百条内容，按优先级整理，让模糊匹配每次都能找到最佳答案。',
      metaDescription: '构建智能问答知识库，支持 CSV 导入、模糊匹配和优先级控制。您的专长，随时可用。',
      benefits: [
        { title: '批量导入', description: '通过 CSV 或 JSON 上传数百条问答。几分钟即可扩充知识库，而非数周。' },
        { title: '智能匹配', description: '模糊匹配处理错别字、变体和部分匹配——客户无需使用精确措辞。' },
        { title: '优先级系统', description: '当出现多个匹配时，控制哪个答案优先。' },
      ],
      howItWorks: [
        { title: '添加知识', description: '手动输入问答，或从表格批量导入。' },
        { title: '整理与排序', description: '为每条内容设置分类、优先级和触发短语。' },
        { title: '测试并部署', description: '使用内置测试聊天验证答案，然后放心上线。' },
      ],
      useCases: [
        { title: '产品目录', description: '让客户询问任意产品并获得即时、准确的详情。' },
        { title: '政策问答', description: '运输、退换、保修——无需人工即可回答政策类问题。' },
        { title: '上手指南', description: '新客户即时获得设置和入门问题的答案。' },
      ],
    },
    'logic-flows': {
      title: '逻辑流程',
      shortTitle: '逻辑流程',
      headline: '打造能转化的对话',
      description:
        '创建带分支逻辑、条件和动作的多步对话流程。引导客户完成预约、筛选、下单——全程无需编写一行代码。',
      metaDescription: '构建带分支逻辑、条件和变量的多步 WhatsApp 对话。无需代码。',
      benefits: [
        { title: '可视化流程构建器', description: '用直观的步骤编辑器设计复杂对话。无需编程。' },
        { title: '智能分支', description: '根据客户的回复、时间段或任意变量进行差异化引导。' },
        { title: '变量系统', description: '在对话中捕获并复用信息——姓名、选择、计算结果。' },
      ],
      howItWorks: [
        { title: '设计流程', description: '添加消息、问题和条件步骤来构建对话。' },
        { title: '设置触发器', description: '定义可自动启动流程的关键词或短语。' },
        { title: '测试并启用', description: '在测试模式中走查流程，然后部署处理真实对话。' },
      ],
      useCases: [
        { title: '线索筛选', description: '提出资格问题并自动将优质线索转给销售团队。' },
        { title: '预约预订', description: '引导客户查看可用时段，并通过 Google 日历确认预订。' },
        { title: '订单处理', description: '引导客户完成产品选择、定制和下单。' },
      ],
    },
    'ai-chatbot': {
      title: 'AI 聊天机器人',
      shortTitle: 'AI 聊天机器人',
      headline: '您的品牌，由任意 AI 驱动',
      description:
        '可选 OpenAI、Anthropic、z.ai，或自带模型。配置符合您业务的人设、语气和专长。多供应商支持意味着您永远不会被锁定。',
      metaDescription: 'WhatsApp 多供应商 AI 聊天机器人。可选 OpenAI、Anthropic、z.ai 或自带模型。您的品牌，您的 AI。',
      benefits: [
        { title: '多供应商', description: '在 OpenAI、Anthropic、z.ai、llama.cpp 和 OpenRouter 之间切换，无需更改配置。' },
        { title: '品牌语气', description: '自定义系统提示词，让 AI 以您品牌的语气和风格说话。' },
        { title: '上下文感知', description: 'AI 理解对话历史，并调用您的知识库给出准确答案。' },
      ],
      howItWorks: [
        { title: '选择供应商', description: '选择 OpenAI、Anthropic、z.ai 或任意 OpenAI 兼容接口。' },
        { title: '自定义提示词', description: '编写捕捉品牌语气与专长的系统提示词。' },
        { title: '设置模型', description: '选择适合需求与预算的模型——从快速经济到强大细腻。' },
      ],
      useCases: [
        { title: '客户支持', description: '由了解您产品与政策的 AI 处理复杂支持问题。' },
        { title: '销售助手', description: '推荐产品、回答技术问题、引导购买决策。' },
        { title: '咨询机器人', description: '基于您的专长提供初步咨询与评估。' },
      ],
    },
    booking: {
      title: 'WhatsApp 预约系统',
      shortTitle: '预约',
      headline: '预约自动上门',
      description:
        '完整的 WhatsApp 预约引擎。客户在聊天中完成预约、改期和取消——基于真实可用时段——同时定金、确认和提醒自动发送。',
      metaDescription: 'WhatsApp 预约系统：真实可用时段、一句话 AI 预约、定金、自动提醒和二维码签到。绝无重复预订。',
      benefits: [
        { title: '零重复预订', description: '每个可约时段都真实可用：空闲时间由员工工时、节假日、已有预约和 Google 日历忙碌时段实时计算。' },
        { title: '两条消息完成预约', description: '智能预约 AI 能理解"周二下午 4 点左右找 Mary 做面部护理"——匹配服务与技师，找到最近的空闲时段，客户一句"好的"即完成预约。' },
        { title: '定金、提醒与二维码签到', description: '在聊天中收取定金，每次预约前自动发送提醒，客户到店扫码签到——爽约无处遁形。' },
      ],
      howItWorks: [
        { title: '设置服务与员工', description: '添加带照片、时长和价格的服务。定义分店、员工和工作时间——或用默认时段单人运营。一键导入所在国家的公共假期。' },
        { title: '让客户在聊天中预约', description: '导入现成的预约流程，或开启智能预约 AI。客户只会看到真实空闲时段，并可随时自助改期或取消。' },
        { title: '自动运行', description: '确认、提醒和品牌 PDF 回执自动发送。预约分析展示收入、爽约率和高峰时段。' },
      ],
      useCases: [
        { title: '美容院与水疗', description: '客户在一次聊天中选定服务、技师和时间——定金锁定黄金时段。' },
        { title: '诊所与门诊', description: '患者自助预约并收到提醒；前台看着日历被填满，而不是不停接电话。' },
        { title: '多分店经营', description: '分店专属工时、员工专属日历和假期导入，让多家门店绝不会重复预订。' },
      ],
    },
    catalog: {
      title: '产品目录与订单',
      shortTitle: '产品目录',
      headline: '把商店开进聊天里',
      description:
        '在 WhatsApp 中展示带照片和价格的产品。客户浏览、选择规格并下单——实时库存确保您永远不会卖出没有的货。',
      metaDescription: '在 WhatsApp 内销售：产品目录、规格变体、绝不超卖的实时库存、低库存提醒，以及从新订单到已完成的订单流水线。',
      benefits: [
        { title: '聊天中浏览与下单', description: '产品带照片、描述和价格展示。客户选定尺码或颜色规格即可下单，全程无需离开 WhatsApp。' },
        { title: '绝不超卖的库存', description: '订单一产生，库存即刻为该客户锁定。低库存提醒通过邮件和推送在断货前送达。' },
        { title: '内置订单流水线', description: '订单状态一目了然：新订单 → 已确认 → 已完成。取消自动回补库存，每次库存变动都记录在可查的台账中。' },
      ],
      howItWorks: [
        { title: '添加产品', description: '照片、价格、分类，以及各自独立库存的规格变体。产品名称自动翻译成客户的语言。' },
        { title: '放入下单流程', description: '导入现成的产品订购模板——浏览、选规格、下单——或用目录流程步骤自建。' },
        { title: '确认与履约', description: '订单到达时库存已预留。一键确认并完成履约；客户随时可在聊天中查看"我的订单"。' },
      ],
      useCases: [
        { title: '餐饮预订', description: '老顾客在常用的聊天里预订明天的午餐——每日特色菜带实时库存。' },
        { title: '带规格的零售', description: '尺码、颜色和 SKU 各有自己的库存，"有大码吗"得到的是真实答案。' },
        { title: '真实稀缺感', description: '"只剩 3 件"来自真实库存——客户会立即行动，而您绝不超卖。' },
      ],
    },
    crm: {
      title: 'CRM 与广告归因',
      shortTitle: 'CRM',
      headline: '看清哪些聊天带来了收入',
      description:
        '每位给您发消息的人都自动成为联系人——打好标签、编入分组，并关联其预约和订单。连接 Facebook 广告，看清哪些广告系列带来 WhatsApp 线索和收入，并自动完成后续跟进。联系人功能包含于每个方案，免费试用也不例外。',
      metaDescription: 'WhatsApp CRM：每场聊天自动生成联系人、Facebook 广告归因（ROAS 与单线索成本），以及 Zapier 式自动化。',
      benefits: [
        { title: '自动充实的 CRM', description: '每场进站聊天自动创建联系人，附带完整对话、预约和订单记录。标签、分组和自定义字段让一切井井有条。' },
        { title: '广告归因与 ROAS', description: '点击 WhatsApp 广告的客户在首条消息时即被标记。按广告系列查看广告花费、WhatsApp 归因收入、ROAS 和单线索成本。' },
        { title: '自动跟进', description: 'Zapier 式规则：预约确认或订单生成时，waai 可通知您的团队、为联系人打标签、向 Facebook 回报转化，或调用 webhook。' },
      ],
      howItWorks: [
        { title: '聊天变联系人', description: '每个新号码自动捕获，完整对话、预约和订单历史汇集于一份档案。' },
        { title: '连接广告', description: '一次性 Meta 连接即可将线索和购买回报给 Facebook，让广告系列基于真实 WhatsApp 收入优化。' },
        { title: '自动化跟进', description: '选择触发器和动作——waai 自动通知团队、更新标签和分组，并向您的 webhook 推送数据。' },
      ],
      useCases: [
        { title: '点击聊天广告', description: '看清哪些广告系列引发对话、哪些对话完成转化——把预算投到 ROAS 最高的地方。' },
        { title: '团队提醒', description: '预约确认或大单生成？相关负责人立即收到邮件和手机推送。' },
        { title: '更聪明的群发', description: '按行为为联系人打标签、建分组，精准投放 WhatsApp 营销活动。' },
      ],
    },
    'team-inbox': {
      title: '团队收件箱',
      shortTitle: '团队收件箱',
      headline: 'AI 处理日常，您处理其余',
      description:
        '实时监控所有 WhatsApp 对话。当 AI 力有不逮时，插手人工回复。在 AI 与人工客服之间无缝交接，客户毫无察觉。',
      metaDescription: '实时监控 WhatsApp 对话。当 AI 力有不逮时插手人工回复。无缝交接。',
      benefits: [
        { title: '实时监控', description: '通过自动刷新的消息列表实时查看对话进展。' },
        { title: '人工接管', description: '随时用人工回复接管对话。在您处理完之前，AI 会退居幕后。' },
        { title: '完整历史', description: '每条消息都被记录——随时搜索、筛选和回顾任意对话。' },
      ],
      howItWorks: [
        { title: 'AI 先处理', description: '进站消息会基于您的知识库和流程获得即时 AI 回复。' },
        { title: '您来监控', description: '从仪表板查看所有对话。实时更新，无需刷新。' },
        { title: '需要时介入', description: '输入人工回复即可接管。AI 暂停，待您处理完毕再恢复。' },
      ],
      useCases: [
        { title: '升级管理', description: '复杂问题升级给人工，AI 处理简单事务。' },
        { title: 'VIP 处理', description: '介入高价值客户对话，提供个性化关怀。' },
        { title: '质量保障', description: '审阅 AI 对话并修正回复，持续提升准确率。' },
      ],
    },
    campaigns: {
      title: 'WhatsApp 营销活动',
      shortTitle: '营销活动',
      headline: '在客户真正会看的地方触达他们',
      description:
        'WhatsApp 消息打开率高达 98%。直接向客户手机发送定向活动、促销和更新。基于模板的消息发送，符合 WhatsApp 政策。',
      metaDescription: '发送打开率 98% 的 WhatsApp 营销活动。基于模板的发送、定向投递、政策合规。',
      benefits: [
        { title: '98% 打开率', description: 'WhatsApp 消息会被打开。电子邮件无法企及这样的关注度。' },
        { title: '基于模板', description: '预先审批的消息模板确保您的活动符合 WhatsApp 政策。' },
        { title: '定向投递', description: '细分受众，把正确的信息发给正确的人。' },
      ],
      howItWorks: [
        { title: '创建模板', description: '设计带动态变量的消息模板以实现个性化。' },
        { title: '获得批准', description: '将模板提交 WhatsApp 审批——通常 24 小时内完成。' },
        { title: '发送活动', description: '一键将消息群发给选定的联系人。' },
      ],
      useCases: [
        { title: '限时促销', description: '发送客户真正会看到并行动的限时优惠。' },
        { title: '预约提醒', description: '通过 WhatsApp 自动发送预约提醒，减少爽约。' },
        { title: '新品发布', description: '直接向客户群宣布新产品或服务。' },
      ],
    },
    analytics: {
      title: '数据分析仪表板',
      shortTitle: '数据分析',
      headline: '了解哪些有效，修正哪些无效',
      description:
        '追踪消息量、回复来源、触发器热度和对话模式。清楚了解 AI 客服的表现，以及哪里需要改进。',
      metaDescription: '追踪 WhatsApp 消息量、AI 表现、热门话题和对话模式。数据驱动的优化。',
      benefits: [
        { title: '消息洞察', description: '追踪进/出站量、响应时间和对话趋势随时间的变化。' },
        { title: '来源拆分', description: '查看回复在规则、AI、流程和人工之间的分布。' },
        { title: '热门话题', description: '发现最常被问的问题和最常用的流程，优化配置。' },
      ],
      howItWorks: [
        { title: '消息流入', description: '每次 WhatsApp 交互都会被自动追踪和归类。' },
        { title: '仪表板更新', description: '图表和指标每天刷新最新数据。' },
        { title: '据洞察行动', description: '用数据补充缺失的问答、改进流程、优化 AI 提示词。' },
      ],
      useCases: [
        { title: '表现追踪', description: '监控 AI 与人工各自处理的对话数量。' },
        { title: '缺口分析', description: '找出 AI 无法回答的问题并补充到知识库。' },
        { title: 'ROI 衡量', description: '通过消息量量化节省的时间与成本。' },
      ],
    },
    'document-generation': {
      title: '文档生成',
      shortTitle: '文档生成',
      headline: '从对话到文档，只需几秒',
      description:
        '直接从聊天数据生成 Excel 表格、Word 文档、PDF、Google 文档和 Google 表格。发票、报告、报价——自动创建并发送。',
      metaDescription: '从 WhatsApp 对话生成 Excel、Word、PDF、Google 文档和表格。发票、报价、报告全自动。',
      benefits: [
        { title: '多种格式', description: '生成 Excel、Word、PDF，或原生 Google 文档与表格——满足各种工作流。' },
        { title: '数据驱动', description: '用对话变量和上下文，以真实客户数据填充文档。' },
        { title: '自动投递', description: '文档生成后自动通过 WhatsApp 发送给客户。' },
      ],
      howItWorks: [
        { title: '定义文档', description: '在流程的生成步骤中设置列、数据源和格式。' },
        { title: '收集数据', description: '由逻辑流程在对话中收集所需信息。' },
        { title: '生成并发送', description: '文档即被创建并投递给客户——无需人工操作。' },
      ],
      useCases: [
        { title: '发票生成', description: '收集订单详情并自动生成专业发票。' },
        { title: '报价单构建', description: '梳理需求并产出格式规范的报价文档。' },
        { title: '报告汇编', description: '通过聊天采集数据点，汇编成结构化报告。' },
      ],
    },
    'super-powers': {
      title: '超级能力',
      shortTitle: '超级能力',
      headline: '您的 AI 客服拥有超能力',
      description:
        '图像分析、网络搜索、网页阅读和 GitHub 文档访问——都可作为 AI 在对话中使用的能力。',
      metaDescription: '为 WhatsApp AI 客服提供图像分析、网络搜索、网页阅读和 GitHub 文档访问。给您的业务超能力。',
      benefits: [
        { title: '图像分析', description: '客户发送照片，AI 即可理解——产品、文档、截图，无所不能。' },
        { title: '网络搜索', description: 'AI 可搜索网络获取实时信息，准确回答问题。' },
        { title: '网页阅读', description: '提取并总结客户分享的任意网址的内容。' },
      ],
      howItWorks: [
        { title: '启用超级能力', description: '在设置中激活图像、网络搜索、网页阅读或 Zread。' },
        { title: '构建流程', description: '添加图像步骤分析图片，或网络搜索步骤获取实时数据。' },
        { title: '交付答案', description: 'AI 在对话中使用这些能力，给出更好的回答。' },
      ],
      useCases: [
        { title: '产品识别', description: '客户发送产品照片，即时获得识别和报价。' },
        { title: '文档处理', description: '从发票、收据或合同的照片中提取文字。' },
        { title: '实时查询', description: '搜索网络的当前价格、库存或新闻来回答问题。' },
      ],
    },
  },

  industries: {
    ecommerce: {
      title: '电子商务',
      headline: '让 WhatsApp 成为您的头号销售渠道',
      description: '自动化产品咨询、订单更新、退货请求和弃购挽回。AI 客服在 WhatsApp 上处理整个客户旅程。',
      metaDescription: '电商 WhatsApp AI。自动化产品咨询、订单追踪、退货和客户支持。',
      painPoints: [
        '无法快速得到答案时，客户会放弃购物车',
        '支持团队被"我的订单在哪"的查询淹没',
        '无法在客户首选的渠道触达他们',
      ],
      useCases: [
        { title: '产品目录助手', description: '客户描述需求，AI 推荐合适的产品并提供价格和库存。' },
        { title: '订单追踪', description: '客户问"我的订单在哪"时，即时提供订单状态。' },
        { title: '退货处理', description: '通过自动化流程和文档生成引导客户完成退货。' },
      ],
    },
    healthcare: {
      title: '医疗保健',
      headline: '更好的患者沟通，更少的行政工作',
      description: '自动化预约排期、处方咨询和患者随访。注重 HIPAA 的设计，安全加密的沟通。',
      metaDescription: '医疗 WhatsApp AI。自动化预约排期、患者随访和处方咨询。',
      painPoints: [
        '电话线路被预约请求占满',
        '员工花数小时处理重复的预约电话',
        '患者在工作时间之外难以联系到您',
      ],
      useCases: [
        { title: '预约排期', description: '患者通过 WhatsApp 集成 Google 日历进行预约、改期或取消。' },
        { title: '处方咨询', description: '自动回复处方续配、剂量说明和药房营业时间。' },
        { title: '患者分诊', description: '逻辑流程引导患者完成症状核查并指向正确科室。' },
      ],
    },
    education: {
      title: '教育',
      headline: '即时解答每个学生和家长的问题',
      description: '自动化招生咨询、课程信息、课表查询和缴费提醒。AI 轻松应对数千名学生。',
      metaDescription: '教育 WhatsApp AI。自动化招生咨询、课程信息和学生沟通。',
      painPoints: [
        '员工被重复的招生问题淹没',
        '招生季家长无法联系到招生办',
        '学生需要在办公时间之外获得答案',
      ],
      useCases: [
        { title: '招生助手', description: '自动回答项目详情、入学要求和申请状态咨询。' },
        { title: '课程信息', description: '学生即时获取课表、教学大纲和讲师信息。' },
        { title: '缴费提醒', description: '通过 WhatsApp 自动发送缴费提醒和分期方案信息。' },
      ],
    },
    'real-estate': {
      title: '房地产',
      headline: '自动筛选线索和安排看房',
      description: '通过 WhatsApp 自动捕获房源咨询、筛选买家、安排看房并发送房产文件。',
      metaDescription: '房地产 WhatsApp AI。自动筛选线索、安排看房并发送房产文件。',
      painPoints: [
        '数百条房源咨询，却少有合格线索',
        '安排看房是一场反反复复的噩梦',
        '在客户转向他人之前，无法足够快地回复咨询',
      ],
      useCases: [
        { title: '房源匹配', description: '买家描述理想房产，AI 推荐匹配的房源及照片和详情。' },
        { title: '看房预约', description: '自动为看房进行日历预订，并发送提醒和确认。' },
        { title: '文件投递', description: '自动生成并以 PDF 发送房产手册、户型图和价目表。' },
      ],
    },
    hospitality: {
      title: '酒店住宿',
      headline: '在客人抵达前就让他们惊喜',
      description: '自动化预订确认、客房服务请求、礼宾推荐和客人反馈。WhatsApp 就是新前台。',
      metaDescription: '酒店 WhatsApp AI。自动化预订、礼宾服务和客人沟通。',
      painPoints: [
        '客人期望随时获得即时回复',
        '礼宾请求在交接班之间遗失',
        '入住后的反馈收集不一致',
      ],
      useCases: [
        { title: '预订助手', description: '客人通过 WhatsApp 查询房源、预订房间并获得即时确认。' },
        { title: '礼宾服务', description: 'AI 驱动的餐厅、活动和交通推荐。' },
        { title: '客人反馈', description: '自动化的入住后调查和评价请求，提升在线口碑。' },
      ],
    },
    restaurants: {
      title: '餐饮',
      headline: '无需接电话即可接单和预订',
      description: 'WhatsApp 点餐、预订管理、菜单咨询和外卖更新——全部自动处理，员工专注美食。',
      metaDescription: '餐饮 WhatsApp AI。自动接单、管理预订并更新客户。',
      painPoints: [
        '高峰时段电话响个不停',
        '员工无法同时处理点餐和预订',
        '客户点餐前想先看菜单',
      ],
      useCases: [
        { title: '菜单助手', description: '客户浏览菜单、询问配料，即时获取饮食信息。' },
        { title: '预订', description: '自动处理日期、时间、人数和特殊要求的订座。' },
        { title: '订单更新', description: '通过 WhatsApp 主动推送实时外卖和自取状态。' },
      ],
    },
    fitness: {
      title: '健身',
      headline: '全天候留住会员并让其预约课程',
      description: '自动化课程预订、会员咨询、课表查询和锻炼建议。AI 私教从不休息。',
      metaDescription: '健身工作室 WhatsApp AI。自动化课程预订、会员咨询和会员互动。',
      painPoints: [
        '课程预订请求让前台应接不暇',
        '会员反复询问课表和价格',
        '没有提醒系统，爽约侵蚀收入',
      ],
      useCases: [
        { title: '课程预订', description: '会员在 WhatsApp 中直接查看课表、查询名额并预订课程。' },
        { title: '会员信息', description: '即时解答方案、价格、设施和会员权益问题。' },
        { title: '锻炼建议', description: '基于会员目标的 AI 健身建议和训练推荐。' },
      ],
    },
    'professional-services': {
      title: '专业服务',
      headline: '少花时间在行政上，多花时间在客户上',
      description: '自动化客户建档、预约排期、文件收集和进度更新。专业服务，由 AI 效能驱动。',
      metaDescription: '专业服务 WhatsApp AI。自动化客户建档、排期和沟通。',
      painPoints: [
        '客户建档需要大量来回沟通',
        '排期冲突浪费所有人的时间',
        '客户期待的响应速度超出您的承受',
      ],
      useCases: [
        { title: '客户建档', description: '自动化流程收集客户信息、案件详情和所需文件。' },
        { title: '预约管理', description: '通过 Google 日历安排、改期并发送客户会议提醒。' },
        { title: '进度更新', description: '用自动化的进度更新和里程碑通知让客户知情。' },
      ],
    },
    automotive: {
      title: '汽车',
      headline: '从试驾到保养提醒——全在 WhatsApp',
      description: '自动化车辆咨询、试驾预订、保养预约和保养提醒。展厅永不打烊。',
      metaDescription: '汽车 WhatsApp AI。自动化车辆咨询、试驾预订和保养提醒。',
      painPoints: [
        '数百条车辆咨询却没时间一一回复',
        '保养预约排期靠人工，易出错',
        '客户忘记保养计划，您流失收入',
      ],
      useCases: [
        { title: '车辆咨询机器人', description: '客户询问车型、规格、价格和库存——全部即时回答。' },
        { title: '试驾预订', description: '带日历集成和提醒的自动试驾排期。' },
        { title: '保养提醒', description: '基于里程和时间间隔的主动保养提醒。' },
      ],
    },
  },

  solutions: {
    marketing: {
      title: '市场营销',
      headline: '让 WhatsApp 成为您最好的营销渠道',
      description:
        '在 WhatsApp 上捕获线索、培育潜在客户并推动转化——那里才是客户真正关注的地方。自动化活动、追踪效果、扩大受众。',
      metaDescription: '把 WhatsApp 变成您最有效的营销渠道。捕获线索、自动化活动并推动转化。',
      painPoints: [
        { title: '能触达真正会关注的客户吗？', description: '邮件营销平均打开率 20%。WhatsApp 高达 98%——您的消息确实会被看到。' },
        { title: '能在线索流失前回复吗？', description: '每延迟一分钟，线索转化率下降 10%。AI 全天候即时回复。' },
        { title: '能不增人就实现每条消息个性化吗？', description: '还在给所有人发同样的通用消息？AI 让每次互动都显得贴心。' },
      ],
      features: [
        { title: 'WhatsApp 营销活动', description: '通过基于模板的活动发送定向广播消息。' },
        { title: '线索捕获流程', description: '筛选并捕获线索信息的自动化流程。' },
        { title: '知识库营销', description: '在问答中提供产品推荐和促销回答。' },
        { title: '数据分析', description: '追踪活动效果、消息量和转化率。' },
        { title: '广告归因与 ROAS', description: '连接点击聊天广告，看清哪些广告系列真正把对话变成了收入。' },
      ],
      stats: [{ label: 'WhatsApp 打开率' }, { label: '更高互动率' }, { label: '更高点击率' }],
    },
    sales: {
      title: '销售',
      headline: '在 WhatsApp 上更快成交',
      description:
        '自动筛选线索、安排预约、发送报价和方案，并完成成交——全部通过 WhatsApp。AI 销售助手全天候工作。',
      metaDescription: '在 WhatsApp 上更快成交。筛选线索、预约、生成报价并全天候转化。',
      painPoints: [
        { title: '能在下班后捕获线索吗？', description: '线索在下班后涌入，到早上就凉了。AI 随时即时跟进。' },
        { title: '能停止在不合格线索上浪费时间吗？', description: '把时间浪费在不合格线索上。逻辑流程自动筛选，让您专注热门潜在客户。' },
        { title: '能几秒内发出报价和方案吗？', description: '直接从对话中生成并发送专业报价、方案和发票。' },
      ],
      features: [
        { title: '线索筛选流程', description: '自动多步流程，在团队介入前对线索评分和筛选。' },
        { title: '预约预订', description: '基于真实可用时段的预约引擎——客户在聊天中预约、改期并支付定金。' },
        { title: '文档生成', description: '从对话数据自动生成报价、发票和方案。' },
        { title: '人工交接', description: '线索准备成交时无缝转给销售代表。' },
        { title: '目录订单', description: '展示带照片和实时库存的产品。客户在聊天中下单，库存即时自动锁定。' },
        { title: 'CRM 与广告归因', description: '每场聊天都变成联系人。看清哪些 Facebook 广告带来 WhatsApp 线索和收入——按广告系列查看 ROAS。' },
      ],
      stats: [{ label: '更短销售周期' }, { label: '更快响应' }, { label: '线索捕获' }],
    },
    support: {
      title: '客户支持',
      headline: '永不打烊的 AI 支持',
      description:
        '用对您业务了如指掌的 AI 自动解决 80% 的支持问题。复杂问题无缝升级给人工。客户随时获得即时帮助。',
      metaDescription: '永不打烊的 AI WhatsApp 支持。以即时、准确的回复自动解决 80% 的问题。',
      painPoints: [
        { title: '能不再反复回答相同的问题吗？', description: '重复问题耗费客服时间。AI 处理日常，人工处理复杂。' },
        { title: '能提供全天候支持吗？', description: '客户晚上 11 点也需要帮助。AI 客服始终在线，给出准确答案。' },
        { title: '能在几秒而非几小时内解决问题吗？', description: '客户等邮件回复要几小时。WhatsApp 支持几秒内给出答案。' },
      ],
      features: [
        { title: '知识库', description: '全面的问答系统，即时处理常见问题。' },
        { title: '智能升级', description: 'AI 知道何时该交给人工。无缝切换，不丢上下文。' },
        { title: '团队收件箱', description: '监控所有对话，需要时介入，并追踪响应指标。' },
        { title: '超级能力', description: '图像分析处理以图求助，网络搜索获取实时答案。' },
      ],
      stats: [{ label: '问题自动解决' }, { label: '更少客服负担' }, { label: '响应时间' }],
    },
  },

  testimonials: {
    'Nimrod Chuang': {
      role: '',
      company: 'BACE Engineering Pte Ltd',
      quote: '因为太忙而无暇处理，我的潜在客户再也不会被忽略了。借助 waai，我能比以往更快地获取线索并生成报价。',
    },
    'Steven Lau': {
      role: '',
      company: 'OUTSOURCE2US',
      quote: '我总是奔波在路上。回复消息既麻烦又分心。如今无论何时何地，我都能安心无忧。',
    },
    'Priya Sharma': {
      role: '客户成功负责人',
      company: 'CloudServe Solutions',
      quote: '逻辑流程太强大了。我们一天就搭建了完整的线索筛选系统。以前销售团队每条线索要花 30 分钟，现在只要 30 秒。',
    },
  },

  videoTitles: {
    'FYWVnfP-EEo': '多一双助手',
    PWM3RanP8rQ: '安心无忧',
    '--8IlCVWsNI': '错失的机会',
    '14lt0wRuMw4': '语言难题？',
  },
};

export default zh;
