![Maintainer](https://img.shields.io/badge/Maintained%20By-Ananta%20Cloud-purpleblue) [![github pages deployment](https://github.com/anantacloud/docs/actions/workflows/main.yaml/badge.svg)](https://github.com/anantacloud/docs/actions/workflows/main.yaml)

# Docusaurus Documentation Site

This README provides step-by-step instructions to set up a Docusaurus documentation site from scratch.

## Prerequisites

Before you begin, make sure you have **Node.js** and **npm** installed on your system.

### **Check Node.js and npm versions**

```
node -v  # Check Node.js version
npm -v   # Check npm version
```

If Node.js and npm are not installed, download and install them from [Node.js official website](https://nodejs.org/).


## **Creating a Docusaurus Project**

Follow these steps to create and start your documentation site:

### **1. Create a new Docusaurus site**

```
npx create-docusaurus@latest my-documentsite classic
```

This will generate a new Docusaurus project in a folder named `my-documentsite`.

### **2. Navigate into the project directory**

```
cd my-documentsite
```


### **3. Start the development server**

```
npm run start
```

Test on your Local in your browser to see your documentation site running.


## **Project Structure**

```

 📂 my-documentsite/
   ├── 📂 docs/                      # Markdown documentation files
   ├── 📂 developer-docs/            # Markdown documentation files
   ├── 📂 src/                       # Custom React components & assets
   ├── 📂 static/                    # Static files (e.g., images, logos)
   ├── 📄 docusaurus.config.js       # Docusaurus configuration file
   ├── 📄 package.json               # Project dependencies
   ├── 📄 sidebars.js                # Sidebar navigation settings
   ├── 📄 sidebarsDeveloper.js       # Sidebar navigation settings 
   └── 📄 README.md                  # Project instructions

```

### **Run the development server**

```
npm run start
```


### **Build the site for production**

```
npm run build
```

This will generate static HTML files in the `build/` directory.


### **Serve the production build locally**

```
npm run serve
```

## **Customization**

- Modify the site configuration in `docusaurus.config.js`.
- Customize the styles in `src/css/custom.css`.
- Add documentation files in the `docs/` directory.



## **Contributing**

1. Fork the repository
2. Create a new branch (`git checkout -b branch-name`)
3. Commit your changes (`git commit -m "Add your message"`)
4. Push to your Branch (`git push origin branch-name`)
5. Open a Pull Request



Now you're ready to build and customize your Docusaurus documentation site! 🚀



