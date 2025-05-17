// 24명 이름 배열
const names = [
  '홍길동', '김철수', '박영희', '이준호', '최미경',
  '정지훈', '윤지혜', '장민석', '김하늘', '김선미',
  '이민수', '이수빈', '김진호', '오지연', '배상훈',
  '최준영', '안소라', '박준서', '김소영', '이하영',
  '강지은', '하주원', '서지원', '임하늘', '김태훈'
];

const drawButton = document.getElementById('draw-btn');
const winnersContainer = document.getElementById('winners');

// 제비 뽑기 버튼 클릭 시 동작하는 함수
drawButton.addEventListener('click', () => {
  drawButton.disabled = true;
  drawButton.textContent = "뽑는 중...";

  // 뽑힌 사람들을 담을 배열
  const winners = [];

  // 랜덤으로 4명 뽑기
  while (winners.length < 4) {
    const randomIndex = Math.floor(Math.random() * names.length);
    const selectedName = names[randomIndex];

    // 이미 뽑힌 사람이 아닌 경우에만 추가
    if (!winners.includes(selectedName)) {
      winners.push(selectedName);
    }
  }

  // 결과를 화면에 표시
  setTimeout(() => {
    winnersContainer.innerHTML = ''; // 이전 결과 지우기

    winners.forEach(name => {
      const winnerElement = document.createElement('div');
      winnerElement.classList.add('winner');
      winnerElement.textContent = name;
      winnersContainer.appendChild(winnerElement);
    });

    // 버튼 텍스트 변경 및 다시 클릭 가능하게 설정
    drawButton.textContent = "제비 뽑기 시작!";
    drawButton.disabled = false;
  }, 1500); // 1.5초 대기 후 결과 표시
});





