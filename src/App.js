import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <body>
      <video width="980" height="620" controls>
      <source src="quant.mp4" type="video/mp4"/>
</video>
      <h3>依照数据策略，自动下单，撤单，止损</h3>
{/* <iframe src="quant.mp4" quality="high" width="680" height="400" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash"></iframe>` */}
{/* <video autoplay="autoplay" loop="loop" id="video" x-webkit-airplay="true" webkit-playsinline="true" muted="">
<source src="quant.mp4" type="video/mp4"/>
</video> */}
      </body>
    </div>
  );
}

export default App;
