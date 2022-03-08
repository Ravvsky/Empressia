import classes from './navigation.module.css'
const Navigation = (props) => {

    const title = props.title
    
    return <section className={classes.navigation}>
        <span className={classes.title}>{title}</span>
        <ul className={classes.list}>

            {props.links.map((item)=> (<li className={classes['list-item']} key={item.id}><a href="/">{item.link}</a></li>))}
          
        </ul>
    </section>
}

export default Navigation