let currentPage = 1;
const imagesPerPage = 2; // 每页显示两张图片
const imagePaths = [
  'img/1.jpg',
  'img/2.jpg',
  'img/3.jpg',
  'img/4.jpg',
  'img/5.jpg',
  'img/6.jpg',
  'img/7.jpg',
  'img/8.jpg',
  'img/9.jpg',
  'img/10.jpg',
  'img/11.jpg',
  'img/12.jpg',
  'img/13.jpg',
  'img/14.jpg',
  'img/15.jpg',
  'img/16.jpg',
  'img/17.jpg',
  'img/18.jpg',
  // 更多图片...
];
const totalPages = Math.ceil(imagePaths.length / imagesPerPage);

function showImages(page) {
  const start = (page - 1) * imagesPerPage;
  const end = start + imagesPerPage;
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';

  imagePaths.slice(start, end).forEach(imgSrc => {
    const img = new Image();
    img.src = imgSrc;
    img.alt = 'Photography Image';
    img.onload = () => img.style.opacity = 1;
    img.onclick = () => window.location.href = imgSrc;
    gallery.appendChild(img);
  });

  updatePageInfo();
}

function updatePageInfo() {
  const pageInfo = document.getElementById('page-info');
  pageInfo.textContent = `第 ${currentPage} / ${totalPages} 页`;
}



function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    showImages(currentPage);
  }
}

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    showImages(currentPage);
  }
}



document.addEventListener('DOMContentLoaded', () => showImages(currentPage));
