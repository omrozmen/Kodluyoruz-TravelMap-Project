import React from 'react'
import { Link } from 'react-router-dom'
import classes from "./styles.module.css"

const NotFoundPage = () => {
  return (
    <div className={classes.NewLines}>
    <div className="container" >
        <i>
           Böyle Bir Sayfa bulunmamaktadır.
        </i>
        <div>
            <i>
                Ana Sayfa İçin <Link to="/">...</Link>
            </i>
        </div>
    </div>
</div>
  )
}

export default NotFoundPage