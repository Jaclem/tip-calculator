# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS/SCSS
- Flexbox
- Mobile-first workflow
- Vanilla JS

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

This app helped me learn a ton about how JavaScript functions as a language and a lot of the intricacies the language has as a whole. I went from understanding a small amount of JavaScript to understanding a massive amount because of the trial and error I faced when getting this application to work.

```
percentages.forEach(percentage => {
    // removes input from custom percent input if clicked
    percentage.addEventListener('click', () =>{
        inputCustom.value = '';
        (document.querySelector('.clicked')) ? document.querySelector('.clicked').classList.remove('clicked') : '';
        percentage.classList.add('clicked');
    })
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Useful resources

- [How to use Sass](https://www.youtube.com/watch?v=Zz6eOVaaelI&ab_channel=DevEd) - This resource was good not only to learn sass but also to show me to install the sass compiler so that it will work on browser.

- [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container) - This resource as well as a YouTube video or two were ways in which I figured out how to use Flexbox accurately for my content

- [Pulling function from Javascript](https://stackoverflow.com/questions/11813806/javascript-get-a-functions-variables-value-within-another-function) - This resource as well as a few others from stack overflow really showed me how to grab the value created in 1 function and use it in another which proved to be a life saver.

- [Selecting and De-selecting class on button click](https://travis.media/how-to-add-and-remove-a-class-from-list-items-with-pure-javascript/) - This resource helped me figure out a way to uncheck a button using a classList add and remove.

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

