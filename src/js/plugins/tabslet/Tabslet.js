/**
 * Tabslet | tabs jQuery plugin
 *
 * @copyright Copyright 2015, Dimitris Krestos
 * @license   Apache License, Version 2.0 (http://www.opensource.org/licenses/apache2.0.php)
 * @link      http://vdw.staytuned.gr
 * @version   v1.7.3
 */

!(function($, window, undefined) {
    "use strict";
    ($.fn.tabslet = function(options) {
        var defaults = {
                mouseevent: "click",
                activeclass: "active",
                attribute: "href",
                animation: true,
                autorotate: !1,
                deeplinking: !1,
                pauseonhover: !0,
                delay: 2e3,
                active: 1,
                container: !1,
                controls: {
                    prev: ".prev",
                    next: ".next",
                },
            },
            options = $.extend(defaults, options);
        return this.each(function() {
            function deep_link() {
                var t = [];
                elements.find("a").each(function() {
                    t.push($(this).attr($this.opts.attribute));
                });
                var e = $.inArray(location.hash, t);
                return e > -1 ? e + 1 : $this.data("active") || options.active;
            }
            var $this = $(this),
                _cache_li = [],
                _cache_div = [],
                _container = options.container ? $(options.container) : $this,
                _tabs = _container.find("> .tabslet-content, .tabslet-content");
            _tabs.each(function() {
                _cache_div.push($(this).css("display"));
            });
            var elements = $this.find("ul.tabslet-tab > li"),
                i = options.active - 1;
            if (!$this.data("tabslet-init")) {
                $this.data("tabslet-init", !0),
                    ($this.opts = []),
                    $.map(
                        [
                            "mouseevent",
                            "activeclass",
                            "attribute",
                            "animation",
                            "autorotate",
                            "deeplinking",
                            "pauseonhover",
                            "delay",
                            "container",
                        ],
                        function(t) {
                            $this.opts[t] = $this.data(t) || options[t];
                        }
                    ),
                    ($this.opts.active = $this.opts.deeplinking ?
                        deep_link() :
                        $this.data("active") || options.active),
                    _tabs.hide(),
                    $this.opts.active &&
                    (_tabs.eq($this.opts.active - 1).show(),
                        elements
                        .eq($this.opts.active - 1)
                        .addClass(options.activeclass));
                var fn = eval(function(t, e) {
                        var s = e ?
                            elements
                            .find(
                                "a[" +
                                $this.opts.attribute +
                                '="' +
                                e +
                                '"]'
                            )
                            .parent() :
                            $(this);
                        s.trigger("_before"),
                            elements.removeClass(options.activeclass),
                            s.addClass(options.activeclass),
                            _tabs.hide(),
                            (i = elements.index(s));
                        var o = e || s.find("a").attr($this.opts.attribute);
                        return (
                            $this.opts.deeplinking && (location.hash = o),
                            $this.opts.animation ?
                            _container.find(o).animate({
                                    opacity: "show",
                                },
                                "slow",
                                function() {
                                    s.trigger("_after");
                                }
                            ) :
                            (_container.find(o).show(),
                                s.trigger("_after")), !1
                        );
                    }),
                    init = eval("elements." + $this.opts.mouseevent + "(fn)"),
                    t,
                    forward = function() {
                        (i = ++i % elements.length),
                        "hover" == $this.opts.mouseevent ?
                            elements.eq(i).trigger("mouseover") :
                            elements.eq(i).click(),
                            $this.opts.autorotate &&
                            (clearTimeout(t),
                                (t = setTimeout(forward, $this.opts.delay)),
                                $this.mouseover(function() {
                                    $this.opts.pauseonhover && clearTimeout(t);
                                }));
                    };
                $this.opts.autorotate &&
                    ((t = setTimeout(forward, $this.opts.delay)),
                        $this.hover(
                            function() {
                                $this.opts.pauseonhover && clearTimeout(t);
                            },
                            function() {
                                t = setTimeout(forward, $this.opts.delay);
                            }
                        ),
                        $this.opts.pauseonhover &&
                        $this.on("mouseleave", function() {
                            clearTimeout(t),
                                (t = setTimeout(forward, $this.opts.delay));
                        }));
                var move = function(t) {
                    "forward" == t && (i = ++i % elements.length),
                        "backward" == t && (i = --i % elements.length),
                        elements.eq(i).click();
                };
                $this.find(options.controls.next).click(function() {
                        move("forward");
                    }),
                    $this.find(options.controls.prev).click(function() {
                        move("backward");
                    }),
                    $this.on("show", function(t, e) {
                        fn(t, e);
                    }),
                    $this.on("next", function() {
                        move("forward");
                    }),
                    $this.on("prev", function() {
                        move("backward");
                    }),
                    $this.on("destroy", function() {
                        $(this)
                            .removeData()
                            .find("> ul li")
                            .each(function() {
                                $(this).removeClass(options.activeclass);
                            }),
                            _tabs.each(function(t) {
                                $(this)
                                    .removeAttr("style")
                                    .css("display", _cache_div[t]);
                            });
                    });
            }
        });
    }),
    $(document).ready(function() {
        $('[data-toggle="tabslet"]').tabslet();
    });
})(jQuery);