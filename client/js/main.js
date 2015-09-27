import React from 'react'
import Router from 'react-router'
import routes from './routes'

window.React = React

// HistoryLocation === html5mode
Router.run(routes, Router.HistoryLocation, function(Handler){
  React.render(<Handler />, document.getElementById('app'))
})
