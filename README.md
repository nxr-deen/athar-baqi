# Athar Baqi - Quranic Recitations and Education

## About the Project

**Athar Baqi** is an Islamic educational platform aimed at spreading the Holy Quran and its sciences by providing high-quality Quranic recitations and diverse educational materials. The project seeks to deliver Quranic and educational content with a modern, user-friendly interface and responsive design for various devices.

## Key Features

- **Quranic Recitations**: A diverse library of Quranic recitations with different voices and high quality
- **Educational Content**: Lessons and educational materials in Quranic sciences and Tajweed
- **Articles**: Various articles addressing different Islamic topics
- **Responsive Design**: A responsive user interface that works on all devices
- **Arabic Language Support**: Complete design compatible with Arabic language and RTL direction

## Technologies Used

- **Next.js**: React framework for modern applications
- **TypeScript**: For writing safe and maintainable code
- **CSS Modules**: For organizing and styling the interface
- **Font Awesome**: For using icons
- **Google Fonts**: For using the Tajawal Arabic font

## Requirements

- Node.js (version 18 or newer)
- pnpm (npm or yarn can also be used)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/athar-baqi.git
cd athar-baqi
```

2. Install required libraries:

```bash
pnpm install
# or
npm install
```

3. Run the application in development mode:

```bash
pnpm dev
# or
npm run dev
```

4. Open your browser at: [http://localhost:3000](http://localhost:3000)

## Production Build

```bash
pnpm build
# or
npm run build
```

Then run the built version:

```bash
pnpm start
# or
npm start
```

## Project Structure

```
app/
  ├── globals.css         # Main CSS file
  ├── layout.tsx          # Main application layout
  ├── page.tsx            # Home page
  ├── about/              # About us page
  ├── articles/           # Articles page
  ├── education/          # Education page
  ├── quran/              # Recitations page
  └── support/            # Support page
components/               # Interface components
  ├── footer.tsx          # Page footer
  ├── header.tsx          # Page header
  ├── newsletter.tsx      # Subscription form
  ├── page-title.tsx      # Page title
  ├── social-media.tsx    # Social media
  └── ui/                 # Basic UI components
```

## Future Projects

- Developing a mobile application
- Translating content into several languages
- Recording high-quality recitations
- Developing an interactive learning platform

## Contributing to the Project

We welcome your contributions to the development of the project. Please follow these steps:

1. Fork the project
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make the required changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## License

This project is licensed under the [MIT License](LICENSE)
