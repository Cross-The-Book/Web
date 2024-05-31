document.addEventListener('DOMContentLoaded', function () {
  const monthSelect = document.getElementById('year-month-select');

  monthSelect.addEventListener('change', function () {
    const selectedMonth = this.value;
    console.log('monthSelect:', monthSelect); // <select> 요소 전체를 출력
    console.log('selectedMonth', selectedMonth)

    updateBookDetails(selectedMonth)
  });
  updateBookDetails(monthSelect.value)
});

function updateBookDetails(selectedMonth) {
  const bookData = {
    "2024-05": {
      title: "미드나잇 라이브러리",
      author: "매트 헤이그",
      image: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791191056556.jpg",
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
    },
    "2024-04": {
      title: "불편한 편의점",
      author: "김호연",
      image: "https://image.yes24.com/goods/99308021/XL",
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
    }
  }
  const book = bookData[selectedMonth];
  document.getElementById('book-title').textContent = book.title;
  document.getElementById('author-name').textContent = book.author;
  document.getElementById('book-image').src = book.image;
  document.getElementById('ad').innerHTML = book.ad;
  document.getElementById('plot_1').textContent = book.plot_1;
  document.getElementById('plot_2').innerHTML = book.plot_2;

  // .quotes-container 요소를 찾습니다.
  const quotesContainer = document.querySelector('.quotes-container');
  quotesContainer.innerHTML = ''; // 기존의 인용구 내용을 지웁니다.

  book.quote.forEach(quote => {
    const quoteDiv = document.createElement('div');
    quoteDiv.innerHTML=quote;
    quoteDiv.classList.add('quote');
    quotesContainer.appendChild(quoteDiv);
  });
};