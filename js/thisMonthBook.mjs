import { thismonth } from './books.js';

document.addEventListener('DOMContentLoaded', function () {
  const monthSelect = document.getElementById('year-month-select');
  monthSelect.addEventListener('change', function () {
    const selectedMonth = this.value;
    updateBookDetails(selectedMonth);
  });
  updateBookDetails(monthSelect.value);
});

function updateBookDetails(selectedMonth) {
  const bookData = {
    "2024-05": {
      title: thismonth[0].title,
      author: thismonth[0].author,
      image: thismonth[0].img,
      ad: `밤 12시, 죽기 바로 전에만 열리는 마법의 도서관에서<br><span style="font-weight: bold; font-size: 1.3em;">인생의 두 번째 기회를 드립니다!</span>`,
      plot_1: `"미드나잇 라이브러리"는 인생의 무한한 가능성과 선택의 중요성을 탐구하는 매혹적인 여정을 선사합니다. 
          매트 헤이그의 독특한 상상력이 돋보이는 이 소설은, 한 여성이 자신의 인생에서 다른 선택을 했다면 어떤 삶을 살았을지를 
          보여주는 독특한 도서관을 배경으로 펼쳐집니다. 이 작품은 단순히 흥미로운 이야기를 넘어서, 우리 각자가 매일매일의 선택을 통해 
          우리의 삶을 어떻게 만들어가고 있는지를 되돌아보게 합니다. "미드나잇 라이브러리"는 인생의 끝없는 가능성에 대한 찬가이자, 
          아직 오지 않은 내일을 향한 희망의 메시지를 전달합니다. 매트 헤이그의 섬세한 문체와 깊이 있는 인사이트가 돋보이는 이 소설은 
          당신의 마음을 울리고, 오랫동안 기억될 감동적인 여정을 선사할 것입니다.`,
      plot_2: `지금 바로 "미드나잇 라이브러리"와 함께 인생의 모든 가능성을 탐험해 보세요. <br>당신의 삶이 얼마나 특별한지, 당신이 얼마나 중요한 선택을 할 수 있는지를 발견하게 될 것입니다.`,
      quote: [`아름다운 우화. 영화 <멋진 인생>의 현대판. 누구도 상상하지 못했던 세상에 갇혀버린 지금, 우리 모두에게 시의적절하다<br><br>
          <span> — 조디 피코(「작지만 위대한 일들」 작가)</span>`,
        `후회, 희망, 두 번째 기회에 대한 묵직한 울림을 주는 소설.<br><br>
          <span> — 데이비드 니콜스(<원데이> 작가)</span>`,
        `매트 헤이그는 빛과 어둠을 가진 인간 존재에 대해 깊이 공감하고, 이 탁월한 이야기에 그의 모든 재능을 쏟아냈다.<br><br>
          <span> — 게이먼(<북유럽 신화> 작가)</span>`],
      author_image:"https://blog.kakaocdn.net/dn/crjZSI/btqC3O2JbzR/1RRAWcW4WZNijrHnrpfvbk/img.jpg",
      author_des: `영국의 유명한 소설가이자 작가로 그의 작품은 일반 소설뿐만 아니라 어린이 책과 자기계발서 등 다양한 장르에서도 큰 인기를 얻고 있습니다. 1975년 7월 3일에 태어난 매트 헤이그는 
            특히 인간의 삶, 정신 건강, 그리고 인간 존재의 심오한 가치에 대한 탐구를 자신의 작품을 통해 꾸준히 진행해왔습니다. 매트 헤이그의 작품들은 그의 깊은 인간 이해와 유머, 
            그리고 따뜻한 시선으로 인간 조건에 대한 이야기를 풀어내며, 세계 곳곳의 독자들로부터 큰 공감을 얻고 있습니다. 그는 현재까지도 활발히 작품 활동을 이어가고 있으며, 
            그의 책들은 계속해서 많은 사람들에게 영감을 주고 있습니다.`
    },
    "2024-04": {
      title: thismonth[1].title,
      author: thismonth[1].author,
      image: thismonth[1].img,
      ad: `<span style="font-weight: bold; font-size: 1.3em;">정체불명의 야간 알바가 몰고 온 신선한 바람!</span><br>지친 삶에 위로와 행복을 선물하는조금 특별한 편의점 이야기`,
      plot_1: `당신의 일상에 작은 기적을 선사할 이야기, "불편한 편의점"을 만나보세요! 서울 어느 구석에 위치한 평범한 편의점에서 펼쳐지는, 
          인생의 따뜻함과 인간관계의 소중함을 발견하는 마법 같은 이야기입니다. 이 소설의 주인공, 구대연은 취업에 실패한 대학 졸업생으로, 
          어쩌다 보니 편의점에서 아르바이트를 시작하게 됩니다. 단순한 생계수단으로 시작된 일이지만, 그곳에서 만나는 다양한 사람들과의 만남을 통해 
          삶의 다양한 면모와 깊은 의미를 발견하게 됩니다. 퇴직 후 삶의 목적을 찾지 못한 노인, 가족 문제로 고민하는 중년 여성, 꿈을 좇는 청년 등, 
          각자의 부담을 안고 살아가는 이들이 작은 편의점에서 만나 서로를 이해하고 지지하며 변화의 순간을 맞이합니다. 
          "불편한 편의점"은 일상의 소소한 사건들을 넘어, 인간 관계의 복잡미묘함과 삶의 아름다움을 깊이 있게 탐구합니다. 
          작은 편의점이라는 한정된 공간 안에서 인물들의 심리와 감정을 섬세하게 그려내며, 독자로 하여금 자신의 삶과 주변 사람들과의 관계를 되돌아보게 합니다.`,
      plot_2: `"불편한 편의점"을 통해 불편함 속에서도 변화와 성장의 기회를 발견하고, 일상의 작은 순간들 속에서 인간 관계의 중요성을 깨닫게 될 것입니다. 
          지금 바로 이 소중한 이야기에 빠져보세요. 당신의 마음을 따뜻하게 해 줄 최고의 선택, "불편한 편의점"입니다!`,
      quote: [
        `서울역 홈리스로 지내면서도 자기의 안위보다는 지갑을 잃어버린 낯선 부인의 안부를 걱정하는 독고 씨. 
          그런 독고를 향해 우정과 치유의 손길을 내미는 편의점 사장 염 여사. 
          두 사람의 아름다운 우정의 역사는 코로나 사태 이후 고독과 불안을 더욱 예민하게 느끼게 된 
          우리들에게 눈부신 영감의 씨앗을 심어준다. 모두가 무시하고, 외면하고, 회피하던 홈리스 
          독고 씨의 변신은 어쩌면 덜 놀라운 사실이다. 독고 씨의 진짜 재능은 많은 사람을 너끈히 
          구할 수 있는 눈물겹도록 따스한 마음이기에.<br><br>
          <span> — 정여울 (『1일 1페이지 세상에서 가장 짧은 심리수업 365』 저자)</span>`],
      author_image:"https://image.yes24.com/momo/TopCate3613/MidCate006/361251918.JPG",
      author_des: `김호연 작가는 주로 현대 사회의 일상과 인간관계에 대해 섬세하고 따뜻한 시선으로 바라보며 그려내는 작가로 알려져 있습니다. 
            "불편한 편의점"은 사회의 다양한 구성원들이 모여 서로의 삶과 꿈, 아픔을 공유하며 성장해 가는 과정을 통해, 일상 속에서도 변화와 성장의 기회가 있다는 
            희망적인 메시지를 전달합니다. 이 작품을 통해 김호연 작가는 일상적인 공간에서 벌어지는 소소한 이야기 속에 깊은 인간애와 따뜻한 위로를 담아내며 
            독자들에게 큰 공감과 감동을 선사했습니다. 작품 속에서 보여지는 인물들의 섬세한 심리 묘사와 현실적인 대화는 마치 우리 주변에서 벌어질 법한 이야기처럼 
            생생하게 다가와, 많은 독자들로부터 사랑받는 이유가 되었습니다. 김호연 작가의 작품은 단순한 이야기를 넘어서 사회적인 메시지와 교훈을 전달하는 데에도  
            중점을 두고 있습니다. "불편한 편의점" 뿐만 아니라 그의 다른 작품들도 현대 사회에서 겪는 다양한 문제들인 취업난, 가족 문제, 세대 간 갈등 등에 대해 다루며, 
            이를 통해 독자들로 하여금 생각할 거리를 제공합니다. 김호연 작가의 작품 세계는 이러한 인간미 넘치는 이야기를 통해 많은 독자들에게 위안과 희망을 제공하며, 
            동시에 사회적인 의미와 가치를 되새기게 합니다. 그의 작품들은 독자들로 하여금 일상 속에서도 변화와 성장을 꿈꿀 수 있게 하며, 
            작은 것들에서 큰 가치를 찾게 합니다.`
    }
  }
  const book = bookData[selectedMonth];
  document.getElementById('book-title').textContent = book.title;
  document.getElementById('author-name').textContent = book.author;
  document.getElementById('book-image').src = book.image;
  document.getElementById('ad').innerHTML = book.ad;
  document.getElementById('plot_1').textContent = book.plot_1;
  document.getElementById('plot_2').innerHTML = book.plot_2;
  document.getElementById('author-photo').src = book.author_image;
  document.querySelector('.author-name').textContent = book.author;
  document.getElementById('author-des').innerHTML = book.author_des;

  //추천평 추가
  const quotesContainer = document.querySelector('.quotes-container');
  quotesContainer.innerHTML = '';

  book.quote.forEach(quote => {
    const quoteDiv = document.createElement('div');
    quoteDiv.innerHTML = quote;
    quoteDiv.classList.add('quote');
    quotesContainer.appendChild(quoteDiv);
  });
};