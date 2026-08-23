import type { LocaleContent } from './types';

const ko: LocaleContent = {
  features: {
    'auto-responder': {
      title: 'WhatsApp 자동 응답',
      shortTitle: '자동 응답',
      headline: '고객을 기다리게 하지 마세요',
      description:
        '모든 WhatsApp 메시지에 즉각적인 AI 응답. 규칙 기반 매칭으로 일반적인 질문을 밀리초 단위로 처리하고, 나머지는 스마트 LLM 폴백이 처리합니다.',
      metaDescription: '모든 WhatsApp 메시지에 AI 기반 정밀 자동 응답. 규칙 기반 매칭과 스마트 LLM 폴백.',
      benefits: [
        { title: '1초 미만 응답', description: '퍼지 매칭이 고객이 다음 메시지를 다 입력하기도 전에 정답을 찾습니다.' },
        { title: '스마트 폴백', description: '매칭되는 규칙이 없으면 AI가 맥락에 맞는 유용한 응답으로 개입합니다 — "이해할 수 없습니다" 같은 일반적인 거절이 아닙니다.' },
        { title: '24/7 가용성', description: 'AI 에이전트는 절대 자지 않고, 절대 쉬지 않으며, 절대 기분이 나쁘지 않습니다.' },
      ],
      howItWorks: [
        { title: 'Q&A 설정', description: '일반적인 질문과 답변을 추가하세요 — CSV에서 가져오거나 직접 입력.' },
        { title: 'AI 설정', description: 'AI 제공자를 선택하고 브랜드 목소리에 맞게 시스템 프롬프트를 맞춤 설정하세요.' },
        { title: '라이브 시작', description: '들어오는 모든 WhatsApp 메시지가 자동으로 즉각적이고 정확한 응답을 받습니다.' },
      ],
      useCases: [
        { title: 'FAQ 자동화', description: '"영업시간이 어떻게 되나요?", "어디에 있나요?" 같은 질문을 손쉽게 처리.' },
        { title: '제품 문의', description: '가격, 재고, 사양 질문에 즉각 자동 응답.' },
        { title: '업무 시간 외 지원', description: '팀이 오프라인일 때도 고객에게 계속 서비스 제공.' },
      ],
    },
    'knowledge-base': {
      title: '지식 베이스',
      shortTitle: '지식 베이스',
      headline: '비즈니스 전문 지식, 항상 사용 가능',
      description:
        'AI 에이전트가 참조하는 종합 Q&A 지식 베이스를 구축하세요. CSV로 수백 개의 항목을 가져오고, 우선순위로 정리하고, 퍼지 매칭이 매번 최적의 답을 찾게 하세요.',
      metaDescription: 'CSV 가져오기, 퍼지 매칭, 우선순위 제어로 스마트 Q&A 지식 베이스를 구축하세요. 전문 지식을 항상 사용 가능.',
      benefits: [
        { title: '대량 가져오기', description: 'CSV 또는 JSON으로 수백 개의 Q&A 쌍을 업로드하세요. 지식 베이스가 몇 주가 아닌 몇 분 만에 커집니다.' },
        { title: '스마트 매칭', description: '퍼지 매칭이 오타, 변형, 부분 매칭을 처리합니다 — 고객이 정확한 단어를 쓸 필요가 없습니다.' },
        { title: '우선순위 시스템', description: '여러 매칭이 발견되면 어느 답변을 우선할지 제어하세요.' },
      ],
      howItWorks: [
        { title: '지식 추가', description: '개별 Q&A 쌍을 입력하거나 스프레드시트에서 대량 가져오기.' },
        { title: '정리 및 우선순위 지정', description: '각 항목에 카테고리, 우선순위, 트리거 문구를 설정하세요.' },
        { title: '테스트 및 배포', description: '내장된 테스트 채팅으로 답변을 확인한 후 자신 있게 라이브로 전환.' },
      ],
      useCases: [
        { title: '제품 카탈로그', description: '고객이 어떤 제품이든 물어보고 즉각 정확한 세부 정보를 받으세요.' },
        { title: '정책 FAQ', description: '배송, 반품, 보증 — 사람의 개입 없이 정책 질문에 답변.' },
        { title: '온보딩 가이드', description: '신규 고객이 설정 및 시작 질문에 즉각 답을 받습니다.' },
      ],
    },
    'logic-flows': {
      title: '로직 플로우',
      shortTitle: '로직 플로우',
      headline: '전환을 이끄는 대화 구축',
      description:
        '분기 로직, 조건, 액션이 있는 다단계 대화 플로우를 만드세요. 예약, 자격 확인, 주문까지 — 코드 한 줄 없이 고객을 안내합니다.',
      metaDescription: '분기 로직, 조건, 변수로 다단계 WhatsApp 대화를 구축하세요. 코드 불필요.',
      benefits: [
        { title: '비주얼 플로우 빌더', description: '직관적인 단계별 편집기로 복잡한 대화를 설계. 코딩 불필요.' },
        { title: '스마트 분기', description: '고객 응답, 시간대 또는 모든 변수에 따라 고객을 다르게 라우팅.' },
        { title: '변수 시스템', description: '대화 전반에 걸쳐 정보를 캡처하고 재사용 — 이름, 선택, 계산.' },
      ],
      howItWorks: [
        { title: '플로우 설계', description: '메시지, 질문, 조건 단계를 추가해 대화를 구축하세요.' },
        { title: '트리거 설정', description: '플로우를 자동으로 시작하는 키워드나 문구를 정의하세요.' },
        { title: '테스트 및 활성화', description: '테스트 모드에서 플로우를 진행해 본 후 실제 대화를 처리하도록 배포.' },
      ],
      useCases: [
        { title: '리드 자격 확인', description: '자격 확인 질문을 하고 유망 리드를 영업팀에 자동으로 전달.' },
        { title: '약속 예약', description: '가능한 시간대를 안내하고 Google Calendar로 예약을 확정.' },
        { title: '주문 처리', description: '고객을 제품 선택, 맞춤 설정, 주문 완료로 안내.' },
      ],
    },
    'ai-chatbot': {
      title: 'AI 챗봇',
      shortTitle: 'AI 챗봇',
      headline: '브랜드, 어떤 AI로든 구동',
      description:
        'OpenAI, Anthropic, z.ai 중에서 선택하거나 자체 모델을 가져오세요. 비즈니스에 완벽하게 맞게 성격, 톤, 전문성을 설정하세요. 다중 제공자 지원으로 종속되지 않습니다.',
      metaDescription: 'WhatsApp용 다중 제공자 AI 챗봇. OpenAI, Anthropic, z.ai 또는 자체 모델 선택. 나만의 브랜드, 나만의 AI.',
      benefits: [
        { title: '다중 제공자', description: '설정을 변경하지 않고 OpenAI, Anthropic, z.ai, llama.cpp, OpenRouter 사이를 전환.' },
        { title: '브랜드 목소리', description: '시스템 프롬프트를 맞춤 설정해 AI가 브랜드의 톤과 스타일로 말하게 하세요.' },
        { title: '맥락 인식', description: 'AI가 대화 기록을 이해하고 정확한 답변을 위해 지식 베이스를 활용.' },
      ],
      howItWorks: [
        { title: '제공자 선택', description: 'OpenAI, Anthropic, z.ai 또는 OpenAI 호환 엔드포인트를 선택.' },
        { title: '프롬프트 맞춤', description: '브랜드 목소리와 전문성을 담은 시스템 프롬프트를 작성.' },
        { title: '모델 설정', description: '요구와 예산에 맞는 모델 선택 — 빠르고 저렴한 것부터 강력하고 정교한 것까지.' },
      ],
      useCases: [
        { title: '고객 지원', description: '제품과 정책을 이해하는 AI로 복잡한 지원 문의 처리.' },
        { title: '영업 어시스턴트', description: '제품 추천, 기술 질문 답변, 구매 결정 안내.' },
        { title: '컨설팅 봇', description: '전문성에 기반한 초기 상담 및 평가 제공.' },
      ],
    },
    booking: {
      title: 'WhatsApp 예약 시스템',
      shortTitle: '예약',
      headline: '스스로 채워지는 예약',
      description:
        'WhatsApp 안에 구축된 완결성 있는 예약 엔진. 고객은 실제 가능 시간에 맞춰 채팅에서 예약, 일정 변경, 취소를 하고 — 예약금, 확인, 알림은 자동으로 발송됩니다.',
      metaDescription: '실제 가능 시간, 메시지 한 번으로 끝내는 AI 예약, 예약금, 자동 알림, QR 체크인을 갖춘 WhatsApp 예약 시스템. 이중 예약이 없습니다.',
      benefits: [
        { title: '이중 예약 제로', description: '제시되는 모든 시간대는 진짜 가능 시간입니다: 빈 시간은 직원 근무 시간, 공휴일, 기존 예약, 팀의 Google Calendar 바쁜 일정에서 실시간으로 계산됩니다.' },
        { title: '메시지 두 번으로 예약 완료', description: '스마트 예약 AI가 "화요일 4시쯤 Mary와 페이셜"을 이해합니다 — 서비스와 담당자를 매칭하고, 가장 가까운 가능 시간을 찾아, 고객이 예약하겠다고 말하는 순간 확정합니다.' },
        { title: '예약금, 알림 및 QR 체크인', description: '채팅에서 예약금을 요청하고, 모든 약속 전에 자동 알림을 보내고, QR 스캔으로 고객을 체크인하세요 — 노쇼는 숨을 곳이 없습니다.' },
      ],
      howItWorks: [
        { title: '서비스 및 직원 설정', description: '사진, 소요 시간, 가격이 포함된 서비스를 추가하세요. 지점, 직원, 근무 시간을 정의하거나 — 기본 시간으로 혼자 운영해도 됩니다. 해당 국가의 공휴일을 한 번의 클릭으로 가져오세요.' },
        { title: '채팅에서 고객이 직접 예약', description: '완성된 예약 플로우를 가져오거나 스마트 예약 AI를 켜세요. 고객은 실제 가능 시간만 보고, 언제든 직접 일정을 변경하거나 취소할 수 있습니다.' },
        { title: '오토파일럿으로 운영', description: '확인, 알림, 브랜드가 적힌 PDF 영수증이 자동으로 발송됩니다. 예약 분석이 수익, 노쇼율, 가장 바쁜 시간대를 보여줍니다.' },
      ],
      useCases: [
        { title: '살롱 & 스파', description: '고객이 하나의 채팅에서 서비스, 담당자, 시간을 선택합니다 — 예약금이 피크 시간대를 지켜줍니다.' },
        { title: '병원 & 의원', description: '환자가 직접 예약하고 알림을 받습니다. 프론트 데스크는 전화를 받는 대신 캘린더가 채워지는 것을 지켜봅니다.' },
        { title: '다중 지점 비즈니스', description: '지점별 근무 시간, 직원별 캘린더, 공휴일 가져오기로 여러 위치에서 이중 예약이 발생하지 않습니다.' },
      ],
    },
    catalog: {
      title: '제품 카탈로그 및 주문',
      shortTitle: '카탈로그',
      headline: '채팅 안에 있는 나의 상점',
      description:
        'WhatsApp에서 바로 사진과 가격으로 제품을 보여주세요. 고객은 둘러보고, 옵션을 고르고, 주문합니다 — 실시간 재고 집계가 없는 물건을 팔지 않도록 막아줍니다.',
      metaDescription: '제품 카탈로그로 WhatsApp 안에서 판매하세요: 사진, 옵션, 초과 판매되지 않는 실시간 재고, 저재고 알림, 신규부터 완료까지의 주문 파이프라인.',
      benefits: [
        { title: '채팅에서 둘러보고 주문', description: '제품이 사진, 설명, 가격과 함께 표시됩니다. 고객은 사이즈나 색상 옵션을 고르고 WhatsApp을 떠나지 않고 주문합니다.' },
        { title: '초과 판매되지 않는 재고', description: '주문이 접수되는 순간 재고가 해당 고객에게 예약됩니다. 저재고 알림이 품절 전에 이메일과 푸시로 도착합니다.' },
        { title: '기본 제공되는 주문 파이프라인', description: '주문이 신규 → 확인됨 → 완료로 흘러가는 것이 한눈에 보입니다. 취소는 재고가 자동으로 복구되고, 모든 재고 변동은 검토 가능한 원장에 기록됩니다.' },
      ],
      howItWorks: [
        { title: '제품 추가', description: '사진, 가격, 카테고리, 자체 재고 수준이 있는 옵션. 제품명은 고객의 언어로 자동 번역됩니다.' },
        { title: '주문 플로우 넣기', description: '완성된 제품 주문 템플릿을 가져오세요 — 둘러보기, 옵션 선택, 주문 — 또는 카탈로그 플로우 단계로 직접 만드세요.' },
        { title: '확인 및 이행', description: '주문은 재고가 이미 예약된 상태로 도착합니다. 클릭 한 번으로 확인하고 이행하세요. 고객은 언제든 채팅에서 "내 주문"을 확인할 수 있습니다.' },
      ],
      useCases: [
        { title: 'F&B 사전 주문', description: '단골이 이미 쓰고 있는 채팅에서 내일 점심을 주문합니다 — 일일 스페셜은 실시간 재고와 함께.' },
        { title: '옵션이 있는 리테일', description: '사이즈, 색상, SKU마다 자체 재고가 있어 "라지 있나요?"라는 질문에 정확한 답을 합니다.' },
        { title: '진짜 긴급감', description: '"3개 남음"은 실제 재고 수에서 나옵니다 — 고객은 행동하고, 초과 판매는 없습니다.' },
      ],
    },
    crm: {
      title: 'CRM 및 광고 어트리뷰션',
      shortTitle: 'CRM',
      headline: '어떤 채팅이 수익이 되는지 파악',
      description:
        '메시지를 보낸 모든 사람이 연락처가 됩니다 — 태그가 붙고, 목록에 정리되며, 그들의 예약과 주문과 연결됩니다. Facebook 광고를 연결해 어떤 캠페인이 WhatsApp 리드와 수익을 가져오는지 확인하고, 후속 조치를 자동화하세요. 연락처는 무료 체험을 포함한 모든 요금제에 포함됩니다.',
      metaDescription: 'WhatsApp CRM: 모든 채팅에서 자동 캡처되는 연락처, ROAS 및 리드당 비용이 포함된 Facebook 광고 어트리뷰션, Zapier 스타일 자동화.',
      benefits: [
        { title: '스스로 채워지는 CRM', description: '들어오는 모든 채팅이 대화 기록, 예약, 주문이 첨부된 연락처를 자동 생성합니다. 태그, 목록, 맞춤 필드로 체계적으로 관리합니다.' },
        { title: '광고 어트리뷰션 & ROAS', description: 'Click-to-WhatsApp 광고 클릭이 각 연락처의 첫 메시지에 캡처됩니다. 캠페인별로 광고비 대비 어트리뷰션된 WhatsApp 수익, ROAS, 리드당 비용을 확인하세요.' },
        { title: '후속 조치를 자동화', description: 'Zapier 스타일 규칙: 예약이 확인되거나 주문이 접수되면 waai가 팀에 알리고, 연락처에 태그를 달고, Facebook에 전환을 보고하거나, webhook을 호출할 수 있습니다.' },
      ],
      howItWorks: [
        { title: '채팅이 연락처로', description: '모든 새 전화번호가 자동으로 캡처되며, 전체 대화·예약·주문 기록이 하나의 프로필에 담깁니다.' },
        { title: '광고 연결', description: '1회성 Meta 연결이 리드와 구매를 Facebook에 다시 보고해, 캠페인이 실제 WhatsApp 수익으로 최적화됩니다.' },
        { title: '후속 조치 자동화', description: '트리거와 액션을 선택하세요 — waai가 팀에 알리고, 태그와 목록을 업데이트하고, webhook에 자동으로 게시합니다.' },
      ],
      useCases: [
        { title: 'Click-to-WhatsApp 광고', description: '어떤 캠페인이 대화를 시작하고 어떤 대화가 전환되는지 확인하세요 — 그리고 ROAS가 있는 곳에 예산을 배치하세요.' },
        { title: '팀 알림', description: '예약 확인 또는 큰 주문 접수? 적절한 담당자가 즉시 이메일과 모바일 푸시를 받습니다.' },
        { title: '더 스마트한 브로드캐스트', description: '행동별로 연락처에 태그를 달고 그룹화한 뒤, WhatsApp 캠페인을 정밀하게 타겟팅하세요.' },
      ],
    },
    'team-inbox': {
      title: '팀 인박스',
      shortTitle: '팀 인박스',
      headline: 'AI는 루틴을. 나머지는 귀하가.',
      description:
        '모든 WhatsApp 대화를 실시간으로 모니터링하세요. AI가 부족할 때 사람의 답변으로 개입. 고객이 눈치채지 못하게 AI와 상담원 사이를 매끄럽게 인계.',
      metaDescription: 'WhatsApp 대화를 실시간으로 모니터링. AI가 부족할 때 사람의 답변으로 개입. 매끄러운 인계.',
      benefits: [
        { title: '실시간 모니터링', description: '자동 새로고침 메시지 목록으로 대화가 펼쳐지는 모습을 실시간으로 시청.' },
        { title: '상담원 연결', description: '수동 답변으로 어떤 대화든 인계. 귀하가 끝낼 때까지 AI는 물러납니다.' },
        { title: '전체 기록', description: '모든 메시지가 기록 — 언제든 검색, 필터, 검토 가능.' },
      ],
      howItWorks: [
        { title: 'AI가 처리', description: '들어오는 메시지가 지식 베이스와 플로우에 기반해 즉각적인 AI 응답을 받습니다.' },
        { title: '귀하가 모니터링', description: '대시보드에서 모든 대화를 시청. 실시간 업데이트, 새로고침 불필요.' },
        { title: '필요시 개입', description: '수동 답변을 입력해 인계. 귀하가 끝내면 AI가 일시 정지 후 재개.' },
      ],
      useCases: [
        { title: '에스컬레이션 관리', description: '복잡한 문제는 사람에게 에스컬레이션, AI는 쉬운 것을 처리.' },
        { title: 'VIP 응대', description: '고가치 고객 대화에 개입해 개인적인 감각 제공.' },
        { title: '품질 보증', description: 'AI 대화를 검토하고 응답을 수정해 시간이 지나며 정확도를 개선.' },
      ],
    },
    campaigns: {
      title: 'WhatsApp 캠페인',
      shortTitle: '캠페인',
      headline: '고객이 실제로 읽는 곳에서 도달',
      description:
        'WhatsApp 메시지는 98%의 열람률을 기록합니다. 타겟팅된 캠페인, 프로모션, 업데이트를 고객의 휴대전화로 직접 보내세요. WhatsApp 정책을 준수하는 템플릿 기반 메시징.',
      metaDescription: '98% 열람률의 WhatsApp 캠페인 전송. 템플릿 기반 메시징, 타겟팅 전달, 정책 준수.',
      benefits: [
        { title: '98% 열람률', description: 'WhatsApp 메시지는 열람됩니다. 이메일은 그런 관심도와 경쟁할 수 없습니다.' },
        { title: '템플릿 기반', description: '사전 승인된 메시지 템플릿이 캠페인의 WhatsApp 정책 준수를 보장.' },
        { title: '타겟팅 전달', description: '잠재고객을 세분화하고 적절한 사람에게 적절한 메시지 전송.' },
      ],
      howItWorks: [
        { title: '템플릿 생성', description: '개인화를 위한 동적 변수로 메시지 템플릿 설계.' },
        { title: '승인 받기', description: '템플릿을 WhatsApp에 제출해 승인 — 일반적으로 24시간 이내.' },
        { title: '캠페인 전송', description: '선택한 연락처에 한 번의 클릭으로 메시지 브로드캐스트.' },
      ],
      useCases: [
        { title: '플래시 세일', description: '고객이 실제로 보고 행동하는 시간 민감형 프로모션 전송.' },
        { title: '약속 알림', description: 'WhatsApp 자동 약속 알림으로 노쇼 감소.' },
        { title: '제품 출시', description: '신제품 또는 서비스를 고객 기반에 직접 알림.' },
      ],
    },
    analytics: {
      title: '분석 대시보드',
      shortTitle: '분석',
      headline: '잘 되는 것 파악. 안 되는 것 수정.',
      description:
        '메시지 볼륨, 응답 소스, 트리거 인기도, 대화 패턴을 추적하세요. AI 에이전트의 성과와 개선점을 정확히 파악.',
      metaDescription: 'WhatsApp 메시지 볼륨, AI 성능, 인기 주제, 대화 패턴 추적. 데이터 기반 최적화.',
      benefits: [
        { title: '메시지 인사이트', description: '시간에 따른 수신/발신 볼륨, 응답 시간, 대화 트렌드 추적.' },
        { title: '소스 분석', description: '규칙, AI, 플로우, 상담원 사이의 응답 분할 확인.' },
        { title: '인기 주제', description: '가장 많이 묻는 질문과 가장 많이 쓰는 플로우를 발견해 설정 최적화.' },
      ],
      howItWorks: [
        { title: '메시지 유입', description: '모든 WhatsApp 상호작용이 자동으로 추적되고 분류.' },
        { title: '대시보드 업데이트', description: '차트와 지표가 최신 데이터로 매일 새로고침.' },
        { title: '인사이트 활용', description: '데이터로 누락된 Q&A 추가, 플로우 개선, AI 프롬프트 최적화.' },
      ],
      useCases: [
        { title: '성과 추적', description: 'AI와 상담원이 처리하는 대화 비율 모니터링.' },
        { title: '갭 분석', description: 'AI가 답할 수 없는 질문을 찾아 지식 베이스에 추가.' },
        { title: 'ROI 측정', description: '메시지 볼륨을 추적해 시간과 비용 절감을 정량화.' },
      ],
    },
    'document-generation': {
      title: '문서 생성',
      shortTitle: '문서 생성',
      headline: '대화에서 문서까지 몇 초 만에',
      description:
        '채팅 데이터에서 Excel 스프레드시트, Word 문서, PDF, Google Docs, Google Sheets를 직접 생성. 청구서, 보고서, 견적서 — 자동으로 생성되고 전송.',
      metaDescription: 'WhatsApp 대화에서 Excel, Word, PDF, Google Docs, Sheets 생성. 청구서, 견적서, 보고서를 자동으로.',
      benefits: [
        { title: '다중 포맷', description: 'Excel, Word, PDF 또는 네이티브 Google Docs, Sheets 생성 — 워크플로에 필요한 무엇이든.' },
        { title: '데이터 기반', description: '대화 변수와 맥락을 사용해 실제 고객 데이터로 문서 작성.' },
        { title: '자동 전달', description: '문서가 자동으로 생성되어 WhatsApp으로 고객에게 전송.' },
      ],
      howItWorks: [
        { title: '문서 정의', description: '플로우의 생성 단계에서 열, 데이터 소스, 포맷을 설정.' },
        { title: '데이터 수집', description: '로직 플로우가 대화를 통해 정보를 수집.' },
        { title: '생성 및 전송', description: '문서가 생성되어 고객에게 전달 — 수동 단계 없음.' },
      ],
      useCases: [
        { title: '청구서 생성', description: '주문 세부 정보를 수집해 전문 청구서를 자동 생성.' },
        { title: '견적서 빌더', description: '요구사항을 안내하고 포맷된 견적서 문서를 작성.' },
        { title: '보고서 작성', description: '채팅으로 데이터 포인트를 수집해 구조화된 보고서로 편집.' },
      ],
    },
    'super-powers': {
      title: '슈퍼 파워',
      shortTitle: '슈퍼 파워',
      headline: 'AI 에이전트에게 슈퍼파워가',
      description:
        '비전 분석, 웹 검색, 웹 읽기, GitHub 문서 접근 — AI 에이전트가 대화 중에 사용할 수 있는 역량으로 모두 제공.',
      metaDescription: 'WhatsApp AI 에이전트를 위한 비전 분석, 웹 검색, 웹 읽기, GitHub 문서 접근. 비즈니스를 위한 슈퍼파워.',
      benefits: [
        { title: '비전 분석', description: '고객이 사진을 보내면 AI가 이해 — 제품, 문서, 스크린샷, 무엇이든.' },
        { title: '웹 검색', description: 'AI가 웹을 검색해 정확한 답변을 위한 실시간 정보를 얻을 수 있습니다.' },
        { title: '웹 리더', description: '고객이 공유한 모든 URL의 콘텐츠를 추출하고 요약.' },
      ],
      howItWorks: [
        { title: '슈퍼 파워 활성화', description: '설정에서 비전, 웹 검색, 웹 리더 또는 Zread를 활성화.' },
        { title: '플로우 구축', description: '이미지 분석을 위한 비전 단계, 실시간 데이터를 위한 웹 검색 단계를 추가.' },
        { title: '답변 제공', description: 'AI가 대화 중 이 역량을 사용해 더 나은 답변을 제공.' },
      ],
      useCases: [
        { title: '제품 식별', description: '고객이 제품 사진을 보내면 즉각 식별과 가격 제공.' },
        { title: '문서 처리', description: '청구서, 영수증, 계약서 사진에서 텍스트 추출.' },
        { title: '실시간 조회', description: '현재 가격, 재고, 뉴스를 웹에서 검색해 질문에 답변.' },
      ],
    },
  },

  industries: {
    ecommerce: {
      title: '이커머스',
      headline: 'WhatsApp을 최고의 영업 채널로',
      description: '제품 문의, 주문 업데이트, 반품 요청, 장바구니 포기 복구를 자동화. AI 에이전트가 WhatsApp에서 전체 고객 여정을 처리.',
      metaDescription: '이커머스를 위한 WhatsApp AI. 제품 문의, 주문 추적, 반품, 고객 지원 자동화.',
      painPoints: [
        '빠른 답변을 얻지 못하면 고객이 장바구니를 떠납니다',
        '지원팀이 "내 주문은 어디 있나요" 문의로 압도',
        '고객이 선호하는 채널로 도달할 방법이 없습니다',
      ],
      useCases: [
        { title: '제품 카탈로그 어시스턴트', description: '고객이 필요한 것을 설명하면 AI가 가격과 재고로 적절한 제품을 추천.' },
        { title: '주문 추적', description: '고객이 "내 주문은 어디 있나요?" 물을 때 즉각 주문 상태 업데이트.' },
        { title: '반품 처리', description: '자동화된 플로우와 문서 생성으로 반품 절차를 안내.' },
      ],
    },
    healthcare: {
      title: '헬스케어',
      headline: '더 나은 환자 커뮤니케이션, 더 적은 행정 업무',
      description: '약속 예약, 처방전 문의, 환자 후속 관리를 자동화. 안전하고 암호화된 커뮤니케이션으로 HIPAA를 고려한 설계.',
      metaDescription: '헬스케어를 위한 WhatsApp AI. 약속 예약, 환자 후속, 처방전 문의 자동화.',
      painPoints: [
        '전화 회선이 약속 요청으로 가득',
        '직원이 반복적인 예약 통화에 시간 소모',
        '환자가 영업시간 외에 연락하기 어렵습니다',
      ],
      useCases: [
        { title: '약속 예약', description: '환자가 Google Calendar 연동으로 WhatsApp으로 예약, 일정 변경, 취소.' },
        { title: '처방전 문의', description: '처방전 리필, 복용량 지시, 약국 시간에 대한 자동 응답.' },
        { title: '환자 분류', description: '로직 플로우가 증상 확인을 통해 환자를 안내하고 적절한 부서로 연결.' },
      ],
    },
    education: {
      title: '교육',
      headline: '모든 학생과 학부모 질문에 즉각 답변',
      description: '입학 문의, 강좌 정보, 일정 조회, 학비 납부 알림을 자동화. AI가 수천 명의 학생을 거뜬히 처리.',
      metaDescription: '교육을 위한 WhatsApp AI. 입학 문의, 강좌 정보, 학생 커뮤니케이션 자동화.',
      painPoints: [
        '직원이 반복적인 입학 질문으로 압도',
        '성수기에 학부모가 입학처에 연락 불가',
        '학생이 근무 시간 외에 답이 필요합니다',
      ],
      useCases: [
        { title: '입학 어시스턴트', description: '프로그램 세부 정보, 입학 요건, 지원 상태 문의에 자동 답변.' },
        { title: '강좌 정보', description: '학생이 일정, 강의계획서, 강사 정보를 즉시 확인.' },
        { title: '학비 알림', description: 'WhatsApp으로 자동 납부 알림과 할부 계획 정보 제공.' },
      ],
    },
    'real-estate': {
      title: '부동산',
      headline: '자동으로 리드 자격 확인과 투어 예약',
      description: '부동산 문의를 캡처하고, 구매자를 자격 확인하고, 투어를 예약하고, 부동산 문서를 전송 — 모두 WhatsApp으로 자동화.',
      metaDescription: '부동산을 위한 WhatsApp AI. 리드 자격 확인, 투어 예약, 부동산 문서를 자동으로 전송.',
      painPoints: [
        '수백 건의 부동산 문의지만 자격 갖춘 리드는 소수',
        '투어 예약이 끝없는 연락의 악몽',
        '빠르게 답하지 못하면 고객이 떠납니다',
      ],
      useCases: [
        { title: '부동산 매칭', description: '구매자가 원하는 부동산을 설명하면 AI가 사진과 세부 정보로 매칭 매물을 추천.' },
        { title: '투어 예약자', description: '알림과 확인으로 부동산 투어를 위한 자동 캘린더 예약.' },
        { title: '문서 전달', description: '부동산 브로셔, 평면도, 가격표를 PDF 문서로 자동 생성 및 전송.' },
      ],
    },
    hospitality: {
      title: '호스피탈리티',
      headline: '게스트가 도착하기 전부터 감동',
      description: '예약 확인, 룸 서비스 요청, 컨시어지 추천, 게스트 피드백을 자동화. WhatsApp이 새로운 프론트 데스크.',
      metaDescription: '호스피탈리티를 위한 WhatsApp AI. 예약, 컨시어지 서비스, 게스트 커뮤니케이션 자동화.',
      painPoints: [
        '게스트는 언제든 즉각 응답을 기대',
        '컨시어지 요청이 교대조 사이에 유실',
        '숙박 후 피드백 수집이 일관되지 않음',
      ],
      useCases: [
        { title: '예약 어시스턴트', description: '게스트가 WhatsApp으로 가용 여부 확인, 객실 예약, 즉각 확인 획득.' },
        { title: '컨시어지 서비스', description: '레스토랑, 액티비티, 교통수단에 대한 AI 기반 추천.' },
        { title: '게스트 피드백', description: '자동 숙박 후 설문과 리뷰 요청으로 온라인 평판 강화.' },
      ],
    },
    restaurants: {
      title: '레스토랑',
      headline: '전화기를 들지 않고 주문과 예약 접수',
      description: 'WhatsApp 주문, 예약 관리, 메뉴 문의, 배달 업데이트 — 모두 자동으로 처리되는 동안 직원은 음식에 집중.',
      metaDescription: '레스토랑을 위한 WhatsApp AI. 주문 접수, 예약 관리, 고객 업데이트 자동화.',
      painPoints: [
        '피크 시간에 전화벨이 멈추지 않습니다',
        '직원이 주문과 예약을 동시에 처리 불가',
        '고객이 주문 전 메뉴를 보길 원합니다',
      ],
      useCases: [
        { title: '메뉴 어시스턴트', description: '고객이 메뉴를 탐색하고 재료를 물어보며 영양 정보를 즉시 획득.' },
        { title: '테이블 예약', description: '날짜, 시간, 인원수, 특별 요청으로 자동 테이블 예약.' },
        { title: '주문 업데이트', description: '실시간 배달 및 픽업 상태 업데이트를 WhatsApp으로 사전 전송.' },
      ],
    },
    fitness: {
      title: '피트니스',
      headline: '회원 참여 유지와 연중무휴 클래스 예약',
      description: '클래스 예약, 멤버십 문의, 일정 조회, 운동 팁을 자동화. AI 퍼스널 트레이너는 절대 쉬지 않습니다.',
      metaDescription: '피트니스 스튜디오를 위한 WhatsApp AI. 클래스 예약, 멤버십 문의, 회원 참여 자동화.',
      painPoints: [
        '클래스 예약 요청이 데스크 직원을 압도',
        '회원이 일정과 가격에 대해 같은 질문',
        '알림 시스템 없이 노쇼가 수익 갉아먹음',
      ],
      useCases: [
        { title: '클래스 예약', description: '회원이 WhatsApp에서 일정을 보고, 가용 여부를 확인하며, 클래스를 직접 예약.' },
        { title: '멤버십 정보', description: '요금제, 가격, 시설, 멤버십 혜택에 대한 즉각 답변.' },
        { title: '운동 팁', description: '회원 목표에 기반한 AI 기반 피트니스 조언과 운동 제안.' },
      ],
    },
    'professional-services': {
      title: '전문 서비스',
      headline: '행정에 적게, 고객에게 더 많이',
      description: '고객 인테이크, 약속 예약, 문서 수집, 진행 업데이트를 자동화. AI 효율성으로 구동되는 전문 서비스.',
      metaDescription: '전문 서비스를 위한 WhatsApp AI. 고객 인테이크, 예약, 커뮤니케이션 자동화.',
      painPoints: [
        '고객 인테이크에 너무 많은 연락이 오고 갑니다',
        '일정 충돌이 모두의 시간을 낭비',
        '고객이 제공할 수 있는 것보다 더 빠른 커뮤니케이션을 기대',
      ],
      useCases: [
        { title: '고객 인테이크', description: '자동 플로우가 고객 정보, 사례 세부 정보, 필요 문서를 수집.' },
        { title: '약속 관리', description: 'Google Calendar로 고객 미팅 예약, 일정 변경, 알림 전송.' },
        { title: '상태 업데이트', description: '자동 진행 업데이트와 마일스톤 알림으로 고객에게 정보 제공.' },
      ],
    },
    automotive: {
      title: '자동차',
      headline: '시승부터 서비스 알림까지 — 모두 WhatsApp에서',
      description: '차량 문의, 시승 예약, 서비스 약속, 정비 알림을 자동화. 쇼룸이 닫지 않습니다.',
      metaDescription: '자동차를 위한 WhatsApp AI. 차량 문의, 시승 예약, 서비스 알림 자동화.',
      painPoints: [
        '수백 건의 차량 문의지만 모두 응답할 시간 없음',
        '서비스 약속 예약이 수동적이고 오류 발생 쉬움',
        '고객이 정비 일정을 잊어 수익 손실',
      ],
      useCases: [
        { title: '차량 문의 봇', description: '고객이 모델, 사양, 가격, 재고를 물어보면 모두 즉각 답변.' },
        { title: '시승 예약', description: '캘린더 연동과 알림으로 자동 시승 예약.' },
        { title: '서비스 알림', description: '주행거리와 시간 간격에 기반한 사전 정비 알림.' },
      ],
    },
  },

  solutions: {
    marketing: {
      title: '마케팅용',
      headline: 'WhatsApp을 최고의 마케팅 채널로',
      description:
        'WhatsApp에서 리드를 캡처하고, 잠재 고객을 육성하고, 전환을 유도하세요 — 고객이 실제로 주의를 기울이는 곳에서. 캠페인 자동화, 성과 추적, 잠재고객 확장.',
      metaDescription: 'WhatsApp을 가장 효과적인 마케팅 채널로. 리드 캡처, 캠페인 자동화, 전환 유도.',
      painPoints: [
        { title: '실제로 주의를 기울이는 고객에게 도달할 수 있나요?', description: '이메일 마케팅은 평균 20% 열람률. WhatsApp은 98% — 메시지가 실제로 보입니다.' },
        { title: '잠재 고객이 떠나기 전에 응답할 수 있나요?', description: '지연 1분마다 리드 전환이 10% 감소. AI가 24/7 즉각 응답.' },
        { title: '더 많은 사람을 고용하지 않고 모든 메시지를 개인화할 수 있나요?', description: '모두에게 같은 일반적 메시지를 보내시나요? AI가 모든 상호작용을 개인적으로 느끼게 합니다.' },
      ],
      features: [
        { title: 'WhatsApp 캠페인', description: '템플릿 기반 캠페인으로 타겟팅된 브로드캐스트 메시지 전송.' },
        { title: '리드 캡처 플로우', description: '리드 정보를 자격 확인하고 캡처하는 자동 플로우.' },
        { title: '지식 베이스 마케팅', description: 'Q&A에서 제품 추천과 프로모션 답변.' },
        { title: '분석', description: '캠페인 성과, 메시지 볼륨, 전환율 추적.' },
        { title: '광고 어트리뷰션 & ROAS', description: 'Click-to-WhatsApp 광고를 연결하고 어떤 캠페인이 채팅을 수익으로 바꾸는지 정확히 확인하세요.' },
      ],
      stats: [{ label: 'WhatsApp 열람률' }, { label: '더 높은 참여도' }, { label: '더 나은 클릭률' }],
    },
    sales: {
      title: '영업용',
      headline: 'WhatsApp에서 더 빠르게 거래 성사',
      description:
        '자동으로 리드 자격 확인, 약속 예약, 견적 및 제안서 전송, 거래 성사 — 모두 WhatsApp으로. AI 영업 에이전트가 연중무휴로 작동.',
      metaDescription: 'WhatsApp에서 더 빠르게 거래 성사. 리드 자격 확인, 약속 예약, 견적 생성, 연중무휴 전환.',
      painPoints: [
        { title: '업무 시간 외에 리드를 캡처할 수 있나요?', description: '리드가 업무 시간 후에 들어와 아침이면 식어버립니다. AI가 언제든 즉각 참여.' },
        { title: '자격 미달 리드에 시간 낭비를 멈출 수 있나요?', description: '자격 미달 리드에 시간 낭비. 로직 플로우가 자동 자격 확인으로 유망 후보에 집중.' },
        { title: '몇 초 만에 견적과 제안서를 보낼 수 있나요?', description: '대화에서 직접 전문적인 견적, 제안서, 청구서를 생성하고 전송.' },
      ],
      features: [
        { title: '리드 자격 확인 플로우', description: '팀이 개입하기 전에 리드를 점수 매기고 자격을 확인하는 자동 다단계 플로우.' },
        { title: '약속 예약', description: '실제 가능 시간 기반의 예약 엔진 — 고객이 채팅에서 직접 예약하고, 일정을 변경하며, 예약금을 입금합니다.' },
        { title: '문서 생성', description: '대화 데이터에서 견적, 청구서, 제안서를 자동 생성.' },
        { title: '상담원 연결', description: '리드가 거래 성사 준비가 되면 영업 담당자에게 매끄럽게 전달.' },
        { title: '카탈로그 주문', description: '사진과 실시간 재고로 제품을 보여주세요. 고객이 채팅에서 주문하면 재고가 즉시 자동 예약됩니다.' },
        { title: 'CRM 및 광고 어트리뷰션', description: '모든 채팅이 연락처가 됩니다. 어떤 Facebook 광고가 WhatsApp 리드와 수익을 가져오는지 확인 — 캠페인별 ROAS와 함께.' },
      ],
      stats: [{ label: '더 짧은 영업 주기' }, { label: '더 빠른 응답' }, { label: '리드 캡처' }],
    },
    support: {
      title: '고객 지원용',
      headline: '절대 멈추지 않는 AI 기반 지원',
      description:
        '비즈니스를 완벽히 아는 AI로 지원 문의의 80%를 자동 해결. 복잡한 문제를 사람에게 매끄럽게 에스컬레이션. 고객은 언제든 즉각 도움을 받습니다.',
      metaDescription: '절대 멈추지 않는 AI 기반 WhatsApp 지원. 즉각적이고 정확한 응답으로 문의의 80%를 자동 해결.',
      painPoints: [
        { title: '같은 질문에 반복적으로 답하는 것을 멈출 수 있나요?', description: '반복 질문이 상담원 시간을 잡아먹습니다. AI가 루틴을 처리해 사람이 복잡한 것을 처리.' },
        { title: '연중무휴 지원을 제공할 수 있나요?', description: '고객이 밤 11시에 도움이 필요합니다. AI 에이전트는 항상 정확한 답변과 함께 사용 가능.' },
        { title: '시간이 아닌 몇 초 만에 문제를 해결할 수 있나요?', description: '고객이 이메일 답변을 기다리는 데 시간. WhatsApp 지원은 몇 초 만에 답변.' },
      ],
      features: [
        { title: '지식 베이스', description: '일반 질문을 즉시 처리하는 종합 Q&A 시스템.' },
        { title: '스마트 에스컬레이션', description: 'AI가 사람에게 인계할 시기를 압니다. 매끄러운 전환, 맥락 유실 없음.' },
        { title: '팀 인박스', description: '모든 대화를 모니터링하고, 필요시 개입하며, 응답 지표를 추적.' },
        { title: '슈퍼 파워', description: '사진 기반 지원을 위한 비전 분석, 실시간 답변을 위한 웹 검색.' },
      ],
      stats: [{ label: '자동 해결 문의' }, { label: '낮은 상담원 업무량' }, { label: '응답 시간' }],
    },
  },

  testimonials: {
    'Nimrod Chuang': {
      role: '',
      company: 'BACE Engineering Pte Ltd',
      quote: '바빠서 문의를 처리하지 못해 잠재 고객이 더 이상 방치되지 않습니다. waai 덕분에 이전보다 훨씬 빠르게 리드를 확보하고 견적을 생성할 수 있습니다!',
    },
    'Steven Lau': {
      role: '',
      company: 'OUTSOURCE2US',
      quote: '저는 항상 이동 중입니다. 메시지에 답장하는 것은 번거롭고 산만하게 만들었습니다. 드디어 언제 어디서든 마음의 평화를 얻었습니다.',
    },
    'Priya Sharma': {
      role: '고객 성공 리드',
      company: 'CloudServe Solutions',
      quote: '로직 플로우가 정말 놀랍습니다. 하루 만에 완전한 리드 자격 확인 시스템을 구축했습니다. 예전엔 영업팀이 리드당 30분이 걸리던 것이 이제 30초입니다.',
    },
  },

  videoTitles: {
    'FYWVnfP-EEo': '추가의 손길',
    PWM3RanP8rQ: '마음의 평화',
    '--8IlCVWsNI': '놓친 기회',
    '14lt0wRuMw4': '언어 난제?',
  },
};

export default ko;
