# Rebuilding Hulu
Recreating the front-end of one of the most popular video on demand services, Hulu (currently over [46 million paying users](https://www.statista.com/statistics/258014/number-of-hulus-paying-subscribers/)).

**Link to project:** https://hulu-kappa-mauve.vercel.app/

<img width="1402" alt="CleanShot 2022-10-06 at 22 16 05@2x" src="https://user-images.githubusercontent.com/102596893/194399656-e76cc1f1-cd8c-491e-b6e4-ebc0c4d63c0b.png">



## How It's Made:

**Tech used:** ReactJS, NextJS, TailwindCSS, The Movie Database (TMBD) API

## Lessons Learned:

* Setting up a modern project using React, Next and Tailwind
* Building a fully responsive application with Tailwind (mobile, tablet, monitor and 4k+)
* Creating icon animations using Tailwind
* Creating a fading-out effect for overflowing movie navigation bar items with the help of the "tailwind-scrollbar-hide" npm package
* Creating a small fade-in effect when switching between pages with the help of the "react-flip-move" npm package
* Using NextJS to load our fetched movies on the server-side and optimize overall user performance
* Using NextJS's lazy image loading feature
* Using NextJS's routing features
* Working with environment variables



## Optimizations: 
**Convert the build into a fullstack application**

* Create a sign-in/sign-up flow
* Save, retrieve and create lists of favorited movies for authenticated users
* Create individual movie pages where the movie trailer is shown using the Youtube API
* Enable authenticated users to share their individual favourited movie list
