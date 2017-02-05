# Simple Filter plugin

Small JavaScript plugin that can help you filter through a set of blocks.

[LIVE DEMO](https://mariuslazar93.github.io/plugins/filter/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* jQuery > 1.4.3

### How it works

Based on the simplified HTML structure:

```html
<section class="filter-component">
	<div class="filter-controls">
    	<a href="#" class="filter-control highlight" data-filter="filter-all">all</a>
    	<a href="#" class="filter-control" data-filter="filter-blog">blog</a>
    	...
    </div>
    <div class="filter-gallery" data-filter="filter-all">
    	<div data-filter-type="filter-blog">
        	<h2>Positive thinking</h2>
         	<p>...</p>
        </div>
        ...
    </div>
</section>
```

The `data-filter` attribute on the element with the `filter-gallery` class will contain what should be filtred.

In the example above, `data-filter` equals `filter-all` which will show all the elements inside `filter-gallery`. If `data-filter` would be equal to `filter-blog`, than only the elements with `data-type-filter="filter-blog"` would be visible.

When a control button is clicked, the `data-filter` attribute on the element with the `filter-gallery` class is replaced by the value of the `data-filter` attribute coresponding to the control. In CSS, all the blocks inside `filter-gallery` are hidden, except the ones that have the value of the `data-filter-type` attribute contained inside the `data-filter` attribute of the parent wrapper (element with `filter-gallery` class).

### Usage


1. In HTML, declare the parent component.

```html
<section class="filter-component">
...
</section>
```

2. Inside the parent component, declare the control filtering buttons. Each control should have a specific class (**if using the default plugin config, then add the `filter-control` class**) and a `data-filter` attribute which specify what category it should filter when it is clicked. The active control when the page load should have the `highlight` class.

```html
<div class="filter-controls">
    <ul class="list-inline list-unstyle">
        <li><a href="#" class="filter-control highlight" data-filter="filter-all">ALL</a></li>
        <li><a href="#" class="filter-control" data-filter="filter-blog"><span>BLOG</span></a></li>
        <li><a href="#" class="filter-control" data-filter="filter-news"><span>NEWS</span></a></li>
        <li><a href="#" class="filter-control" data-filter="filter-social"><span>SOCIAL</span></a></li>
    </ul>
</div>
```

3. Inside the parent component, declare a wrapping element for all the blocks you need to filter. This element should have a specific class (**if using the default plugin config, then add the `filter-gallery` class**) and a `data-filter` attribute equal to the category you want to filter when the page loads. Usually it will be equal to `filter-all`. This `data-filter` attribute will be used to filter its children blocks.

```html
<div class="filter-component">
  <div class="filter-controls">
	...
  </div>
  <div class="filter-gallery" data-filter="filter-all">
  	...
  </div>
</div>
```

3. Inside the previous element, declare the blocks that need to be filtered. Each elemet should have a `data-filter-type` attribute equal to the category it represents.

```html
<div class="filter-gallery" data-filter="filter-all">
    <div data-filter-type="filter-blog">
        <h2 class="category">blog</h2>
    </div>
    <div data-filter-type="filter-news">
        <h2 class="category">news</h2>
    </div>
    <div data-filter-type="filter-social">
        <h2 class="category">social</h2>
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
.filter-gallery[data-filter='filter-all'] [data-filter-type] {
    opacity: 1;
    transform: scale(1);
    transition: 1s ease all;
}
```

5. In CSS, declare the style of the filtered blocks when they are visible.

```css
.filter-gallery[data-filter*='filter-blog'] [data-filter-type='filter-blog'],
.filter-gallery[data-filter*='filter-news'] [data-filter-type='filter-news'],
.filter-gallery[data-filter*='filter-social'] [data-filter-type='filter-social']  {
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
<script src="js/_simpleFilter.min.js"></script>
```

8. Initialize the plugin.

```javascript
$(function(){
	var filterComponent = new FilterComponent();
});
```

## Configuration

* `component` - the class selector of the parent component
* `elementsContainer` - the class selector of the filter blocks wrapping element
* `controls` - the class selector of each control button

### Default configuration

```javascript
var defaults = {
		component: '.filter-component',
        elementsContainer: '.filter-gallery',
        controls: '.filter-control'
    };
```

### Changing the defaults

You can specify your own configuration which will override the default one when you initialize the plugin.

```javascript
$(function(){
	var filterComponent = new FilterComponent();

    var filterComponent2 = new FilterComponent({
        component: '.js-filter-comp',
        elementsContainer: '.js-filter-gallery',
        controls: '.js-filter-control'
    });
});
```

## Example

[LIVE DEMO](https://mariuslazar93.github.io/plugins/filter/)

You can also clone or download this repo locally and open index.html inside a browser.

**_Please use a modern browser because the current example uses flexbox for the minimal page styling._**

## Next steps

- [x] Make plugin customizable at initialization
- [x] Allow multiple instantiation
- [ ] Add the `single-filtering` feature, which should allow to filter by just one category (deselecting the of the other ones)
- [ ] Complete replace of jQuery with vanilla JavaScript

## Authors

* **Marius Lazar**

## License

This project is licensed under the MIT License

## Acknowledgments

* **Ionut Iancau**
