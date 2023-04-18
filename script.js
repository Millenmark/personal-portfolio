
var defaultOptions = {
  container: document.body,
  panelSelector: '> section',
  directionThreshold: 50,
  delay: 0,
  duration: 300,
  easing: function(t) { return t },
};

new PanelSnap(options);