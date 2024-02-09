import Masonry from 'masonry-layout';

// --------------------------------------------------------------------------

export const msnry = new Masonry('.portfolio__cards', {
    // options...
    itemSelector: '.portfolio__card',
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer',
    horizontalOrder: true,
    percentPosition: true,
    initLayout: window.innerWidth > 768 ? false : true
});
msnry.on('layoutComplete', function (laidOutItems) {
    setTimeout(() => {
        msnry.reloadItems();
    }, 500);
});
