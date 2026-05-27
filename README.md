# Coming Soon Page - Professional Template

A fully responsive, modern, and customizable Coming Soon page built with HTML, Bootstrap 5, jQuery, and CSS.

## 🎯 Features

- ✅ **Responsive Design** - Perfect on desktop, tablet, and mobile devices
- ✅ **Page Loader** - Animated loader with company logo
- ✅ **Brand Colors** - Easy-to-manage color variables
- ✅ **Email Subscription** - Form with validation and notifications
- ✅ **Social Media Links** - Pre-configured social icons
- ✅ **Contact Information** - Address, phone, and email cards
- ✅ **Toast Notifications** - Beautiful notification system
- ✅ **Bootstrap 5** - Built with the latest Bootstrap framework
- ✅ **jQuery** - All interactions powered by jQuery
- ✅ **Font Awesome** - Beautiful icon library
- ✅ **Configuration File** - Easy customization with config.js
- ✅ **Developed by Plover Technologies** - Footer credit

## 📁 File Structure

```
coming-soon-page/
├── index.html
├── config.js
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── notifications.css
│   ├── js/
│   │   └── script.js
│   └── images/
│       ├── logo.png
│       └── coming-soon-illustration.png
└── README.md
```

## 🚀 Quick Start

### 1. **Setup**
   - Clone this repository
   - Add your company logo as `assets/images/logo.png`
   - Add hero image as `assets/images/coming-soon-illustration.png`

### 2. **Configure**
   Edit `config.js` with your company details:
   ```javascript
   const pageConfig = {
       companyName: 'Your Company Name',
       colors: {
           primary: '#FF5733',      // Your primary color
           secondary: '#32CD32'     // Your secondary color
       },
       contact: {
           address: { street, city, state, zip, country },
           phone: { number, display },
           email: { address, display }
       },
       socialLinks: {
           facebook: 'https://facebook.com/yourpage',
           twitter: 'https://twitter.com/yourhandle',
           instagram: 'https://instagram.com/yourhandle',
           linkedin: 'https://linkedin.com/company/yourcompany'
       }
   };
   ```

### 3. **Customize Colors**
   
   **Method 1: Config File (Recommended)**
   ```javascript
   colors: {
       primary: '#FF5733',
       secondary: '#32CD32'
   }
   ```

   **Method 2: CSS Variables**
   Edit `assets/css/style.css` lines 9-10

   **Method 3: JavaScript**
   ```javascript
   changeBrandColors('#FF5733', '#32CD32');
   ```

### 4. **Deploy**
   Upload to your hosting server

## 🎨 Color Management

All colors are managed through CSS variables. Change them once and they apply throughout!

- **Primary Color**: Main buttons, links, title
- **Secondary Color**: Supporting text and accents

## 📱 Responsive Breakpoints

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (576px - 767px)
- Small Mobile (< 576px)

## 🔧 JavaScript Functions

```javascript
// Change colors dynamically
changeBrandColors('#FF5733', '#32CD32');

// Get current colors
const colors = getBrandColors();

// Show notifications
showToast('Title', 'Message', 'success', 5000);
showToast('Error', 'Something went wrong', 'error');

// Get form data
const data = getFormData();

// Local storage
saveToLocalStorage('key', value);
getFromLocalStorage('key');
removeFromLocalStorage('key');
```

## 📝 Customization

### Update Company Logo
Replace `assets/images/logo.png` (recommended: 200x200px)

### Update Hero Image
Replace `assets/images/coming-soon-illustration.png` (recommended: 500x500px+)

### Modify Contact Information
Edit in `config.js`:
```javascript
contact: {
    address: { street, city, state, zip, country },
    phone: { number, display },
    email: { address, display }
}
```

### Update Social Links
```javascript
socialLinks: {
    facebook: 'https://facebook.com/your-page',
    twitter: 'https://twitter.com/your-handle',
    instagram: 'https://instagram.com/your-handle',
    linkedin: 'https://linkedin.com/company/your-company'
}
```

## 🎬 Page Loader

The page loader displays for 2 seconds by default. To modify:

Edit `assets/js/script.js` line 7:
```javascript
setTimeout(function() {
    $('#pageLoader').fadeOut(800);
}, 2000);  // Change this value (in milliseconds)
```

## 📧 Email Subscription

The form validates and shows success notifications. To connect to your backend:

Edit `handleSubscriptionForm()` in `assets/js/script.js`

## 🌐 Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile Browsers (iOS Safari, Chrome Mobile)

## 📦 Dependencies

- Bootstrap 5.3.0 (CDN)
- jQuery 3.6.0 (CDN)
- Font Awesome 6.4.0 (CDN)

## 💡 Tips

1. Use [Coolors.co](https://coolors.co) to find your brand colors
2. Get icons from [Font Awesome](https://fontawesome.com)
3. Find images at [Unsplash](https://unsplash.com) or [Pexels](https://pexels.com)
4. Add custom fonts from [Google Fonts](https://fonts.google.com)
5. Track visitors with Google Analytics

## 📄 License

Free to use for personal and commercial projects.

## 🤝 Support

Check code comments for detailed explanations.

## 👨‍💻 Developed by

**Plover Technologies** - Professional Web Solutions

---

**Version:** 1.0  
**Last Updated:** May 2026