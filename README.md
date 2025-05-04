# Indicina URL Shortener

This is a **URL Shortener** web application built with [Next.js](https://nextjs.org), React, and TypeScript. It allows users to create short, easy-to-share links from long URLs, search and manage their links, and copy short URLs to the clipboard. The app uses a Trie data structure for efficient client-side search and is styled with Tailwind CSS.

---

## Features

- **Shorten URLs:** Instantly generate a short link for any long URL.
- **Copy to Clipboard:** Easily copy your short URL with one click.
- **Search URLs:** Fast, prefix-based search using a Trie for autocomplete and filtering.
- **Responsive UI:** Clean, modern design with Tailwind CSS.
- **Error Handling:** User-friendly error messages and loading states.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [pnpm](https://pnpm.io/) package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dominic-source/indicina_shortUrl_front.git 
   cd indicina_shortUrl_front
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   pnpm dev
   ```

4. **SetUp Backend:**
   Visit [http://localhost:4000](http://localhost:4000) to check if backend is setup.

5. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to use the app.

---

## Project Structure

```
src/
  app/           # Next.js app directory (routing, pages)
  components/    # Reusable React components (UrlList, UrlItem, CreateUrlForm, SearchBar)
  lib/           # Utility libraries (fetchUtil, trieSearch, apiClient)
  styles/        # Global styles
```

---

## Usage

- **Shorten a URL:**  
  Enter a long URL in the input field and click "Shorten URL". The short URL will be displayed and can be copied to your clipboard.

- **View All URLs:**  
  Go to the `/urls` page to see all your shortened URLs.

- **Search:**  
  Use the search bar to filter your URLs by prefix (minimum 3 characters).

---

## Technologies Used

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [date-fns](https://date-fns.org/) (for date formatting)
- [lodash.debounce](https://lodash.com/docs/4.17.15#debounce) (for debounced search)
- Custom Trie implementation for fast search

---

## Deployment

The easiest way to deploy your Next.js app is with [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

For more deployment options, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---
