# Hor Chanpheng - Android Developer Portfolio

A modern, responsive portfolio website showcasing Android development skills and projects.

## Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic content
- **Contact Form**: Functional contact form with validation
- **CV Download**: One-click CV download functionality
- **SEO Optimized**: Meta tags and structured content for better search visibility

## Sections

1. **Home**: Hero section with introduction and call-to-action
2. **About**: Personal information and experience statistics
3. **Skills**: Technical skills organized by categories
4. **Projects**: Featured projects with descriptions and technologies
5. **Contact**: Contact information and working contact form

## Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript**: Interactive functionality and animations
- **Font Awesome**: Icons for better visual appeal
- **Google Fonts**: Inter font family for typography

## Setup and Deployment

### Prerequisites

- Node.js (for Firebase CLI)
- Firebase account
- Git (optional)

### Local Development

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

### Firebase Hosting Deployment

1. **Install Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**:
   ```bash
   firebase login
   ```

3. **Initialize Firebase project**:
   ```bash
   firebase init hosting
   ```
   - Select your Firebase project
   - Set public directory as `.` (current directory)
   - Configure as single-page app: `Yes`
   - Don't overwrite existing files: `No`

4. **Deploy to Firebase**:
   ```bash
   firebase deploy
   ```

5. **Your site will be available at**: `https://your-project-id.web.app`

### Customization

#### Personal Information
Update the following in `index.html`:
- Name and title in hero section
- About section content
- Contact information
- Social media links
- Project details

#### Styling
Modify `styles.css` to:
- Change color scheme
- Adjust layout and spacing
- Customize animations
- Update typography

#### Functionality
Enhance `script.js` to:
- Add more interactive features
- Integrate with backend services
- Implement analytics
- Add more animations

## File Structure

```
hor_chanpheng_v2/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── firebase.json       # Firebase hosting configuration
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Optimized images and assets
- CSS and JavaScript minification ready
- Efficient animations using CSS transforms
- Lazy loading for better performance
- Responsive images

## SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Structured data markup ready
- Fast loading times
- Mobile-friendly design

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or suggestions, please contact:
- Email: hor.chanpheng@email.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

---

**Note**: Remember to replace placeholder content with your actual information before deploying!
