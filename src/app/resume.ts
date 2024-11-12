import { GradeType } from "@/types/resume";

export const resume = {
    basic: {
      name: "김도영",
      job: "백엔드 개발자",
      title: "안녕하세요. \n도전을 좋아하는 프론트엔드 개발자 김도영입니다.",
      introduce: "창업에 도전하여 국가지원사업을 수행하고, 교육 컨텐츠 개발과 프리랜서 개발 경험도 있습니다.\n 프로젝트에서 백엔드 서버 개발을 주로 담당했으며, Spring, Django 등의 프레임워크를 활용한 RESTful API 서버 개발에 능숙합니다. \n실시간 데이터 처리, 안정적인 시스템 설계, CI/CD 환경 구축 등의 경험도 있습니다. 이론과 실무를 겸비한 개발자로 성장하고 있으며, 새로운 기술 습득과 도전에 대한 열정이 있습니다.",
      profileImage: "https://storage.surfit.io/career/avatar/3qprj/108831197066f8b5f5ca110.png",
      email: "sunsuking@gmail.com",
      phoneNumber: "010-1234-5678",
      github: "sunsuking",
      website: "https://tech.sunsuking.me",
    },
    projects: [
      {
        experienceType: "PROJECT",
        title: "IP 자동 할당 서비스: AIM",
        affiliation: "VVIP",
        startAt: "2023.10",
        endAt: "2023.12",
        description: "프로젝트 소개 \n- 실시간으로 여행 일정을 공유하고 소요 경비를 미리 계산할 수 있는 동시 여행 일정 관리 플랫폼 개발\n\n프로젝트 역할 \n- [팀장] 풀스택 개발\n\n프로젝트에서 사용한 기술 스택 \n- Java, SpringBoot, MyBatis, Redis, Redis Pub/Sub, Redisson \n- Spring Security, Sprign OAuth, Spring Event \n- EC2, AWS Lambda, S3, Nginx\n\n주요 개발 사항 \n- WebSocket 기반의 실시간 여행 일정 수정 기능 개발 \n- 안정적인 회원가입 메일을 위한 스프링 이벤트 기반 프로세스로 변경 및 트랜잭션 분리 \n- 외부 API(카카오 모빌리티, T 맵) 사용한 대중교통 정보 과정에서 동시성 이슈 발생 (여러명이 동시에 데이터 접근 시 Duplicate Key) 이를 Redis 비관적 락을 사용하여 극복\n\n성과 \n- SSAFY 11기 광주 5반 최종 프로젝트 우수상 (2등) \n- 동시성 문제에 대한 고민과 이를 해결하기 위한 방법 학습 (https://zrr.kr/LxGE) \n- 스프링 이벤트 기반 처리를 사용한 의존성 제거 방법에 대한 고민 (https://zrr.kr/d0I0)",
        referenceUrl: "https://tech.sunsuking.me",
        experienceId: 1
      },
      {
        experienceType: "PROJECT",
        title: "여행 일정 관리 프로젝트",
        affiliation: "SSAFY 11기 1학기 프로젝트",
        startAt: "2024.06",
        endAt: "2024.08",
        description: "프로젝트 소개\n- 사내 고정 IP 자동 할당 시스템\n- 엑셀 기반의 기존 IP 정보를 읽어 관리하거나, 사용자가 직접 입력하여 IP 관리\n- 실험실창업탐색 지원사업 선정 기업 외주 용역 개발\n\n프로젝트 역할\n- [프로젝트 리더] 백엔드 서버 개발\n\n프로젝트에서 사용한 기술 스택\n- Kotlin, SpringBoot, Spring Security, Spring Batch\n- OpenStack\n\n주요 개발 사항\n- 대용량 데이터 처리를 위한 Batch 작업 실행\n- API 문서 자동화를 위한 Spring REST Docs 기반의 Kotlin DSL 개발\n- OpenStack API 기반의 OpenStack - Spring 연동 서비스 개발\n\n성과\n- 외주 요청 기업의 지원 사업 정상 수료",
        referenceUrl: "https://tech.sunsuking.me",
        experienceId: 2
      },
    ],
    companies: [
      {
        experienceType: "COMPANY",
        title: "에이블제이",
        affiliation: "개발팀/백엔드 개발자",
        startAt: "2025.01",
        endAt: "현재",
        description: "- Spring Boot 활용하여 웹 응용프로그램 및 메세지 프로세서 응용프로그램 구현 \n- 제어의 역전을 통해 스프링에도 의존하지 않는 순수한 자바 코드로 도메인 지식을 충분히 담은 모델 구현\n- 장,단기적 팀 성과를 위해 페어프로그래밍을 통하여 주니어 개발자 팀 기여도 상승 유도\n- 제품관리팀의 요구사항문서를 바탕으로 기술 의사결정(Architecture Decision Making) 을 통해 아키텍쳐 설계 및 일감 정의와 할 일 목록 작성",
        referenceUrl: "http://localhost:8080",
        experienceId: 3
      },
      {
        experienceType: "COMPANY",
        title: "더미 (THEME)",
        affiliation: "개발팀/풀스택 개발자",
        startAt: "2022.06",
        endAt: "2023.12",
        description: "- 2022년 예비 창업 패키지 선정 브랜뉴 프로젝트 대표\n- 2022년 한양대학교(ERICA) SW 융합 연구 개발 과제 연구 대표\n- 2022년 매출 800만원 (사업 매출 및 외주 용역)\n- 2023년 매출 1200만원 (외주 용역)",
        referenceUrl: "http://localhost:8080",
        experienceId: 3
      }
    ],
    activities: [
      {
        experienceType: "AWARD",
        title: "SW 창업 메이커톤 대상",
        affiliation: "한양대학교(ERICA)",
        startAt: "2024-06-09",
        endAt: "2024-08-09",
        description: "2022년 한양대학교(ERICA) SW 메이커톤 대상\n° 한양대학교(ERICA) SW 연구개발과제 선정(대표)\n° 한양대학교(ERICA) 창업 우수 사례 선정\n° 2022년 환경창업대전 2023 서류 합격\n° 2022년 서울과학기술대학교 예비창업패키지 선정",
        referenceUrl: "http://localhost:8080",
        experienceId: 10
      },
      {
        experienceType: "AWARD",
        title: "SW 아이디어톤 최우수상",
        affiliation: "한양대학교(ERICA)",
        startAt: "2024-06-09",
        endAt: "2024-08-09",
        description: "2022년 한양대학교(ERICA) SW 아이디어톤 최우수상\n° 경기 이노폴리스 캠퍼스 START-UP 선정 (대표)\n° 한양대학교(ERICA) SW 연구개발과제 선정 (대표)\n° 2022년 창업중심대학 예비창업패키지 서류 합격 (팀원)",
        referenceUrl: "http://localhost:8080",
        experienceId: 11
      },
      {
        experienceType: "AWARD",
        title: "SW 아이디어톤 최우수상",
        affiliation: "한양대학교(ERICA)",
        startAt: "2024-06-09",
        endAt: "2024-08-09",
        description: "2022년 한양대학교(ERICA) SW 아이디어톤 최우수상\n° 경기 이노폴리스 캠퍼스 START-UP 선정 (대표)\n° 한양대학교(ERICA) SW 연구개발과제 선정 (대표)\n° 2022년 창업중심대학 예비창업패키지 서류 합격 (팀원)",
        referenceUrl: "http://localhost:8080",
        experienceId: 12
      }
    ],
    educationals: [
      {
        "name": "전남대학교",
        "major": "화학교육과",
        "category": "BACHELOR",
        "grade": "4.3",
        "gradeType": GradeType.FOUR_POINT_FIVE,
        "description": "- 2024 화학교육과 우등 졸업.",
        "startAt": "2020.03",
        "endAt": "2024.02",
        "educationalId": 1
      },
      {
        "name": "전남여자고등학교",
        "major": "이공계열",
        "category": "BACHELOR",
        "description": "- 2020 화학 경시 대회 2등\n- 2019 화학 경시 대회 1등",
        "startAt": "2016.03",
        "endAt": "2020.02",
        "educationalId": 1
      },
    ],
    qualifications: [
      {
        "name": "페이스북 유니버시티 2기",
        "organization": "메타 코리아",
        "credential": undefined,
        "acquisitionAt": "2022",
        "grade": "기사",
        "certificationType": "LANGUAGE",
        "certificationId": 7
      },
      {
        "name": "SQL 개발자 (SQLD)",
        "organization": "한국데이터산업진흥원",
        "credential": "202345612342",
        "acquisitionAt": "2020",
        "certificationType": "LANGUAGE",
        "certificationId": 7
      },
      {
        "name": "OPIC IM2",
        "organization": "ACTFL",
        "credential": "OPIC 번호",
        "acquisitionAt": "2023",
        "certificationType": "LANGUAGE",
        "certificationId": 7
      },
    ]
  }