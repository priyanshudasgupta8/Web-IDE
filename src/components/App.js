import React, { useState, useEffect } from 'react';
import Editor from './Editor';
import DDB from './ddb'
import useLocalStorage from '../hooks/useLocalStorage';

function App() {
  const [html, setHtml] = useLocalStorage('html', '');
  const [css, setCss] = useLocalStorage('css', '');
  const [js, setJs] = useLocalStorage('js', '');
  const [srcDoc, setSrcDoc] = useState('');
  const [srcDoc2, setSrcDoc2] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
      `)
    }, 500);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      try {
        if(!js && !html && !css) {
          setSrcDoc2("This is the debugger-in-progress cum console --- To access the current console, press Ctrl+ Shift + J --- Errors will show up here")
        } else {
          setSrcDoc2(`${Function(js)()}`)
        }
      } catch (err) {
        setSrcDoc2(err)
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <>
      <div className="pane top-pane">
        <Editor 
          language="xml" 
          displayName="HTML" 
          value={html} 
          onChange={setHtml} 
        />
        <Editor 
          language="css" 
          displayName="CSS" 
          value={css} 
          onChange={setCss} 
        />
        <Editor 
          language="javascript" 
          displayName="JS" 
          value={js} 
          onChange={setJs} 
        />
        <DDB/>
      </div>
      <div className="pane">
        <iframe 
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="60%"
          height="100%"
        />
        <iframe 
          width="30%" 
          className="console"
          srcDoc={srcDoc2}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          height="100%"
        />
      </div>
    </>

  );
}

export default App;
