import { BsHandThumbsUpFill, BsFillMapFill, BsFillCheckSquareFill } from "react-icons/bs";

export const BASIC = {
    company: '주식회사 동양정수커피',
    name: '문은경',
    number: '516-87-00388',
    tel: '1544-6246',
    email: 'moonkye72@naver.com',
    address: '본사:  대구 북구 노원로40길 7-3. 1층(침산동)',
    sub_adress: '대구광역시 동구 신성로16 (신천동)ㅣfinger coffee',
    copy: '2023 핑거커피 All rights reserved.',
}

export const GNB = [
    { id: 1, title: '브랜드소개' },
    {
        id: 2, title: '제품안내', submenu: [
            { title: '머신소개' },
            { title: '메뉴소개' },
        ]
    },
    {
        id: 3, title: '제품구매', submenu: [
            { title: '일반 가맹점용' },
            { title: '제휴 대리점용' },
            { title: '홍보 물품구매' },
        ]
    },
    { id: 4, title: '차별화 시스템' },
    { id: 5, title: '비용 및 절차안내' },
]

export const MAIN_SLIDE = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
]

export const SUB_SLIDE = [
    { id: 1, title: '용인 행정타운점', },
    { id: 2, title: '진주 경상대', },
    { id: 3, title: '하이 스마일헬로우', },
    { id: 4, title: '부산 시청점', },
    { id: 5, title: '대구 봉산점', },
    { id: 6, title: '대구 사수점', },
    { id: 7, title: '대구 신천점', },
    { id: 8, title: '창원 행암점', },
]

export const MAIN_INFO = [
    { id: 1, icon: <BsHandThumbsUpFill />, title: '경쟁력', desc: '무인으로 운영, 저렴한 창업비용, 안정적인 본사의 물류 공급과 더불어 A/S시스템, 핑거커피만의 차별화된 경쟁력은 타 프랜차이즈보다 효율적입니다.' },
    { id: 2, icon: <BsFillMapFill />, title: '매장안내', desc: '현재 전국적으로 핑거커피 매장오픈 및 오픈대기 중이며, 선두로 창업하신 창업주님들의 전국매장을 한눈에 보실 수 있습니다.' },
    { id: 3, icon: <BsFillCheckSquareFill />, title: '개설조건', desc: '핑거커피 개설시 필요한 가맹비, 교육비, 인테리어, 무인머신, 오픈초도물품, 계약 이행보증을 한눈에 알려드립니다.' },
]