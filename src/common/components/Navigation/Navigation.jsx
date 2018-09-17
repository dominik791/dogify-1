import React, { Component } from 'react';
import styles from './Navigation.module.scss'
import Logo from '../Logo/Logo';
import { getImagesFromLocalStorage } from "../../utils/localStorage";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {imagesNo: 0};
  }

  componentDidMount () {
    this.setState({imagesNo: getImagesFromLocalStorage().length})
  }

  render() {
    return (
      <nav className={styles.navigation}>
        <Logo hasText={true} logoClassName={styles.logo}/>
        <ul className={styles.menu}>
          {
            this.props.links.map((linkElem) => (
              <li
                key={linkElem.id}
                className={linkElem.id === this.props.currentLinkId ? styles['active-item'] : styles.item}
                onClick={() => this.props.onLinkClick(linkElem.id)}
              >
                {linkElem.link}
                <div className={linkElem.id === 'my-images' ? 'ui teal label' : styles.invisible}>
                  {this.state.imagesNo}
                </div>
              </li>
            ))
          }
        </ul>
      </nav>
    )
  }
}

export default Navigation