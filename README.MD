This plugin require jQuery.
All the childtren elements of the component and the button with "view less" functionality MUST be initially hidden from CSS.
There is a default configuration that will be applied in case you don't specify any options.
The breakpoints specified are not inclusive.

var defaults = {
    component: '.view-more-component',
    elements: '.view-more-element',
    moreBtn: '.view-more',
    lessBtn: '.view-less',
    mobile: {
        breakpoint: 768,
        elementsToLoad: 1,
        initialVisibleElements: 1
    },
    tablet: {
        breakpoint: 992,
        elementsToLoad: 2,
        initialVisibleElements: 2
    },
    desktop: {
        elementsToLoad: 3,
        initialVisibleElements: 3
    }
};

Example of initialization:

var ViewMoreComponent = new ViewMoreComponent({
    component: ".comment-section-wrapper",
    elements: ".comment",
    moreBtn: '.view-more-btn',
    lessBtn: '.view-less-btn',
    mobile: {
        breakpoint: 768,
        elementsToLoad: 1,
        initialVisibleElements: 1
    },
    tablet: {
        breakpoint: 992,
        elementsToLoad: 2,
        initialVisibleElements: 2
    },
    desktop: {
        elementsToLoad: 3,
        initialVisibleElements: 3
    }
});
