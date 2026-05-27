// ===== PAGE LOADER =====
$(document).ready(function() {
    // Hide loader after 2 seconds
    setTimeout(function() {
        $('#pageLoader').fadeOut(800);
    }, 2000);

    // Set current year in footer
    $('#year').text(new Date().getFullYear());

    // Initialize tooltips
    initializeTooltips();

    // Handle subscription form
    handleSubscriptionForm();

    // Apply brand colors from config
    if (typeof pageConfig !== 'undefined') {
        applyBrandColors(pageConfig.colors.primary, pageConfig.colors.secondary);
        updatePageMetadata(pageConfig);
    }
});

// ===== BRAND COLOR MANAGEMENT =====
/**
 * Change brand colors dynamically
 * @param {string} primaryColor - Primary color hex code
 * @param {string} secondaryColor - Secondary color hex code
 */
function changeBrandColors(primaryColor, secondaryColor) {
    document.documentElement.style.setProperty('--primary-color', primaryColor);
    document.documentElement.style.setProperty('--primary-dark', adjustBrightness(primaryColor, -20));
    document.documentElement.style.setProperty('--secondary-color', secondaryColor);
    document.documentElement.style.setProperty('--secondary-dark', adjustBrightness(secondaryColor, -20));
}

/**
 * Get current brand colors
 */
function getBrandColors() {
    const root = getComputedStyle(document.documentElement);
    return {
        primary: root.getPropertyValue('--primary-color').trim(),
        secondary: root.getPropertyValue('--secondary-color').trim()
    };
}

/**
 * Adjust color brightness
 * @param {string} color - Color hex code
 * @param {number} percent - Brightness adjustment percentage
 */
function adjustBrightness(color, percent) {
    const num = parseInt(color.replace("#",""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    
    return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 +
        (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255))
        .toString(16).slice(1);
}

// ===== PAGE METADATA UPDATE =====
/**
 * Update page metadata from config
 * @param {object} config - Configuration object
 */
function updatePageMetadata(config) {
    if (config.companyName) {
        $('title').text(`Coming Soon - ${config.companyName}`);
        $('.company-name').text(config.companyName);
    }

    if (config.contact) {
        updateContactInfo(config.contact);
    }

    if (config.socialLinks) {
        updateSocialLinks(config.socialLinks);
    }

    if (config.company) {
        updateCompanyInfo(config.company);
    }
}

/**
 * Update contact information cards
 */
function updateContactInfo(contact) {
    const contactCards = $('.contact-card');
    
    // Update address
    if (contact.address && contactCards.length > 0) {
        $(contactCards[0]).find('p').html(
            `${contact.address.street}<br>${contact.address.city}, ${contact.address.state} ${contact.address.zip}<br>${contact.address.country}`
        );
    }

    // Update phone
    if (contact.phone && contactCards.length > 1) {
        $(contactCards[1]).find('p').html(
            `<a href="tel:${contact.phone.number}">${contact.phone.display}</a>`
        );
    }

    // Update email
    if (contact.email && contactCards.length > 2) {
        $(contactCards[2]).find('p').html(
            `<a href="mailto:${contact.email.address}">${contact.email.address}</a>`
        );
    }
}

/**
 * Update social links
 */
function updateSocialLinks(socialLinks) {
    const socialIcons = $('.social-icon');
    
    if (socialLinks.facebook) {
        $(socialIcons[0]).attr('href', socialLinks.facebook);
    }
    if (socialLinks.twitter) {
        $(socialIcons[1]).attr('href', socialLinks.twitter);
    }
    if (socialLinks.instagram) {
        $(socialIcons[2]).attr('href', socialLinks.instagram);
    }
    if (socialLinks.linkedin) {
        $(socialIcons[3]).attr('href', socialLinks.linkedin);
    }
}

/**
 * Update company information in footer
 */
function updateCompanyInfo(company) {
    if (company.name) {
        // Update footer company name
        $('.footer p:first').text(`© ${new Date().getFullYear()} ${company.name}. All rights reserved.`);
    }
}

// ===== SUBSCRIPTION FORM HANDLING =====
/**
 * Handle subscription form submission
 */
function handleSubscriptionForm() {
    $('#subscriptionForm').on('submit', function(e) {
        e.preventDefault();

        const email = $('#emailInput').val();
        const btn = $('#subscribeBtn');
        const btnText = btn.find('.btn-text');
        const spinner = btn.find('.spinner-border');

        // Validate email
        if (!isValidEmail(email)) {
            showToast('Invalid Email', 'Please enter a valid email address', 'error');
            return;
        }

        // Show loading state
        btn.prop('disabled', true);
        spinner.removeClass('d-none');
        btnText.text('Subscribing...');

        // Simulate API call
        setTimeout(function() {
            // Success
            showToast('Success!', `You've been added to our mailing list: ${email}`, 'success');
            $('#subscriptionForm')[0].reset();

            // Reset button state
            btn.prop('disabled', false);
            spinner.addClass('d-none');
            btnText.text('Notify Me');

            // Log to console (in real scenario, send to backend)
            console.log('Email subscribed:', email);
        }, 1500);
    });
}

/**
 * Validate email format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===== TOAST NOTIFICATIONS =====
/**
 * Show toast notification
 * @param {string} title - Toast title
 * @param {string} message - Toast message
 * @param {string} type - Toast type (success, error, warning, info)
 * @param {number} duration - Duration in milliseconds (0 = manual close)
 */
function showToast(title, message, type = 'info', duration = 5000) {
    const toastId = 'toast-' + Date.now();
    
    const toastHTML = `
        <div class="toast ${type}" id="${toastId}">
            <div class="toast-content">
                <div class="toast-title">${title}</div>
                <p class="toast-message">${message}</p>
            </div>
            <button type="button" class="toast-close" onclick="removeToast('${toastId}')">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

    $('#toastContainer').append(toastHTML);

    // Auto-remove after duration
    if (duration > 0) {
        setTimeout(function() {
            removeToast(toastId);
        }, duration);
    }
}

/**
 * Remove toast notification
 */
function removeToast(toastId) {
    $(`#${toastId}`).addClass('removing');
    setTimeout(function() {
        $(`#${toastId}`).remove();
    }, 300);
}

// ===== FORM UTILITIES =====
/**
 * Get form data as object
 */
function getFormData() {
    return {
        email: $('#emailInput').val()
    };
}

// ===== THEME MANAGEMENT =====
/**
 * Toggle between light and dark theme
 */
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

/**
 * Initialize tooltips
 */
function initializeTooltips() {
    // Add tooltip functionality here if needed
    // Example: Using Bootstrap tooltips
    if (typeof bootstrap !== 'undefined') {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
}

// ===== APPLY BRAND COLORS FROM CONFIG =====
/**
 * Apply brand colors during page load
 */
function applyBrandColors(primaryColor, secondaryColor) {
    changeBrandColors(primaryColor, secondaryColor);
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== LOCAL STORAGE HELPERS =====
/**
 * Save data to local storage
 */
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Get data from local storage
 */
function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}

/**
 * Remove data from local storage
 */
function removeFromLocalStorage(key) {
    localStorage.removeItem(key);
}