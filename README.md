/* Import */

@import url('https://fonts.googleapis.com/css?family=Chivo:300,300i,400,400i,700,700i,900,900i|Saira+Extra+Condensed:100,200,300,400,500,600,700,800|Saira:100,200,300,400,500,600,700,800');

/* Variables */

@background: #252827;

@color-primary: #004ffc;
@color-light: white;
@color-dim: #6c6d6d;
@spacing: 50px;
@radius: 4px;

@date: 120px;
@dotborder: 4px;
@dot: 11px;
@line: 4px;

@font-title: 'Saira', sans-serif;
@font-text: 'Chivo', sans-serif;

/* Base */

body {
  background: @background;
  font-size: 16px;
}

p {
  font-weight: 300;
}

a { 
  color: @color-dim;
  text-decoration: none;
  text-transform: uppercase;
  display: block;
  letter-spacing: .3em;
  font-size: .6em;
  font-weight: 400;
  background: #252727;
  padding: .3rem 1rem;
  margin: 1.9rem 0 0 0;
  float: right;
}

a:hover { 
  color: @color-light;
  background: @color-primary;
  border-bottom: .35em solid black;
}

strong {
  font-weight: 600;
}

h1 {
 font-family: @font-title;
 letter-spacing: 1.5px;
 color: @color-light;  
 font-weight: 400;
 font-size: 2.4em;
}

#timeline-content {
  margin-top: @spacing;
  text-align: center;  
}

/* Timeline */

.timeline {
  border-left: @line solid @color-primary;
  border-bottom-right-radius: @radius;
  border-top-right-radius: @radius;    
  background: fade(@color-light, 3%);
  color: fade(white, 80%);
  font-family: @font-text;  
  margin: @spacing auto;  
  letter-spacing: 0.5px;   
  position: relative;
  line-height: 1.4em;
  font-size: 1.03em;   
  padding: @spacing;   
  list-style: none;
  text-align: left;  
  font-weight: 100;  
  max-width: 30%; 
  
  h1 {
   font-family: @font-title;
   letter-spacing: 1.5px;
   font-weight: 100;
   font-size: 1.4em;    
  }
  
  h2, h3 {
   font-family: @font-title;
   letter-spacing: 1.5px;
   font-weight: 400;
   font-size: 1.4em;
  }
  
  .event {
    border-bottom: 1px dashed fade(@color-light, 10%);
    padding-bottom: (@spacing * 0.5);
    margin-bottom: @spacing;  
    position: relative;

    &:last-of-type { 
      padding-bottom: 0;
      margin-bottom: 0; 
      border: none;      
    }

    &:before, &:after {
      position: absolute;
      display: block;
      top: 0;
    }

    &:before {
      left: (((@date * 0.6) + @spacing + @line + @dot + (@dotborder * 2)) * 1.5) * -1;    
      color: fade(@color-light, 40%);    
      content: attr(data-date);
      text-align: right;
      font-weight: 100;    
      font-size: 0.9em;
      min-width: @date;
      font-family: @font-title;
    }

    &:after {
      box-shadow: 0 0 0 @dotborder fade(@color-primary,100%);    
      left: (@spacing + @line + (@dot * 0.35)) * -1;        
      background: lighten(@background,5%);    
      border-radius: 50%;  
      height: @dot;
      width: @dot;
      content: "";
      top: 5px;
    }
  }
}
