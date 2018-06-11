# React Router Lab

## Prerequisites

- Nesting components in React
- Familiarity with React Router `<Route>` and `<Link>` components.

## Instructions

Install JavaScript dependencies

```
npm install
```

Run the application

```
npm start
```

Welcome to Color Collector! This is a website where we curate a specific set of colors that we think are super cool. Or warm. Or muted.

1. Looking at the `App` component, you'll see that for each color we write three lines of non-trivial JSX. This is a great opportunity to move this complexity into a `<Color>` component. Create that component and use it in the `App` component. _Don't forget to move the style rules over as well!_

1. Instead of showing just a few colors on one page, we'll show groups of colors on separate pages. So, delete those colors that show up to begin with.

1. The website shows just a few colors on the homepage. Make a `WarmColorsPage` component that renders a few warm colors when a user visits `/warm`. You should use React Router. Read up here on [warm colors](https://www.thespruce.com/understanding-warm-and-cool-colors-1976480) if you're not familiar. Looking for a few warm colors? Check out [Coolors](https://coolors.co/app) and hit the space bar to regenerate colors.

1. Create a `HomePage` component that has a React Router `Link` to the warm colors page.

1. Create a `CoolColorsPage` that renders on `/cool` and shows a few cool colors.

1. Create a `MutedColorsPage` that renders on `/muted` and shows a few muted colors.

## 🚀 Your homework submission should include:

- A pull request created on _this repo_.
- This homework is due 🚨 11PM TONIGHT 6/11 🚨
