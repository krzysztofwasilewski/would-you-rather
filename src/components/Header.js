import React from 'react'
import PropTypes from 'prop-types'

import Navigation from './Navigation'
import Profile from './Profile'

const Header = ({ authedUser }) => {
    return <div className='header'>
        <Navigation />
        {authedUser && <Profile />}
    </div>
}
Header.propTypes = {
    authedUser: PropTypes.string
}

export default Header;
