import { useEffect, useRef, useState } from "react";
import Navigation from './components/navigation'
import TopBar from './components/topbar'
import { NavigationDrawer } from "mdui";
import { Outlet } from "react-router-dom";
function App() {

  const [navState, setNavState] = useState(false);

  const navRef = useRef<NavigationDrawer>(null);

  useEffect(() => {

    navRef.current?.addEventListener('overlay-click', e => { setNavState(false) })

  }, [navRef])

  return (
    <div style={{ position: 'relative', overflow: 'hidden', height: '100vh' }}>
      <mdui-navigation-drawer ref={navRef} open={navState} close-on-esc close-on-overlay-click contained>
        <Navigation />
      </mdui-navigation-drawer>
      <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
        <TopBar menuClick={() => setNavState(e => !e)} />

        <Outlet />

      </div>
    </div>
  )
}

export default App
