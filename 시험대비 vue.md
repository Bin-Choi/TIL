Vue 컴포넌트로 개발하는 이유?

> > Component

- 기능별로 분화한 코드 조각
- CS에서는 다시 사용할 수 있는 범용성을 위해 개발된 소프트웨어 구성 요소를 의미
- 컴포넌트는 유지보수를 쉽게 만들어 줄 뿐만 아니라 재사용성의 측면에서도 매우 강력한 기능을 제공
  > > Component based architecture 특징
- 관리가 용이
  - 유지/보수 비용 감소
- 재사용성
- 확장 가능
- 캡슐화
- 독립적
  > > Component in Vue
- Vue에서의 component는?
  - 이름이 있는 재사용 가능한 Vue instance

> > Directives

- v-접두사가 있는 특수 속성에는 값을 할당 할 수 있음
  - 값에는 JS 표현식을 작성 할 수 있음
- directive의 역할은 표현식의 값이 변경될 때 반응적으로 DOM에 적용하는 것

> > v-text

- `Template Interpolation` 과 함께 가장 기본적인 바인딩 방법
- `{{ }}` 와 동일한 역할
  - 정확히 동일한 역할은 아님

> > v-html

- `RAW HTML` 을 표현할 수 있는 방법
- 단, 사용자가 입력하거나 제공하는 컨텐츠에는 절대 사용 금지

> > v-show

- 표현식에 작성된 값에 따라 `element`를 보여 줄 것인지 결정
  - `boolean`값이 변경 될 때 마다 반응
- 대상 `element`의 display 속성을 기본 속성과 `none`으로 `toggle`
- 요소 자체는 항상 DOM에 렌더링 됨

> > v-if

- v-show 와 사용 방법은 동일
- `isActive`의 값이 변경 될 때 반응
- 단, 값이 `false`인 경우 DOM에서 사라짐
- `v-if`, `v-else-if`, `v-else` 형태로 사용

> > v-show VS v-if

- v-show (Expensive initial load, cheap toggle)
  - 표현식 결과에 관계 없이 렌더링 되므로 초기 렌더링에 필요한 비용은 v-if 보다 높을 수 있음
  - display 속성 변경으로 표현 여부를 판단하므로 렌더링 후 toggle 비용은 적음
- v-if (Cheap initial load, expensive toggle)
  - 표현식 결과가 false인 경우 렌더링조차 되지 않으므로 초기 렌더링 비용은 v-show 보다 낮을 수 있음
  - 단, 표현식 값이 자주 변경되는 경우 잦은 재 렌더링으로 비용이 증가할 수 있음

> > v-for

- for .. in .. 형식으로 작성
- 반복한 데이터 타입에 모두 사용 가능
- index를 함께 출력하고자 한다면 `(char, index)`형태로 사용가능
- `v-for` 사용 시 반드시 key 속성을 각 요서에 작성
- vue 화면 구성 시 이전과 달라진 점을 확인 하는 용도로 활용
  - 따라서 key가 중복되어서는 안됨
- 각 요소가 고유한 값을 가지고 있다면 생략할 수 있음

> > v-on

- `:` 을 통해 전달받은 인자를 확인
- 값으로 JS 표현식 작성
- `addEventListener`의 첫 번째 인자와 동일한 값들로 구성
- 대기하고 있던 이벤트가 발생하면 할당된 표현식 실행
- method를 통한 Data 조작도 가능

> > v-bind

- HTML 기본 속성에 Vue data를 연결
- class의 경우 다양한 형태로 연결 가능
  - 조건부 바인딩
    - {'class Name':'조건 표현식'}
    - 삼항 연산자도 가능
  - 다중 바인딩
    - ['JS표현식','JS표현식',...]

> > v-model

- Vue instance 와 DOM의 양방향 바인딩
- Vue data 변경 시 v-model로 연결된 사용자 입력 element에도 적용

> > component 등록 3단계

- 1. 불러오기
- 2. 등록하기
- 3. 보여주기

> > Data in components

> > 두 컴포넌트 사이에서 >> Pass Props & Emit Events

왜 부모-자식 관계만 데이터를 주고받게 할까?

- 데이터의 흐름을 파악하기 용이
- 유지 보수하기 쉬워짐

부모 > 자식

> > Pass Props

- 요소의 속성을 사용하여 데이터 전달
- kebab-case로 전달할 데이터 작성 `prop-data-name="value"`
- 자식 컴포넌트는 props옵션을 사용하여 수신하는 props를 명시적으로 선언

- Prop 명시
- 전달받은 Props를 type 과 함께 명시
- 받을땐 camelCase

```
props : {
  propDataName: String
  }
```

> > dynamic props

변수이름 앞에 `:` 붙이면 동적으로 바인딩, 변수 전달 ㅆㄱㄴ

> > Emit Event

- $emit 메서드를 통해 부모 컴포넌트에 이벤트를 발생

  - $emit('event-name') 형식으로 부모 컴포넌트에 쏨
  - 부모는 @event-name = "asd!@#" 으로 청취 후 핸들러 함수 asd!@# 실행

- 자식 컴포넌트에서 부모 컴포넌트로 이벤트를 발생시킴
  - 이벤트에 데이터를 담아 전달 가능
