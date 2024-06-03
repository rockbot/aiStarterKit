# AI Starter Kit
aka rockbot is playing around with AI and didn't know where to start, so now she's sharing it with the world. :-D 

## What to expect
I've started playing around a little bit, but I realize there are maybe a lot of other folks who like to write code but are maybe a bit daunted by the constant barrage (and quickly shifting winds!) of AI things. So I'm doing this rather publicly for anyone else who might be interested in following along. I am doing this on my own time, for fun - if you find it helpful, [I am accepting tips](https://buy.stripe.com/8wMeXbfZv6a4gLe8ww). 

Feedback (of the actionable and/or complimentary sort) is welcome - create an issue or send me an email at raquel@rckbt.me. 

I am well aware that this app is supremely ugly right now, but my mantra has always been to make it work, then make it pretty, and _then_ make it fast. We're fully in the make it work phase.

## What I've done so far

### Used `express-generator` to build a very barebones express application
* I decided to use handlebars for the views, because it's a bit easier for folks who are familiar with html to step right in (as compared to pug, which is _just_ dissonant enough to be confusing).

### Added the `sentiment` module to get started with basic sentiment analysis
* ~~I added a basic form on the homepage to get a user-generated phrase, and then have the form handler go to the same index html (even if it's not the actual homepage) to see `sentiment`'s analysis.~~

### Moved from `sentiment` to use Hugging Face for their vast library of transformers and models
* `sentiment` is great for getting started, but I don't want to have to hunt for models AND modules - using the HF inferences module means I can just focus on which transformer/model to use.

### Updated the entire app to use ES6 modules
* Hugging Face's modules are ES6-based, which means I have to give up the CommonJS method of requiring modules that I'm used to.
* I've also fixed whatever issues currently exist in the codebase (per `npm audit`)