# README

## Imitation project

The focus of this exercize is emulate animations of bootstrap components.

## Yarn

Add jquery to the proyect using yarn:

```bash
yarn add jquery
```

## application.js configuration

```rails
//= require rails-ujs
//= require jquery3
//= require popper
//= require bootstrap
//= require turbolinks
//= require_tree .
```

### Disclaimer

The original bootstrap configuration of a alert is:

```rails
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
```

We just wanna conservate the styles, so we use some clases of this component:
```rails
<div class="alert alert-warning">
    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
    <button type="button" class="close"><span aria-hidden="true">&times;</span></button>
</div>
```