import { ProviderWrapper as LanguageProviderWrapper } from "../../contexts/counterContext.jsx";
import App from "./App";

const AppLoader= () => {
  return (
    <LanguageProviderWrapper >
        <App/>
 
      </LanguageProviderWrapper >
  )
}

export default AppLoader