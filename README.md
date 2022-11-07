# Hello everyone! 

Today I will be showing how to create a super simple temperature converter using only HTML, CSS, and a little bit of JavaScript. If by chance you get lost, feel free to look at the demo I have included within the README file.

## HTML Step 1: Template
We must start by implementing our !D0CTYPE into our HTML file. If you are on VSCode you can type and enter "!" into your .HTML file and an automated template will appear like so:

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Temperature Converter</title>
</head>
<body>
    
</body>
</html>
```

Once you have your basic template the second thing we need to is link our CSS, and JavaScript file to your HTML. Of course you should have an assets folder, outside of your HTML file to contain your CSS file and JavaScript file. Now , under '<title>Temperature Converter</title>' paste these commands:

```HTML
    <link rel="stylesheet" href="assets/style/style.css" media="screen"> 
    <script src="assets/script/index.js" defer></script>
```

Our code should look something like this: 

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Temperature Converter</title>
    <link rel="stylesheet" href="assets/style/style.css" media="screen"> 
    <script src="assets/script/index.js" defer></script>
</head>
<body>
    
</body>
</html>
```


## HTML Step 2: Basic formatting

Now we got all the essentials out of the way, lets start creating our converter. Lets first start with creating our section with the following classes shown below, and a form with two input types. First one being type="text" and second one being type="button". Classes and names can be changed to your liking.

```HTML
<section class="temperature container">
    <h1 class="title">Temperature Converter</h1>
        <form>
            <input type="text" class="enternumber" value="Enter your number">
            <input type="button" class= "result" value="Result">
        </form>
</section>
```

Next we will create another another section (or a div) to contain our two radio buttons. These radio buttons will allow the user to switch between celcius and fahrenheit.