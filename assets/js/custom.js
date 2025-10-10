document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('img').forEach((img) => {
    const title = img.getAttribute('alt') || '';
    img.setAttribute('data-overlay-text', title);
  });
});
// 페이지 로드가 완료되면 함수를 실행합니다.
document.addEventListener('DOMContentLoaded', function () {
  // 'cta-image-paragraph' 블록 내의 모든 이미지 요소를 선택합니다.
  const imagesToWrap = document.querySelectorAll(
    '.blox-cta-image-paragraph img'
  );

  // 각 이미지를 순회하며 작업을 수행합니다.
  imagesToWrap.forEach((image) => {
    // 이미지를 감쌀 새로운 div 요소를 생성합니다.
    const wrapper = document.createElement('div');
    // CSS에서 정의한 클래스를 추가합니다.
    wrapper.classList.add('image-overlay-wrapper');

    // DOM 트리에서 이미지의 부모 요소를 찾습니다.
    const parent = image.parentNode;

    // 이미지 바로 앞에 새로운 래퍼(wrapper)를 삽입합니다.
    parent.insertBefore(wrapper, image);

    // 원본 이미지를 래퍼의 자식으로 이동시킵니다.
    wrapper.appendChild(image);
  });
});
