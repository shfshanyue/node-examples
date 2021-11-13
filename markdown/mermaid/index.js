// import mermaid from 'mermaid'

mermaid.init(document.querySelectorAll('.editor-mermaid'))
mermaid.initialize({
  startOnLoad: true,
  theme: 'forest',
  fontFamily: 'courier',
  // themeCSS: 'rect { fill: red; }',
  flowchart: {
    nodeSpacing: 30,
    rankSpacing: 30,
    useMaxWidth: true,
    htmlLabels: false
  }
})