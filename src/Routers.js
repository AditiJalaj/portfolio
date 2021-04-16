import { BrowserRouter, Route, Switch,NavLink } from 'react-router-dom';
import Home  from './content/Home'
import Project from './content/Project'
import Contact from './content/Contact'
import About from './content/About'
import List from './content/List'
import pic from './pic.jpg'

const Routers=()=>{
    
    return(
        
        <BrowserRouter>
        <div className="routers">
        <img className="pic" src={pic} alt="Picture "/>
        
        <NavLink to='/'><List name="home"/></NavLink>
        <NavLink to='/about' ><List name="about me"/></NavLink>
        <NavLink to='/project' ><List name="portfolio "/></NavLink>
        <NavLink to='/contact' ><List name="contact"/></NavLink>
        <br></br>
        </div>
        <div>
        <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/about' component={About}/>
        <Route path='/project' component={Project}/>
        <Route path='/contact' component={Contact}/>
        </Switch>
        
        </div>
        

        </BrowserRouter>
       
        
       
        
        
       
        

    )
}
export default Routers