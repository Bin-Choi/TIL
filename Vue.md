>> Front-end Framework

- Front-end(FE) 개발이란?
  - 사용자에게 보여주는 화면 만들기

- Web App(SPA)을 만들 때 사용하는 도구
  - SPA -Single Page Application

>> Web App 이란?

  - 웹 브라우저에서 실행되는 어플리케이션 소프트웨어
  - 개발자 도구 > 디바이스 모드
  - 웹 페이지가 그대로 보이는 것이 아닌 디바이스에 설치된 App처럼 보이는 것
  - 웹 페이지가 디바이스에 맞는 적절한 UX/UI로 표현되는 형태

>> SPA (Single Page Application)

  - Web App 과 함께 자주 등장할 용어 SPA
  - 이전까지는 사용자의 요청에 적절한 페이지 별 template을 반환
  - SPA는 서버에서 최초 1장의 HTML만 전달받아 모든 요청에 대응하는 방식을 의미
    - 어떻게 한 페이지로 모든 요청에 대응 할 수 있을까?
    - CSR (Client Side Rendering) 방식으로 요청을 처리하기 때문

>> [참고] SSR (Server Side Rendering) 이란?
  - 기존의 요청 처리 방식은 SSR
  - Server가 사용자의 요청에 적합한 HTML을 렌더링하여 제공하는 방식
  - 전달 받은 새 문서를 보여주기 위해 브라우저는 새로고침을 진행

>> CSR (Client Side Rendering) 이란?
  - 최초 한 장의 HTML을 받아오는 것은 동일
    - 단, server로부터 최초로 받아오는 문서는 빈 html 문서
  
  - 각 요청에 대한 대응을 JavaScript를 사용하여 필요한 부분만 다시 렌더링

  1. 새로운 페이지를 서버에 AJAX로 요청
  2. 서버는 화면을 그리기 위해 필요한 데이터를 JSON 방식으로 전달
  3. JSON 데이터를 JavaScript로 처리, DOM 트리에 반영(렌더링)

>> 왜 CSR 방식을 사용하는 걸까?

1. 모든 HTML 페이지를 서버로부터 받는 것이 아니기 때문
  - 클라이언트 - 서버간 통신 즉, 트래픽이 감소
  - 트래픽이 감소한다 = 응답 속도가 빨라진다.

2. 매번 새 문서를 받아 새로고침하는 것이 아니라 필요한 부분만 고쳐 나가므로 각 요청이 끊김없이 진행
  - SNS에서 추천을 누를 때 마다 첫 페이지로 돌아간다 = 끔찍한 APP!
3. BE와 FE의 작업 영역을 명확히 분리 할 수 있음
  - 각자 맡은 역할을 명확히 분리한다 = 협업이 용이해짐

>> CSR은 만능일까?
- 첫 구동 시 필요한 데이터가 많으면 많을수록 최초 작동 시작까지 오랜 시간이 소요
- Naver, Netflix, Disney+ 등 모바일에 설치된 Web-App을 실행 하게 되면 잠간의 로딩 시간이 필요
- 검색 엔진 최적화(SEO, Search Engine Optimization)가 어려움
  - 서버가 제공하는 것은 텅 빈 HTML
  - 내용을 채우는 것은 AJAX 요청으로 얻은 JSON 데이터로 클라이언트(브라우저)가 진행
- 대체적으로 HTML에 작성된 내용을 기반으로 하는 검색 엔진에 빈 HTML을 공유하는 SPA 서비스가 노출되기는 어려움

>> [참고] SEO(Search Engine Optimization)
- google, bing과 같은 검색 엔진 등에 내 서비스나 제품 등이 효율저긍로 검색 엔진에 노출되도록 개선하는 과정을 일컫는 작업
- 검색 = 각 사이트가 운용하는 검색 엔진에 의해 이루어지는 작업
- 검색 엔진 = 웹 상에 존재하는 가능한 모든 정보들을 긁어 모으는 방식으로 동작
  - 정보의 대상은 주로 HTML에 작성된 내용
  - JavaScript가 실행된 이후의 결과를 확인하는 과정이 없음
- 최근에는 SPA, 즉 CSR로 구성된 서비스의 비중이 증가
  - SPA 서비스도 검색 대상으로 넓히기 위해 JS를 지원하는 방식으로 발전
- 단, 단순 HTML만을 분석하는 것보다 몇 배의 리소스가 필요한 작업이기에 여전히 CSR의 검색 엔진 최적화 문제가 모두 해결된 것은 아님

>> CSR vs SSR
- CSR과 SSR은 흑과 백이 아님
  - 내 서비스에 적합한 렌더링 방식을 적절하게 활용할 수 있어야 함
- SPA 서비스에서도 SSR을 지원하는 Framework도 발전하고 있음

## Vue
>> MVVM Pattern
- 소프트웨어 아키텍처 패턴의 일종
- 마크업 언어로 구현하는 그래픽 사용자 인터페이스(view)의 개발을 Back-end(model)로부터 분리시켜 view가 어느 특정한 모델 플랫폼에 종속되지 않도록 함

- `View` - 우리 눈에 보이는 부분 = DOM!
- `Model` - 실제 데이터 = JSON!
- `View Model` (Vue)
  - View를 위한 Model
  - View와 연결(binding) 되어 Action을 주고 받음
  - Model이 변경되면 View Model도 변경되고 바인딩딘 View도 변경됨
  - View에서 사용자가 데이터를 변경하면 View Model의 데이터가 변경되고 바인딩된 다른 View도 변경됨
  
=> 즉 View와 Model은 서로 모른다 (독립성 증가, 적은 의존성)
  - DOM & Data 또한 서로 모르는 관계
  
<hr>
