// 페이지의 모든 콘텐츠가 로드된 후 스크립트를 실행합니다.
document.addEventListener('DOMContentLoaded', function () {
  // 1. 스크립트 파일이 로드되었는지 콘솔에 메시지를 출력합니다.
  console.log('✅ custom.js 파일이 성공적으로 로드되었습니다!');

  // 'cta-image-paragraph' 클래스를 가진 블록 안의 모든 이미지를 찾습니다.
  const imagesToWrap = document.querySelectorAll(
    '.blox-cta-image-paragraph img'
  );

  // 2. 몇 개의 이미지를 찾았는지 콘솔에 출력합니다.
  console.log(
    `🔎 오버레이를 적용할 이미지를 ${imagesToWrap.length}개 찾았습니다.`
  );

  // 찾은 이미지 각각에 대해 반복 작업을 수행합니다.
  imagesToWrap.forEach((image, index) => {
    // 3. 각 이미지가 래퍼(wrapper)로 감싸졌는지 확인 메시지를 출력합니다.
    console.log(`🔄 ${index + 1}번째 이미지를 래퍼로 감싸는 중...`);

    const wrapper = document.createElement('div');
    wrapper.classList.add('image-overlay-wrapper');
    image.parentNode.insertBefore(wrapper, image);
    wrapper.appendChild(image);
  });

  if (imagesToWrap.length > 0) {
    console.log('👍 모든 이미지에 오버레이 래퍼 적용을 완료했습니다.');
  } else {
    console.warn(
      '⚠️ 오버레이를 적용할 이미지를 찾지 못했습니다. CSS 선택자(.blox-cta-image-paragraph img)를 확인해 보세요.'
    );
  }
});
