import React from 'react';
import './App.css';
import Basic from './components/Basic';
import styled from 'styled-components';
import Sidebar from './components/Sidebar'
import * as microsoftTeams from '@microsoft/teams-js'
import { Provider } from '@fluentui/react-teams'
import { themeNames } from "@fluentui/react-teams"
// console.log(microsoftTeams);
const App = () => {
  const [appContext, setAppContext] = React.useState<microsoftTeams.Context>();
  const [appAppearance, setAppAppearance] = React.useState<themeNames>(
    themeNames.Default
  );
  microsoftTeams.initialize();

  React.useEffect(() => {
    
    //  With the context properties in hand, your app has a solid understanding of what's happening around it in Teams.
     
    microsoftTeams.getContext((context) => {
      setAppContext(context);
      setAppAppearance(initTeamsTheme(context.theme));

      
    // Tells Microsoft Teams platform that we are done saving our settings. Microsoft Teams waits
    // for the app to call this API before it dismisses the dialog. If the wait times out, you will
    // see an error indicating that the configuration settings could not be saved.
       
      microsoftTeams.appInitialization.notifySuccess();
    });

    // Theme change handler
     
    microsoftTeams.registerOnThemeChangeHandler((theme) => {
      setAppAppearance(initTeamsTheme(theme));
    });
  }, []);

  return (
    <Provider themeName={appAppearance} lang="en-US">
      <div className="App">    
          <AppBody>
            <Sidebar />
            <Basic />
          </AppBody>
      </div>
    {/* // </Flex> */}
    </Provider>
  );
}

function initTeamsTheme(theme: string | undefined): themeNames {
  switch (theme) {
    case "dark":
      return themeNames.Dark;
    case "contrast":
      return themeNames.HighContrast;
    default:
      return themeNames.Default;
  }
}

export default App;


const AppBody = styled.div`
  height: 100vh;
  display: flex;
`;