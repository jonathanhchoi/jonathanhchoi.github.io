# Personal Website - Jonathan H. Choi

A modern, responsive personal website showcasing research and code projects in legal technology and computational law.

## 🚀 GitHub Pages Deployment Instructions

Follow these detailed steps to deploy your website on GitHub Pages:

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in to your account
2. Click the **"+"** icon in the top right corner and select **"New repository"**
3. **IMPORTANT**: Name your repository exactly as `[your-username].github.io`
   - For example, if your GitHub username is `johnsmith`, name it `johnsmith.github.io`
   - This special naming convention tells GitHub to host it as your personal website
4. Set the repository to **Public** (GitHub Pages requires public repos for free accounts)
5. Do NOT initialize with README, .gitignore, or license (since we already have files)
6. Click **"Create repository"**

### Step 2: Upload Your Website Files

#### Option A: Using GitHub Web Interface (Easiest)
1. After creating the repository, click **"uploading an existing file"** link
2. Drag and drop ALL the files from this folder:
   - `index.html`
   - `code.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. Write a commit message like "Initial website upload"
4. Click **"Commit changes"**

#### Option B: Using Git Command Line
1. Open terminal/command prompt in this folder
2. Run these commands:
```bash
git init
git add .
git commit -m "Initial website upload"
git branch -M main
git remote add origin https://github.com/[your-username]/[your-username].github.io.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **"Settings"** tab (in the repository, not your profile settings)
3. Scroll down to **"Pages"** section in the left sidebar
4. Under **"Source"**, select **"Deploy from a branch"**
5. Under **"Branch"**, select **"main"** (or "master" if that's your default)
6. Leave the folder as **"/ (root)"**
7. Click **"Save"**

### Step 4: Access Your Website

1. GitHub will take 5-10 minutes to build and deploy your site
2. Your website will be live at: `https://[your-username].github.io`
3. You can check the deployment status in the **"Actions"** tab of your repository

## 📝 Customization Needed

Before deploying, you should update these placeholders with your actual information:

### In `index.html`:
- Replace "Jonathan H. Choi" with your name
- Update the bio and description with your information
- Add your actual social media links (GitHub, LinkedIn, Twitter, Email)
- Update the research projects with your actual projects

### In `code.html`:
- Replace project descriptions with your actual projects
- Add real GitHub repository links
- Update project years and technologies used
- Add links to your actual papers and documentation

### Social Media Links:
Search for `href="#"` in both HTML files and replace with your actual links:
- GitHub: `https://github.com/[your-username]`
- LinkedIn: `https://linkedin.com/in/[your-profile]`
- Twitter: `https://twitter.com/[your-handle]`
- Email: `mailto:your-email@example.com`

## 🔧 Optional: Custom Domain

If you want to use a custom domain (like `www.yourname.com`):

1. Purchase a domain from a registrar (Namecheap, GoDaddy, Google Domains, etc.)
2. In your repository, create a file named `CNAME` (no extension)
3. Add your domain name to this file (e.g., `www.yourname.com`)
4. Configure your domain's DNS settings:
   - Add a CNAME record pointing to `[your-username].github.io`
   - Or add A records pointing to GitHub's IP addresses (see GitHub docs for current IPs)

## 📁 Files Included

- `index.html` - Main homepage
- `code.html` - Projects and code portfolio page  
- `styles.css` - All styling and responsive design
- `script.js` - Interactive features and animations
- `README.md` - This file with instructions

## 🎨 Features

- Fully responsive design (mobile, tablet, desktop)
- Smooth scrolling navigation
- Interactive hover effects
- Clean, modern aesthetic
- Fast loading and optimized performance
- No external dependencies (except Font Awesome icons)

## 🛠️ Making Changes

After initial deployment, to make changes:

1. Edit the files locally
2. If using GitHub web interface:
   - Go to the file in your repository
   - Click the pencil icon to edit
   - Make changes and commit
3. If using Git:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
4. GitHub Pages will automatically update within a few minutes

## ❓ Troubleshooting

- **Site not loading?** 
  - Check that repository name is exactly `[username].github.io`
  - Wait 10-15 minutes after first deployment
  - Check GitHub Pages settings are enabled

- **Changes not showing?**
  - Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
  - Wait 5-10 minutes for GitHub to rebuild

- **404 Error?**
  - Ensure `index.html` is in the root directory
  - Check file names are lowercase
  - Verify GitHub Pages source settings

## 📧 Need Help?

If you encounter any issues, check:
1. GitHub Pages documentation: https://docs.github.com/en/pages
2. Your repository's Actions tab for build errors
3. GitHub Status page: https://www.githubstatus.com/

## 📄 License

Feel free to use this template for your own personal website!

---

Last updated: 2024