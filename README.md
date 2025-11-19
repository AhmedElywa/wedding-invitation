# 💒 Wedding Invitation Website
## Mahmoud El Shenawy & Nouran Abd El-Rahman
### Wedding Date: January 6, 2025

---

## 🌟 Features
- ✨ Beautiful animated design with floating hearts
- ⏰ Live countdown timer to the wedding day
- 📱 Fully responsive (works on all devices)
- 🎨 Modern gradient design with smooth animations
- 💝 Elegant typography and effects

---

## 📁 Project Files
- `index.html` - Main HTML structure
- `style.css` - All styling and animations
- `script.js` - Countdown timer and interactive features

---

## 🚀 How to Host on GitHub Pages (100% FREE)

### Step 1: Create a GitHub Account
1. Go to https://github.com
2. Click "Sign up" in the top right
3. Follow the steps to create your free account
4. Verify your email address

### Step 2: Create a New Repository
1. After logging in, click the "+" icon in the top right
2. Select "New repository"
3. Name your repository: `wedding-invitation` (or any name you like)
4. Make sure it's set to **Public**
5. Check the box "Add a README file"
6. Click "Create repository"

### Step 3: Upload Your Files
1. In your new repository, click "Add file" → "Upload files"
2. Drag and drop these 3 files:
   - `index.html`
   - `style.css`
   - `script.js`
3. Scroll down and click "Commit changes"

### Step 4: Enable GitHub Pages
1. In your repository, click "Settings" (top menu)
2. Scroll down and click "Pages" in the left sidebar
3. Under "Source", select "main" branch
4. Keep the folder as "/ (root)"
5. Click "Save"
6. Wait 1-2 minutes for deployment

### Step 5: Access Your Website
Your website will be live at:
```
https://YOUR-USERNAME.github.io/wedding-invitation/
```

Replace `YOUR-USERNAME` with your actual GitHub username.

**Example:**
If your username is `mahmoud123`, your site will be:
```
https://mahmoud123.github.io/wedding-invitation/
```

---

## 🎯 Alternative: Use GitHub Desktop (Easier Method)

### Method 1: GitHub Desktop (Recommended for Beginners)

1. **Download GitHub Desktop**
   - Go to https://desktop.github.com
   - Download and install for your operating system

2. **Clone Your Repository**
   - Open GitHub Desktop
   - Click "File" → "Clone repository"
   - Select your wedding-invitation repository
   - Choose where to save it on your computer

3. **Add Your Files**
   - Copy the 3 website files into the cloned folder
   - GitHub Desktop will automatically detect the changes

4. **Commit and Push**
   - In GitHub Desktop, write a commit message: "Added wedding website files"
   - Click "Commit to main"
   - Click "Push origin" to upload to GitHub

5. **Enable GitHub Pages** (follow Step 4 above)

---

## 🛠️ Customization Guide

### Change Wedding Details
Edit `index.html` to update:
- Names (lines with "Mahmoud" and "Nouran")
- Wedding date display (look for "Monday, January 6, 2025")
- Venue information
- Any text content

### Change Wedding Date/Time for Countdown
Edit `script.js`, line 2:
```javascript
const weddingDate = new Date('2025-01-06T18:00:00').getTime();
```
Format: `YYYY-MM-DDTHH:MM:SS`

### Change Colors
Edit `style.css`:
- Main gradient colors: Search for `#667eea` and `#764ba2`
- Replace with your preferred colors

### Add Photos
1. Create an `images` folder in your project
2. Add your photos
3. Edit `index.html` to include:
```html
<img src="images/your-photo.jpg" alt="Our photo">
```

---

## 📱 Testing Your Website Locally

### Option 1: Simple HTTP Server (Python)
```bash
# Navigate to your project folder
cd path/to/wedding-invitation

# Start server (Python 3)
python -m http.server 8000

# Open browser to: http://localhost:8000
```

### Option 2: VS Code Live Server
1. Install VS Code
2. Install "Live Server" extension
3. Right-click `index.html`
4. Select "Open with Live Server"

---

## 🎨 Features Included

### Animations
- ✨ Floating hearts background
- 💫 Sparkle effects
- 🎭 Fade-in and slide-up animations
- 💝 Bouncing icons
- ⭐ Rotating decorative elements

### Responsive Design
- 📱 Mobile-friendly
- 💻 Tablet-optimized
- 🖥️ Desktop-perfect

### Interactive Elements
- ⏰ Real-time countdown
- 🎯 Hover effects
- 📍 Smooth scrolling
- ✨ Mouse movement sparkles

---

## 🔧 Troubleshooting

### Website not showing?
- Wait 5-10 minutes after enabling GitHub Pages
- Check that all 3 files are uploaded
- Ensure repository is set to Public
- Clear your browser cache (Ctrl+F5)

### Countdown not working?
- Check the date format in `script.js`
- Make sure the date is in the future
- Verify JavaScript is enabled in your browser

### Styling looks broken?
- Ensure `style.css` is in the same folder as `index.html`
- Check for typos in file names (case-sensitive)
- View browser console for errors (F12 key)

---

## 🌐 Custom Domain (Optional)

Want a custom domain like `www.mahmoudandnouran.com`?

1. Buy a domain from:
   - Namecheap
   - GoDaddy
   - Google Domains

2. In GitHub repository Settings → Pages:
   - Add your custom domain
   - Follow DNS configuration instructions

---

## 💡 Tips

1. **Share the link** with family and friends
2. **Test on mobile** before sharing
3. **Update regularly** with new information
4. **Back up your files** on your computer
5. **Consider adding** RSVP form with Google Forms

---

## 📧 Adding RSVP (Optional)

### Using Google Forms:
1. Create a form at https://forms.google.com
2. Add questions (Name, Attending?, Number of guests, etc.)
3. Get the embed link
4. Add to `index.html`:
```html
<section class="rsvp-section">
    <h2>RSVP</h2>
    <iframe src="YOUR_GOOGLE_FORM_LINK" width="100%" height="600"></iframe>
</section>
```

---

## 🎉 Congratulations!

Your wedding website is now live and ready to share! 

**Important Dates:**
- Wedding: January 6, 2025
- Countdown starts: Now!

**Share your website:**
- Copy the GitHub Pages URL
- Share on WhatsApp, Facebook, Instagram
- Include in wedding invitations

---

## 📞 Need Help?

If you encounter issues:
1. Check GitHub's documentation: https://docs.github.com/pages
2. Review the troubleshooting section above
3. Search on Google or YouTube for "GitHub Pages hosting"

---

## ❤️ Credits

Created with love for Mahmoud El Shenawy & Nouran Abd El-Rahman

**Technologies Used:**
- HTML5
- CSS3
- JavaScript (Vanilla)
- Google Fonts
- GitHub Pages

---

**Wishing you a lifetime of happiness! 💕**
