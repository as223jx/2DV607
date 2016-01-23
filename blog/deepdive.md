# Simple UI using Webix
## Introduction
Webix is an easy to learn JavaScript and HTML5 framework aiming to provide a simple way of developing web applications with a highly responsive user interface. The framework is aimed at both beginner and advanced JS developers, so being a beginner myself, I thought this framework would be interesting to look into. 
According to their official website, it is well-documented and fast to use even with large datasets and provides a desktop-like experience on the web. It also integrates with Backbone.js, Angular.js and jQuery.

The Webix UI library contains more than 70 components that can be customized to help the developer build their user interface in many different ways. 

Webix provides different layouts, such as:
**form, regular layout, multiview, toolbar, scrollview**

Data components, such as:
**chart, datatable, list, trees**

Other types of components, such as:
**context, menu, popup, video, calendar, uploader**

And controls, such as:
**button, label, checkbox, slider, colorpicker**
etc.

The reason I chose to look into Webix was that I wanted to find something that could help me, who is not very experienced when it comes to front-end development, to create simple but good looking user interfaces, which Webix promises to help with.

## Licenses
There are some different licenses available for Webix, with the free one (standard version) containing 72 UI widgets. Then, there are three other licenses: **developer pack** ($469), **team pack** ($1299) and **enterprise pack** ($3999). I won’t go into all differences (they can be found here), but some things differences include support (by the Webix development team themselves!) and additional UI widgets.

## Getting started

Getting started with Webix is very simple. The first thing you need to do is to create a basic HTML5-page, and include two Webix files from Webix CDN, by adding:

```
<link rel="stylesheet" href="http://cdn.webix.com/edge/webix.css" type="text/css"> 
<script src="http://cdn.webix.com/edge/webix.js" type="text/javascript"></script>  
```

Using older versions of Webix, if needed, is possible too.

So, a simple HTML to start with will look like this:

```
<!DOCTYPE HTML>
<html>
    <head>
    <link rel="stylesheet" href="http://cdn.webix.com/edge/webix.css" type="text/css"> 
    <script src="http://cdn.webix.com/edge/webix.js" type="text/javascript"></script>  
    </head>
    <body>
        <script type="text/javascript" charset="utf-8">
 
        // Coding will happen here!

       </script>
    </body>
</html>
```

It is also possible to install Webix locally by using the package managers Nuget or Bower:
```
nuget install Webix
bower install webix
```

Simple Webix code
All Webix components are placed within a constructor: 

```
webix.ui().

webix.ready(function(){
    webix.ui({
        // webix components
    });
});
```


(**webix.ready()** can be used to make sure that the code is executed when the page loading is complete, but I will omit that for the examples below. Now you know it’s a thing, though!)

The basic idea of Webix is making layouts in a simple manner using some of their many available components. The components are objects that can be assigned a type by using a view property. I will show how to make a very simple layout by using rows and cols, which can easily be built into something more useful later.

I simply add the following to our **webix.ui()**:

```
webix.ui({
    rows:[
		{ template:"A" },
		{ template:"B" }
	]
});
```

Whatever I write in the template property will be written in that component.
This will, in other words, get us a layout looking like this:

|A|
|-
|B|

Changing rows to cols would make the layout change to:
|A|B|
|-|-|

Using both rows and cols to split the left column into two rows:
```
webix.ui({
	cols:[
		{rows:[
			{ template:"A" },
			{ template:"B" }
		]},
		{template:"C"}
	]
});
```


## More about components
The different available Webix components contain a bunch of different methods and properties to allow. All these different methods gives the developer a lot of different tools and options.

Let’s add some code to get it closer to look like an actual website!
By adding a type with the value **header**, we can make a row into a header. I also changed the width of the first column to 200px. This makes the other column automatically fill out the rest of the page.

![alt text](http://i.imgur.com/JZVR5gx.png "Amazing website")

*This could totally already pass for an actual website.. R-right?*

To try out some Webix coding, you can start off quickly by editing [directly on their website](http://webix.com/snippet/). Then, everything else you need can be found at their really great [docs page](http://docs.webix.com/). I like it because it is easy to navigate and the information is easy to understand. You can see what types of different components exist, what methods, properties and events they contain, and several samples for all of them.

To try out more of these components myself, I added some simple code to achieve the following simple layout by using a form, button and datatable:

![alt text](http://i.imgur.com/Tj9OHvg.png "Even more amazing website!")

Code for this:

```
webix.ui({
	rows:[
		{type:"header",template:"This is now a header!"},
		{cols:[
			{rows:[
				{ view:"form", id:"form", width: 200, elements:[
				{ view:"text", name:"name", placeholder:"Name", width:180, align:"center"},  
				{ view:"text", name:"age", placeholder:"Age", width: 180, align:"center"},
				{ view:"button", value:"Add", width:60, click:"add" }
			]},
				{ template:"Some text here, maybe!" }
			]},
			{view:"datatable", id:"datatable",
				columns:[
					{ id:"name", header:"Name"},
					{ id:"age", header:"Age"},
					{ fillspace:true }
				],
				data: [
					{ name:"Alexandra", age:22},
					{ name:"Steve", age:98}
				]
			}	
		]}
	]
});

function add(){
	$$("datatable").add({
		name: $$("form").getValues().title,
		age: $$("form").getValues().year,
	})
}	
```

As you can see from the code, I’ve only used a few properties and id’s, and an on-click event by creating a simple function. You can do a lot, lot more with the different Webix components. Just go to [this website](http://docs.webix.com/desktop__components.html), pick and choose from the different components, and try them out!

## Summary
For someone who doesn’t want to write a lot of HTML and CSS, Webix seems like a great option. Also, for me who isn’t very knowledgeable within web development, I felt like this could be a fun framework to use and play around with, which it was! My own experience with HTML and CSS has resulted in various issues when trying to adjust my code to look good on different devices, which Webix boasts to fix for you. Unfortunately I can’t compare Webix to other frameworks as I have very little experience, and I don’t know how this framework would help someone looking to create something much more complicated, but if you’re looking to create a simple and nice-looking layout that adjust great to different devices and screen sizes, this seems like a good option.
