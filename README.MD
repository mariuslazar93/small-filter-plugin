# Filter plugin

Small JavaScript plugin that can help you filter through a set of blocks by selecting one or more categories.

[LIVE DEMO](https://mariuslazar93.github.io/plugins/filter/) 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* jQuery > 1.4.3

### Usage


1. In HTML, declare the parent component.

```html
<section class="filter-component">
...
</section>
```

2. Inside the parent component, declare the control filtering buttons. Each control should have the `.filter-control` class and a `data-filter` attribute which specify what it should filter when it is clicked. Also, each control should have a wrapping parent that can get the `.highlight` class whenever it is active.

```html
<div class="filter-controls">
    <ul class="list-inline list-unstyle">
        <li class="highlight"><a href="#" class="filter-control" data-filter="filter-all">ALL</a></li>
        <li><a href="#" class="filter-control" data-filter="filter-blog"><span>BLOG</span></a></li>
        <li><a href="#" class="filter-control" data-filter="filter-news"><span>NEWS</span></a></li>
        <li><a href="#" class="filter-control" data-filter="filter-social"><span>SOCIAL</span></a></li>
    </ul>
</div>
```

3. Inside the parent component, declare the blocks that need to be filtered with a `data-filter-type` attribute equal to the category of the current block.. Wrapped all those blocks inside an element with `.filter-gallery filter-all` classes. The `filter-all` class represents the initial state, meaning that all the blocks will be initially visible.

```html
<div class="filter-gallery filter-all">
    <div class="filter-block" data-filter-type="blog">
        <span class="category">blog</span>
        <h2>Lorem ipsum dolor</h2>
        <span class="date"><em>09/10/2016  -  10:35</em></span>
        <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div class="filter-block" data-filter-type="news">
        <span class="category">news</span>
        <h2>Lorem ipsum dolor</h2>
        <span class="date"><em>09/10/2016  -  10:35</em></span>
        <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
</div>
```

4. In CSS, declare the state of all the filtered blocks when they are not visible. (maybe you want to `display: none` or to make them a little opaque `opacity:0.7`).

```css
.filter-gallery [data-filter-type] {
    opacity: 0.2;
    transform: scale(0);
    transition: 0.5s ease all;
}
```

5. In CSS, declare the state of the filtered blocks when all are visible.

```css
.filter-gallery.filter-all [data-filter-type] {
    opacity: 1;
    transform: scale(1);
    transition: 1s ease all;
}
```

5. In CSS, declare the style of the filtered blocks when they are visible.

```css
.filter-gallery.filter-blog [data-filter-type='blog'],
.filter-gallery.filter-news [data-filter-type='news'],
.filter-gallery.filter-social [data-filter-type='social'] {
    opacity: 1;
    transform: scale(1);
}
```

6. Add jQuery to your page/project.

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
```

7. Add the "_filter.js" file to the page/project.

```
<script src="js/_filter.js"></script>
```

8. Initialize the plugin.

```javascript
FilterComponent.init();
```

## Configuration

For the moment, the plugin have only a default configuration which can be changed only if you modify the JavaScript file by yourself.

### Default configuration

```javascript
var defaults = {
        component: '.filter-component',
        controls: '.filter-control',
        elementsContainer: '.filter-gallery'
    };
```

## Example

Clone or download this repo locally and open index.html inside a browser.

**_Please use a modern browser because the current example uses flexbox for the minimal page styling._**

## Next steps

* Make plugin customizable at initialization
* Add the `single-filtering` feature, which should allow to filter by just one category (deselecting the of the other ones)
* Complete replace of jQuery with vanilla JavaScript

## Authors

* **Marius Lazar**

## License

This project is licensed under the MIT License

## Acknowledgments

* **Ionut Iancau**
