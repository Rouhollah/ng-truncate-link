# ng-truncate-link directive 
You can use this directive for both a link and a plain text, and with the filter you have, you can simply truncate the text.

### Syntax for directive
``` 
<ng-truncate-link  
                  link="about.html" or {{item.Address}} 
                  number="50"  or 50
                  text="'a long text that must be truncate'" or "item.Message" 
                  more="show"  
                  less="hide"  
                  class="noUnderLine" 
                  target="_blank"> 
</ng-truncate-link> 
``` 
### details: 
- ng-truncate-link: name of directive. 
- link: put your address here. **NOTE: If you do not define this feature, the text input, will look like a plain text, not a link**. 
- number: With this attribute, you can specify how many characters are displayed. 
- text: your text must be here. static or dynamic. **NOTE:put your plain text in single quote**.see the syntax.
- more: This is the word you want to display after shortening the text. 
- less: This text is displayed before the main text is shortened. 
- class: use this attribute to set class(es). 
- target: use this element, such as the `<a>` tag. 
 
# truncateText filter 
you can truncate your text with this filter. 
## syntax 
``` 
{{item.Message|truncateText:50}} 
``` 
 or  
 ``` 
 {{a long text that must be truncate|truncateText:10}} 
 ``` 
### details 
- item.Message: your text. 
- truncateText: name of filter. 
- 10: number of characters that are displayed. 

### Use class `.ngToggleText` to style labels
```
.ngToggleText{
    font-style: oblique;
    color: red;
    cursor:pointer;
}
```
### Example 
- [Example on CodePen](https://codepen.io/fardin_esmi/project/full/ANqrzY/) for 0.1.0 eddition. its name is "Abnabat". **see just for code review.**
- [Example on CodePen](https://codepen.io/fardin_esmi/full/wpQmxQ/) for 1.0.0 edition. its name is "Bamyieh". **see just for code review.**
- [Example on CodePen](https://codepen.io/fardin_esmi/full/rpRzVE/) for 1.1.1 eddition. its name is "Cake Yazdi".

 
