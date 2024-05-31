export const allBookData = [
    {title: '미드나잇 라이브러리', author: '매트 헤이그', rating: 9.5, price: '14,220원', img: 'https://qi-b.qoo10cdn.com/partner/goods_image/9/9/3/7/349129937g.jpg'},
    {title: '불편한 편의점', author:'김호연', rating:9.5, price:'12,600원', img:'https://image.yes24.com/goods/99308021/XL'},
    {title: '나를 소모하지 않는 현명한 태도에 관하여', author: '마티아스 뇔케', rating: 9.6, price: '16,020원', img: 'https://qi-b.qoo10cdn.com/partner/goods_image/2/7/1/5/356882715g.jpg'},
    {title: '변방에서 중심으로', author: '문재인, 최종건', rating: 6.4, price: '29,700원', img: 'https://qi-b.qoo10cdn.com/partner/goods_image/0/6/0/6/356910606s.jpg'},
    {title: '어떻게 살 것인가', author: '이광수', rating: 9.7, price: '15,300원', img: 'https://qi-b.qoo10cdn.com/partner/goods_image/6/4/4/7/356906447s.jpg'},
    { title: '오십, 나는 재미있게 살기로 했다', author: '이서원', rating: 10, price: '15,300원', img: 'https://qi-b.qoo10cdn.com/partner/goods_image/8/3/3/8/356908338s.jpg' },
    { title: '삶이 흔들릴 때 뇌과학을 읽습니다', author: '이케가야 유지', rating: 9.8, price: '16,200원', img: 'https://qi-b.qoo10cdn.com/partner/goods_image/2/5/4/1/356892541s.jpg' },
    { title: '마흔에 읽는 쇼펜하우어', author: '강용수', rating: 9.9, price: '15,300원', img: 'https://qi-b.qoo10cdn.com/partner/goods_image/1/4/5/1/356791451s.jpg' },
    { title: '모순', author: '양귀자', rating: 9.0, price: '11,700원', img: 'https://image.aladin.co.kr/product/2584/37/cover200/8998441012_3.jpg' },
    { title: '돈의 심리학', author: '모건 하우절/이지연 옮', rating: 8.6, price: '17,820원', img: 'https://image.aladin.co.kr/product/32852/7/cover200/k132936910_2.jpg' },
    { title: 'EBS 다큐프라임 자본주의', author: 'EBS 자본주의 제작팀', rating: 9.0, price: '15,300원', img: 'https://image.aladin.co.kr/product/3164/26/cover200/8957365796_1.jpg' },
    { title: '삼체 1~3 세트 – 전3권', author: '류츠신/이현아, 허유영 옮', rating: 9.4, price: '60,300원', img: 'https://image.aladin.co.kr/product/24394/37/cover200/8954442684_3.jpg' },
    { title: '돈의 속성', author: '김승호', rating: 8.7, price: '16,020원', img: 'https://image.aladin.co.kr/product/28884/59/cover200/s522832546_1.jpg' },
    { title: '물고기는 존재하지 않는다', author: '룰루 밀러/정지인 옮', rating: 8.4, price: '15,300원', img: 'https://image.aladin.co.kr/product/28465/73/cover200/k092835920_2.jpg' },
]

export const mainpage=[allBookData[0], allBookData[3], allBookData[4]];
export const thismonth=allBookData.slice(0,2);
export const bestseller=allBookData.slice(2,8);
export const steadyseller=allBookData.slice(8,14);