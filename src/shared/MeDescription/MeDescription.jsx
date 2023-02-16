import React from 'react'
import './MeDescription.scss'
import ViewSwitch from '../ViewSwitch/ViewSwitch'
import ViewControllers from '../ViewControllers/ViewControllers'
const MeDescription = (props) => {
    return (
        <div className='desctiptionWrap'>
        <div className='bigsquare'>
                <div className={`bigsquare_white bigsquare_white-${props.theme}`}>
            <p style={{"textDecoration":"underline", "fontWeight":"700"}}>Education and background:</p>
            <p>Graduate year Software Engineering student</p>
            <p>During my studying I learned various concepts in programming, various languages and tools, solving problems in different fileds using them</p>
            <p>C++ and OOP, C# and desctop, Java and Automated Testing, JavaScript and Web Development, Python and Machine Learning</p>
            <p>Along with main studies i was taking up cources and building projects to learn modern Web Development practices and MERN stack</p>
        </div></div>
        <div className='bigsquare2'>
        <div className={`bigsquare_white2 bigsquare_white-${props.theme}`}>
            <p style={{"textDecoration":"underline", "fontWeight":"700"}}>Current interests and goals</p>
            <p>Currently studying MERN creating advanced web applications with libraries as Bootstrap, FramerMotion using VSCode with plugins, hosting on Netlify, Postman for testing API</p>
            <p>Advanced authentification with JWT, OAUTH for google authentification, RESTfull APIs. Libraries as Bootstrap, FramerMotion. Some experience with CMS Sanity, MySQL, MSSQLServer</p>
            <p>Goals:</p>
            <p>Learning and implementing best practices in Web Development projects</p>
            <p>Bulding more complex projects and getting real experience in commercial projects</p>
        </div></div>
        <div className="crossX" ></div>
        <div className="crossY" ></div>
        <div className="crossX_gray"></div>
        <div className="crossY_gray"></div>
        <div className="crossX_white" ></div>
        <div className="crossY_white" ></div>
        <ViewSwitch theme={props.theme} setTheme={props.setTheme} setFont={props.setFont}/>
        <ViewControllers theme={props.theme} setTheme={props.setTheme} setFont={props.setFont}/>
        </div>
    )
}

export default MeDescription