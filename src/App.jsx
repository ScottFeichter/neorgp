import { isMobileDevice } from './utils/deviceDetect'
import DesktopApp from './desktop/DesktopApp'
import MobileApp from './mobile/MobileApp'

export default function App() {
  return isMobileDevice() ? <MobileApp /> : <DesktopApp />
}
