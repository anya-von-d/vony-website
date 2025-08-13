/**
 * Vony - Peer-to-Peer Micro-Lending Platform
 * Main JavaScript file
 */

(function($) {
    'use strict';

    // Document ready function
    $(document).ready(function() {
        
        // Initialize all components
        initLoader();
        initMobileMenu();
        initSmoothScrolling();
        initBackToTop();
        initAnimations();
        initContactForm();
        
    });

    // Page loader
    function initLoader() {
        $(window).on('load', function() {
            $('.fullpage_loader').fadeOut(500);
        });
        
        // Fallback to ensure loader disappears
        setTimeout(function() {
            $('.fullpage_loader').fadeOut(500);
        }, 2000);
    }

    // Mobile menu functionality
    function initMobileMenu() {
        // Bootstrap navbar toggler for mobile menu
        $('.navbar-toggler').on('click', function(e) {
            e.preventDefault();
            const target = $($(this).data('bs-target'));
            const isOpen = target.hasClass('show');
            
            if (isOpen) {
                target.removeClass('show');
                $(this).attr('aria-expanded', 'false');
            } else {
                target.addClass('show');
                $(this).attr('aria-expanded', 'true');
            }
            
            console.log('Toggler clicked, menu is now:', !isOpen ? 'open' : 'closed'); // Debug log
        });
        
        // Close mobile menu when clicking on a nav link (using multiple approaches for reliability)
        $(document).on('click touchend', '#mobileNavMenu .nav-link', function(e) {
            console.log('Mobile nav link clicked'); // Debug log
            
            // Close the dropdown menu immediately
            $('#mobileNavMenu').removeClass('show').removeClass('collapse').removeClass('collapsing');
            $('.navbar-toggler').attr('aria-expanded', 'false').removeClass('active');
            
            // Handle smooth scrolling for anchor links
            const href = $(this).attr('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = $(href);
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 80
                    }, 800);
                }
            }
            // For external links (like contact.html), let the default behavior happen
        });
        
        // Additional fallback - direct binding after DOM is ready
        setTimeout(function() {
            $('#mobileNavMenu .nav-link').off('click.mobile').on('click.mobile', function(e) {
                console.log('Fallback mobile nav click'); // Debug log
                $('#mobileNavMenu').removeClass('show');
                $('.navbar-toggler').attr('aria-expanded', 'false');
            });
        }, 100);
        
        // Close menu when clicking outside
        $(document).on('click', function(e) {
            if (!$(e.target).closest('.navbar').length && $('#mobileNavMenu').hasClass('show')) {
                $('#mobileNavMenu').removeClass('show');
                $('.navbar-toggler').attr('aria-expanded', 'false');
            }
        });

        // Legacy mobile menu functionality (if needed)
        $('.bars').on('click', function() {
            $('.mobile-menu-main').addClass('active');
            $('.mobile-menu-overlay').addClass('active');
        });

        $('.close-mobile-menu, .mobile-menu-overlay').on('click', function() {
            $('.mobile-menu-main').removeClass('active');
            $('.mobile-menu-overlay').removeClass('active');
        });

        // Close menu when clicking on menu links
        $('.mobile-menu-main .menu-list a').on('click', function() {
            $('.mobile-menu-main').removeClass('active');
            $('.mobile-menu-overlay').removeClass('active');
        });
    }

    // Smooth scrolling for anchor links
    function initSmoothScrolling() {
        $('a[href^="#"]').on('click', function(e) {
            var target = $(this.getAttribute('href'));
            if (target.length) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 80
                }, 800);
            }
        });
    }

    // Back to top button
    function initBackToTop() {
        var backToTop = $('.scroll-to-top');
        
        $(window).scroll(function() {
            if ($(this).scrollTop() > 300) {
                backToTop.addClass('show');
            } else {
                backToTop.removeClass('show');
            }
        });

        backToTop.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 800);
        });
    }

    // Initialize animations
    function initAnimations() {
        // Ensure all fade-up elements are immediately visible
        $('.fade-up').addClass('animate').css({
            'opacity': '1',
            'transform': 'translateY(0)'
        });
        
        // Fade up animation on scroll
        function checkFadeUp() {
            $('.fade-up').each(function() {
                var elementTop = $(this).offset().top;
                var elementBottom = elementTop + $(this).outerHeight();
                var viewportTop = $(window).scrollTop();
                var viewportBottom = viewportTop + $(window).height();

                // Trigger animation when element is 150px before entering viewport
                if (elementTop < viewportBottom - 150) {
                    $(this).addClass('animate');
                }
            });
        }

        // Zoom out animation
        function checkZoomOut() {
            $('.zoom-out').each(function() {
                var elementTop = $(this).offset().top;
                var elementBottom = elementTop + $(this).outerHeight();
                var viewportTop = $(window).scrollTop();
                var viewportBottom = viewportTop + $(window).height();

                // Trigger animation when element is 150px before entering viewport
                if (elementTop < viewportBottom - 150) {
                    $(this).addClass('animate');
                }
            });
        }

        $(window).on('scroll', function() {
            checkFadeUp();
            checkZoomOut();
        });

        // Trigger once on load
        checkFadeUp();
        checkZoomOut();
    }

    // Contact form handling
    function initContactForm() {
        $('#contact-form').on('submit', function(e) {
            e.preventDefault();
            
            var form = $(this);
            var formData = new FormData(this);
            var submitBtn = form.find('button[type="submit"]');
            var responseEl = form.find('.ajax-response');
            
            // Disable submit button
            submitBtn.prop('disabled', true).text('Sending...');
            
            $.ajax({
                url: 'assets/mail.php',
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function(response) {
                    var data = JSON.parse(response);
                    if (data.success) {
                        responseEl.html('<div class="alert alert-success">' + data.message + '</div>');
                        form[0].reset();
                    } else {
                        responseEl.html('<div class="alert alert-danger">' + data.message + '</div>');
                    }
                },
                error: function() {
                    responseEl.html('<div class="alert alert-danger">An error occurred. Please try again.</div>');
                },
                complete: function() {
                    submitBtn.prop('disabled', false).text('Send Message');
                    
                    // Hide response after 5 seconds
                    setTimeout(function() {
                        responseEl.fadeOut();
                    }, 5000);
                }
            });
        });
    }

    // Sticky header
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $('.header-section').addClass('sticky-header');
        } else {
            $('.header-section').removeClass('sticky-header');
        }
    });

    // Add hover effects to buttons
    $('.theme-btn, .join-with-us-btn').hover(
        function() {
            $(this).addClass('hover-effect');
        },
        function() {
            $(this).removeClass('hover-effect');
        }
    );

    // Text animation for split text
    function initTextAnimation() {
        $('.split-text').each(function() {
            var text = $(this).text();
            var words = text.split(' ');
            var wrappedWords = words.map(function(word) {
                return '<span class="word">' + word + '</span>';
            }).join(' ');
            $(this).html(wrappedWords);
        });

        // Animate words on scroll
        $(window).on('scroll', function() {
            $('.split-text .word').each(function(index) {
                var element = $(this);
                var elementTop = element.offset().top;
                var viewportTop = $(window).scrollTop();
                var viewportBottom = viewportTop + $(window).height();

                if (elementTop < viewportBottom && elementTop > viewportTop) {
                    setTimeout(function() {
                        element.addClass('animate');
                    }, index * 100);
                }
            });
        });
    }

    // Initialize text animation
    initTextAnimation();

    // Counter animation (if odometer is available)
    if (typeof Odometer !== 'undefined') {
        $('.counter').each(function() {
            var counter = $(this);
            var countTo = counter.data('count');
            
            $(window).on('scroll', function() {
                var elementTop = counter.offset().top;
                var viewportBottom = $(window).scrollTop() + $(window).height();
                
                if (elementTop < viewportBottom && !counter.hasClass('counted')) {
                    counter.addClass('counted');
                    counter.html(countTo);
                }
            });
        });
    }

    // Form validation
    $('form').each(function() {
        var form = $(this);
        
        form.find('input[required], select[required], textarea[required]').on('blur', function() {
            var field = $(this);
            if (field.val() === '') {
                field.addClass('error');
            } else {
                field.removeClass('error');
            }
        });
    });

    // Initialize tooltips if Bootstrap is available
    if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }

})(jQuery);

