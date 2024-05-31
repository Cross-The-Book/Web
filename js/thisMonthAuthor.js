document.addEventListener('DOMContentLoaded', function () {
    const monthSelect = document.getElementById('year-month-select');

    monthSelect.addEventListener('change', function () {
        const selectedMonth = this.value;
        updateAuthorDetails(selectedMonth);
    });
    updateAuthorDetails(monthSelect.value);
});

function updateAuthorDetails(selectedMonth) {
    const authorData = {
        "2024-05": {
            author: "매트 헤이그",
            author_image: "https://blog.kakaocdn.net/dn/crjZSI/btqC3O2JbzR/1RRAWcW4WZNijrHnrpfvbk/img.jpg",
            author_des: `영국의 유명한 소설가이자 작가로 그의 작품은 일반 소설뿐만 아니라 어린이 책과 자기계발서 등 다양한 장르에서도 큰 인기를 얻고 있습니다. 1975년 7월 3일에 태어난 매트 헤이그는 
            특히 인간의 삶, 정신 건강, 그리고 인간 존재의 심오한 가치에 대한 탐구를 자신의 작품을 통해 꾸준히 진행해왔습니다. 매트 헤이그의 작품들은 그의 깊은 인간 이해와 유머, 
            그리고 따뜻한 시선으로 인간 조건에 대한 이야기를 풀어내며, 세계 곳곳의 독자들로부터 큰 공감을 얻고 있습니다. 그는 현재까지도 활발히 작품 활동을 이어가고 있으며, 
            그의 책들은 계속해서 많은 사람들에게 영감을 주고 있습니다.`
        },
        "2024-04": {
            author: "김호연",
            author_image: "https://image.yes24.com/momo/TopCate3613/MidCate006/361251918.JPG",
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

    const author = authorData[selectedMonth];
    if (author) {
        document.getElementById('author-photo').src = author.author_image;
        document.querySelector('.author-name').textContent = author.author;
        console.log("author",author.author)
        document.getElementById('author-des').textContent = author.author_des;
    } else {
        console.error("해당 월에 대한 작가 없음");
    }
}