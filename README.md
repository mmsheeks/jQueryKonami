# jQueryKonami
A Konami Code jQuery Plugin

## Usage
Include jQuery and the script on your webpage
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script type="text/javascript" src="https://raw.githubusercontent.com/mmsheeks/jQueryKonami/master/jquery.konami.min.js"></script>
```

Initialize the plugin
```html
<script type="text/javascript">
	$(document).konami();
</script>
```

## Options

- vk_[up,down,left,right,a,b]: The key code for a given key in the sequence
- onSuccess: you can pass a function to over-ride the default success action
 
##Examples

With non-en_US key codes
```html
<script type="text\javascript">
  $(document).konami({
    vk_up: '00',
    vk_down: '01',
    vk_left: '02',
    vk_right: '03',
    vk_a: '96',
    vk_b: '33'
  });
</script>
```

With a custom success event
```html
<scirpt type="text\javascript">
  $(document).konami({
    'onSuccess':function() {
      alert('My Custom Thing!');
    }
  });
</script>