// Additional utility functions
window.VonyUtils = {
    // Format phone numbers
    formatPhone: function(phone) {
        var cleaned = ('' + phone).replace(/\D/g, '');
        var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            return '(' + match[1] + ') ' + match[2] + '-' + match[3];
        }
        return phone;
    },
    
    // Validate email
    validateEmail: function(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },
    
    // Show notification
    showNotification: function(message, type) {
        var notification = $('<div class="notification notification-' + type + '">' + message + '</div>');
        $('body').append(notification);
        
        setTimeout(function() {
            notification.addClass('show');
        }, 100);
        
        setTimeout(function() {
            notification.removeClass('show');
            setTimeout(function() {
                notification.remove();
            }, 300);
        }, 3000);
    }
};

// CSS for notifications
if (!document.getElementById('vony-notification-styles')) {
    var styles = '<style id="vony-notification-styles">' +
        '.notification {' +
            'position: fixed;' +
            'top: 20px;' +
            'right: 20px;' +
            'padding: 15px 20px;' +
            'border-radius: 5px;' +
            'color: white;' +
            'font-weight: 500;' +
            'z-index: 10000;' +
            'transform: translateX(100%);' +
            'transition: transform 0.3s ease;' +
        '}' +
        '.notification.show {' +
            'transform: translateX(0);' +
        '}' +
        '.notification-success {' +
            'background-color: #5EC47E;' +
        '}' +
        '.notification-error {' +
            'background-color: #dc3545;' +
        '}' +
        '.notification-info {' +
            'background-color: #17a2b8;' +
        '}' +
        '.sticky-header {' +
            'box-shadow: 0 2px 20px rgba(0,0,0,0.1);' +
        '}' +
        '.word {' +
            'display: inline-block;' +
            'opacity: 0;' +
            'transform: translateY(20px);' +
            'transition: all 0.6s ease;' +
        '}' +
        '.word.animate {' +
            'opacity: 1;' +
            'transform: translateY(0);' +
        '}' +
        '.form-control.error {' +
            'border-color: #dc3545;' +
            'box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);' +
        '}' +
        '.hover-effect {' +
            'transform: translateY(-2px);' +
            'box-shadow: 0 8px 25px rgba(94, 196, 126, 0.3);' +
        '}' +
        '</style>';
    $(document).ready(function() {
        $('head').append(styles);
    });
}
