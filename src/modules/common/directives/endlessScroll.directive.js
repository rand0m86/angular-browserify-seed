'use strict';

module.exports = /*@ngInject*/
    // Simplified modification of https://github.com/sroze/ngInfiniteScroll
    function scrollDirective($window) {
        return {
            scope: {
              addItems: '&'
            },
            link: function (scope, element) {
                var container =  angular.element($window);

                var height = function(elem) {
                    var element = elem[0] || elem;
                    if (isNaN(element.offsetHeight)) {
                        return element.document.documentElement.clientHeight;
                    } else return element.offsetHeight;
                };

                var pageYOffset = function(elem) {
                    var element = elem[0] || elem;

                    if (isNaN(window.pageYOffset)) {
                        return element.document.documentElement.scrollTop;
                    } else return element.ownerDocument.defaultView.pageYOffset;
                };

                var offsetTop = function(elem) {
                    if (!elem[0].getBoundingClientRect) {
                        return;
                    }
                    return elem[0].getBoundingClientRect().top + pageYOffset(elem);
                };

                container.bind('scroll', function() {
                    var containerBottom = height(container) + pageYOffset(container[0].document.documentElement);
                    var elementBottom = offsetTop(element) + height(element);
                    var remaining = elementBottom - containerBottom;
                    var shouldScroll = remaining <= height(container);
                    if (shouldScroll) {
                        scope.$apply(scope.addItems);
                    }
                });
            }
        };
    };
