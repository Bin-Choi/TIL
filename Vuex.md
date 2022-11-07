## State Management
>> 상태 관리

- 상태(State)란?
  - 현재에 대한 정보(data)

Web Application에서의 상태는 어떻게 표현할 수 있을까?
현재 App이 가지고 있는 Data로 표현할 수 있음!

>> Pass Props & Emit Event
- 각 컴포넌트는 독립적으로 데이터를 관리
- 같은 데이터를 공유하고 있으므로, 각 컴포넌트가 동일한 상태를 유지하고 있음
- 데이터의 흐름을 직관적으로 파악 가능
- component의 중첩이 깊어지면 데이터 전달이 쉽지 않음

>> Centralized Store
- 중앙 저장소(store)에 데이터를 모아서 상태 관리
- 각 component는 중앙 저장소의 데이터를 사용
- component의 계층에 상관없이 중앙 저장소에 접근해서 데이터를 얻거나 변경할 수 있음
- 중앙 저장소의 데이터가 변경되면 각각의 component는 해당 데이터의 변화에 반응하여 새로 변경된 데이터를 반영함
- 규모가 크거나 컴포넌트 중첩이 깊은 프로젝트의 관리가 매우 편리

>> Vuex
- "state management pattern + Library" for vue.js (상태 관리 패턴 + )
- 중앙 저장소를 통해 상태 관리를 할 수 있도록 하는 라이브러리
- 데이터가 예측 가능한 방식으로만 변경 될 수 있도록 하는 규칙을 설정하며, Vue의 반응성을 효율적으로 사용하는 상태 관리 기능을 제공

## Vuex 시작하기
>> 프로젝트 with vuex
``` JavaScript
$ vue create vuex-app // Vue 프로젝트 생성
$ cd vuex-app // 디렉토리 이동
$ vue add vuex // Vue CLI를 통해 vuex plugin 적용
```
- `src/store/index.js` 가 생성됨
- vuex의 핵심 컨셉 4가지
  1. state
  2. getters
  3. mutations
  4. actions

>> state
- `vue` 인스턴스의 `data`에 해당
- 중앙에서 관리하는 모든 상태 정보
- 개벼 `component`는 `state`에서 데이터를 가져와서 사용
  - 개별 `component`가 관리하던 `data`를 중앙 저장소(Vuex Store의 `state`)에서 관리하게 됨
- `state`의 데이터가 변화하면 해당 데이터를 사용(공유)하는 `component`도 자동으로 다시 렌더링
- `$store.state`로 `state` 데이터에 접근

>> Mutations
- 실제로 `state`를 변경하는 유일한 방법
- `vue` 인스턴스의 `methods`에 해당하지만 `Mutations`에서 호출되는 핸들러(handler) 함수는 반드시 동기적이어야 함
  - 비동기 로직으로 `mutations`를 사용해서 `state`를 변경하는 경우, `state`의 변화의 시기를 특정할 수 없기 때문
- 첫 번째 인자로 `state`를 받으며, `component` 혹은 `Actions`에서 `commit()`메서드로 호출됨

>> Actions
- `mutations`와 비슷하지만 비동기 작업을 포함할 수 있다는 차이가 있음
- `state`를 직접 변경하지 않고 `commit()`메서드로 `mutations`를 호출해서 `state`를 변경함
- `context`객체를 인자로 받으며, 이 객체를 통해 `store.js`의 모든 요소와 메서드에 접근할 수 있음 (==즉 `state`를 직접 변경할 수 있지만 하지 않아야 함)
- `component`에서 `dispatch()`메서드에 의해 호출됨

>> Mutations & Actions
- `vue component`의  `methods` 역할이 `vuex`에서는 아래와 같이 분화됨

- `Mutations`
  - `state`를 변경
- `Actions`
  - `state` 변경을 제외한 나머지 로직

>> Getters

-vue 인스턴스의 `computed`에 해당
- state를 활용하여 계산된 값을 얻고자 할 때 사용
state의 원본 데이터를 건들지 않고 계산된 값을 얻을 수 있음
- computed와 마찬가지로 getters의 결과는 캐시(cache) 되며, 종속된 값이 변경된 경우에만 재계산됨
- getters에서 계산된 값은 state에 영향을 미치지 않음
- 첫번째 인자로 `state`, 두번째 인자로 `getter`를 받음

>> 데이터 관리
- Vuex를 사용한다고 해서 모든 데이터를 state에 넣어야 하는 것은 아님
- Vuex에서도 여전히 pass props, emit event를 사용하여 상태를 관리할 수 있음
- 개발 환경에 따라 적절하게 사용하는 것이 필요함

>> 정리

- state
  - 중앙에서 관리하는 모든 상태 정보
- mutations
  - state를 변경하기 위한 methods
- actions
  - 비동기 작업이 포함될 수 있는 methods
  - state를 변경하는 것 외의 모든 로직 진행
- getters
  - state를 활용해 계산한 새로운 변수 값
- component에서 데이터를 조작하기 위한 데이터의 흐름
  - component => (actions) => mutations => state
- component에서 데이터를 사용하기 위한 데이터의 흐름
  - state => (getters) => component
