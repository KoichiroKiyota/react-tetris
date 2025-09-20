# React テトリス

ReactとTypeScriptで作られたテトリスゲームです。

## 🎮 プレイ

[GitHub Pagesでプレイする](https://kiyota.github.io/react-tetris/)

## 🚀 ローカルで実行

**前提条件:** Node.js

1. 依存関係をインストール:
   ```bash
   npm install
   ```

2. 開発サーバーを起動:
   ```bash
   npm run dev
   ```

3. ブラウザで `http://localhost:5173` を開く

## 📦 ビルド

```bash
npm run build
```

## 🌐 GitHub Pagesで公開

このプロジェクトはGitHub Pagesで自動デプロイされるように設定されています。

### 自動デプロイ（推奨）

1. このリポジトリをGitHubにプッシュ
2. GitHubのSettings > Pagesで「GitHub Actions」を選択
3. mainブランチにプッシュすると自動的にデプロイされます

### 手動デプロイ

```bash
npm run deploy
```

## 🎯 操作方法

- **矢印キー**: ピースの移動・回転
- **下矢印**: 高速落下
- **スペース**: 一気に落下

## 🛠️ 技術スタック

- React 19
- TypeScript
- Vite
- GitHub Actions
- GitHub Pages
