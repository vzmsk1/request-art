import Masonry from 'masonry-layout';

export const msnry = document.querySelector('.portfolio__cards')
    ? new Masonry('.portfolio__cards', {
          // options...
          itemSelector: '.portfolio__card',
          columnWidth: '.grid-sizer',
          gutter: '.gutter-sizer',
          horizontalOrder: true,
          percentPosition: true,
          initLayout: window.innerWidth <= 768 ? true : false
      })
    : null;

if (msnry) {
    msnry.on('removeComplete', function (removedItems) {
        removeAttribute(document.querySelector('.portfolio__cards'), 'style');
        removeAttribute(document.querySelectorAll('.portfolio__card'), 'style');
    });
}
