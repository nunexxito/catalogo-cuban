import React, {useEffect, useState} from 'react';
// import ProductItem from "./components/ProductItem.js"
import "./styled/app.scss";
import Pagina from "./components/Pagina.js"
import { catalogo } from "./data/DataCatalogo.js"

function App() {
  const [ctlg, setCtlg] = useState(catalogo);

  useEffect(()=> {
    setCtlg(catalogo);
  }, [])

  // console.log(ctlg)

  return (
    <div>
      {/* <Pagina data={data}/> */}
      <Pagina ctlg={ctlg} />
    </div>
  );
}

export default App;
