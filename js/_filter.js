var FilterComponent = function () {
    var $component = $(".filter-component");
    var $blocksContainer = $('.filter-gallery');
    var $filterControls = $('.filter-control');

    function handleClickOnControls(e) {
        e.preventDefault();

        var $this = $(this),
            filterValue = $this.data('filter');

        $this.parent().toggleClass('highlight');

        if(filterValue.indexOf('all') >= 0){
            var classList = $blocksContainer.attr('class');
            var indexOfAll = classList.indexOf('filter-gallery') + 'filter-gallery'.length;
            if(classList.indexOf('filter-all') > -1){
                classList = classList.substring(0, indexOfAll);
            }
            else{
                classList = classList.substring(0, indexOfAll) + ' filter-all';
            }
            $blocksContainer.attr('class', classList);
            $this.parent().siblings().removeClass('highlight');
        }
        else{
            $blocksContainer.toggleClass(filterValue);
            $blocksContainer.removeClass('filter-all');
            $("[data-filter='filter-all']").parent().removeClass('highlight');
        }
    }

    function bindEvents() {
        $filterControls.on('click', handleClickOnControls);
    }

    function init() {
        if (!$component.length) return;
        bindEvents();
    }

    return {
        init: init
    };

}();
