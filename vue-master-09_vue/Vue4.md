## Server & Client

> > Server

- 클라이언트에게 정보와 서비스를 제공하는 컴퓨터 시스템
- 서비스 전체를 제공 == Django Web Service
- 정보를 제공 == DRF API Service

> > Client

- Server가 제공하는 서비스에 적절한 요청을 통해 Server로부터 반환 받은 응답을 사용자에게 표현하는 기능을 가진 프로그램 혹은 시스템

> > 정리

- Server는 정보와 서비스를 제공
  - DB와 통신하며 데이터를 생성, 조회, 수정, 삭제를 담당
  - 요청을 보낸 Client에게 정상적인 요청이었다면 처리한 결과를 응답
- Client는 사용자의 정보 요청을 처리, server에게 응답 받은 정보를 표현
  - Server에게 정보(데이터)를 요청
  - 응답 받은 정보를 가공하여 화면에 표현
