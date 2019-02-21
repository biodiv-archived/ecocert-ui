# Ecocert UI

Front-end of ecocert application using

## 🔧 Prerequisites
1. Install [Node.js](https://nodejs.org/)
2. Install [Yarn 🧶](https://yarnpkg.com/)

## 🚀 Quick start

```sh
git clone https://github.com/strandls/ecocert-ui   # Clone Repository
npm install -g yarn                                # Install yarn if not installed
yarn install                                       # Install Dependencies
yarn develop                                       # Start development environment
```

## 🧐 What's inside?
```sh
.
├── gatsby-browser.js    # ⚙ Gatsby broser rendering config
├── gatsby-config.js     # ⚙ Gatsby application config
├── gatsby-node.js       # ⚙ Gatsby Node API's
├── gatsby-ssr.js        # ⚙ Gatsby server-side-rendering config
├── LICENSE
├── package.json
├── README.md
├── src
│   ├── components       # 📦 Reusable Components
│   ├── images           # 📸 Static Images
│   ├── interfaces       # 💀 Skeletons for better TypeScript support
│   ├── modules          # 🗃 Files related to state management
│   │   ├── ducks        # 🦆 Redux duck implementation https://git.io/fhFCF
│   ├── pages            # 📄 Pages
│   ├── styles           # 🦄 theme and global styles
│   └── utils            # 🧩 Reusable functions
├── tsconfig.json        # ✨ TypeScript config file
├── tslint.json          # ✨ TypeScript lint rules
└── yarn.lock
```

## 🚢 Deploying
```sh
yarn build
```