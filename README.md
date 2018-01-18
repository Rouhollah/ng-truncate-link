# LinkWithTruncateText directive 
When you add this module to your project , you have a directive and a filter.
You can use this directive for both a link and a simple text. with the filter you have, you can simply truncate the text.
### Syntax 
``` 
<ng-truncate-link  
                  link="about.html" or {{item.Address}} 
                  number=50  
                  text="a long text that must be truncate" or {{item.Message}} 
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
- text: your text must be here. static or dynamic. 
- more: this is a text that you want are displayed when the text has truncated. 
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
 
### Example 
- [Example on CodePen](https://codepen.io/fardin_esmi/project/full/ANqrzY/) for 0.1.0 eddition.
- [Example on CodePen](https://codepen.io/fardin_esmi/full/wpQmxQ/) for 1.0.0 edition.

 