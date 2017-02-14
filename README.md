# semantic-ui-ng2-sidebar
use semantic-ui sidebar In Angular2 without warning

### How to use
```bash
# go to your repo
cd angular2-project

# install semantic-ui sidebar
npm install --save semantic-ui-sidebar

# angular2-webpack2-aot
webpack2 config settings JIT / AOT compile with lazy Load

### Quick start
```bash
# clone  repo
git clone https://github.com/tk5641/angular2-webpack2-aot

# change directory to repo
cd angular2-webpack2-aot
```
## defined sidebar html code in your project
```html
<div class="ui left vertical inverted labeled icon sidebar">
  <a class="item">
      1
    </a>
    <a class="item">
      2
    </a>
    <a class="item">
      3
    </a>
  </a>
</div>
<div class="pusher">
  <nav class="nav has-shadow inverted">
    <div class="container">
      <div class="nav-left">
        <span class="nav-toggle" id="nav-toggle" (click)="toggleNav()">toggleNav</span>   
      </div>
    </div>
  </nav>
  <div>
    contents..
  </div>
</div>
```
## add toggle function in your components
```es6
toggleNav(): void {
    $('.ui.labeled.icon.sidebar')
    .sidebar({context:$('my-app')}) // your root component selector. this removes warning
    .sidebar('setting', 'transition', 'overlay')
    .sidebar('toggle');
  }
```