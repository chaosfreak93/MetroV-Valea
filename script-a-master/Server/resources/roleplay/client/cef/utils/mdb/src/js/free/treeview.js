(function($) {
    $.fn.mdbTreeview = function() {
        const $this = $(this);
        if ($this.hasClass('treeview')) {
            const $toggler = $this.find('.rotate');
            $.each($toggler, (e)=>{
                $($toggler[e]).off('click');
                $($toggler[e]).on('click', function() {
                    const $this1 = $(this);
                    $this1.siblings('.nested').toggleClass('active');
                    $this1.toggleClass('down');
                });
            });
        }
        if ($this.hasClass('treeview-animated')) {
            const $elements = $this.find('.treeview-animated-element');
            const $closed = $this.find('.closed');
            $this.find('.nested').hide();
            $closed.off('click');
            $closed.on('click', function() {
                const $this1 = $(this);
                const $target = $this1.siblings('.nested');
                const $pointer = $this1.children('.fa-angle-right');
                $this1.toggleClass('open');
                $pointer.toggleClass('down');
                !$target.hasClass('active') ? $target.addClass('active').slideDown() : $target.removeClass('active').slideUp();
                return false;
            });
            $elements.off('click');
            $elements.on('click', function() {
                const $this1 = $(this);
                $this1.hasClass('opened') ? $this1.removeClass('opened') : ($elements.removeClass('opened'), $this1.addClass('opened'));
            });
        }
        if ($this.hasClass('treeview-colorful')) {
            const $elements = $this.find('.treeview-colorful-element');
            const $header = $this.find('.treeview-colorful-items-header');
            $this.find('.nested').hide();
            $header.off('click');
            $header.on('click', function() {
                const $this1 = $(this);
                const $target = $this1.siblings('.nested');
                const $pointerPlus = $this1.children('.fa-plus-circle');
                const $pointerMinus = $this1.children('.fa-minus-circle');
                $this1.toggleClass('open');
                $pointerPlus.removeClass('fa-plus-circle');
                $pointerPlus.addClass('fa-minus-circle');
                $pointerMinus.removeClass('fa-minus-circle');
                $pointerMinus.addClass('fa-plus-circle');
                !$target.hasClass('active') ? $target.addClass('active').slideDown() : $target.removeClass('active').slideUp();
            });
            $elements.off('click');
            $elements.on('click', function() {
                const $this1 = $(this);
                $this1.hasClass('opened') ? $elements.removeClass('opened') : ($elements.removeClass('opened'), $this1.addClass('opened'));
            });
        }
    };
})(jQuery);
