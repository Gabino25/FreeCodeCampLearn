class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div><h1>Hola</h1></div>
  }
};

// change code below this line
ReactDOMServer.renderToString(<App/>);