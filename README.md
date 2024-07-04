# DataViz - Interactive Data Visualization Dashboard (STILL UNDER DEVELOPMENT)

DataViz is a powerful and visually stunning data visualization tool built with React. It transforms complex data into beautiful, interactive charts and graphs, helping users make data-driven decisions with confidence.

## Features

- Interactive and responsive dashboard
- Multiple chart types (bar, line, pie)
- Real-time data updates
- Customizable designs
- Smooth animations and transitions
- Parallax scrolling effects
- Custom cursor animation

## Technologies Used

- React
- GSAP (GreenSock Animation Platform)
- Locomotive Scroll
- ApexCharts
- Papa Parse (for CSV parsing)

## Some Screenshots
<img width="1552" alt="Screenshot 2024-07-04 at 10 29 49 AM" src="https://github.com/Rishi-Sudhakar/Data-Viz/assets/79398572/91e1c85e-44d5-4c71-b5e6-2120cd45b505">
<img width="1552" alt="Screenshot 2024-07-04 at 10 30 17 AM" src="https://github.com/Rishi-Sudhakar/Data-Viz/assets/79398572/80bc830b-763b-4062-bed1-4ef9f1cfab71">

### The Data visualisation part (Dashboard) is still under Development.

<img width="1552" alt="Screenshot 2024-07-04 at 10 30 42 AM" src="https://github.com/Rishi-Sudhakar/Data-Viz/assets/79398572/a763ef06-9a18-4d1f-9e8f-3fe68c156336">

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Rishi-Sudhakar/Data-Viz.git
   cd Data-Viz
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Place your data.csv file in the `public` folder.

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and visit `http://localhost:3000` to view the application. (It'll just redirect you anyway)

## Project Structure

```
dataviz/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── manifest.json
│   └── data.csv
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── Dashboard.js
│   │   ├── About.js
│   │   ├── Footer.js
│   │   └── CustomCursor.js
│   ├── styles/
│   │   ├── App.css
│   │   ├── Header.css
│   │   ├── Hero.css
│   │   ├── Dashboard.css
│   │   ├── About.css
│   │   ├── Footer.css
│   │   └── CustomCursor.css
│   ├── utils/
│   │   └── chartConfigs.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Customization

- To modify the color scheme, edit the CSS variables in `src/styles/App.css`.
- To add or modify charts, update the `src/components/Dashboard.js` file and the chart configurations in `src/utils/chartConfigs.js`.
- To change the content of the About section, edit the `src/components/About.js` file.

## Deployment

To build the project for production, run:

```
npm run build
```

This will create a `build` folder with optimized production-ready files that you can deploy to your hosting provider. 

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [React](https://reactjs.org/)
- [GSAP](https://greensock.com/gsap/)
- [Locomotive Scroll](https://locomotivemtl.github.io/locomotive-scroll/)
- [ApexCharts](https://apexcharts.com/)
- [Papa Parse](https://www.papaparse.com/)
