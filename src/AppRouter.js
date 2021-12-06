import App from './components/App';
import Data from './components/Data';

const apps = {
    'calendar': <App/>,
    'data': <Data/>
};
const def = <App/>;

const AppRouter = () => {
    let queryString = window.location.search;
    queryString = queryString.startsWith('?') ? queryString.slice(1) : queryString;
    let params = new URLSearchParams(queryString);
    let component = def;
    let app = params.get('app');
    let tmpComponent = apps[app];
    if(tmpComponent !== undefined) {
        component = tmpComponent;
    }
    return (component);
}

export default AppRouter;