- 부모 컴포넌트에서는 자식 컴포넌트의 이벤트를 청취
  - 전달받은 데이터는 이벤트 핸들러 함수의 인자로 사용

## Vuex

> > Vuex -> 상태관리

- 기존 props & emit 은 컴포넌트간의 중첩이 깊어지면 데이터 전달이 쉽지 않음, 전달 구조가 복잡해짐
- 그래서 중앙 저장소에 데이터를 모아서 관리하기로 함
  그렇게 나온 것이 뷰엑스

> > 핵심 컨셉 4가지

1. state
2. getters
3. mutations
4. actions

뷰랑 비교
data - state
computed - getters
methods - mutations, actions

1. state

- 중앙에서 관리하는 모든 상태 정보

2. Mutations

- 실제로 state를 변경하는 유일한 방법
- 반드시 동기적이어야함, 비동기 로직으로 state를 변경하는 경우, state의 변화의 시기를 특정할 수 없기 때문 (비동기 함수는 actions으로 mutations를 거쳐서 state를 변경하는 방법을 사용)
- 첫 번째 인자로 state를 받으며, component 혹은 Actions에서 commit() 메서드로 호출됨

3. Actions

- 비동기 작업을 포함할 수 있음
- state를 직접 변경하지 않고 commit()메서드로 mutatuons를 호출해서 state를 변경함
- context 객체를 인자로 받으며, 이 객체를 통해 store.js 의 모든 요소와 메서드에 접근할 수 있음
- component에서 dispatch()메서드에 의해 호출

  4.Getters

- computed에 해당
- state를 활용하여 계산된 값을 얻고자 할 때 사용
  state의 원본 데이터를 건들지 않고 계산된 값을 얻을 수 있음
- computed와 마찬가지로 getters의 결과는 캐시되며, 종속된 값이 변경된 경우에만 재계산됨
- getters에서 계산된 값은 state에 영향을 미치지 안흥ㅁ
- 첫번째 인자로 state, 두번째 인자로 getter를 받음

component에서 데이터를 조작하기 위한 데이터의 흐름

- component => (actions) => mutations => state

component에서 데이터를 사용하기 위한 데이터의 흐름

- state => (getters) => component

## Lifecycle Hooks

> > created

- Vue instance가 생성된 후 호출됨
- data, computed 등의 설정이 완료된 상태
- 서버에서 받은 데이터를 vue instance의 data에 할당하는 로직을 구현하기 적합
- 단, mount 되지 않아 요소에 접근할 수 없음

> > mounted

- Vue instance가 요소에 mount된 후 호출됨
- mount된 요소를 조작할 수 있음

> > updated

- 데이터가 변경되어 DOM에 변화를 줄 때 호출

> > Lifecycle Hooks 특징

- 부모 컴포넌트의 mounted hook이 실행 되었다고 해서 자식이 mount된 것은 아님
  - 부착 여부가 부모-자식 관계에 따라 순서를 가지고 있지 않은 것

## 라우터

- router-link 요소
- router-view 추가

> > router-link

a 태그와 비슷함 ( url 이동)
목표 경로는 to 속성으로 지정 `:` 갈기면 이름으로 보내기 ㄱㄴ

> > 다이나믹 라우터

router/index.js에 path 추가할때 :동적인자 붙이면됨
ex) path: '/hello/:userName

- $route.params로 변수에 접근가능

```
 <h1> hello, {{ userName }}</h1>
```

```
data() {
  return {
    userName: this.$route.params.userName
  }
}
```

params에 담아 보낼수도 있음

```
router-link :to ="{name: 'hello', params: {userName:'harry'}}"> Hello </router-link>
```

## 네이게이션 가드~~

- 전역 가드
  - 애플리케이션 전역에서 동작
- 라우터 가드
  - 특정 URL에서만 동작
- 컴포넌트 가드
  - 라우터 컴포넌트 안에 정의

> > 전역가드

- 다른 url 주소로 이동할 때 항상 실행
- router.beforeEach()
- 콜백 함수의 값으로 3개의 인자를 받음

  - to : 이동할 URL 정보가 담긴 Route 객체
  - from : 현재 URL 정보가 담긴 Route 객체
  - next : 지정한 URL로 이동하기 위해 호출하는 함수

- URL이 변경되어 화면이 전환되기 전 router.beforeEach()가 호출됨
  - 화면이 전환되지 않고 대기 상태
- 변경된 URL로 라우팅하기 위해서는 next()를 호출해줘야 함

> > 라우터 가드

- 특정 라우트에서만 가드를 설정하고 싶을 때 사용
- beforeEnter()
  - 라우트에 진입했을 때 실행됨
  - 라으터를 등록한 위치에 추가
  - 다른 경로에서 탐색할 때만 실행

> > 컴포넌트 가드

- 특정 컴포넌트 내에서 가드를 지정하고 싶을 때 사용
- beforeRouteUpdate()
  - 해당 컴포넌트를 렌더링하는 경로가 변경될 때 실행
- params 는 변화하였는데 컴포넌트는 그대로 왜?
  - 재사용 되었기 때문
  - 그렇기에 Lifecycle hook이 호출되지 않는다
    이때 beforeRouteUpdate() 조지면 재할당함

> > 형식은 유효하지만 특정 리소를 찾을 수 없는 경우
> > axios 사용 then, catch 조지기
