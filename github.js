window.onload = function() {
  const main = document.querySelector('.application-main .flex-wrap')
  const style = document.createElement('style')

  main.style.maxWidth = '980px'
  main.style.margin = '0 auto'
  
  style.textContent = `
  .bg-gray {
    background-color: #fff!important;
  }
  .team-left-column .dashboard-sidebar {
    padding-left: 0!important;
  }
  `

  document.body.appendChild(style)
}