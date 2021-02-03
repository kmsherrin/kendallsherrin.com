---
title: Easy Responsive Grid with CSS
date: 2020-12-09T12:51:00.000Z
---

Quick and simple guide for understanding how to leverage CSS grid for making responsive layouts, that will only take minutes.

<!-- more -->

>Say goodbye to Bootstrap grid system 😋

This article runs through how to make a responsive layout that targets both desktop and mobile in only a few minutes. The browser requirements are listed on [this W3 page](https://www.w3schools.com/css/css_grid.asp).


In the spirit of wasting no time, the code for the example shown is directly follows.


# Example

The following image is the layout that we will create. The exact sizing and content can be easily changed from the example.

## Desktop Screen
![Desktop Example Layout](https://github.com/kmsherrin/readme_pictures/blob/main/nav_layout.png?raw=true)

## Mobile Screen

![Mobile Example Layout](https://github.com/kmsherrin/readme_pictures/blob/main/nav_layout_mobile.png?raw=true=500x1000)


# Full Markup and Styling

HTML markup for the example shown, which is extremely minimal:

```html
<div class="grid-container">
  <nav id="navbar">Navbar</nav>
  <main id="main">Main</main>
  <div id="sidebar">Sidebar</div>
  <div id="content1">Content1</div>
  <div id="content2">Content2</div>
  <div id="content3">Content3</div>
  <footer id="footer">Footer</footer>
</div>
```

The CSS follows:
```css
.grid-container {
  display: grid;
  height: 99vh;

  grid-template-columns: 1fr 1fr 1fr 1fr; /* Sets 4 equal fractional columns  */
  grid-template-rows: 0.2fr 1.5fr 1.2fr 0.3fr; /* Sets 4 differently sized rows */
  grid-template-areas:
    "nav nav nav nav"
    "sidebar main main main"
    "sidebar content1 content2 content3"
    "sidebar footer footer footer";
  grid-gap: 0.5rem;

  font-size: 26px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #fdfdfd;

  text-transform: uppercase;
  text-align: center;
}

#nav {
  background: #4aa09e;
  grid-area: nav;
}

#main {
  background: #628395;
  grid-area: main;
}

#sidebar {
  background: #3EC9C7;
  grid-area: sidebar;
}

#content1 {
  background: #108F8D;
  grid-area: content1;
}

#content2 {
  background: #5DB1DE;
  grid-area: content2;
}

#content3 {
  background: #5EABAA;
  grid-area: content3;
}

#footer {
  background: #99E0DF;
  grid-area: footer;
}

@media only screen and (max-width: 550px) {
  .grid-container {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1.2fr 1.2fr 1fr;
    grid-template-areas:
      "nav"
      "sidebar"
      "main"
      "content1"
      "content2"
      "content3"
      "footer";
  }
}
```
The code above will give you a similar output to the screenshot in the article. For shortening the CSS, I removed the padding and border-radius from each of the children elements. 

# Explanation

## CSS Grid

In the example all of the content children are kept in the parent container, which has a display mode of grid. 
```css 
.grid-container {
  display: grid; 
}
```
When an element has the grid layout method, there is a number of ways to specify the positioning of children. Specifially for grid, this can be done through [auto placement](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns), [templating](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns), [named areas](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area) and [column/row assignment](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column). 

For this example, the templating of columns and rows is used and to introduce desktop to mobile responsive design the named areas functionality is leveraged. 


## Implementation
By making use of the two grid layout functionalities it can be extremely easy to produced the desired element positionings. Firstly, the usage of grid templating allows both column and row size to be precisely dictated relative to the whole. Then secondly using named areas, we can specify the overall layout both for desktop and mobile.

<br>

### Grid Templating
Within the grid-container div there are two grid templating rules, one dictates the column - the other does the rows.

For each there are 4 values provided, mapping to 4 columns and 4 rows. The value for each specifies the sizing (x width for cols, y height for rows), which can be provided in many units: fr (grid fraction), px (pixels), % (percent of parent).

```css
.grid-container {
  grid-template-columns: 1fr 1fr 1fr 1fr; /* Sets 4 equal fractional columns  */
  grid-template-rows: 0.2fr 1.5fr 1.2fr 0.3fr; /* Sets 4 differently sized rows */
}
```
### Grid Area Naming
With the grid templating sorting out the relative sizing of columns and rows, we can use the naming system to assign elements to locations of the grid. You will see that the layout of the grid is specified in plain text with the names of the areas that we want to place.

However, it is important to note that these names are not the element id or class, but are specified with a <i>grid-area</i> CSS rule.

```css
.grid-container {
  grid-template-areas:
    "nav nav nav nav"
    "sidebar main main main"
    "sidebar content1 content2 content3"
    "sidebar footer footer footer";
}
```
Assigning the name to the classes with the CSS rule, <i>grid-area</i>.
```css
#nav {
    grid-area: nav;
}
```

## Making it Responsive
With CSS media queries the grid layout can be made to be responsive and change structure on a different size screen. By following the same approach to putting the desktop layout together a mobile layout can be easily created.

Instead of having a 4 x 4 column/row layout, the mobile will only have 1 column and have child in a new row. The templated column and rows can be specified as follows.

The grid template areas are listed in the order that we require the layout in. 

```css
@media only screen and (max-width: 550px) {
  .grid-container {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1.2fr 1.2fr 1fr;
    grid-template-areas:
      "nav"
      "sidebar"
      "main"
      "content1"
      "content2"
      "content3"
      "footer";
  }
}
```

# Extras


## Visualise Grid

In Firefox developer edition the boundaries of grid layouts can be toggled on, this can be useful for understanding where each child is sitting in the layout.

![Grid Visualised](https://github.com/kmsherrin/readme_pictures/blob/main/nav_layout_desktop_gridviz2.png?raw=true)

<br> 

## Two for One
In this example, we used both grid-templating and grid-areas for making the design responsive. This is the proper approach, however CSS provides a slight shorthand for when combining the two grid-template.

This allows us to combine the template columns/rows rules with the template-area rule.

Given our example layout (just the desktop for now):
```css
.grid-container {
  grid-template-columns: 1fr 1fr 1fr 1fr; /* Sets 4 equal fractional columns  */
  grid-template-rows: 0.2fr 1.5fr 1.2fr 0.3fr; /* Sets 4 differently sized rows */
  grid-template-areas:
    "nav nav nav nav"
    "sidebar main main main"
    "sidebar content1 content2 content3"
    "sidebar footer footer footer";
}
```

This could be shortened to:
```css
.grid-container {
  grid-template:
    "nav nav nav nav" 0.2fr
    "sidebar main main main" 1.5fr
    "sidebar content1 content2 content3" 1.2fr
    "sidebar footer footer footer" 0.3fr
    / 1fr 1fr 1fr 1fr;
}
```

Notice the similarities between the expanded form and the shortened form. In the shortened form, the grid row template size is specified after each plain text row. For the column widths these are placed at the end. 
