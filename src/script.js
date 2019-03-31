import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';
import img4 from './assets/4.jpg';
import img5 from './assets/5.jpg';
import img6 from './assets/6.jpg';

export default function() {
  const { body } = document;
  const parent = document.getElementById("gallery");
  const images = [img1, img2, img3, img4, img5, img6];
  const names = ['Bijou', 'Negron', 'Mojito', 'Rattlesnake', 'Egg Nogg', 'Zinger']
  let container = document.createElement('ul')
  container.setAttribute('class', 'gallery')
  parent.append(container);

  images.forEach((image, index) => {
    let li = document.createElement('li');
    li.setAttribute('class', 'gallery__item')
    let img = document.createElement('img')
    let title = document.createElement('h2')
    title.append(names[index]);
    img.setAttribute('src', image)
    li.append(title);
    li.append(img)
    container.append(li);
  });
};