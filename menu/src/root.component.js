
import React from "react";
import ReactDOM from "react-dom";
import * as sigleSpa from "single-spa";

export default class Root extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <span style={{padding: "10px", cursor: "pointer"}}  onClick={() => sigleSpa.navigateToUrl('/')}>home</span>
         <span style={{padding: "10px", cursor: "pointer"}} onClick={() => sigleSpa.navigateToUrl('/app1')}>app1</span>
          <span style={{padding: "10px", cursor: "pointer" }}  onClick={() => sigleSpa.navigateToUrl('/app2')}>app2</span>
      </div>
    );
  }
}

